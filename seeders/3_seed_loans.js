'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
	  
	  return queryInterface.bulkInsert('Loans', [{
		id: 1,
		book_id: 12,
		patron_id: 2,
		loaned_on: '2015-12-10',
		return_by: '2015-12-20',
		returned_on: null,
		createdAt: new Date(),
		updatedAt: new Date()
	  },
	  {
		id: 2,
		book_id: 8,
		patron_id: 1,
		loaned_on: '2015-12-11',
		return_by: '2015-12-18',
		returned_on: null,
		createdAt: new Date(),
		updatedAt: new Date()
	  },
	  {
		id: 3,
		book_id: 13,
		patron_id: 1,
		loaned_on: '2015-12-12',
		return_by: '2015-12-19',
		returned_on: null,
		createdAt: new Date(),
		updatedAt: new Date()
	  },
	  {
		id: 4,
		book_id: 14,
		patron_id: 3,
		loaned_on: '2015-12-13',
		return_by: '2015-12-20',
		returned_on: null,
		createdAt: new Date(),
		updatedAt: new Date()
	  },
	  {
		id: 5,
		book_id: 15,
		patron_id: 5,
		loaned_on: '2015-12-13',
		return_by: '2015-12-20',
		returned_on: null,
		createdAt: new Date(),
		updatedAt: new Date()
	  },
	  {
		id: 6,
		book_id: 1,
		patron_id: 4,
		loaned_on: '2017-07-09',
		return_by: '2017-07-16',
		returned_on: null,
		createdAt: new Date(),
		updatedAt: new Date()
	  },
	  {
		id: 7,
		book_id: 2,
		patron_id: 4,
		loaned_on: '2017-08-09',
		return_by: '2017-08-16',
		returned_on: null,
		createdAt: new Date(),
		updatedAt: new Date()
	  },
	  {
		id: 8,
		book_id: 3,
		patron_id: 5,
		loaned_on: '2017-08-05',
		return_by: '2017-08-16',
		returned_on: '2017-08-09',
		createdAt: new Date(),
		updatedAt: new Date()
	  }], {});
	  
  },

  down: function (queryInterface, Sequelize) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  }
};
