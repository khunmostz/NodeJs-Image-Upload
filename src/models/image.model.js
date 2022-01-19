module.exports = (sequelize, DataTypes) => {
  //  generate column in db auto and add createdAt and updatedAt
  const Image = sequelize.define("image", {
    type: {
      type: DataTypes.STRING,
    },
    name: {
      type: DataTypes.STRING,
    },
    data: {
      // BLOB = Big Object
      type: DataTypes.BLOB("long"),
    },
  });
  return Image;
};
