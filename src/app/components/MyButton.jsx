import React from 'react'

const MyButton = ({ children }) => {
  return (
    <button className="bg-greenbean text-2xl rounded-lg p-3 mt-3 text-cinzamedio">{children}</button>
  )
}

export default MyButton