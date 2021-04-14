let notes = [];

// from https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
async function postData(url = '', data = {}) {
    console.log(2)
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
    console.log(4)
    return response.json(); // parses JSON response into native JavaScript objects
  }

function renderNoteList() {
    let innerHtml = "";
    notes.forEach(element => {
        let para = `<p>${element}</p>`;
        innerHtml += para
    });

    let noteList = document.getElementById("note-list");
    noteList.innerHTML = innerHtml;
}

function createHandler() {
    let textarea = document.getElementById("note-text")
    console.log(1)
    postData('https://makers-emojify.herokuapp.com/', {text: textarea.value})
        .then(data => {
            console.log(5)
            console.log(data); // JSON data parsed by `data.json()` call
            notes.push(data.emojified_text);

            renderNoteList()
        });
    
    console.log(3)

    textarea.value = "";
}

let createButton = document.getElementById("create-button")
createButton.addEventListener("click", createHandler)