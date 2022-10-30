import React from "react";

export const RickAndMortyListContainer = () => {
  React.useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character?page=1`)
      .then((response) => response.json())
      .then(console.log);
  }, []);

  return <>Este es el container rickandmorty</>;
};
