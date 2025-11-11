import '../styles/PokemonList.css';
import capitalizeFirstLetter from '../helpers/capitalizeFirstLetter';
function PokemonList({ list }) {
  return (
    <ul className='pokemon-list'>
      {list.map((pokemon) => {
        return (
          <li key={pokemon.name} className='pokemon-card'>
            <img src={pokemon.sprites.front_default} alt={pokemon.name} />
            <div className='pokemon-name'>
              <p>{capitalizeFirstLetter(pokemon.name)}</p>
            </div>
          </li>
        );
      })}
    </ul>
  );
}

export default PokemonList;
