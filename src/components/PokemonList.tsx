import { ListPokemon } from '../interfaces/pokemon.interface';
import PokemonCard from './PokemonCard';

interface PokemonListProps {
  pokemon: ListPokemon[];
}

const PokemonList = ({ pokemon }: PokemonListProps) => {
  console.log(pokemon);
  return (
    <>
      {pokemon.length > 0
        ? pokemon.map((p) => {
            return <PokemonCard key={p.name} pokemon={p}/>;
          })
        : null}
    </>
  );
};

export default PokemonList;
