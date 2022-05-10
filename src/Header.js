import pokemonImage from './pokemon.png'

function Header() {
  
  return (
    <div className="Header">
      <img src={pokemonImage} className="title_img" alt="pokemon title graphic"></img>
      
   
    </div>
  );
}

export default Header;