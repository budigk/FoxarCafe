'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class TransMain extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      TransMain.hasMany(models.TransDetail, {foreignKey:"trans_main_id"})
      TransMain.belongsTo(models.Member, {foreignKey: "member_id"})
      TransMain.belongsTo(models.User, {foreignKey:"user_id"})
      TransMain.belongsToMany(models.Menu, {through: "TransDetail"})
    }
  };
  TransMain.init({
    trans_no: DataTypes.STRING,
    trans_date: DataTypes.DATE,
    payment_type: DataTypes.STRING,
    paymentamount: DataTypes.INTEGER,
    change: DataTypes.INTEGER,
    member_id: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'TransMain',
  });
  return TransMain;
};