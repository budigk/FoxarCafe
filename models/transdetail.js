'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class TransDetail extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      TransDetail.belongsTo(models.TransMain, {foreignKey: "trans_main_id"})
      TransDetail.belongsTo(models.Menu, {foreignKey: "menu_id"})
    }
  };
  TransDetail.init({
    qty: DataTypes.INTEGER,
    price: DataTypes.INTEGER,
    discount: DataTypes.FLOAT,
    trans_main_id: DataTypes.INTEGER,
    menu_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'TransDetail',
  });
  return TransDetail;
};