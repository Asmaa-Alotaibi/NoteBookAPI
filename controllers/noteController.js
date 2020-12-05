const { Note } = require("../db/models");

//normal func noit mw
exports.fetchNote = async (noteId, next) => {
  try {
    const foundNote = await Note.findByPk(noteId);
    return foundNote;
  } catch (error) {
    next(error);
  }
};

exports.noteList = async (req, res, next) => {
  try {
    const note = await Note.findAll({
      attributes: { exclude: ["createdAt", "updatedAt"] },
      include: [
        {
          model: NoteBook,
          as: "Notebook",
          attributes: ["id"],
        },
      ],
    });
    res.json(note);
  } catch (error) {
    next(error);
  }
};
