const express = require('express');
const router = express.Router();
var date = require("../public/js/date.js");
var pagination = require("../public/js/pagination.js");
var Book = require("../../models").Book;
var Loan = require("../../models").Loan;
var Patron = require("../../models").Patron;
var record_limit = {};
var search = {};

// set the pagination limits for the various pages
record_limit.books = 10;
record_limit.patrons = 5;
record_limit.loans = 5;

/* GET home */
router.get('/', function(req, res, next) {
 res.render('home', {});
});

/* GET all books listing */
router.get('/book', function(req, res, next) {
	
	search.searchstring = '';
	
	// used for pagination	
	let page = req.query.page || 1;
	// set pagination limit for books
	let limit = record_limit.books;
	
	let filter = req.query.filter || '';
	
	let findAll = {};
	if (filter === 'checked_out') {
		/* GET all books that are checked out */
		findAll = {
            include: [{
                model: Loan,
				where: { returned_on: { $eq: null } }
        	}]
		};
	} else if (filter === 'overdue') {
		/* GET all books that are overdue */
		findAll = {
            include: [{
                model: Loan,
				where: 
				{
				  $and: [
					{
					  returned_on: {
						$eq: null
					  }
					},
					{
					  return_by: {
						  $lt: new Date()
					  }
					}
				  ]
				}
            }]
        };
	}
	
	/* GET all books by search */
	// Check if url query string is not empty and no filter applied 
	if (Object.keys(req.query).length > 0 && filter === '') {
		
		// if page is set we have to account for search type
		if (req.query.page) {
			delete req.query.page;
		}
		
		// build where clause for sequelize
		search = pagination.search(req.query);
		
		if (Object.keys(search).length > 0) {
			findAll.where = search.where;
		}
	} else {
		console.log('no length');
	}
	
	// for pagination results, set default order based on createdAt
	findAll.order  = [["id", "ASC"]];
	findAll.offset = limit * (page - 1);
	findAll.limit  = limit;
	
	Book.findAndCountAll(findAll).then(result => {
		
	  var offsets = pagination.pagination(result.count, limit, page);
	  offsets.querystring = pagination.querystring(filter);
	  offsets.searchstring = search.searchstring;

	  res.render("book", {books: result.rows, offsets: offsets});
	});
});

/* Create a new book form. */
router.get('/book/new', function(req, res, next) {
  res.render("new_book", {});
});

/* POST create book. */
router.post('/book/new', function(req, res, next) {
	console.log('post:', req.body)
  Book.create(req.body).then(function(book) {
    res.redirect("/book");
  }).catch(function(error){
      if(error.name === "SequelizeValidationError") {
        res.render("new_book", {book: Book.build(req.body), title: req.body.title, author: req.body.title, author: req.body.author, genre: req.body.genre, first_published: req.body.first_published, errors: error.errors})
      } else {
        throw error;
      }
  }).catch(function(error){
      res.send(500, error);
   });
;});

/* GET individual book. */
router.get("/book/:id", function(req, res, next){
  Book.findById(req.params.id, {
            include: [{
                model: Loan,
				include: [Patron]
            }]
        }).then(function(book){
    if(book) {
	  console.log('book_id', book);
      res.render("book_detail", {book: book, title: book.title, author: book.author, genre: book.genre, first_published: book.first_published});  
    } else {
      res.send(404);
    }
  }).catch(function(error){
      res.send(500, error);
   });
});

/* PUT update book. */
router.put("/book/:id", function(req, res, next){
  Book.findById(req.params.id).then(function(book){
    if(book) {
      return book.update(req.body);
    } else {
      res.send(404);
    }
  }).then(function(book){
    res.redirect("/book");        
  }).catch(function(error){
      if(error.name === "SequelizeValidationError") {
        var book = Book.build(req.body);
        book.id = req.params.id;
        res.render("book_detail", {book: book, title: book.title, author: book.author, genre: book.genre, first_published: book.first_published, errors: error.errors})
      } else {
        throw error;
      }
  }).catch(function(error){
      res.send(500, error);
   });
});

/* GET all patrons listing */
router.get('/patron', function(req, res, next) {
// used for pagination	
let page = req.query.page || 1;
let limit = record_limit.patrons;
	
let findAll = {};
findAll.order  = [["id", "ASC"]];
findAll.offset = limit * (page - 1);
findAll.limit  = limit;
	
 Patron.findAndCountAll(findAll).then(function(patrons){
	var offsets = pagination.pagination(patrons.count, limit, page);
    res.render("patron", {patrons: patrons.rows, offsets: offsets });
  }).catch(function(error){
      res.send(500, error);
   });
});

/* Create a new patron form. */
router.get('/patron/new', function(req, res, next) {
  res.render("new_patron");
});

/* POST create patron. */
router.post('/patron/new', function(req, res, next) {
  Patron.create(req.body).then(function(patron) {
    res.redirect("/patron");
  }).catch(function(error){
      if(error.name === "SequelizeValidationError") {
		console.log(req.body);
        res.render("new_patron", {patron: Patron.build(req.body), first_name: req.body.first_name, last_name: req.body.last_name, address: req.body.address, email: req.body.email, library_id: req.body.library_id, zip_code: req.body.zip_code, errors: error.errors})
      } else {
        throw error;
      }
  }).catch(function(error){
      res.send(500, error);
   });
;});

