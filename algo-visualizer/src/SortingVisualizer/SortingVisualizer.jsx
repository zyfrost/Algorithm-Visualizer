import React, { useState, useEffect } from "react";
import "./SortingVisualizer.css";

function SortingVisualizer() {
  const [array, setArray] = useState([]);

  useEffect(() => {
    resetArray();
  }, []);

  const resetArray = () => {
    const newArray = [];
    for (let i = 0; i < 100; i++) {
      newArray.push(randomNumberGeneration(5, 700));
    }
    setArray(newArray);
  };

  return (
    <>
      <div className="array-container">
        {array.map((value, idx) => (
          <div 
            className="array-bar" 
            key={idx} 
            style={{height: `${value}px`}}
            title={`Value: ${value}`}
          >
          </div>
        ))}
      </div>
    </>
  );
}
// class SortingVisualizer1 extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       array: [],
//     };
//   }
//   componentDidMount() {
//     this.resetArray();
//   }

//   resetArray() {
//     const array = [];
//     for (let i = 0; i < 100; i++) {
//       array.push(randomNumberGeneration(5, 1000));
//     }
//     this.setState({ array });
//   }

//   render() {
//     const { array } = this.state;
//     return (
//       <>
//         {array.map((value, idx) => (
//           <div className="array-map" key={idx}>
//             {value}
//           </div>
//         ))}
//       </>
//     );
//   }
// }

function randomNumberGeneration(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

export default SortingVisualizer;
