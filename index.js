const inquirer = require('inquirer');
const fs = require ('fs');
const Employee = require('./src/employee');
const Manager = require('./src/manager');
const Engineer = require('./src/engineer')
const Intern = require('./src/intern');
const { stringify } = require('querystring');

let employees = [];

// Creates a new manager
const createManager = () => {
    inquirer.prompt([
        {
            type: 'input',
            message: "Enter the manager's name.",
            name: "name",
        },
        {
            type: "input",
            message: "Enter the manager's ID.",
            name: "id",
        },
        {
            type: "input",
            message: "Enter the manager's email address.",
            name: "email",
        },
        {
            type: "input",
            message: "Enter the manager's office number.",
            name: "officeNumber",
        },
    ])
    // Assigns user's answers to new Manager object
    .then((answers) => {
        const manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber);
        console.log(manager);
         // Adds the manager to the employees array
         employees.push(manager);
         console.log('Employees: ' + JSON.stringify(employees));

        // // Obtain existing html
        // fs.readFile('index.html', 'utf8', (err, data) => {
        //     if (err) {
        //         console.log(err);
        //     } else {
        //         fs.appendFile('index.html', data)
        //     }
        // })
      
        // Sends to function
        toDoNext();
    });

    
    // Create card  
};

// Asks user what they would like to do next after new employee has been created
const toDoNext = () => {
    inquirer.prompt([
        {
            type: "list",
            message: "Select from the list below.",
            name: "add",
            choices: ['Add an engineer', 'Add an intern', 'Finish building team'],
            
        }
    ])    
    // Sends user to correct function based on choice
    .then((answer) => {
        console.log(answer.add);
            if (answer.add === 'Add an engineer'){
                createEngineer();
            } else if (answer.add === 'Add an intern') {
                createIntern();
            } else {
                console.log('quit')
                const employeesHtml = generateEmployeeHTML(employees);
                createHTML(employeesHtml);
                
            }
        })
};

// Creates a new Engineer
const createEngineer = () => {
    inquirer.prompt([
        {
            type: 'input',
            message: "Enter the engineer's name.",
            name: 'name',
        },
        {
            type: "input",
            message: "Enter the engineer's employee ID.",
            name: "id",
        },
        {
            type: "input",
            message: "Enter the engineer's email address.",
            name: "email",
        },
        {
            type: "input",
            message: "Enter the engineer's GitHub username.",
            name: "gitHub",
        },
    ])
    // Assigns user's answers to new Engineer object
    .then((answers) => {
        const engineer = new Engineer(answers.name, answers.id, answers.email, answers.gitHub);
        console.log(engineer);
        // Adds the engineer to the employees array
        employees.push(engineer);
        console.log('Employees: ' + JSON.stringify(employees));
        toDoNext();
    });
};

// Creates a new Intern
const createIntern = () => {
    inquirer.prompt([
        {
            type: 'input',
            message: "Enter the intern's name.",
            name: 'name',
        },
        {
            type: "input",
            message: "Enter the intern's employee ID.",
            name: "id",
        },
        {
            type: "input",
            message: "Enter the intern's email address.",
            name: "email",
        },
        {
            type: "input",
            message: "Enter the intern's school.",
            name: "school",
        },
    ])
    // Assigns user's answers to new Intern object
    .then((answers) => {
        const intern = new Intern(answers.name, answers.id, answers.email, answers.school);
        console.log(intern);
        // Adds the intern to the employees array
        employees.push(intern);
        console.log('Employees: ' + JSON.stringify(employees));
        // fs.writeFile('index.html', generateHTML(answers), (err) => 
        // err ? console.log(err) : console.log('Success! Your HTML has been created'))
        toDoNext();
    });
};

function formatSpecialItem(role, employee) {
    if (role === 'Manager') {
        return employee.getOfficeNumber();
    } else if (role === 'Engineer') {
        return employee.getGithub();
    } else if (role === 'Intern') {
        return employee.getSchool();
    }
    console.error(`Employee role is unknown: ${role}`);
    return '';
}

// Creates a card for each employee
function generateEmployeeHTML(employees) {
    const employeeHtml = employees.map((employee) => {
        let cardHtml = `
<div class="row justify-content-md-center"></div>
    <div class="card col-4 border border-info" style="width: 18rem">
        <div class="card-body">
        <div class="text-center">    
            <h3 class="card-title font-weight-bold">${employee.getName()}</h3>
            <h4 class="card-subtitle mb-2 text-muted">${employee.getRole()}</h4>
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item"><span class='font-weight-bold'>ID: </span> ${employee.getId()}</li>
            <li class="list-group-item"><span class='font-weight-bold'>Email: </span> ${employee.getEmail()}</li>
            <li class="list-group-item">${formatSpecialItem(employee.getRole(), employee)}</li>
        </ul>
    </div>
</div>
        `;
        return cardHtml;
    });
    return employeeHtml.join('');
}


const createHTML = (employeesHtml) => {
    console.log("\nGoodbye!");
    // Generate HTML file using data
    // console.log(generateHTML(employeesHtml));
    return fs.writeFile('./dist/index.html', generateHTML(employeesHtml), (err) => 
        err ? console.log(err) : console.log('Success! Your HTML has been created')
    )
};

// Content for the index.html
const generateHTML = (employeesHtml) =>
`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
    <title>Team Profile</title>
    <script src='index.js'></script>
</head>
<body>

    <div class="jumbotron jumbotron-fluid bg-info">
        <div class="container text-light">
          <h1 class="display-4 font-weight-bold">My Team</h1>
          <p class="lead">Employees are featured below</p>
        </div>
    </div>
  
    <div class="container" id="container">
        ${employeesHtml}
    </div>
</body>
</html>`;


// Initialize 
function init() {
    

// Generate HTML file using data
// fs.writeFileSync('index.html', generateHTML());
// console.log('Successfully genereated HTML');
// // console.error(error);

// Begins questioning user
createManager();

}

init();





// Card HTML
/* <div class="row justify-content-md-center"></div>
        <div class="card col-4 border border-info" style="width: 18rem">
            <div class="card-body">
            <div class="text-center">    
                <h3 class="card-title font-weight-bold">${name}</h3>
                <h4 class="card-subtitle mb-2 text-muted">role</h4>
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item"><span class='font-weight-bold'>ID: </span> ${id}</li>
                <li class="list-group-item"><span class='font-weight-bold'>Email: </span> ${email}</li>
                <li class="list-group-item">A third item</li>
            </ul>
        </div>
    </div> */