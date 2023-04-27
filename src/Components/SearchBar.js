import * as React from "react"
import { styled, alpha } from "@mui/material/styles"
import AppBar from "@mui/material/AppBar"
import Box from "@mui/material/Box"
import Toolbar from "@mui/material/Toolbar"
import InputBase from "@mui/material/InputBase"
import SearchIcon from "@mui/icons-material/Search"
import InputLabel from "@mui/material/InputLabel"
import FormControl from "@mui/material/FormControl"
import Select from "@mui/material/Select"
import MenuItem from "@mui/material/MenuItem"

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
    marginTop: theme.spacing(0),
    marginRight: theme.spacing(1),
    width: "20vw",
  },
}))

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}))

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
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
}))

export default function SearchBar({
  searchParam,
  setSearchParam,
  type,
  setType,
  age,
  setAge,
}) {
  return (
    <div className="search">
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" sx={{ backgroundColor: "#7F5283" }}>
          <Toolbar>
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ "aria-label": "search" }}
                onChange={(e) => {
                  setSearchParam(e.target.value)
                }}
                value={searchParam}
              />
            </Search>
            <Box sx={{ minWidth: 120 }}>
              <FormControl sx={{ m: 1, minWidth: 120, color: "" }} size="small">
                <InputLabel id="demo-simple-select-label">Search By</InputLabel>
                <Select
                  sx={{ color: "white" }}
                  labelId="demo-simple-select-label"
                  id="type"
                  value={type}
                  label="Search By"
                  onChange={(event) => {
                    setType(event.target.value)
                  }}
                >
                  <MenuItem value="stories">Stories</MenuItem>
                  <MenuItem value="author">Author</MenuItem>
                </Select>
              </FormControl>
            </Box>
            <Box sx={{ minWidth: 120 }}>
              <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                <InputLabel shrink={true} id="demo-simple-select-label">
                  Sort By
                </InputLabel>

                <Select
                  sx={{ color: "white" }}
                  notched={true}
                  AKF
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={age}
                  label="Sort By"
                  onChange={(event) => {
                    setAge(event.target.value)
                  }}
                >
                  <MenuItem value={1}>A-Z</MenuItem>
                  <MenuItem value={2}>Most recent</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  )
}
