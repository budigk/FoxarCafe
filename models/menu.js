'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Menu extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Menu.belongsTo(models.Category, {foreignKey: "category_id"})
      Menu.hasMany(models.TransDetail, {foreignKey: "menu_id"})
      Menu.belongsToMany(models.TransMain, {through: "TransDetail"})
    }
  };
  Menu.init({
    menu_name: DataTypes.STRING,
    price: DataTypes.INTEGER,
    image_url: DataTypes.STRING,
    category_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Menu',
  });
  return Menu;
};