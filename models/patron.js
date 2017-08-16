'use strict';
module.exports = function(sequelize, DataTypes) {
  var Patron = sequelize.define('Patron', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
	  first_name: {
      type: DataTypes.STRING,
	  allowNull: false,
      validate: {
        notEmpty: {
          msg: "First Name is required"
        }
      }
    },
	last_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: "Last Name is required"
        }
      }
    },
	address: {
      type: DataTypes.STRING,
	  allowNull: false,
      validate: {
        notEmpty: {
          msg: "Address is required"
        }
      }
    },
	email: {
      type: DataTypes.STRING,
	  allowNull: false,
      validate: {
        notEmpty: {
          msg: "Email is required"
        }
      }
    },
	library_id: {
      type: DataTypes.STRING,
	  allowNull: false,
      validate: {
        notEmpty: {
          msg: "Library ID is required"
        }
      }
    },
	zip_code: {
      type: DataTypes.INTEGER,
	  allowNull: false,
      validate: {
        notEmpty: {
          msg: "Zip Code is required"
        }
      }
    }
  },
  {
  timestamps: false,
  getterMethods: {
    fullName: function() { return this.first_name + ' ' + this.last_name }
  },
  setterMethods   : {
    fullName: function(value) {
        var names = value.split(' ');
        this.setDataValue('first_name', names.slice(0, -1).join(' '));
        this.setDataValue('last_name', names.slice(-1).join(' '));
    }
  },
  classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }  
  });
  /*Patron.sync().then(() => {
  Patron.create({
    first_name: 'Andrew',
    last_name: 'Chalkley',
	address: '1234 NE 20st St',
	email: 'andrew.chalkley@teamtreehouse.com',
	library_id: 'MCL1001',
	zip_code: 90210
  });
  Patron.create({
    first_name: 'Dave',
    last_name: 'McFarland',
	address: '5252 NW 2nd St',
	email: 'dave.mcfarland@teamtreehouse.com',
	library_id: 'MCL1010',
	zip_code: 90210
  });
 Patron.create({
    first_name: 'Alena',
    last_name: 'Hooligan',
	address: '1404 SW 101st St',
	email: 'alena.hooligan@teamtreehouse.com',
	library_id: 'MCL1100',
	zip_code: 90210
  });
  Patron.create({
    first_name: 'Scott',
    last_name: 'Bline',
	address: '555 First Street',
	email: 'thebluecow@msn.com',
	library_id: 'MCL1111',
	zip_code: 90210
  });
  Patron.create({
    first_name: 'Michael',
    last_name: 'Poley',
	address: '7070 NE 10th Ave',
	email: 'michael.poley@teamtreehouse.com',
	library_id: 'MCL1011',
	zip_code: 90210
  });
});*/
  return Patron;
};