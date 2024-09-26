
class book{
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

class library{
    constructor(){
        this.books = [];
    }
    addBook(book){
        this.books.push(book);
    }

    listAvailableBooks(){
        for (const book of books){
        if(book.isAvailable)
            console.log(`${book.title} by ${book.author}`);
        }
    }

    borrowBook(title){
        for (const book of books){
            if(book.title === title && book.isAvailable){
                book.borrowBook();
                console.log(`${title} by ${book.author} is borrowed.`);
                return;
            }
        }
        console.log(`${title} not found in the library.`);
    }
    
    returnBook(title){
        for (const book of books){
            if(book.title === title &&!book.isAvailable){
                book.returnBook();
                console.log(`${title} by ${author} is returned.`);
                return;
            }
        }
        console.log(`${title} not found in the library.`);
    }

}
