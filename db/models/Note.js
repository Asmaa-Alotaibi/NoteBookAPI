const SequelizeSlugify = require("sequelize-slugify");

module.exports = (sequelize, DataTypes) => {
  const Note = sequelize.define("Note", {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    slug: {
      type: DataTypes.STRING,
      unique: true,
    },
    body: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
  SequelizeSlugify.slugifyModel(Note, {
    source: ["tittle"],
  });

  return Note;
};
