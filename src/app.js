const inquirer = require('inquirer')

inquirer
  .prompt([
    {
      type: 'input',
      message: 'Hæ wuts up?',
      name: 'greeting'
    }
  ])
  .then((answer) => {
    console.log(answer)
  })