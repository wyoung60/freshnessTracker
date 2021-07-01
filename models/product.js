module.exports = (sequelize, Datatypes) => {
  const Products = sequelize.define("Products", {
    product: Datatypes.STRING,
  });
  return Products;
};
