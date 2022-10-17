import React from "react";

import { useLocation } from "react-router-dom";
import { useDebounce } from "use-debounce";
import InputBase from "@mui/material/InputBase";
import { styled, alpha } from "@mui/material/styles";
import SearchIcon from "@mui/icons-material/Search";

import { MyContext } from "@/app";

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

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
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
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
  const [debouncedFilter] = useDebounce(textFilter, 1500);

  React.useEffect(() => {
    if (location.pathname !== "/list") {
      setDisableSearch(true);
    }
  }, []);

  const handleChange = (e) => {
    setTextFilter(e.target.value);
  };

  React.useEffect(() => {
    setFilter(textFilter);
  }, [debouncedFilter]);

  return (
    <>
      <Search>
        <SearchIconWrapper>
          <SearchIcon />
        </SearchIconWrapper>
        <StyledInputBase
          placeholder="Search…"
          value={textFilter}
          onChange={handleChange}
          inputProps={{ "aria-label": "search" }}
          disabled={disableSearch}
        />
      </Search>
    </>
  );
};
