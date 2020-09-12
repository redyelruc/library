export default class Library {
    constructor() {
        this.owner;
        this.books = [];
    }
    isBookInLibrary(book) {
        return this.books.some(libraryBook => libraryBook.title === book.title);
    }
    addBookToLibrary(book) {
        if (this.isBookInLibrary(book) === false) {
            this.books.push(book);
        }
    }
    removeBookFromLibrary(book) {
        const indexToRemove = this.books.indexOf(book);
        delete this.books[indexToRemove];
    }
    removeAllBooksFromLibrary(){
        this.books = [];
    }
};