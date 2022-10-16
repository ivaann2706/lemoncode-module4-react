import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import { DetailScene, ListScene, LoginScene } from "@/scenes";
import { switchRoutes } from "./routes";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={switchRoutes.root} element={<LoginScene />} />
        <Route path={switchRoutes.list} element={<ListScene />} />
        <Route path={switchRoutes.detail} element={<DetailScene />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
};
