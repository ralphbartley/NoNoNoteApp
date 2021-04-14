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
    updateNoteList()
  });
  
  text.value = "";
}

function updateNoteList() {
  var newNoteList = "";
  notebook.list().every((text, i) => {
    var listItem = '<li># ${i} ${text}</li>';
    newNoteList += listItem;
  });

  var notesSection = document.getElementsByClassName("notes");
  notesSection = newNoteList;

}

var createButton = document.getElementById("save_note");

createButton.addEventListener("click", noteAdder);


var newButton = document.getElementById("add_note");
