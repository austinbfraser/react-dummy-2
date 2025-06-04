import { useState, useEffect } from 'react';
import { httpClient } from '../api/httpClient';
import {
  IndexedPokemon,
  PokemonListResponse,
  ListPokemon,
} from '../interfaces/pokemon.interface';
import { POKEMON_API_POKEMON_URL, POKEMON_IMAGES_BASE_URL } from '../constants';

const usePokemon = () => {
  const [pokemon, setPokemon] = useState<ListPokemon[]>([]);
  const [nextUrl, setNextUrl] = useState<string | null>(
    POKEMON_API_POKEMON_URL
  );

  useEffect(() => {
    fetchPokemon();
  }, []);

  const fetchPokemon = async () => {
    if (nextUrl) {
      try {
        const result = await httpClient.get<PokemonListResponse>(nextUrl);
        if (result?.data?.results) {
          function indexedPokemonToListPokemon(input: IndexedPokemon) {
            const newListPokemon: ListPokemon = {
              name: input.name,
              url: input.url,
              image: '',
              pokedexNumber: -1,
            };
            const pokedexNumber = Number(
              input.url
                .replace('https://pokeapi.co/api/v2/pokemon/', '')
                .replace('/', '')
            );
            const newImage = `${POKEMON_IMAGES_BASE_URL}/${pokedexNumber}.png`;
            newListPokemon.image = newImage;
            newListPokemon.pokedexNumber = pokedexNumber;
            return newListPokemon;
          }
          setPokemon((prev) => [
            ...prev,
            ...result.data.results.map(indexedPokemonToListPokemon),
          ]);

          setNextUrl(result.data.next);
        }
      } catch (err) {
        console.error(err);
      }
    }
  };

  return {
    pokemon,
    fetchNextPage: fetchPokemon,
    hasMorePokemon: !!nextUrl,
  };
};

export default usePokemon;
