'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('TransDetails', 'menu_id', {
      type: Sequelize.INTEGER,
      references: {
        model: "Menus",
        key: "id"
      }
    })
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('TransDetails', 'menu_id')
  }
};
