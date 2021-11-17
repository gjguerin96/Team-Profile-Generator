// const inquirer = require('inquirer');
const Employee = require("./lib/Employee")

const employee = new Employee();




// function askForManager() {
//     inquirer
//         .prompt([
//             {
//                 type:'input',
//                 name: 'manname',
//                 message: 'Enter manager name.'
//             },
//             {
//                 type:'input',
//                 name: 'id',
//                 message: 'Enter manager id number.'
//             },
//             {
//                 type:'input',
//                 name: 'email',
//                 message: 'Enter manager email address.'
//             },
//             {
//                 type:'input',
//                 name: 'office',
//                 message: 'Enter manager office number.'
//             }
//         ]);
//         then(() => {
//             // const manager = new Manager(manname.value,id.value,email.value,office.value);
//             console.log(manname.value)
//         });
// }

// askForManager();