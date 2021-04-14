
function expect(a) {
  return {

    toEqual: function(b){
      if (a == b) {
        console.log("Pass")
      }
      else {
        console.log("Fail")
      }
      },

    isAnArray: function(b) {
      var result = (a.length === b.length && a.every((v, i) => v === b[i]));
      console.log(result)
    }
    }
  }

function it(label, callback) {
  console.log(`Test: ${label}`)
  callback()
}

var notebook

it("starts with an empty list of notes", function(){
    notebook = new Notebook

    expect(notebook.list()).isAnArray([]);
});


it("creates a new note", function() {
  notebook = new Notebook
  notebook.create("this is a note")
  expect(notebook.list()).isAnArray(["this is a note"])
});



// export {expect, it};
