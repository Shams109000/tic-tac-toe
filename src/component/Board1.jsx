import React, { useState } from "react";
import Square1 from "./Square1";
import "./tic.css";
function Board1() {
  const arr = Array(9).fill(null);
  const [state, setState] = useState(arr);
  const [xTurn, setXTurn] = useState(true);
  function handleClick(index) {
    if (state[index] !== null) {
      return;
    }
    const copy = [...state];
    copy[index] = xTurn ? "X" : "O";
    setState(copy);
    setXTurn(!xTurn);
  }
  const checkWinner = () => {
    const res = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let arr of res) {
      let [a, b, c] = arr;
      if (state[a] != null && state[a] == state[b] && state[a] == state[c]) {
        return state[a];
      }
      
    }
  };
  function reset(){
    setState(Array(9).fill(null))
  }
  const winner = checkWinner();
  return (
    <div className="container">
      {winner ? (
        <div>
          <h1>{winner } is winner</h1>
          <button onClick={reset}>play again</button>
        </div>
      ) : (
        <div>
          {xTurn ? "X turn" : "O turn"}
          <div className="container-row">
            <Square1 onClick={() => handleClick(0)} value={state[0]}></Square1>
            <Square1 onClick={() => handleClick(1)} value={state[1]}></Square1>
            <Square1 onClick={() => handleClick(2)} value={state[2]}></Square1>
          </div>
          <div className="container-row">
            <Square1 onClick={() => handleClick(3)} value={state[3]}></Square1>
            <Square1 onClick={() => handleClick(4)} value={state[4]}></Square1>
            <Square1 onClick={() => handleClick(5)} value={state[5]}></Square1>
          </div>
          <div className="container-row">
            <Square1 onClick={() => handleClick(6)} value={state[6]}></Square1>
            <Square1 onClick={() => handleClick(7)} value={state[7]}></Square1>
            <Square1 onClick={() => handleClick(8)} value={state[8]}></Square1>
          </div>
        </div>
      )}
    </div>
  );
}

export default Board1;
