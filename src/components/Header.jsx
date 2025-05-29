import React from 'react'
import './Header.css'

function Header() {
  const [searchTerm, setSearchTerm] = React.useState('')
  return (
    <div className='Header'>
      <h1>Buscador de personagens - Harry Potter</h1>

      <input type="text"
        placeholder="DIgite o nome..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className='search'
      />
    </div>
  )
}

export default Header