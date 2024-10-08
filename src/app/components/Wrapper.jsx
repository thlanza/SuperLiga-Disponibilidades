import React from 'react'

const Wrapper = ({ children }) => {
  return (
    <main className="bg-minty h-screen flex flex-col items-center justify-center">
        {children}
    </main>
  )
}

export default Wrapper