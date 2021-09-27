'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    
    await queryInterface.bulkInsert('Vehicle', [{
      make: 'Volkswagen',
      model: 'Golf',
      createdAt : new Date(),
      updatedAt : new Date()
    },{
      make: 'Aston Martin',
      model: 'DB6',
      createdAt : new Date(),
      updatedAt : new Date()
    },{
      make: 'Ford',
      model: 'Fiesta',
      createdAt : new Date(),
      updatedAt : new Date()
    },{
      make: 'Toyota',
      model: 'Yaris',
      createdAt : new Date(),
      updatedAt : new Date()
    }], {});
    
  },

  down: async (queryInterface, Sequelize) => {
    
    await queryInterface.bulkDelete('Vehicles', null, {});
     
  }
};
