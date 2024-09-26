x = true;

const prompt = require('prompt-sync')();
let books = [];

while (x == true){
    console.log("--------------------");
    console.log("1. Add a new book");
    console.log("2. List available books");
    console.log("3. Borrow a book");
    console.log("4. return a book");
    console.log("8. Exit program");
    console.log("--------------------");
    let choice = prompt();
    if (choice == 1){
        // Add a new book
        console.log("Enter book title: ");
        let title = prompt();
        console.log("Enter book author: ");
        let author = prompt();
        console.log("Enter book publication year: ");
        let year = prompt();
        if (!isNaN(Number(year))){
            let year1 = parseInt(year);
        books.push({title, author, year1, isAvailable: true});
        console.log(`${title} by ${author} made in the year ${year1} has been added. `);
    }
        else
            console.log(`${year} is not a proper year, try again. `);

    
    if (choice == 2){
        listAvailableBooks(books);
    }

    if(choice == 3){
        let rompt = prompt("Enter book title to borrow: ");
        borrowBook(rompt);
}

    if(choice == 4){
        let rompt = prompt("Enter book title to return: ");
        returnBook(rompt);
    }
}
} 