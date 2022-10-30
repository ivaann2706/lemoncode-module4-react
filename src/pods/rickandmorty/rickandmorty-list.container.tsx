import React from "react";

import { getCharacterVMCollection } from "./rickandmorty.repository";
import { CharacterEntity } from "./rickandmorty.vm";
import { RickAndMortyList } from "./rickandmorty-list.component";

export const RickAndMortyListContainer = () => {
  const [characters, setCharacters] = React.useState<CharacterEntity[]>([]);
  const [page, setPage] = React.useState(1);

  React.useEffect(() => {
    getCharacterVMCollection(page).then(setCharacters);
  }, [page]);

  return (
    <RickAndMortyList characters={characters} page={page} setPage={setPage} />
  );
};
