import React from 'react'

export const ResetGame = ({handleReset}) => {
  return (
    <button className='reset-btn' onClick={() => handleReset()}>Play Again</button>
  )
}
