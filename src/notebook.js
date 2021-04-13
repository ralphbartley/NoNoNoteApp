class Notebook {
    constructor() {
        this.array = []
    }
    

    list () {
        console.log(this.array)
        return this.array
    }

    create (fullText) {
       return this.array.push(fullText)
    }
}
