import { IndexedPokemon } from '../interfaces/pokemon.interface';

interface PokemonCardProps {
  pokemon: IndexedPokemon;
}

const PokemonCard = ({ pokemon }: PokemonCardProps) => {
  return <div>{pokemon.name}</div>;
};

export default PokemonCard;
