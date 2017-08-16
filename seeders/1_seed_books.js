// https://stackoverflow.com/questions/36328821/how-to-bulk-insert-using-sequelize-and-postgres
// 1. node_modules/.bin/sequelize db:migrate
// 2. node_modules/.bin/sequelize db:seed:all 

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
	  
	  return queryInterface.bulkInsert('Books', [{
		id: 1,
		title: 'On the Road',
		author: 'Jack Kerouac',
		genre: 'Fiction',
		first_published: 1957,
		createdAt: new Date(),
		updatedAt: new Date()
	  },
	  {
		id: 2,
		title: 'Dharma Bums',
		author: 'Jack Kerouac',
		genre: 'Fiction',
		first_published: 1958,
		createdAt: new Date(),
		updatedAt: new Date()
	  },
	  {
		id: 3,  
		title: 'Look Homeward, Angel',
		author: 'Thomas Wolfe',
		genre: 'Fiction',
		first_published: 1929,
		createdAt: new Date(),
		updatedAt: new Date()
	  },
	  {
		id: 4,
		title: 'Selected Poems',
		author: 'Kenneth Patchen',
		genre: 'Poetry',
		first_published: 1957,
		createdAt: new Date(),
		updatedAt: new Date()
	  },
	  {
		id: 5,
		title: 'Harry Potter and the Philosopher\'s Stone',
		author: 'J.K. Rowling',
		genre: 'Fantasy',
		first_published: 1997,
		createdAt: new Date(),
		updatedAt: new Date()
	  },
	  {
		id: 6,
		title: 'Harry Potter and the Chamber of Secrets',
		author: 'J.K. Rowling',
		genre: 'Fantasy',
		first_published: 1998,
		createdAt: new Date(),
		updatedAt: new Date()
	  },
	  {
		id: 7,
		title: 'Harry Potter and the Prisoner of Azkaban',
		author: 'J.K. Rowling',
		genre: 'Fantasy',
		first_published: 1999,
		createdAt: new Date(),
		updatedAt: new Date()
	  },
	  {
		id: 8,
		title: 'Harry Potter and the Goblet of Fire',
		author: 'J.K. Rowling',
		genre: 'Fantasy',
		first_published: 2000,
		createdAt: new Date(),
		updatedAt: new Date()
	  },
	  {
		id: 9,
		title: 'Harry Potter and the Order of the Phoenix',
		author: 'J.K. Rowling',
		genre: 'Fantasy',
		first_published: 2003,
		createdAt: new Date(),
		updatedAt: new Date()
	  },
	  {
		id: 10,
		title: 'Harry Potter and the Half-Blood Prince',
		author: 'J.K. Rowling',
		genre: 'Fantasy',
		first_published: 2005,
		createdAt: new Date(),
		updatedAt: new Date()
	  },
	  {
		id: 11,
		title: 'Harry Potter and the Deathly Hallows',
		author: 'J.K. Rowling',
		genre: 'Fantasy',
		first_published: 2007,
		createdAt: new Date(),
		updatedAt: new Date()
	  },
	  {
		id: 12,
		title: 'Emma',
		author: 'Jane Austen',
		genre: 'Classic',
		first_published: 1815,
		createdAt: new Date(),
		updatedAt: new Date()
	  },
	  {
		id: 13,
		title: 'A Brief History of Time',
		author: 'Stephen Hawking',
		genre: 'Non Fiction',
		first_published: 1988,
		createdAt: new Date(),
		updatedAt: new Date()
	  },
	  {
		id: 14,
		title: 'The Universe in a Nutshell',
		author: 'Stephen Hawking',
		genre: 'Non Fiction',
		first_published: 2001,
		createdAt: new Date(),
		updatedAt: new Date()
	  },
	  {
		id: 15,
		title: 'The Martian',
		author: 'Andy Weir',
		genre: 'Science Fiction',
		first_published: 2014,
		createdAt: new Date(),
		updatedAt: new Date()
	 },
	  {
		id: 16,
		title: 'Ready Player One',
		author: 'Ernest Cline',
		genre: 'Science Fiction',
		first_published: 2011,
		createdAt: new Date(),
		updatedAt: new Date()
	  },
	  {
		id: 17,
		title: 'Armada',
		author: 'Ernest Cline',
		genre: 'Science Fiction',
		first_published: 2015,
		createdAt: new Date(),
		updatedAt: new Date()
	  },
	  {
		id: 18,
		title: 'Pride and Prejudice',
		author: 'Jane Austen',
		genre: 'Classic',
		first_published: 1813,
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
