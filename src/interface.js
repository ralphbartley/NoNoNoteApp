var notebook = new Notebook;

// from https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
async function postData(url = 'https://makers-emojify.herokuapp.com/', data = {}) {
  // Default options are marked with *
  const response = await fetch(url, {
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, *cors, same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, *same-origin, omit
    headers: {
      'Content-Type': 'application/json'
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: 'follow', // manual, *follow, error
    referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: JSON.stringify(data) // body data type must match "Content-Type" header
  });
  return response.json(); // parses JSON response into native JavaScript objects
}


function noteAdder() {
  var text = document.getElementById("note_text");
  postData('https://makers-emojify.herokuapp.com/', {text: text.value})
  .then(data => {
    console.log(data);
    notebook.create(data.emojified_text);
    localStorage.setItem("notes", notebook.notes)
    updateNoteList()
    text.value = "";
  });
}

function updateNoteList() {
  var newNoteList = "";
  notebook.list().forEach((note, index) => {
    note = notebook.abbreviate(note);
    var listItem = `<li><a href=#${index}>${note}</a><button class="list_button" type="button" id=${index}>_</button></li>`;
    newNoteList += listItem;
  });

  var notesSection = document.getElementById("list_notes");
  notesSection.innerHTML = newNoteList;
  deleteButtonListner()
}

var createButton = document.getElementById("save_note");

createButton.addEventListener("click", noteAdder);

displayNote()

var storedNotes = localStorage.getItem("notes");
if (storedNotes !== null){
  notebook.notes = storedNotes.split(",");
  updateNoteList();
}

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
  localStorage.setItem("notes", notebook.notes)
  updateNoteList();
}

function arrayRemove(arr, value) {
  return arr.filter(function(ele){
    return ele != value;
  });
}
