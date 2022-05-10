import React from 'react'
import Header from './Header'
import PokeCard from './PokeCard'
import Button from 'react-bootstrap/Button'

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {

  const [id, setId] = React.useState({
    startId: 1,
    endId: 15
  })
   

const pokeId = () => {
 let pokemon = []
  for (let i = id.startId; i <= id.endId; i++ ) {
    
     pokemon.push(<PokeCard id={i} />)
    
  }
  return pokemon
}

function updateGen(start, end) {
  setId({startId: start, endId: end})
}
 
    return (
    <div className="App">
      <Header />
      <h4>Click the cards to see more detail!</h4>
      <div className="generation-btns">
        <Button className='button' onClick={() => updateGen(1,151)} >Gen 1</Button>
        <Button className='button' onClick={() => updateGen(152,251)} >Gen 2</Button>
        <Button className='button' onClick={() => updateGen(252,386)} >Gen 3</Button>
        <Button className='button' onClick={() => updateGen(387,493)} >Gen 4</Button>
        <Button className='button' onClick={() => updateGen(494,649)} >Gen 5</Button>
      </div>
      <div className="pokemonCards">
        {pokeId()}
      </div>
  
        </div>
  );
    
}

export default App;