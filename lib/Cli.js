
import inquirer from 'inquirer';
import { join } from 'path';
import { writeFile } from 'fs/promises';

class CLI {
  constructor() {
   
  }
  run() {

    // TODO: Prompt for logo text, up to 3 characters
    // TODO: Prompt for text color, keyword or hexadecimal
    // TODO: Prompt for a shape (list)
    // TODO: Prompt for color of shape, keyword or hexadecimal
    return inquirer
      .prompt([
        {
          type: 'input',
          name: 'name',
          message: 'Please enter your logo text (max of 3 characters)',
        },
      ])
      .then(() => {
        // TODO: Generate the logo
        
        return writeFile(
          join(__dirname, '..', 'dist', 'logo.svg')
        );
      })
      .then(() => console.log('Generated logo.svg'))
      .catch((err) => {
        console.log(err);
        console.log('Luffy! This isn\'t very Superrrrr!');
      });
  }

}

module.exports = CLI;
