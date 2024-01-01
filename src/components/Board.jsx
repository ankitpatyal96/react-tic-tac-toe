import React from 'react'
import { Block } from './Block'
import { LineStrike } from './LineStrike'

export const Board = ({blockValues, handleBlockClick, strikeClass}) => {
  return (
    <div className="board">
        <Block value={blockValues[0]} onBlockClick={e => handleBlockClick(0)}/>
        <Block value={blockValues[1]} onBlockClick={e => handleBlockClick(1)}/>
        <Block value={blockValues[2]} onBlockClick={e => handleBlockClick(2)}/>
        <Block value={blockValues[3]} onBlockClick={e => handleBlockClick(3)}/>
        <Block value={blockValues[4]} onBlockClick={e => handleBlockClick(4)}/>
        <Block value={blockValues[5]} onBlockClick={e => handleBlockClick(5)}/>
        <Block value={blockValues[6]} onBlockClick={e => handleBlockClick(6)}/>
        <Block value={blockValues[7]} onBlockClick={e => handleBlockClick(7)}/>
        <Block value={blockValues[8]} onBlockClick={e => handleBlockClick(8)}/>
        <LineStrike strikeClass={strikeClass}/>
    </div>
  )
}
