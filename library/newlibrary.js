
class Book{
    constructor(title, author, year, isAvailable){
    this.title = title;
    this.author = author;
    this.year = year;
    this.isAvailable = true | isAvailable;
    }

    borrowBook(){
        if(this.isAvailable){
            console.log(`${this.title} by ${this.author} is borrowed.`);
            this.isAvailable = false;
        }
        else{
            console.log(`${this.title} by ${this.author} is already borrowed.`);
        }        
    }

    returnBook(){
        if(!this.isAvailable){
            console.log(`${this.title} by ${this.author} is returned.`);
            this.isAvailable = true;
        }
        else{
            console.log(`${this.title} by ${this.author} is already available.`);
        }
    }
}

class Library{
    constructor(){
        this.books = [];
    }
    addBook(book){
        this.books.push(book);
    }

    listAvailableBooks(){
        for (const book of this.books){
        if(book.isAvailable)
            console.log(`${book.title} by ${book.author}`);
        }
    }

    borrowBook(title){
        title.borrowBook();

        console.log(`${title} not found in the library.`);
    }
    
    returnBook(title){
        title.returnBook();
            
        
        console.log(`${title} not found in the library.`);
    }
    }


module.exports = {Book, Library};