/* GET individual patron. */
router.get("/patron/:id", function(req, res, next){
  Patron.findById(req.params.id, {
            include: [{
                model: Loan,
				include: [Book]
            }]
        }).then(function(patron){
    if(patron) {
      res.render("patron_detail", { patron: patron, first_name: patron.first_name, last_name: patron.last_name, address: patron.address, email: patron.email, library_id: patron.library_id, zip_code: patron.zip_code });  
    } else {
      res.send(404);
    }
  }).catch(function(error){
      res.send(500, error);
   });
});

/* PUT update patron. */
router.put("/patron/:id", function(req, res, next){
  Patron.findById(req.params.id).then(function(patron){
    if(patron) {
      return patron.update(req.body);
    } else {
      res.send(404);
    }
  }).then(function(patron){
    res.redirect("/patron");        
  }).catch(function(error){
      if(error.name === "SequelizeValidationError") {
        var patron = Patron.build(req.body);
        patron.id = req.params.id;
        res.render("patron_detail", { patron: patron, first_name: patron.first_name, last_name: patron.last_name, address: patron.address, email: patron.email, library_id: patron.library_id, zip_code: patron.zip_code, errors: error.errors})
      } else {
        throw error;
      }
  }).catch(function(error){
      res.send(500, error);
   });
});

/* GET all loans listing */
router.get('/loan', function(req, res, next) {
	// used for pagination	
	let page = req.query.page || 1;
	// set pagination limit for books
	let limit = record_limit.loans;
	
	let filter = req.query.filter || '';
	let findAll = {};
	if (filter === 'checked_out') {
		/* GET all books that are checked out */
		findAll = {
            where: { returned_on: { $eq: null } },
            include: [{
                model: Book
            },
			{ model: Patron
			}]
		};
	} else if (filter === 'overdue') {
		/* GET all books that are overdue */
		findAll = {
            where: 
				{
				  $and: [
					{
					  returned_on: {
						$eq: null
					  }
					},
					{
					  return_by: {
						  $lt: new Date()
					  }
					}
				  ]
				},
            include: [{
                model: Book
            },
			{ model: Patron
			}]
        };
	} else {
		findAll = {
            include: [{
                model: Book
            },
			{ model: Patron
			}]
        };
	}
	
 findAll.order  = [["id", "ASC"]];
 findAll.offset = limit * (page - 1);
 findAll.limit  = limit;
	
 Loan.findAndCountAll(findAll).then(function(loans){
	var offsets = pagination.pagination(loans.count, limit, page);
	offsets.querystring = pagination.querystring(filter);
	 
    res.render("loan", {loans: loans.rows, offsets: offsets });
  }).catch(function(error){
      res.send(500, error);
   });
});

/* Create a new loan form. */
router.get('/loan/new', function (req, res, next) {
	
	// Get date
	req.loaned_on = date.getdate();
	// Add 7 days to current date
	req.return_by = date.addweek();
	
	Patron.findAll().then(function(patrons){
	  req.patrons = patrons;
	}).catch(function(error){
	  res.send(500, error);
	});
	next()
}, function (req, res, next) {
	Book.findAll().then(function(books){
	  res.render("new_loan", {patrons: req.patrons, books: books, loaned_on: req.loaned_on, return_by: req.return_by });
	}).catch(function(error){
	  res.send(500, error);
	});
});

/* POST create loan. */
router.post('/loan/new', function(req, res, next) {
  Loan.create(req.body).then(function(loan) {
    res.redirect("/loan");
  }).catch(function(error){
      if(error.name === "SequelizeValidationError") {
		Patron.findAll().then(function(patrons){
			req.body.patrons = patrons;
		}).then(function() {
		Book.findAll().then(function(books) {
			req.body.books = books;
		}).then(function() {
			res.render("new_loan", {loan: Loan.build(req.body), books: req.body.books, patrons: req.body.patrons, patron_select: req.body.patron_id, book_select: req.body.book_id, loaned_on: req.body.loaned_on, return_by: req.body.return_by, errors: error.errors});
		})
		});
      } else {
        throw error;
      }
  }).catch(function(error){
      res.send(500, error);
   });
;});

/* GET individual return loan listing */
router.get("/loan/:id", function(req, res, next){
	// Get date
	req.returned_on = date.getdate();
	
  Loan.findById(req.params.id, {
            include: [{
                model: Book
            },
			{ model: Patron
			}]
        }).then(function(loan){
    if(loan) {
      res.render("return_book", { loan: loan, returned_on: req.returned_on });  
    } else {
      res.send(404);
    }
  }).catch(function(error){
      res.send(500, error);
   });
});

/* PUT update loan. */
router.put("/loan/:id", function(req, res, next){
  Loan.findById(req.params.id).then(function(loan){
    if(loan) {
      return loan.update(req.body);
    } else {
      res.send(404);
    }
  }).then(function(loan){
    res.redirect("/loan");        
  }).catch(function(error){
      if(error.name === "SequelizeValidationError") {
        var loan = Loan.build(req.body);
        loan.id = req.params.id;
        res.render("return_book", { loan: loan, errors: error.errors})
      } else {
        throw error;
      }
  }).catch(function(error){
      res.send(500, error);
   });
});


module.exports = router;