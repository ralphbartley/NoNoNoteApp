describe ('Notebook', function() {

    var notebook

    it("creates a note", function(){
        notebook = new Notebook

        expect(notebook.list).toEqual([]);
    });
});

