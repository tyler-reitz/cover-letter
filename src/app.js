const inquirer = require("inquirer");
const util = require("util");
const fs = require("fs");
const path = require("path");
const clipboardy = require("clipboardy");

const templatePath = path.join(__dirname, "templates");
const readdir = util.promisify(fs.readdir);
const readfile = util.promisify(fs.readFile);

readdir(templatePath, "utf8")
  .then(templates => {
    return inquirer.prompt([
      {
        type: "list",
        message: "Which template would you like to use",
        choices: templates,
        name: "template"
      }
    ]);
  })
  .then(({ template }) => {
    return require(path.join(__dirname, "templates", template));
  })
  .then(({ slugs, letter }) => {
    let questions = [];

    for (var slug in slugs) {
      questions.push({
        type: "input",
        message: slugs[slug],
        name: slug
      });
    }

    return inquirer.prompt(questions)
      .then(answers => {
        clipboardy.writeSync(letter(answers))
      })
      .catch(err => console.log(err))
      
    })
    .catch(err => console.log(err));
