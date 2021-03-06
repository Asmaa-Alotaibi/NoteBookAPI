const express = require("express");
const router = express.Router();
const {
  noteBookList,
  creatNoteBook,
  fetchNoteBook,
  creatNote,
} = require("../controllers/noteBookController");

router.param("noteBookId", async (req, res, next, noteBookId) => {
  const noteBook = await fetchNoteBook(noteBookId, next);
  if (noteBook) {
    req.noteBook = noteBook;
    next();
  } else {
    const err = {
      status: 404,
      message: "noteBook not found",
    };
    next(err);
  }
});

router.get("/", noteBookList);

router.post("/", creatNoteBook);

router.post("/:noteBookId/notes", creatNote);

module.exports = router;
