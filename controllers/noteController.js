const { Note, NoteBook } = require("../db/models");

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
    const notes = await Note.findAll({
      attributes: { exclude: ["createdAt", "updatedAt"] },
      // include: [
      //   {
      //     model: NoteBook,
      //     as: "notebooks",
      //     attributes: ["id"],
      //   },
      // ],
    });
    res.json(notes);
  } catch (error) {
    next(error);
  }
};

exports.updateNote = async (req, res, next) => {
  try {
    await req.note.update(req.body);
    res.status(204).end();
  } catch (error) {
    next(error);
  }
};
