

function expect(a) {
  return {

    toEqual: function(b){
      if (a == b) {
        console.log("Pass")
      }
      else {
        console.log("Fail")
      }
      }
    }
  }

function it(label, callback) {
  console.log(`Test: ${label}`)
  callback()
}


var notebook

it("creates a note", function(){
    notebook = new Notebook

    expect(notebook.list).toEqual([]);
});

//export {expect, it};