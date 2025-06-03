import { useState, useEffect } from 'react';
import { httpClient } from '../api/httpClient';
import { IndexedPokemon, PokemonListResponse } from '../interfaces/pokemon.interface';
import { POKEMON_API_POKEMON_URL } from '../constants';

const usePokemon = () => {
  const [pokemon, setPokemon] = useState<IndexedPokemon[]>([]);
  const [nextUrl, setNextUrl] = useState<string | null>(POKEMON_API_POKEMON_URL);

  useEffect(() => {
    fetchPokemon();
  }, [])

  const fetchPokemon = async () => {
    if (nextUrl) {
      const result = await httpClient.get<PokemonListResponse>(nextUrl);
      // console.log(result);
      if (result?.data?.results) {
        setPokemon(result.data.results);
      }
    }
  }

  return pokemon;
};

export default usePokemon;
