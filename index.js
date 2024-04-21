const inquirer = require('inquirer');
const fs = require('fs');
const { Circle, Triangle, Square } = require('./lib/shapes');

async function generateLogo() {
    const questions = [
        {
            type: 'input',
            name: 'text',
            message: 'Enter up to three characters for the logo:',
            validate: input => input.length <= 3 ? true : 'Only up to three characters allowed.'
        },
        {
            type: 'input',
            name: 'textColor',
            message: 'Enter the color for the text (name or hex code):',
            default: 'black'
        },
        {
            type: 'list',
            name: 'shape',
            message: 'Choose a shape for the logo:',
            choices: ['circle', 'triangle', 'square']
        },
        {
            type: 'input',
            name: 'shapeColor',
            message: 'Enter the color for the shape (name or hex code):',
            default: 'gray'
        }
    ];

    // Prompt user to enter their preferences
    const answers = await inquirer.prompt(questions);
    const { text, textColor, shape, shapeColor } = answers;

    // Create the shape based on user input
    let shapeInstance;
    switch (shape.toLowerCase()) {
        case 'circle':
            shapeInstance = new Circle(shapeColor);
            break;
        case 'triangle':
            shapeInstance = new Triangle(shapeColor);
            break;
        case 'square':
            shapeInstance = new Square(shapeColor);
            break;
        default:
            console.error('Invalid shape selected');
            return;
    }

    // Generate the SVG content
    const svgContent = shapeInstance.render();
    const svgWithText = addTextToSvg(svgContent, text, textColor);

    // Write the SVG to a file
    fs.writeFile('logo.svg', svgWithText, err => {
        if (err) {
            console.error('Failed to write SVG file:', err);
        } else {
            console.log('Generated logo.svg');
        }
    });
}

function addTextToSvg(svg, text, color) {
    const groupStartTag = `<g>`;
    const groupEndTag = `</g>`;
    const textSvg = `<text x="150" y="130" text-anchor="middle" font-size="40" fill="${color}">${text}</text>`;
    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">${groupStartTag}${svg}${textSvg}${groupEndTag}</svg>`;
}


generateLogo();
