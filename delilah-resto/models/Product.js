'use strict';
module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define('Product', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    product_name: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    product_price: {
      type: DataTypes.DECIMAL(5,2),
      allowNull: false,
    },
    product_photo: {
      type: DataTypes.STRING(100),
      allowNull: false,
    }
  }, {});
  Product.associate = function(models) {
    // associations can be defined here
  };
  return Product;
};