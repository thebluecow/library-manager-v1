'use strict';
var dateFormat = require('dateformat');

module.exports = function(sequelize, DataTypes) {
  var Loan = sequelize.define('Loan', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
	book_id: {
      type: DataTypes.INTEGER,
	  allowNull: false,
      	validate: {
          notEmpty: {
          	msg: "Book ID is required"
        }
      }
    },
	patron_id: {
      type: DataTypes.INTEGER,
	  allowNull: false,
      	validate: {
          notEmpty: {
          	msg: "Patron ID is required"
        },
	      isDate: true,
      }
    },
	loaned_on: {
      type: DataTypes.DATE,
	  allowNull: false,
      	validate: {
          notEmpty: {
          	msg: "Loaned On is required"
        },
		  isDate: true
      }
    },
	return_by: {
      type: DataTypes.DATE,
	  allowNull: false,
      	validate: {
          notEmpty: {
          	msg: "Return By is required"
        },
		  isDate: true
      }
    },
    returned_on: DataTypes.DATE
  },
  {
	timestamps: false,
	getterMethods: {
		loanedOn: function() { return dateFormat(this.loaned_on, 'isoDate'); },
		returnBy: function() { return dateFormat(this.return_by, 'isoDate'); },
		returnedOn: function() { 
			if (this.returned_on != null || this.returned_on != 'undefined') {
				return dateFormat(this.returned_on, 'isoDate'); 
			} else {
				return;
			}
		},
  	},
	classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
/*
 Loan.sync().then(() => {
  Loan.create({
    book_id: 12,
    patron_id: 2,
	loaned_on: '2015-12-10',
	return_by: '2015-12-20',
	returned_on: null
  });
  Loan.create({
    book_id: 8,
    patron_id: 1,
	loaned_on: '2015-12-11',
	return_by: '2015-12-18',
	returned_on: null
  });
 Loan.create({
    book_id: 13,
    patron_id: 1,
	loaned_on: '2015-12-12',
	return_by: '2015-12-19',
	returned_on: null
  });
  Loan.create({
    book_id: 14,
    patron_id: 3,
	loaned_on: '2015-12-13',
	return_by: '2015-12-20',
	returned_on: null
  });
 Loan.create({
    book_id: 15,
    patron_id: 5,
	loaned_on: '2015-12-13',
	return_by: '2015-12-20',
	returned_on: null
  });
  Loan.create({
    book_id: 1,
    patron_id: 4,
	loaned_on: '2017-07-09',
	return_by: '2017-07-16',
	returned_on: null
  });
  Loan.create({
    book_id: 2,
    patron_id: 4,
	loaned_on: '2017-08-09',
	return_by: '2017-08-16',
	returned_on: null
  });
  Loan.create({
    book_id: 3,
    patron_id: 5,
	loaned_on: '2017-08-05',
	return_by: '2017-08-16',
	returned_on: '2017-08-09'
  });
});*/
  return Loan;
};