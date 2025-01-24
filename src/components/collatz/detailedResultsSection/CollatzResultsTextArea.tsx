import { useState, useEffect, useRef } from "react";

import orbit from "@/types/unions/orbit";

import Paper from "@mui/material/Paper";
import Container from "@mui/material/Container";

import collatzOrbitToCSV from "@/services/formatCollatz/collatzOrbitToCSV";
import CopyClipboardButton from "./CopyClipboardButton";
import ResultsTextField from "./ResultsTextField";
import { Box, Grid } from "@mui/material";

interface ICRTAProps {
  results: orbit;
}

function CollatzResultsTextArea(props: ICRTAProps): JSX.Element {
  const { results } = props;

  const [value, setValue] = useState<string>("");
  const [showClipboard, setShowClipboard] = useState<boolean>(false);
  const textFieldRef = useRef<JSX.Element>(null);

  useEffect(() => {
    const isCopyCommandSupported = document.queryCommandSupported("copy");
    setShowClipboard(isCopyCommandSupported);
  }, []);

  useEffect(() => setValue(collatzOrbitToCSV(results)), [results]);

  return (
    <Box>
      <Paper
        elevation={3}
        sx={{
          textAlign: "center",
          color: "palette.text.secondary",
          //width: 310,
          height: 728,
          padding: 2,
          margin: "1em 0em",
        }}
      >
        <Container>
          <ResultsTextField
            textFieldRef={textFieldRef}
            showClipboard={showClipboard}
            value={value}
          />
          {showClipboard && (
            <Grid container justifyContent="center" alignItems="center">
              <Grid item>
                <CopyClipboardButton textFieldRef={textFieldRef} />
              </Grid>
            </Grid>
          )}
        </Container>
      </Paper>
    </Box>
  );
}

export default CollatzResultsTextArea;
