import React, { useEffect, useState } from "react";
import { Board } from "./Board";
import { Result } from "./Result";
import { GAME_STATUS, PLAYER_O, PLAYER_X, winningRules } from "../utilities/constants";
import { ResetGame } from "./ResetGame";

const checkWinner = (blockValues, setStrikeClass, setGameStatus) => {
  for(const {combo, strikeClass} of winningRules) {
    console.log(combo[0]);
    console.log(blockValues);
    const firstBlockValue = blockValues[combo[0]];
    const secondBlockValue = blockValues[combo[1]];
    const thirdBlockValue = blockValues[combo[2]];
    if(firstBlockValue !== null && firstBlockValue === secondBlockValue && secondBlockValue === thirdBlockValue) {
      setStrikeClass(strikeClass);
      console.log(setGameStatus);
      console.log(setStrikeClass);
      if(firstBlockValue === PLAYER_O) {
        setGameStatus(GAME_STATUS.O_WIN);
      } else {
        setGameStatus(GAME_STATUS.X_WIN);
      }
      return;
    }
  }
  const isGameDraw = blockValues.every(blockValue => blockValue !== null);
  if(isGameDraw) {
    setGameStatus(GAME_STATUS.DRAW);
  }
};

export const TicTacToe = () => {
  const [blockValues, setBlockValues] = useState(Array(9).fill(null));
  const [currentPlayer, setCurrentPlayer] = useState(PLAYER_X);
  const [gameStatus, setGameStatus] = useState(GAME_STATUS.IN_PROGRESS);
  const [strikeClass, setStrikeClass] = useState('');

  const handleBlockClick = (index) => {
    if (blockValues[index] !== null || gameStatus !== GAME_STATUS.IN_PROGRESS) {
      return;
    }
    const newBlockValues = [...blockValues];
    newBlockValues[index] = currentPlayer;
    setBlockValues(newBlockValues);
    if (currentPlayer === PLAYER_X) {
      setCurrentPlayer(PLAYER_O);
    } else {
      setCurrentPlayer(PLAYER_X);
    }
  };

  const handleReset = () => {
    setCurrentPlayer(PLAYER_X);
    setGameStatus(GAME_STATUS.IN_PROGRESS);
    setBlockValues(Array(9).fill(null));
    setStrikeClass('');
  }

  useEffect(() => {
    checkWinner(blockValues, setStrikeClass, setGameStatus);

  }, [blockValues]);

  return (
    <>
      <h1>Tic Tac Toe</h1>
      <Board blockValues={blockValues} handleBlockClick={handleBlockClick} strikeClass={strikeClass}/>
      {gameStatus !== GAME_STATUS.IN_PROGRESS ? <Result gameStatus={gameStatus}/> : null}
      {gameStatus !== GAME_STATUS.IN_PROGRESS ? <ResetGame handleReset={handleReset}/> : null}
    </>
  );
};
