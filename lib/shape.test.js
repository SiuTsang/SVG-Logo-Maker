const { Circle, Triangle, Square } = require("../lib/shape.js");

describe('Circle', () => {
  test('renders correctly', () => {
    const shape = new Circle();
    var color =('green')
    shape.setColor(color);
    expect(shape.render()).toEqual(`<circle cx="150" cy="100" r="80" fill="green"/>`);
  });
});

describe('Square', () => {
    test('renders correctly', () => {
      const shape = new Square();
      var color =('yellow')
      shape.setColor(color);
      expect(shape.render()).toEqual(`<rect x="90" y="40" width="130" height="150" fill="yellow"/>`);
    });
  });

describe('Triangle', () => {
    test('renders correctly', () => {
      const shape = new Triangle();
      var color =('purple')
      shape.setColor(color);
      expect(shape.render()).toEqual(`<polygon points="150, 18 244, 182 56, 182" fill="purple"/>`);
    });    
  });