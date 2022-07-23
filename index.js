const inquirer = require('inquirer');
const fs = require ('fs');


const promptUser = () => {
    return inquirer.prompt([
        {
            type: 'input',
            message: "Enter the team manager's name.",
            name: "empName",
        },
        {
            type: "input",
            message: "Enter the team manager's employee ID.",
            name: "id",
        },
        {
            type: "input",
            message: "Enter the team manager's email address.",
            name: "email",
        },
        {
            type: "input",
            message: "Enter the team manager's office number.",
            name: "officeNum",
        },
        {
            type: "list",
            message: "Select from the list below.",
            name: "addEmployee",
            choices: ['Add an engineer', 'Add an intern', 'Finish building team'],
        },
    ]);
};

const generateHTML = ({empName, id, email}) =>
`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
    <title>Team Profile</title>
</head>
<body>

    <div class="jumbotron jumbotron-fluid bg-info">
        <div class="container text-light">
          <h1 class="display-4 font-weight-bold">My Team</h1>
          <p class="lead">Employees are featured below</p>
        </div>
    </div>
  
    <div class="container">
        <div class="row justify-content-md-center"></div>
        <div class="card col-4 border border-info" style="width: 18rem;">
            <div class="card-body">
            <div class="text-center">    
                <h3 class="card-title font-weight-bold">${empName}</h5>
                <h4 class="card-subtitle mb-2 text-muted">jobTitle</h6>
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item"><span class='font-weight-bold'>ID: </span> ${id}</li>
                <li class="list-group-item"><span class='font-weight-bold'>Email: </span> ${email}</li>
                <li class="list-group-item">A third item</li>
            </ul>
            </div>
        </div>
    </div>

</body>
</html>`;


// Initialize 
function init() {
    // Begins questioning user
   promptUser()
        // Generate HTML file using data
        .then((answers) =>fs.writeFileSync('index.html', generateHTML(answers)))
        .then(() => console.log('Successfully wrote to index.html'))
        .catch((err) => console.error(err));
};

init();