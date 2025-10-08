import { useState } from "react";

export default function ColorBox({ colors }) {
  const [boxColors, setBoxColors] = useState(colors);

  return (
    <div className="ColorBoxesContainer">
      {boxColors.map((color, index) => (
        <div
          className="ColorBox"
          key={index}
          style={{ backgroundColor: color }}
          onClick={() => {
            const newColors = [...boxColors];
            newColors[index] = '#' + Math.floor(Math.random() * 16777215).toString(16);
            setBoxColors(newColors);
          }}
        />
      ))}
    </div>
  );
}