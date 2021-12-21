import { Theme } from "@mui/material/styles";

import createStyles from "@mui/styles/createStyles";
import makeStyles from "@mui/styles/makeStyles";

import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import HomeLink from "./link/HomeLink";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  })
);

function MainAppBar(): JSX.Element {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <HomeLink />
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default MainAppBar;
