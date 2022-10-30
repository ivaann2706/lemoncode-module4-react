import React from "react";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

import { CharacterEntity } from "./rickandmorty.vm";

interface Props {
  characters: CharacterEntity[];
}

export const RickAndMortyList = (props: Props) => {
  const { characters } = props;

  return (
    <>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell align="center">Avatar</TableCell>
            <TableCell align="center">Id</TableCell>
            <TableCell align="center">Name</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {characters.map((character: CharacterEntity) => (
            <TableRow key={character.id}>
              <TableCell align="center">
                <img className="avatar" src={character.image} />
              </TableCell>
              <TableCell align="center">{character.id}</TableCell>
              <TableCell align="center">{character.name}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
};
