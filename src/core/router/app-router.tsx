import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import { DetailScene, ListScene, LoginScene } from "@/scenes";
import { switchRoutes } from "./routes";
import { RickAndMortyScene } from "@/scenes/rickandmorty.scene";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={switchRoutes.root} element={<LoginScene />} />
        <Route path={switchRoutes.github} element={<ListScene />} />
        <Route path={switchRoutes.githubDetail} element={<DetailScene />} />
        <Route path={switchRoutes.rickandmorty} element={<RickAndMortyScene />} />
        <Route path={switchRoutes.rickandmortyDetail} element={<RickAndMortyScene />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
};
