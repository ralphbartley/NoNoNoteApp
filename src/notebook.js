class Notebook {
	constructor() {
		this.notes = []
	}
	
	list () {
		console.log(this.notes)
		return this.notes
	}

	create (fullText) {
	  return this.notes.push(fullText)
	}

  abbreviate (fullText) {
    return fullText.slice(0,20)
  }

  listAbbreviated () {
    for(let i = 0; i < this.notes.length; i++) {
      this.notes[i] = this.abbreviate(this.notes[i]);
    }
  }
}