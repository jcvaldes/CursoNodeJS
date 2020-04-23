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
      type: DataTypes.DECIMAL(5, 2),
      allowNull: false,
    },
    product_photo: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    createdAt: {
      type: DataTypes.DATE,
      defaultValue: new Date(),
      allowNull: false,
    },
    updatedAt: {
      type: DataTypes.DATE,
      defaultValue: new Date(),
      allowNull: false,
    },
    deletedAt: {
      type: DataTypes.DATE,
      defaultValue: new Date(),
      allowNull: true
    }
  }, {
    // hooks: {
    //   beforeCreate: function(product, options) {
    //     const now = new Date()
    //     product.createdAt = now
    //     product.updatedAt = now
    //     product.deletedAt = now
    //   },
    //   beforeUpdate: function(product, options, fn) {
    //     const now = new Date()
    //     product.updatedAt = now;
    //   }
    }
  });
  Product.associate = function(models) {
    // associations can be defined here
  };
  return Product;
};