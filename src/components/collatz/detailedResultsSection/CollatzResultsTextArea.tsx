import { useState, useEffect, useRef } from "react";
import { Theme } from "@mui/material/styles";

import makeStyles from '@mui/styles/makeStyles';
import createStyles from '@mui/styles/createStyles';

import orbit from "@/types/unions/orbit";

import Paper from "@mui/material/Paper";
import Container from "@mui/material/Container";

import collatzOrbitToCSV from "@/services/formatCollatz/collatzOrbitToCSV";
import CopyClipboardButton from "./CopyClipboardButton";
import ResultsTextField from "./ResultsTextField";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "center",
      margin: "1em 0em",
      "& > *": {
        margin: theme.spacing(1),
        width: theme.spacing(16),
        height: theme.spacing(16),
      },
    },
    paper: {
      textAlign: "center",
      color: theme.palette.text.secondary,
      width: 310,
      height: 625,
      padding: theme.spacing(2),
      margin: "1em 0em",
    },
  })
);

interface ICRTAProps {
  results: orbit;
}

function CollatzResultsTextArea(props: ICRTAProps): JSX.Element {
  const { results } = props;
  const classes = useStyles();

  const [value, setValue] = useState<string>("");
  const [showClipboard, setShowClipboard] = useState<boolean>(false);
  const textFieldRef = useRef<JSX.Element>(null);

  useEffect(() => {
    const isCopyCommandSupported = document.queryCommandSupported("copy");
    setShowClipboard(isCopyCommandSupported);
  }, []);

  useEffect(() => setValue(collatzOrbitToCSV(results)), [results]);

  return (
    <div className={classes.root}>
      <Paper elevation={3} className={classes.paper}>
        <Container>
          <ResultsTextField
            textFieldRef={textFieldRef}
            showClipboard={showClipboard}
            value={value}
          />
          {showClipboard && <CopyClipboardButton textFieldRef={textFieldRef} />}
        </Container>
      </Paper>
    </div>
  );
}

export default CollatzResultsTextArea;
