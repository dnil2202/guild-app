import React from 'react'

const AcceptButton = ({tittle,handleClick}) => {
  return (
    <button 
    className='w-full bg-sky-200 h-10 rounded-lg text-sky-600 hover:bg-sky-400 hover:text-sky-700'
    onClick={handleClick}
    >
      {tittle}
    </button>
  )
}

export default AcceptButton