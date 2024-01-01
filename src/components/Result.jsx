import React from "react";
import { GAME_STATUS } from "../utilities/constants";

export const Result = ({ gameStatus }) => {
  let value = null;
  if (gameStatus === GAME_STATUS.DRAW) {
    value = "DRAW";
  } else if (gameStatus === GAME_STATUS.X_WIN) {
    value = "X WIN";
  } else if (gameStatus === GAME_STATUS.O_WIN) {
    value = "O WIN";
  }
  return <div className="result">{value}</div>;
};
