import React from 'react';

import { Link, useParams } from 'react-router-dom';

import { AppLayout } from '@/layouts/app.layout';

interface CharacterDetailEntity {
    id: number;
    name: string;
    status: string;
    species: string;
    type: string;
    gender: string;
    image: string;
}

export const RickAndMortyDetailScene = () => {
    const [character, setCharacter] = React.useState<CharacterDetailEntity>({
        id: 0,
        name: '',
        status: '',
        species: '',
        type: '',
        gender: '',
        image: '',
    });

    const { id } = useParams();

    React.useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/character/${id}`)
            .then((response) => response.json())
            .then(setCharacter);
    }, [id]);
    return character ? (
        <AppLayout>
            <div className="detail">
                <div>
                    <h3>{character.name}</h3>
                    <p>id: {character.id}</p>
                    <p>status: {character.status}</p>
                    <p>species: {character.species}</p>
                    <p>type: {character.type}</p>
                    <p>gender: {character.gender}</p>
                    <Link to="/rickandmorty">Go to List</Link>
                </div>
                <div>
                    <img src={character.image} />
                </div>
            </div>
        </AppLayout>
    ) : (
        <h3>Loading...</h3>
    );
};
