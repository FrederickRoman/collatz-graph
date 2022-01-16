import { Box, AppBar, Toolbar } from "@mui/material";
import HomeLink from "./link/HomeLink";

function MainAppBar(): JSX.Element {
  return (
    <Box flexGrow={1}>
      <AppBar position="static">
        <Toolbar>
          <HomeLink />
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default MainAppBar;
