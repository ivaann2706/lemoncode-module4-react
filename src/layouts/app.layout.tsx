import React from "react";

import { useNavigate } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import { Button } from '@mui/material';

import { Searcher } from "./components/searcher.component";
import { routes } from "@/core/router/routes";

interface Props {
  children: React.ReactNode;
}

export const AppLayout: React.FC<Props> = ({ children }) => {
  const navigate = useNavigate();
  
  return (
    <div>
      <Box>
        <AppBar position="static">
          <Toolbar className="layout-app-header">
            <Searcher />
            <div>
              <Button color="inherit" onClick={()=>navigate(routes.github)}>Github</Button>
              <Button color="inherit" onClick={()=>navigate(routes.rickandmorty)}>Rick and Morty</Button>
              <span>User logged in</span>
            </div>
          </Toolbar>
        </AppBar>
      </Box>
      {children}
    </div>
  );
};
