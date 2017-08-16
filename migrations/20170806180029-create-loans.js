'use strict';
module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.createTable('Loans', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id: {
        type: Sequelize.INTEGER
      },
	  //foreign key usage
      book_id: {
        type: Sequelize.INTEGER,
        references: {
            model: 'Book',
            key: 'id'
        },
        onUpdate: 'cascade',
        onDelete: 'no action'
      },
      /*book_id: {
        type: Sequelize.INTEGER
      },*/
      /*patron_id: {
        type: Sequelize.INTEGER
      },*/
	  //foreign key usage
      patron_id: {
        type: Sequelize.INTEGER,
        references: {
            model: 'Patron',
            key: 'id'
        },
        onUpdate: 'cascade',
        onDelete: 'no action'
      },
      loaned_on: {
        type: Sequelize.DATE
      },
      return_by: {
        type: Sequelize.DATE
      },
      returned_on: {
        type: Sequelize.DATE
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: function(queryInterface, Sequelize) {
    return queryInterface.dropTable('Loans');
  }
};