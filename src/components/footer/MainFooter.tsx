import { AppBar, Grid, Link, Toolbar, Typography } from "@mui/material";

function MainFooter(): JSX.Element {
  const curYear: number = new Date().getFullYear();
  return (
    <AppBar position="static">
      <Grid container justifyContent="center" alignItems="center">
        <Grid item>
          <Toolbar>
            <Typography variant="body2" color="textPrimary" align="center">
              <Link
                color="textPrimary"
                href="https://www.frederickroman.com/"
                underline="none"
                target="_blank"
                rel="noopener"
              >
                &copy; Frederick Roman {curYear}
              </Link>
            </Typography>
          </Toolbar>
        </Grid>
      </Grid>
    </AppBar>
  );
}

export default MainFooter;
