const { Console } = require('console');
const { cp } = require('fs');
const readline = require('readline');

// console.log("Hey sir, i'm your directory !");
// console.log("Enter /help for display my different command");
// console.log("Otherwise simply enter a command for start using me");

// if (readline == "/help") {
//     console.log("/help");
//     console.log("/There is the details of different command available");
//     console.log("/help : Display all the commands available");
//     console.log("/stop : Quit your loved directory");
//     console.log("/add : Add a new contact in your direcotry");
//     console.log("/list : List all the contacts you have in your loved directory");
//     console.log("/delete : Delete one of your contact by specifying his ID");
// }

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let name,lastname,number;
var contacts = [];
var temp = {};

contacts = new Array();

let n=0;

switchCase();



function add(){
    console.log("Let's add a new contact !");
    rl.question(`What is the first-name of your contact ? `, (answer) => {
        temp.name = answer;
        rl.question(`What is the family name of your contact ? `, (answer) => {
            temp.family = answer;
            rl.question(`What is the phone number of your contact ? `, (answer) => {
                temp.number = answer;
                console.log(`Your contact `+name+" "+lastname+" have been added succesfully to the directory !\n");
                console.log(temp);
                temp.id = contacts.length+1;
                contacts.push(temp);
                temp = {};
                console.log(contacts);
                switchCase();
            });

        });
    });
}

function stop(){
    console.log("Vous avez fermé le directory");
    rl.close();
}

function list(){
    let nombre=1;
    console.log("Here is the list of your contacts : ");
    for(var contact of contacts){
        console.log("----------------------------------------------------------------------------------");
        console.log("ID : "+contact.id+" ==> "+contact.name+" "+contact.family+"\nphone: "+contact.number);
    }
    switchCase();
}

function supprimer(){
    rl.question(`What is the ID of your contact ? `, (answer) => {
        contacts.splice(answer - 1, 1);
        console.log("Contact supprimé");
        switchCase();
    });
}

function switchCase(){
rl.question(`Hey Sir, i'm your directory ! 
Enter /help to display a list of commands. 
Otherwise just enter any existing commands.\n`, value => {
    switch (value) {
        case "/help":
            console.log("There is the details of differents commands available");
            console.log("/help : Display all the commands available");
            console.log("/stop : Quit your loved directory");
            console.log("/add : Add a new contact in your directory");
            console.log("/list : List all the contacts you have in your loved directory");
            console.log("/delete : Delete one of your contact by specifying his ID");
            break;
        
        case "/stop":
            console.log("The directory closed.");
            close();
            break;

        case "/add":
            add();
            break;

        case "/list":
            list();
            break;

        case "/delete":
            supprimer();
            break;

        default:
            break;
    }

});
}
adam