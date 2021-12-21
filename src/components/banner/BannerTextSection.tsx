import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";

import IStyles from "@/types/interfaces/IStyles";

const styles: IStyles = {
  header: {
    color: "white",
  },
  subheader: {
    color: "white",
    textAlign: "center",
    verticalAlign: "middle",
  },
};

function BannerTextSection(): JSX.Element {
  return (
    <Grid container justifyContent={"center"} alignItems={"center"}>
      <Grid item>
        <Box px={1}>
          <Grid
            container
            justifyContent={"center"}
            alignItems={"center"}
            wrap={"nowrap"}
          >
            <Grid item>
              <img
                src={"/img/collatzgraphLogo.svg"}
                alt="collatzGraph logo"
                width="40"
                height="40"
              />
            </Grid>
            <Grid item>
              <h1 style={styles.header}>Collatzgraph</h1>
            </Grid>
          </Grid>
        </Box>
      </Grid>

      <Grid item>
        <Box px={1}>
          <Grid container justifyContent={"center"} alignItems={"center"}>
            <Grid item>
              <h2 style={styles.subheader}>
                In-browser collatz graph calculator
              </h2>
            </Grid>
          </Grid>
        </Box>
      </Grid>
    </Grid>
  );
}

export default BannerTextSection;
