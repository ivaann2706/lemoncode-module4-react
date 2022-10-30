import React from "react";

import { getCharacterVMCollection } from "./rickandmorty.repository";
import { CharacterEntity } from "./rickandmorty.vm";
import { RickAndMortyList } from "./rickandmorty-list.component";

export const RickAndMortyListContainer = () => {
  const [characters, setCharacters] = React.useState<CharacterEntity[]>([]);

  React.useEffect(() => {
    getCharacterVMCollection(1).then(setCharacters);
  }, []);

  return <RickAndMortyList characters={characters} />;
};
