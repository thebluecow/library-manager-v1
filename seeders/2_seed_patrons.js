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
	  
	  return queryInterface.bulkInsert('Patrons', [{
		id: 1,
		first_name: 'Andrew',
		last_name: 'Chalkley',
		address: '1234 NE 20st St',
		email: 'andrew.chalkley@teamtreehouse.com',
		library_id: 'MCL1001',
		zip_code: 90210,
		createdAt: new Date(),
		updatedAt: new Date()
	  },
	  {
		id: 2,
		first_name: 'Dave',
		last_name: 'McFarland',
		address: '5252 NW 2nd St',
		email: 'dave.mcfarland@teamtreehouse.com',
		library_id: 'MCL1010',
		zip_code: 90210,
		createdAt: new Date(),
		updatedAt: new Date()
	   },
	   {
		id: 3,
		first_name: 'Alena',
		last_name: 'Hooligan',
		address: '1404 SW 101st St',
		email: 'alena.hooligan@teamtreehouse.com',
		library_id: 'MCL1100',
		zip_code: 90210,
		createdAt: new Date(),
		updatedAt: new Date()
	  },
	   {
		id: 4,
		first_name: 'Scott',
		last_name: 'B',
		address: '555 First Street',
		email: 'thebluecow@msn.com',
		library_id: 'MCL1111',
		zip_code: 90210,
		createdAt: new Date(),
		updatedAt: new Date()
	  },
	   {
		id: 5,
		first_name: 'Michael',
		last_name: 'Poley',
		address: '7070 NE 10th Ave',
		email: 'michael.poley@teamtreehouse.com',
		library_id: 'MCL1011',
		zip_code: 90210,
		createdAt: new Date(),
		updatedAt: new Date()
	  },
	  {
		id: 6,
		first_name: 'Bucky',
		last_name: 'Cat',
		address: 'Siamese Lane',
		email: 'bcat@furpatrol.com',
		library_id: 'CAT0001',
		zip_code: 90210,
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
