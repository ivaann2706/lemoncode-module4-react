import * as am from "./api/character.api.model";
import * as vm from "./rickandmorty.vm";

export const mapCharacterEntityListToVM = (
  data: am.CharacterEntity[]
): vm.CharacterEntity[] => {
  return data.map(mapCharacterEntityToVM);
};

const mapCharacterEntityToVM = (
  character: am.CharacterEntity
): vm.CharacterEntity => {
  return {
    id: character.id,
    name: character.name,
    image: character.image,
  };
};
