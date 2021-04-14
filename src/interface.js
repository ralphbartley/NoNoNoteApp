var notebook = new Notebook;

function noteAdder() {
  var text = document.getElementById("note_text");
  notebook.create(text.value);
  updateNoteList();
  text.value = "";
}

function updateNoteList() {
  var newNoteList = "";
  notebook.list().forEach((note, index) => {
    note = notebook.abbreviate(note);
    var listItem = `<li><a href=#${index}>${note}</a></li>`;
    newNoteList += listItem;
  });

  var notesSection = document.getElementById("list_notes");
  notesSection.innerHTML = newNoteList;
}

var createButton = document.getElementById("save_note");

createButton.addEventListener("click", noteAdder);

var newButton = document.getElementById("add_note");

displayNote()

function displayNote() {
  window.addEventListener("hashchange", getNote);
};

function getNote() {
  var index = window.location.hash.split("#")[1];
  document.getElementById("note_text").value = notebook.notes[index];
  notebook.notes.pop(index);
  updateNoteList();
  history.replaceState(null, null, document.location.pathname);
}


