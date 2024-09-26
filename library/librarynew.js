let x = true;

const prompt = require('prompt-sync')();
const Lib = require('./newlibrary.js'); 

let Books = new Lib.Library();



while (x == true){
    console.log("--------------------");
    console.log("1. Add a new book");
    console.log("2. List available books");
    console.log("3. Borrow a book");
    console.log("4. return a book");
    console.log("5. Exit program");
    console.log("--------------------");
    let choice = prompt();
    if (choice == 1){
        console.log("Enter book title: ");
        let title = prompt();
        console.log("Enter book author: ");
        let author = prompt();
        console.log("Enter book publication year: ");
        let year = prompt();
        if (!isNaN(Number(year))){
            let year1 = parseInt(year);
        let book1 = new Lib.Book(title, author, year1, isAvailable = true);
        Books.addBook(book1);
        console.log(`${title} by ${author} made in the year ${year1} has been added. `);
    }
        else
            console.log(`${year} is not a proper year, try again. `);
    }
    
    if (choice == 2){
        console.log("Available books: ");
        Books.listAvailableBooks();
    }

    if(choice == 3){
        let rompt = prompt("Enter book title to borrow: ");
        Books.borrowBook(rompt);
}

    if(choice == 4){
        let rompt = prompt("Enter book title to return: ");
        Books.returnBook(rompt);
    }

    if(choice == 5){
        x = false;
        console.log("Exiting program... ");
}
}