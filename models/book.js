'use strict';
module.exports = function(sequelize, DataTypes) {
  var Book = sequelize.define('Book', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    title: {
      type: DataTypes.STRING,
	  allowNull: false,
	  unique: true,
      validate: {
        notEmpty: {
          msg: "Title is required"
        }
      }
    },
	author: {
	  type: DataTypes.STRING,
	  allowNull: false,
		validate: {
		  notEmpty: {
  			msg: "Author is required"
		}
	  }
	},
	genre: {
      type: DataTypes.STRING,
	  allowNull: false,
      validate: {
        notEmpty: {
          msg: "Genre is required"
        }
      }
    },
    first_published: DataTypes.INTEGER
  },
  {
	timestamps: false,
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });

/*Book.sync().then(() => {
  Book.create({
    title: 'On the Road',
    author: 'Jack Kerouac',
	genre: 'Fiction',
	first_published: 1957
  });
  Book.create({
	title: 'Dharma Bums',
    author: 'Jack Kerouac',
	genre: 'Fiction',
    first_published: 1958
  });
  Book.create({
	title: 'Look Homeward, Angel',
    author: 'Thomas Wolfe',
	genre: 'Fiction',
    first_published: 1929
  });
  Book.create({
	title: 'Selected Poems',
    author: 'Kenneth Patchen',
	genre: 'Poetry',
    first_published: 1957
  });
  Book.create({
    title: 'Harry Potter and the Philosopher\'s Stone',
    author: 'J.K. Rowling',
	genre: 'Fantasy',
	first_published: 1997
  });
  Book.create({
	title: 'Harry Potter and the Chamber of Secrets',
    author: 'J.K. Rowling',
	genre: 'Fantasy',
    first_published: 1998
  });
  Book.create({
	title: 'Harry Potter and the Prisoner of Azkaban',
    author: 'J.K. Rowling',
	genre: 'Fantasy',
    first_published: 1999
  });
  Book.create({
	title: 'Harry Potter and the Goblet of Fire',
    author: 'J.K. Rowling',
	genre: 'Fantasy',
    first_published: 2000
  });
  Book.create({
    title: 'Harry Potter and the Order of the Phoenix',
    author: 'J.K. Rowling',
	genre: 'Fantasy',
	first_published: 2003
  });
  Book.create({
	title: 'Harry Potter and the Half-Blood Prince',
    author: 'J.K. Rowling',
	genre: 'Fantasy',
    first_published: 2005
  });
  Book.create({
	title: 'Harry Potter and the Deathly Hallows',
    author: 'J.K. Rowling',
	genre: 'Fantasy',
    first_published: 2007
  });
  Book.create({
	title: 'Emma',
    author: 'Jane Austen',
	genre: 'Classic',
    first_published: 1815
  });
    Book.create({
	title: 'A Brief History of Time',
    author: 'Stephen Hawking',
	genre: 'Non Fiction',
    first_published: 1988
  });
  Book.create({
	title: 'The Universe in a Nutshell',
    author: 'Stephen Hawking',
	genre: 'Non Fiction',
    first_published: 2001
  });
  Book.create({
    title: 'The Martian',
    author: 'Andy Weir',
	genre: 'Science Fiction',
	first_published: 2014
  });
  Book.create({
	title: 'Ready Player One',
    author: 'Ernest Cline',
	genre: 'Science Fiction',
    first_published: 2011
  });
  Book.create({
	title: 'Armada',
    author: 'Ernest Cline',
	genre: 'Science Fiction',
    first_published: 2015
  });
  Book.create({
	title: 'Pride and Prejudice',
    author: 'Jane Austen',
	genre: 'Classic',
    first_published: 1813
  });
});*/
  return Book;
};