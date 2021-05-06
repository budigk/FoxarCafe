'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('Menus', 'category_id', {
      type: Sequelize.INTEGER,
      references: {
        model: "Categories",
        key: "id"
      }
    })
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('Menus', 'category_id')
  }
};
