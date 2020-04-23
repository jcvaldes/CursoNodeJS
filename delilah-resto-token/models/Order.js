'use strict';
module.exports = (sequelize, DataTypes) => {
  const Order = sequelize.define('Order', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    order_status: {
      type: DataTypes.STRING(8),
      allowNull: false,
    },
    order_time: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: new Date()
    },
    order_description: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    },
    order_amount: {
      type: DataTypes.STRING,
      allowNull: false
    },
    payment_method: {
      type: DataTypes.STRING(15),
      allowNull: false
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
  }, {});
  Order.associate = function(models) {
    // associations can be defined here
  };
  return Order;
};