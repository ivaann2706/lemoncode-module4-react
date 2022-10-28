import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import { DetailScene, GithubListScene, LoginScene } from "@/scenes";
import { switchRoutes } from "./routes";
import { RickAndMortyListScene } from "@/scenes/rickandmorty-list.scene";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={switchRoutes.root} element={<LoginScene />} />
        <Route path={switchRoutes.github} element={<GithubListScene />} />
        <Route path={switchRoutes.githubDetail} element={<DetailScene />} />
        <Route path={switchRoutes.rickandmorty} element={<RickAndMortyListScene />} />
        <Route path={switchRoutes.rickandmortyDetail} element={<RickAndMortyListScene />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
};
