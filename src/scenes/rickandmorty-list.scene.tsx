import React from "react";

import { AppLayout } from "@/layouts/app.layout";
import { RickAndMortyListContainer } from "@/pods/rickandmorty";

export const RickAndMortyListScene = () => {
  return (
    <AppLayout>
      <RickAndMortyListContainer />
    </AppLayout>
  );
};
