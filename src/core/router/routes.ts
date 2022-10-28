import { generatePath } from "react-router-dom";

interface SwitchRoutes {
  root: string;
  github: string;
  githubDetail: string;
  rickandmorty: string
  rickandmortyDetail: string
}

export const switchRoutes: SwitchRoutes = {
  root: "/",
  github: "/github",
  githubDetail: "/github/:login",
  rickandmorty: "/rickandmorty",
  rickandmortyDetail: "/rickandmorty/:id",
};

interface Routes extends Omit<SwitchRoutes, "githubDetail" | "rickandmortyDetail"> {
  githubDetail: (login: string) => string;
  rickandmortyDetail: (id: string) => string;
}
export const routes: Routes = {
  root: "/",
  github: "/github",
  githubDetail: (login: string) => generatePath(switchRoutes.githubDetail, { login }),
  rickandmorty: "/rickandmorty",
  rickandmortyDetail: (id: string) => generatePath(switchRoutes.rickandmortyDetail, { id }),
};
