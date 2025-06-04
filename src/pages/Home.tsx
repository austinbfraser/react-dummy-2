// import { POKEMON_API_POKEMON_URL, POKEMON_BASE_API_URL } from "../constants";
import usePokemon from '../hooks/usePokemon';
import PokemonList from '../components/PokemonList';

const Home = () => {
  const { pokemon, hasMorePokemon, fetchNextPage } = usePokemon();

  return (
    <>
    <div className="pokemonList">
      <PokemonList pokemon={pokemon}></PokemonList>
    </div>
    {hasMorePokemon ? (<div><button onClick={fetchNextPage}>Load more Pokemon...</button></div>) : null}
    </>
  );
};
export default Home;
