import React from "react";

import { useLocation } from "react-router-dom";
import InputBase from "@mui/material/InputBase";
import { styled, alpha } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";

import { MyContext } from "@/app";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

export const Searcher = () => {
  const { filter, setFilter } = React.useContext(MyContext);
  const [textFilter, setTextFilter] = React.useState(filter);
  const location = useLocation();
  const [disableSearch, setDisableSearch] = React.useState(false);

  React.useEffect(() => {
    if (location.pathname !== "/list") {
      setDisableSearch(true);
    }
  }, []);

  const handleChange = (e) => {
    setTextFilter(e.target.value);
  };

  const handleClick = () => {
    setFilter(textFilter);
  };
  return (
    <>
      <Search>
        <StyledInputBase
          placeholder="Search…"
          value={textFilter}
          onChange={handleChange}
          inputProps={{ "aria-label": "search" }}
          disabled={disableSearch}
        />
        <IconButton
          component="label"
          onClick={handleClick}
          disabled={disableSearch}
        >
          <SearchIcon />
        </IconButton>
      </Search>
    </>
  );
};
