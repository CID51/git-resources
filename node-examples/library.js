let library = [
    { title: "1984", author: "George Orwell", year: 1949, isAvailable: true },
    { title: "The Great Gatsby", author: "F. Scott Fitzgerald", year: 1925, isAvailable: true },
    { title: "Moby Dick", author: "Herman Melville", year: 1851, isAvailable: true },
    { title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960, isAvailable: true },
    { title: "Pride and Prejudice", author: "Jane Austen", year: 1813, isAvailable: true }
  ];


  const prompt = require('prompt-sync')();

  let x = true;

  while (x == true){
    console.log("--------------------");
    console.log("1. Add a book");
    console.log("2. List available books");
    console.log("3. Borrow a book");
    console.log("4. return a book");
    console.log("5. List books by author");
    console.log("6. Find books before a year");
    console.log("7. Remove a book");
    console.log("8. Exit program");
    console.log("--------------------");
    let choice = prompt();

    if (choice == 1){
        console.log("What is the title: ");
        let r = prompt();
        console.log("What is the author: ");
        let t = prompt();
        console.log("What is the year: ");
        let y = (prompt());
        if (!isNaN(Number(y))){
            let x = parseInt(y);
        library.push(
            {title: r, 
            author: t, 
            year: x, 
            isAvailable: true});
            console.log(`${r} by ${t} made in the year ${x} has been added. `)
        }
        else
            console.log(`${y} is not a proper year, try again. `);
}
    

    
    


    if (choice == 2){
        for (const book of library){
            if (book.isAvailable == true){
            console.log(`${book.title} by ${book.author}`);
        }
    }
    }

    if (choice == 3){
        let x = false;
        let z = prompt("What book would you like to borrow: ");
        for (const book of library){
            if (z == book.title){
                book.isAvailable = false;
                x = true;
            }
                            
        }
        if (x){
            console.log("Book has been successfully borrowed.")
        }
        else
            console.log("Something went wrong bozo.")

    }


    if (choice == 4){
        let count = 0;
        for (const book of library){
            if (book.isAvailable == false)
            count = count + 1;
        }
        if (count >= 1){
            let cho = prompt("What book would you like to return: ");
            for (const book of library){
                if (cho == book.title && book.isAvailable == false){
                    book.isAvailable = true;
                    console.log("Successfully returned.");
                }
            }
        }
        else
            console.log("You have not logged out any books dummy.");
    }


    if (choice == 5){
        let rompt = prompt("What authors books would you like listed: ");
        let x = false;
        for (const book of library){
            if (rompt == book.author){
                x = true;
            }
        }
        if (x){
            console.log(`${rompt} has written: `)
        for (const book of library){
            if (rompt == book.author)
                console.log(book.title);
        }
        
    }
    else
            console.log(`There are no authors by the name of ${rompt}`);
}

    if (choice == 6){
        let rompt = parseInt(prompt("What year would you like to look at: "));
        let x = false;

        for (const book of library){
            if (rompt == book.year)
                x = true;
        }
        if (x){
            console.log(`Books made in the year ${rompt} are: `)
            for (const book of library){
                if(rompt == book.year)
                    console.log(`${book.title} by ${book.author}`);
            }
        }
        else
            console.log(`There are no books made in the year ${rompt}.`)
    }


    if (choice == 7){
        let rompt = prompt("What book would you like to remove: ");
        let bookhere = false;
        for (const book of library){
            if (rompt == book.title)
                bookhere = true;
        }
        if (bookhere){
            for (let i = 0; i < library.length; i++){
                let book = library[i];
                if (book.title == rompt)
                    library.splice(i, i+1);
                    console.log(`${book.title} has been removed. `)
            }
        }
        else
            console.log(`${rompt} does not exist, or something else went wrong. `)
    }


    if (choice == 8){
        x = false;
        (console.log("Exiting program..."));
    }
    
  

  }


  
  