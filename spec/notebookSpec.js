var notebook

it("creates a note", function(){
    notebook = new Notebook

    expect(notebook.list).toEqual([]);
});

import { expect, it } from '../testing/testing.js';
