import { useState } from 'react'
import './Body.css'
function Body(props) {
  console.log(props.characters)
  return (
    <div className='Body'>
      <div className='grid'>
      {
        props.characters.map((characters) => (
          <div className='card'>
            {characters.image ? (
              <img src= {characters.image} alt={characters.name} />
             ) : (
               <div className='noImage'>Imagem indisponível </div>
            )
          }
          
            <h2>{characters.name}</h2>
            <p>
              <strong>Casa:</strong> {characters.house || "Desconhecida"} 
            </p>
          </div>))
      }
      </div>
    </div>
  );
}

export default Body