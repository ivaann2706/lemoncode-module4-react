import React from "react";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import { Searcher } from "./components/searcher.component";

interface Props {
  children: React.ReactNode;
}

export const AppLayout: React.FC<Props> = ({ children }) => {
  return (
    <div>
      <Box>
        <AppBar position="static">
          <Toolbar className="layout-app-header">
            <Searcher />
            <span>User logged in</span>
          </Toolbar>
        </AppBar>
      </Box>
      {children}
    </div>
  );
};
