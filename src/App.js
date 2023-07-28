import { useState } from "react";
const Square = ({value,SquareClick}) => { 
  
  // function handleClick() {
  //   console.log("clicked !");
  // }
  return (
    <button className="square" onClick={SquareClick}>{value}</button>
  );

};
const Board = () => { 
  const [squares, setSquares] = useState(Array(9).fill(null));
  const HandleClick = () => {
    const nextSquares = squares.slice();
    nextSquares[0] = "x";
    setSquares(nextSquares);
  }
  return (
    <>
      <div className="board-row">
        <Square value={squares[0]} SquareClick={HandleClick} />
        <Square value={squares[1]} SquareClick={HandleClick} />
        <Square value={squares[2]} SquareClick={HandleClick} />
        
        

      </div>
      <div className="board-row">
        <Square value={squares[3]} SquareClick={HandleClick} />
        <Square value={squares[4]} SquareClick={HandleClick} />
        <Square value={squares[5]} SquareClick={HandleClick} /> 

      </div>
      <div className="board-row">
        <Square value={squares[6]} SquareClick={HandleClick} />
        <Square value={squares[7]} SquareClick={HandleClick} />
        <Square value={squares[8]} SquareClick={HandleClick} />

      </div>

    </>
  ); 
};
export default Board;
