import HeroBanner from "../src/components/banner/HeroBanner";

// import logo from './logo.svg';
// import "./App.css";

import Container from "@material-ui/core/Container";
import CollatzPanel from "../src/components/collatz/summarySection/CollatzPanel";

import Grid from "@material-ui/core/Grid";

import { makeStyles, Theme } from "@material-ui/core/styles";

import CollatzResultsTextArea from "../src/components/collatz/detailedResultsSection/CollatzResultsTextArea";

import CollatzChart from "../src/components/collatz/summarySection/collatzOutputSections/collatzGraphSection/CollatzChart";

import GraphErrorBoundary from "../src/components/errorHandling/boundaries/GraphErrorBoundary";

import Box from "@material-ui/core/Box";

import Divider from "@material-ui/core/Divider";

import { useState } from "react";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

function Home() {
  const classes = useStyles();
  const DEFAULT_ORBIT: number[] | bigint[] = [5, 16, 8, 4, 2, 1];
  const DEFAULT_RESULTS: number[] | bigint[] = [5, 16, 8, 4, 2, 1];
  const [results, setResults] = useState<number[] | bigint[]>(DEFAULT_RESULTS);
  const [orbit, setOrbit] = useState<number[] | bigint[]>(DEFAULT_ORBIT);
  return (
    <Container disableGutters>
      <HeroBanner />
      <Box m={"1em"}>
        <Divider />
      </Box>
      <GraphErrorBoundary>
        <Container>
          <Box m={"1em"}>
            <Grid container justifyContent={"center"} alignItems={"center"}>
              <Grid item xs={12} sm={12} md={6}>
                <CollatzChart orbit={orbit} />
              </Grid>
            </Grid>
          </Box>
        </Container>
      </GraphErrorBoundary>
      <Container>
        <Grid container className={classes.root} spacing={2}>
          <Grid item xs={12} sm={6}>
            <CollatzPanel
              setResults={setResults}
              orbit={orbit}
              setOrbit={setOrbit}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <CollatzResultsTextArea results={results} />
          </Grid>
        </Grid>
      </Container>
    </Container>
  );
}

export default Home;
