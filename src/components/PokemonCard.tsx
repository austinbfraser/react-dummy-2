import { IndexedPokemon } from '../interfaces/pokemon.interface';

interface PokemonCardProps {
  pokemon: IndexedPokemon;
}

const PokemonCard = ({ pokemon }: PokemonCardProps) => {
  return <div className="pokemonCard">{pokemon.name}</div>;
};

export default PokemonCard;
