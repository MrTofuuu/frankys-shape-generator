// Importing NodeJS libraries
import { fileURLToPath } from 'url';
import { join, dirname } from 'path';
import { writeFile } from 'fs/promises';

// Importing NPM libraries
import inquirer from 'inquirer';

// Finding filepath and directory names
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

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
          validate: (input) => input.length > 3 ? '3 character maximum input' : true
        },
        {
          type: 'input',
          name: 'textColor',
          message: 'What text color would you like to use?'
        },
        {
          type: 'list',
          name: 'shape',
          message: 'What shape would you like to use?',
          choices: ['Square','Circle','Triangle']
        },
        {
          type: 'input',
          name: 'fillColor',
          message: 'What fill color would you like to use?'
        }
      ])
      .then((data) => {
        // TODO: Generate the logo file
        // console.log(__dirname)
        return writeFile(
          join( __dirname,'..','dist', 'logo.svg'), data.shape
        );
      })
      .then(() => console.log('Generated logo.svg'))
      .catch((err) => {
        console.log(err);
        console.log('Luffy! This isn\'t very Superrrrr!');
      });
  }

}

export default CLI;
