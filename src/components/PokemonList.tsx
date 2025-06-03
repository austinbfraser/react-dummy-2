import React from 'react';
import { IndexedPokemon } from '../interfaces/pokemon.interface';
import PokemonCard from './PokemonCard';

interface PokemonListProps {
  pokemon: IndexedPokemon[];
}

const PokemonList = ({ pokemon }: PokemonListProps) => {
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
