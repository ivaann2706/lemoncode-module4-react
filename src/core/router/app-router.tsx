import React from 'react';

import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import { GithubDetailScene, GithubListScene, LoginScene, RickAndMortyDetailScene, RickAndMortyListScene } from '@/scenes';
import { switchRoutes } from './routes';

export const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={switchRoutes.root} element={<LoginScene />} />
                <Route path={switchRoutes.github} element={<GithubListScene />} />
                <Route path={switchRoutes.githubDetail} element={<GithubDetailScene />} />
                <Route path={switchRoutes.rickandmorty} element={<RickAndMortyListScene />} />
                <Route path={switchRoutes.rickandmortyDetail} element={<RickAndMortyDetailScene />} />
                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
        </BrowserRouter>
    );
};
