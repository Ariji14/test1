module.exports = (sequelize, DataTypes) => {
    const Jewelry = sequelize.define('Jewelry', {
      material: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
      color: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
      type: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
      weight: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
      size: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
      brand: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
    });
  
    Jewelry.associate = function (models) { };
  
    return Jewelry;
  }
  