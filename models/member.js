'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Member extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Member.hasMany(models.TransMain, {foreignKey: "member_id"})
    }
  };
  Member.init({
    name: DataTypes.STRING,
    phone: DataTypes.STRING,
    discount: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'Member',
  });
  return Member;
};