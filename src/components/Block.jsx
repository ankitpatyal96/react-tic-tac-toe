import React from 'react'

export const Block = ({value, onBlockClick}) => {
  return (
    <div className='block' onClick={onBlockClick}>{value}</div>
  )
}
