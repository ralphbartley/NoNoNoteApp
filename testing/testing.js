
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

//  function expect(a) {
//   return { x: 'function(b)', y: 'function(b)'}
// } 

// expect(1+1).function(2)

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

it("can abbreviate a note to the first 20 characters", function() {
  notebook = new Notebook
  expect(notebook.abbreviate("this is a note")).toEqual("this is a note")
  expect(notebook.abbreviate("Hi my name is Taran and this is Nata!")).toEqual("Hi my name is Taran ")
});

it("lists abbreviated notes", function() {
  notebook = new Notebook
  notebook.create("this is a note")
  notebook.create("Hi my name is Taran and this is Nata!")
  notebook.listAbbreviated()
  expect(notebook.notes).isAnArray(["this is a note", "Hi my name is Taran " ])
})
// export {expect, it};
