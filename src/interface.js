var notebook = new Notebook;

function noteAdder() {
  var text = document.getElementById("note_text");
  notebook.create(text.value);
  text.value = "";
}

function updateNoteList() {
  var newNoteList = "";
  notebook.list().every((text, i) => {
    var listItem = '<li># ${i} ${text}</li>';
    newNoteList += listItem;
  });

  var notesSection = document.getElementByClass("notes");
  notesSection = newNoteList;
}

var createButton = document.getElementById("save_note");

createButton.addEventListener("click", noteAdder);

var newButton = document.getElementById("add_note");
