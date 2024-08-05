class PrintEditionItem {
    constructor(name, releaseDate, pagesCount){
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = 100;
        this.type = null;
    }

    fix() {
        this.state = this.state * 1.5;
    }

    set state(newState) {
        if(newState < 0) {
            this._state = 0
        } else if (newState < 100) {
            this._state = newState
        } else {
            this._state = 100
        }
    }

    get state() {
        return this._state
    }
};

class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.type = 'magazine'
    }
};

class Book extends PrintEditionItem {
    constructor(author, name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.author = author;
        this.type = 'book';
    }
};

class NovelBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = 'novel';
    }
};

class FantasticBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = 'fantastic';
    }
};

class DetectiveBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = 'detective';
    }
};

class Library {
    constructor(name, books) {
        this.name = name;
        this.books = [];
    }

    addBook(book) {
        if (book.state > 30) {
            this.books.push(book)
        }
    }

    findBookBy(type, value) {
        for(let i = 0; i < this.books.length; i += 1) {
            if (this.books[i][type] === value) {
                return this.books[i]
            }
        };
        return null
    }

    giveBookByName(bookName) {
        let index = this.books.findIndex(book => book.name === bookName);
        if(index !== -1) {
           let book = this.books[index];
           this.books = this.books.filter(book => book.name !== bookName);
           return book;
        } else {
            return null
        }
    }
};