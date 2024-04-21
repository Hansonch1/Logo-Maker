const { Circle, Triangle, Square } = require('./shapes');

// Group tests for all shape classes under a single describe block
describe('Shape Classes', () => {

    // Sub-group for tests specific to the Circle class
    describe('Circle', () => {
        // Test case to verify if the Circle class renders the correct SVG string
        test('should render a circle SVG string with the correct color', () => {
            const color = 'red';  // Color for testing
            const shape = new Circle(color);  // Creating a new instance of Circle with the color
            // Check if the rendered SVG matches expected output
            expect(shape.render()).toEqual('<circle cx="150" cy="115" r="80" fill="red" />');
        });
    });

    // Sub-group for tests specific to the Triangle class
    describe('Triangle', () => {
        // Test case to verify if the Triangle class renders the correct SVG string
        test('should render a triangle SVG string with the correct color', () => {
            const color = 'blue';  // Color for testing
            const shape = new Triangle(color);  // Creating a new instance of Triangle with the color
            // Check if the rendered SVG matches expected output
            expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
        });
    });

    // Sub-group for tests specific to the Square class
    describe('Square', () => {
        // Test case to verify if the Square class renders the correct SVG string
        test('should render a square SVG string with the correct color', () => {
            const color = 'green';  // Color for testing
            const shape = new Square(color);  // Creating a new instance of Square with the color
            // Check if the rendered SVG matches expected output
            expect(shape.render()).toEqual('<rect x="73" y="40" width="160" height="160" fill="green" />');
        });
    });

});
