import { ListPokemon } from '../interfaces/pokemon.interface';

interface PokemonCardProps {
  pokemon: ListPokemon;
}

const PokemonCard = ({ pokemon }: PokemonCardProps) => {
  return (
    <div className="pokemonCard">
      {pokemon.name}
      <div>
        <img className="pokemonImage" src={pokemon.image}></img>
      </div>
    </div>
  );
};

export default PokemonCard;
