'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('TransMains', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      trans_no: {
        type: Sequelize.STRING
      },
      trans_date: {
        type: Sequelize.DATE
      },
      payment_type: {
        type: Sequelize.STRING
      },
      paymentamount: {
        type: Sequelize.INTEGER
      },
      change: {
        type: Sequelize.INTEGER
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
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('TransMains');
  }
};