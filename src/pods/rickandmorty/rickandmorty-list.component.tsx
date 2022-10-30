import React from 'react';

import { Link } from 'react-router-dom';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Pagination from '@mui/material/Pagination';

import { CharacterEntity } from './rickandmorty.vm';
import { routes } from '@/core/router/routes';

interface Props {
    characters: CharacterEntity[];
    page: number;
    setPage: (value: number) => void;
}

export const RickAndMortyList = (props: Props) => {
    const { characters, page, setPage } = props;

    const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
        setPage(value);
    };

    return (
        <>
            <Pagination count={42} page={page} onChange={handleChange} />
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
                            <TableCell align="center">
                                <Link to={routes.rickandmortyDetail(`${character.id}`)}>{character.name}</Link>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
            <Pagination count={42} page={page} onChange={handleChange} />
        </>
    );
};
