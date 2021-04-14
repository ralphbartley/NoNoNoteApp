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
    var listItem = `<li><a href=#${index}>${note}</a><button type="button" id=${index}> X </button></li>`;
    newNoteList += listItem;
  });

  var notesSection = document.getElementById("list_notes");
  notesSection.innerHTML = newNoteList;
  deleteButtonListner()
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
  notebook.notes = arrayRemove(notebook.notes, notebook.notes[index]);
  updateNoteList();
  history.replaceState(null, null, document.location.pathname);
}

function deleteButtonListner() {
  var notes = document.getElementById("list_notes");
  var buttons = notes.getElementsByTagName("button");
  for(let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", deleteNote);
  }
}

function deleteNote(event) {
  var button_id = event.target.id
  notebook.notes = arrayRemove(notebook.notes, notebook.notes[button_id]);
  updateNoteList();
}

function arrayRemove(arr, value) { 
  return arr.filter(function(ele){ 
    return ele != value; 
  });
}