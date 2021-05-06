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
    }
  };
  TransDetail.init({
    qty: DataTypes.INTEGER,
    price: DataTypes.INTEGER,
    discount: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'TransDetail',
  });
  return TransDetail;
};