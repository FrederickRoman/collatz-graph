import { Theme } from "@mui/material/styles";

import createStyles from '@mui/styles/createStyles';
import makeStyles from '@mui/styles/makeStyles';

import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";

import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

import Typography from "@mui/material/Typography";

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
         <IconButton
           edge="start"
           className={classes.menuButton}
           color="inherit"
           aria-label="menu"
           size="large">
           <MenuIcon />
         </IconButton>
         <Typography variant="h6" className={classes.title}>
           Collatz graph
         </Typography>
         <Button color="inherit">About</Button>
       </Toolbar>
     </AppBar>
   </div>
 );
}

export default MainAppBar;