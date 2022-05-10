
import React from 'react'
import { nanoid } from 'nanoid'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'

import bugIcon from './icons/bug.svg'
import darkIcon from './icons/dark.svg'
import dragonIcon from './icons/dragon.svg'
import electricIcon from './icons/electric.svg'
import fairyIcon from './icons/fairy.svg'
import fightingIcon from './icons/fighting.svg'
import fireIcon from './icons/fire.svg'
import flyingIcon from './icons/flying.svg'
import ghostIcon from './icons/ghost.svg'
import grassIcon from './icons/grass.svg'
import groundIcon from './icons/ground.svg'
import iceIcon from './icons/ice.svg'
import normalIcon from './icons/normal.svg'
import poisonIcon from './icons/poison.svg'
import psychicIcon from './icons/psychic.svg'
import rockIcon from './icons/rock.svg'
import steelIcon from './icons/steel.svg'
import waterIcon from './icons/water.svg'


export default function PokeCard(props) {
  

  const [show, setShow] = React.useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

 
  console.log(props)
  const [pokemonData, setPokemonData] = React.useState({})
  const [loading, setLoading] = React.useState(true)
  

  
  React.useEffect(() => {
    const getPokemon = async (id) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`
    const res = await fetch(url)
    const data = await res.json()
  
    setPokemonData(data)
    setLoading(false)

  }
  getPokemon(props.id)
     
    }, [props.id])  

  if (loading) return <h1>LOADING....</h1>
  

console.log(pokemonData)
         
const pokemonIcons = {
  bug: bugIcon,
  dark: darkIcon,
  dragon: dragonIcon,
  electric: electricIcon,
  fairy: fairyIcon,
  fighting: fightingIcon,
  fire: fireIcon,
  flying: flyingIcon,
  ghost: ghostIcon,  
  grass: grassIcon,
  ground: groundIcon,
  ice: iceIcon,
  normal: normalIcon,
  poison: poisonIcon,
  psychic: psychicIcon,
  rock: rockIcon,
  steel: steelIcon,
  water: waterIcon
}  



const types = pokemonData.types.map(item => {
    return item.type.name
})

   let type1 = types[0]
   let type2 = ""
   if (types[1]) {
      type2 = types[1]
   } else {
      type2 = types
   }

    
  const name = pokemonData.name[0].toUpperCase() + pokemonData.name.slice(1)

   
   var ability1 = "NA"
   var ability2 = "NA"
   var ability3 = "NA"
     //keeps page from crashing if there is less ability types than expected
   if (pokemonData.abilities.length === 1) {
       ability1 = pokemonData.abilities[0].ability.name[0].toUpperCase() + pokemonData.abilities[0].ability.name.slice(1)     
     } else if (pokemonData.abilities.length === 2) {
       ability1 = pokemonData.abilities[0].ability.name[0].toUpperCase() + pokemonData.abilities[0].ability.name.slice(1) 
       ability2 = pokemonData.abilities[1].ability.name[0].toUpperCase() + pokemonData.abilities[1].ability.name.slice(1)       
     } else if (pokemonData.abilities.length === 3) {
       ability1 = pokemonData.abilities[0].ability.name[0].toUpperCase() + pokemonData.abilities[0].ability.name.slice(1) 
       ability2 = pokemonData.abilities[1].ability.name[0].toUpperCase() + pokemonData.abilities[1].ability.name.slice(1) 
       ability3 = pokemonData.abilities[2].ability.name[0].toUpperCase() + pokemonData.abilities[2].ability.name.slice(1)   
     }
   
 
      return (
        
        <div className="PokeCard" key={nanoid()} id={pokemonData.name} onClick={handleShow} >
          <div className="pokemon" >
          <div className="strangeblueelement" ></div>
            <div id={pokemonData.name} className="pokemon-wrapper">
              
              <div className="img-container">
                <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemonData.id}.svg`} alt={`${name}`} />
              </div>
              <div className="info">            
                <h3 className="name">{name}</h3>
              
               <img className="type-icon" src={pokemonIcons[type1]} alt={`${type1} type`} />
               {(type1 == type2) ? <></> : <img className="type-icon" src={pokemonIcons[type2]} alt={`${type1} type`} /> }

              </div>  
              <span className="number">#{pokemonData.id}</span>      
            </div>
               
          </div>
        

      <Modal show={show} onHide={handleClose} centered dialogClassName="Modal">
        <Modal.Header >
          <Modal.Title >
            <div className="modal-title">
              
              <div className='modal-img-name'>
                <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemonData.id}.svg`} alt={`${name}`} />
                <div className="modal-name">
                  {name}
                  <div className="modal-icons">
                    <img className="type-icon" src={pokemonIcons[type1]} alt={`${type1} type`} />
                        {(type1 == type2) ? <></> : <img className="type-icon" src={pokemonIcons[type2]} alt={`${type1} type`} /> }
                  </div>
                </div>
              </div> 
                <div>
                  <span className="number modal-number">#{pokemonData.id}</span>
                </div>
                           
            </div>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="abilities">
            <div>
              Ability 1: {ability1}
            </div>
            <div>
              {(ability2 !== "NA") ? `Ability 2: ${ability2}` : ``}
            </div>
            <div>
              {(ability3 !== "NA") ? `Ability 3: ${ability3}` : ``}
            </div>
          </div>
          <div>
            <div className="stats">
              <p>Hit Points: </p>
              {pokemonData.stats[0].base_stat}
            </div>
            <div className="stats">
              <p>Attack: </p>
              {pokemonData.stats[1].base_stat}
            </div>
            <div className="stats">
              <p>Defense: </p>
              {pokemonData.stats[2].base_stat}
            </div>
            <div className="stats">
              <p>Special Attack:  </p>
              {pokemonData.stats[3].base_stat}
            </div>
            <div className="stats">
              <p>Special Defense: </p>
              {pokemonData.stats[4].base_stat}
            </div>
            <div className="stats">
              <p>Speed: </p>
              {pokemonData.stats[5].base_stat}
            </div>
          </div>   
        
        </Modal.Body>
        <Modal.Footer>
        <p><em>Press Esc to close. Button under construction! </em></p>
          <Button variant="primary" onClick={handleClose}>
            Close
          </Button>
          
        </Modal.Footer>
      </Modal>    
  </div>


      );
    
}


//fix close button
//adjust icon colors

