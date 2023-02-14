/* 
This is a JavaScript code snippet that uses the tinycolor2 library to generate and manipulate colors. The generateRandomColor function creates a random hex color code by concatenating a "#" symbol with a randomly generated string of 6 characters chosen from the letters "0123456789ABCDEF". The generateAnalogousColors function takes in a color and converts it to HSL (hue, saturation, lightness) format using the tinycolor library. It then generates an array of 3 new colors by incrementing or decrementing the hue value by 30 degrees, while keeping the saturation and lightness values the same. The resulting array is then returned. The code also includes an HTML button that, when clicked, re-generates a random color and its analogous colors and logs the result to the console.

 */

import React, { useState } from "react";
import tinycolor from "tinycolor2";
import { faker } from "@faker-js/faker";

const createFaker = () => {
id: faker.random.uuid(),
avatar: faker.internet.avatar(),
fullName: faker.name.fullName(),
username: faker.internet.userName(),
};

console.log(createFakeUser);

/////////////////


};
function GenerateColors() {
  const [colors, setColors] = useState([]);

  function generateRandomColor() {
    let letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  function generateAnalogousColors(color) {
    let hsl = tinycolor(color).toHsl();
    let colors = [];
    for (let i = -1; i <= 1; i++) {
      let newColor = tinycolor({h: (hsl.h + 30 * i) % 360, s: hsl.s, l: hsl.l});
      colors.push(newColor.toHexString());
    }
    return colors;
  }

  function handleClick() {
    let randomColor = generateRandomColor();
    let analogousColors = generateAnalogousColors(randomColor);
    setColors(analogousColors);
  }

/* 
Wrap an onClick event handler button in a div that calls the generateRandomColor function and assigns the returned value to a state variable.
*/

  return (
    <div>
      <button onClick={handleClick}>Generate Colors</button>
      <div className="color-container">
        {colors.map((color, index) => (
          <div key={index} className="color-box" style={{ backgroundColor: color }} />
        ))}
      </div>
    </div>
  );
}

export default GenerateColors;





