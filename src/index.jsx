import React, { useState } from 'react';
import tinycolor from 'tinycolor2';

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





