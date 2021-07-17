import { useState } from "react";
import { makeStyles, Theme } from "@material-ui/core/styles";

import orbit from "@/types/unions/orbit";

import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";

import GraphErrorBoundary from "@/components/errorHandling/boundaries/GraphErrorBoundary";
import CollatzPanel from "@/components/collatz/summarySection/CollatzPanel";
import CollatzResultsTextArea from "@/components/collatz/detailedResultsSection/CollatzResultsTextArea";
import CollatzChart from "@/components/collatz/summarySection/collatzOutputSections/collatzGraphSection/CollatzChart";

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

function CollatzDemoSection(): JSX.Element {
  const classes = useStyles();
  const DEFAULT_ORBIT: orbit = [5, 16, 8, 4, 2, 1];
  const DEFAULT_RESULTS: orbit = [5, 16, 8, 4, 2, 1];
  const [results, setResults] = useState<orbit>(DEFAULT_RESULTS);
  const [orbit, setOrbit] = useState<orbit>(DEFAULT_ORBIT);
  return (
    <>
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
            <Box m={"1em"}>
              <CollatzPanel
                setResults={setResults}
                orbit={orbit}
                setOrbit={setOrbit}
              />
            </Box>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Box m={"1em"}>
              <CollatzResultsTextArea results={results} />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default CollatzDemoSection;
