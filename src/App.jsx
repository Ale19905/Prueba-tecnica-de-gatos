import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [fact,setFact] = useState('factous')
  const [imageUrl, setImageUrl] = useState('') 
  const [word, setWord] = useState('') 
  const [newFact, setNewFact] = useState(false) 
 

  useEffect(() =>{
    fetch("https://catfact.ninja/fact")
    .then((response) => response.json())
    .then((result) => {
      setFact(result.fact)
      setWord( result.fact.split(" ")[0])
    })
    .catch((error) => console.error(error));

  },[newFact])
  
  const handleClick = () => {
    setNewFact(!newFact)
  }

  return (
    <>
      <button className='btn' 
      
   
      onClick={handleClick}>Get random cat fact</button>

      <p style={{
        color:'#fff',
        fontSize:'1.5rem',
        width:'500px'
      }}>{fact}</p>

      <img width={500} height={500}
       src={`https://cataas.com/cat/says/${word}`} alt="imagen de gato" />

      

    </>
  )
}

export default App
