import '../styles/PokemonList.css';

function PokemonList({ list }) {
  return (
    <ul>
      {list.map((pokemon) => {
        return (
          <li key={pokemon.name}>
            <img src={pokemon.sprites.front_default} alt={pokemon} />
            <p>{pokemon.name}</p>
          </li>
        );
      })}
    </ul>
  );
}

export default PokemonList;
