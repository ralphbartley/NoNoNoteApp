describe ('Notebook', function() {

    var notebook

    it("creates a note", function(){
        notebook = new Notebook

        expect(notebook.list).toEqual([]);
    });
});



const equals = (a, b) =>
  a.length === b.length &&
  a.every((v, i) => v === b[i]);

const a = [1, 2, 3];
const b = [1, 2, 3];
const str = 'a';
const strObj = new String('a');

equals(a, b); // true
equals([str], [strObj]); // false
equals([null], [undefined]); // false