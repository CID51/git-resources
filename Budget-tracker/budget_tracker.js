const prompt = require('prompt-sync')();
let expenses = [];
let x = true;
let totalexpense = 0;


let budget = (parseInt(prompt('What is the budget: ')));

while (isNaN(Number(parseInt(budget)))){
console.log("That is not a valid number. Try again");
budget = prompt("What is the budget: ");
}

   
    while (x == true){
        console.log();
        console.log("--------------------");
        console.log('1. Add an expense');
        console.log('2. View total expenses');
        console.log('3. Check budget');
        console.log('4. Remove an expense');
        console.log('5. Exit program');
        console.log("--------------------");
        console.log();
        let choice = (prompt());


        if (choice == 1){
            a = prompt('What is the amount: ');
            if (isNaN(Number(a)))
            b = prompt('What is the category: ');
            else if (!isNaN(Number(b)))
            expenses.push(a, b);
            else
            console.log("Wrong");

        }


        else if (choice == 2){
            for (let i = 0; i < expenses.length; i++){
                
                let t = parseInt(expenses[i]);
                if (t > 0){
                totalexpense = totalexpense + t;
            }
        }
            console.log(`Your total expense is: ${parseInt(totalexpense)}`);
        }

        else if (choice == 3){
            console.log(`your budget is: $${budget}`);
        }

        
        else if (choice == 4){
            let t = parseInt(prompt("What category do you want to remove: "));
                let num = expenses.indexOf(t);
                if (num > -1){
                    expenses.splice(num-2, 2);
                console.log("done");
                }
                else
                    console.log("Didn't work");
                
            
            
    }
    
    
        else if (choice == 5){
            ExitProgram();
        }
        else
            console.log("Wrong");
    
        function ExitProgram() {
            x = false;
            console.log('Exiting program...');
        }
        
        
    
    }



