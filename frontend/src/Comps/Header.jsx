import React from 'react'

export default function Header({title}) {
  return (
    <header className={`text-7xl font-bold m-5 drop-shadow-2xl font-serif p-3 bg-linear-150 from-red-400 to-yellow-300 rounded-2xl`} >{title}</header>
  )
}
