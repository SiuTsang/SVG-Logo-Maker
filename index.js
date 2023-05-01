const { Circle, Triangle, Square } = require("./lib/shape")
const LOGO = require("./lib/logo");
const inquirer = require("inquirer");
const fs = require("fs");

inquirer.prompt([
  {
      type: "input",
      name: "text",
      message: "What do you want to display on Logo (up to 3 characters)",

  },
  {
      type: "input",
      name: "text_color",
      message: "Please enter color of the text on Logo",
      
  },
  {
      type: "list",
      name: "shape",
      message: "Please choose the shape of logo",
      choices: ["Circle", "Triangle", "Square"]
    },
    {
      type: "input",
      name: "shape_color",
      message: "Please decide the color of the logo",
      
  },
  
])

.then((response) => {
  let shape;
  if (response.shape.toLowerCase() === "circle") {
      shape = new Circle()
  }
  if (response.shape.toLowerCase() === "square") {
      shape = new Square()
  }
  if (response.shape.toLowerCase() === "triangle") {
      shape = new Triangle()
  }
  shape.setColor(response.shape_color)
  const logo = new LOGO()
  logo.setText(response.text, response.text_color)
  logo.setShape(shape)
  fs.writeFileSync("logo.svg", logo.render())
})