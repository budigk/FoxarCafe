'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    let users = require('./users.json');

    users = users.map(el => {
      el.createdAt = new Date(),
      el.updatedAt = new Date()

      return el;
    })

    return queryInterface.bulkInsert('Users', users, {})
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {})
  }
};
