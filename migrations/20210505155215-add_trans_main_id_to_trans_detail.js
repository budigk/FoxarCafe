'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('TransDetails', 'trans_main_id', {
      type: Sequelize.INTEGER,
      references: {
        model: "TransMains",
        key: "id"
      }
    })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('TransDetails', 'trans_main_id')
  }
};
