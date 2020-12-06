const express = require("express");
const router = express.Router();
const {
  noteList,
  fetchNote,
  updateNote,
} = require("../controllers/noteController");

router.param("noteId", async (req, res, next, noteId) => {
  const note = await fetchNote(noteId, next);
  if (note) {
    req.note = note;
    next();
  } else {
    const err = {
      status: 404,
      message: "note not found",
    };
    next(err);
  }
});

router.get("/", noteList);

router.put("/:noteId", updateNote);
module.exports = router;
