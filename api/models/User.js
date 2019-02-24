module.exports = (sequelize, DataTypes) => {
  return sequelize.define("User", {
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      notEmpty: true
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      notEmpty: true
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      notEmpty: true
    }
  });
};
