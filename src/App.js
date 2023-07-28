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
  const [xIsNext, setXIsNext] = useState(true);
  const [squares, setSquares] = useState(Array(9).fill(null));
  const HandleClick = (i) => {
    const nextSquares = squares.slice();
    if (xIsNext) {
      nextSquares[i] = "x";
    }
    else {
          nextSquares[i] = "o";
        }
    setSquares(nextSquares);
    setXIsNext(!xIsNext);
  }
  return (
    <>
      <div className="board-row">
        <Square value={squares[0]} SquareClick={()=>HandleClick(0)} />
        <Square value={squares[1]} SquareClick={()=>HandleClick(1)} />
        <Square value={squares[2]} SquareClick={()=>HandleClick(2)} />
        
        

      </div>
      <div className="board-row">
        <Square value={squares[3]} SquareClick={()=>HandleClick(3)} />
        <Square value={squares[4]} SquareClick={()=>HandleClick(4)} />
        <Square value={squares[5]} SquareClick={()=>HandleClick(5)} /> 

      </div>
      <div className="board-row">
        <Square value={squares[6]} SquareClick={()=>HandleClick(6)} />
        <Square value={squares[7]} SquareClick={()=>HandleClick(7)} />
        <Square value={squares[8]} SquareClick={()=>HandleClick(8)} />

      </div>

    </>
  ); 
};
export default Board;
