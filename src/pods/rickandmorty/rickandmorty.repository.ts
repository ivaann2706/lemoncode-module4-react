import { CharacterEntity } from "./rickandmorty.vm";
import { mapCharacterEntityListToVM } from "./rickandmorty.mappers";
import { getCharacterCollection } from "./api/rickandmorty.api";

export const getCharacterVMCollection = (
  page: number
): Promise<CharacterEntity[]> => {
  return getCharacterCollection(page).then(mapCharacterEntityListToVM);
};
