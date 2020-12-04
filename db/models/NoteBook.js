const SequelizeSlugify = require("sequelize-slugify");

module.exports = (sequelize, DataTypes) => {
  const NoteBook = sequelize.define("NoteBook", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    // slug: {
    //   type: DataTypes.STRING,
    //   unique: true,
    // },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
  // SequelizeSlugify.slugifyModel(NoteBook, {
  //   source: ["name"],
  // });

  return NoteBook;
};
