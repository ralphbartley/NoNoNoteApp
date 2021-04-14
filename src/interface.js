var notebook = new Notebook;

function noteAdder() {
  var text = document.getElementById("note_text");
  notebook.create(text.value);
  updateNoteList();
  text.value = "";
}

function updateNoteList() {
  var newNoteList = "";
  notebook.list().forEach( text => {
    text = notebook.abbreviate(text);
    var listItem = `<li>${text}</li>`;
    newNoteList += listItem;
  });

  var notesSection = document.getElementById("list_notes");
  notesSection.innerHTML = newNoteList;
}

var createButton = document.getElementById("save_note");

createButton.addEventListener("click", noteAdder);

var newButton = document.getElementById("add_note");
