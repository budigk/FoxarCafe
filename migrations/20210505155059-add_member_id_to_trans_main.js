'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('TransMains', 'member_id', {
      type: Sequelize.INTEGER,
      references: {
        model: "Members",
        key: "id"
      }
    })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('TransMains', 'member_id')
  }
};
