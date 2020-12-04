const { NoteBook } = require("../db/models");

//normal func noit mw
exports.fetchNoteBook = async (productId, next) => {
  try {
    const foundNoteBook = await NoteBook.findByPk(productId);
    return foundNoteBook;
  } catch (error) {
    next(error);
  }
};

exports.noteBookList = async (req, res, next) => {
  try {
    const noteBooks = await NoteBook.findAll({
      attributes: { exclude: ["createdAt", "updatedAt"] },
      //   include: [
      //     {
      //       model: Store,
      //       as: "stores",
      //       attributes: ["id"],
      //     },
      //   ],
    });
    res.json(noteBooks);
  } catch (error) {
    next(error);
  }
};

exports.creatNoteBook = async (req, res, next) => {
  try {
    //req.body.storeId this is the relation cell
    req.body.notBookId = req.params.notBookId;
    const newNoteBook = await NoteBook.create(req.body);
    res.status(201).json(newNoteBook);
  } catch (error) {
    next(error);
  }
};
