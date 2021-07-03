module.exports = (sequelize, Datatypes) => {
  const ExpirationDate = sequelize.define("Expiration_Date", {
    product: Datatypes.STRING,
  });

  ExpirationDate.associate = (models) => {
    ExpirationDate.belongsTo(models.Products);
  };
  return ExpirationDate;
};
