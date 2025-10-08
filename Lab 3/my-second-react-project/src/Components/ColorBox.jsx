// export default function ColorBox({ colors }) {
//   return (
//     <div className="ColorBoxesContainer">
//       {colors.map((color, index) => (
//         <div
//           className="ColorBox"
//           key={index}
//           style={{ backgroundColor: color }}
//         />
//       ))}
//     </div>
//   );
// }
export default function ColorBox({ color }) {
  return (
    <div
      className="ColorBox"
      style={{ backgroundColor: color }}
    />
  );
}
