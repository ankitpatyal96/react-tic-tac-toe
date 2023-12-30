import React from "react";
import { Board } from "./Board";
import { Result } from "./Result";

export const TicTacToe = () => {
  return (
    <>
      <h1>Tic Tac Toe</h1>
      <Board/>
      <Result/>
    </>
  );
};
