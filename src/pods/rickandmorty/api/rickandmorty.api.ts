import { CharacterEntity } from "./character.api.model";

export const getCharacterCollection = (
  page: number
): Promise<CharacterEntity[]> => {
  return fetch(`https://rickandmortyapi.com/api/character?page=${page}`).then(
    (response) => response.json().then((data) => data.results)
  );
};
