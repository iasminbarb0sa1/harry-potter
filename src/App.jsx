import { useEffect, useState } from 'react'
import './App.css'
import Body from './components/Body'
import Header from './components/Header'

function App() {
  const[characters, setCharactrs] = useState([])
  useEffect (() => {
    fetch ('https://hp-api.onrender.com/api/characters')
    .then((res) => res.json())
    .then (setCharactrs)
    .catch((err) => console.error('Erro na API:', err))
  },[])
  return (
    <div className='App'>
      <Header />
      <Body characters ={characters} />

    </div>
  )
}

export default App
