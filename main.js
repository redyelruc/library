import Book from './book.js';
import Library from './library.js';

const GENRES =["biography", "comic", "crime", "children's", "educational", "graphic novel", "historical fiction",
                 "history", "literary classic", "poetry", "political thriller", "psychology",
                 "religion", "romance", "sport", "teen", "thriller", "true crime", "unspecified", "young adult"
                ];

// library factory for making Libraries             
function createLibrary(owner){
    const newLibrary = new Library();
    newLibrary.owner = owner;
    return newLibrary;
};

// book factory
function createBook(title, author, pages, read, fiction, genre){
    const newBook = new Book(title, author, pages, read, fiction, genre);
    return newBook;
}

// testing the logic so far.
const newBook = createBook("Brave New World", "Aldous Huxley", 250, false, true, GENRES[8]);
const aidanLibrary = createLibrary("aidan");
aidanLibrary.addBookToLibrary(newBook);
newBook.setStars(5);
newBook.toggleRead();
newBook.editReview("This is a great read");
