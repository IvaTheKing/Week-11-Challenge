const router = require("express").Router();
const fs = require("fs");
const { v4: uuidv4 } = require("uuid");
const { createNewNote } = require("../../lib/notes.js")

router.get("/notes", (req, res) => {
    const notes = JSON.parse(fs.readFileSync("./db/db.json"));
    let results = notes;
    console.log("notes log", results);
    res.json(results);

});

router.post("/notes", (req, res) => {
    const notes = JSON.parse(fs.readFileSync("./db/db.json"));
    req.body.id = uuidv4(); //auto assigns unique id to all notes.
    console.log("test", req.body);
    let note = createNewNote(req.body, notes);
    res.json(note);
});

module.exports = router;