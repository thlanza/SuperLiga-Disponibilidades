import React from 'react'
import UserCard from './UserCard'

const Format = ({ format, users}) => {
  return (
    <div className='mr-4'>
    <p className="text-bluegreen">{format}</p>
    <ul>
      {users.map((el, idx) => (
        <UserCard name={el} key={idx}/>
      ))}
    </ul>
    </div>
  )
}

export default Format