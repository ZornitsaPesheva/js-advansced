// https://judge.softuni.org/Contests/Practice/DownloadResource/19502

class LibraryCollection {
    constructor(capacity) {
        this.capacity = capacity;
        this.book = [];
        this.isFull = false;
    }

    addBook(bookName, bookAuthor) {
        if (this.isFull) {
            throw new Error('Not enough space in the collection.')
        }
        this.books.push({bookName, bookAuthor, payed: false});
        return (`The ${bookName}, with an author ${bookAuthor}, collect.`)
    }

    payBook(bookName) {
        let book = this.book.find(b => b.bookName == bookName);
        if (!book) {
            throw new Error(`${bookName} is not in the collection.`)
        }
        if (book.payed) {
            throw new Error(`${bookName} has already been paid.`)
        }
        book.payed = true;
        return `${bookName} has been successfully paid.`
    }
}