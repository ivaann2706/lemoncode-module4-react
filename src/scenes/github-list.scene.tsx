import React from "react";

import { AppLayout } from "@/layouts/app.layout";
import { GithubListContainer } from "@/pods/github";

export const GithubListScene = () => {
  return (
    <AppLayout>
      <GithubListContainer />
    </AppLayout>
  );
};
