const inquirer = require('inquirer')

inquirer
  .prompt([
    {
      type: 'input',
      message: 'What is the name of the company',
      name: 'company'
    },
    {
      type: 'input',
      message: 'What is the name of the addressee',
      name: 'addressee'
    },
    {
      type: 'input',
      message: 'Where is the listing from',
      name: 'listing'
    }
  ])
  .then((answer) => {
    console.log(answer)
  })