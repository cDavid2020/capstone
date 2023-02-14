/* create an HTML button that when clicked, generates 4 analogous colors and
displays them in a container: */ /* Here's an explanation of the changes made: I
added an HTML button with the text "Generate Colors" and the id
"generate-colors-btn" I added a container div with class 'color-container' to
hold the generated color boxes. I added some basic CSS to style the button and
color boxes */

// import tinycolor from "tinycolor2";

// blocker - how to generate a random color without asking the user for a color. Create an onClick event listener to a button that generates random color sets.

import tinycolor from "tinycolor2";
const color = tinycolor("red");

/// ///////////

function generateRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }

  return color;
}

function generateAnalogousColors(color) {
  const hsl = tinycolor(color).toHsl();
  const colors = [];
  for (let i = -1; i <= 1; i++) {
    const newColor = tinycolor({
      h: (hsl.h + 30 * i) % 360,
      s: hsl.s,
      l: hsl.l,
    });
    colors.push(newColor.toHexString());
  }

  return colors;
}

const randomColor = generateRandomColor();
const analogousColors = generateAnalogousColors(randomColor);
console.log(analogousColors);
