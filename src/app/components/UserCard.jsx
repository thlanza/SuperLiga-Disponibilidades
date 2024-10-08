import React from 'react'

const UserCard = ({ name }) => {
  return (
    <li className="mb-2 bg-fadedred p-3 border-2 border-white rounded-lg text-oatmeal text-lg">{name}</li>
  )
}

export default UserCard