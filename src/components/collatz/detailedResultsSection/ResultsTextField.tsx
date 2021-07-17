import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

import Box from "@material-ui/core/Box";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      "& .MuiTextField-root": {
        margin: theme.spacing(1),
      },
    },
  })
);

interface IResultsTextAreaProps {
  textFieldRef: any;
  showClipboard: boolean;
  value: string;
}

function ResultsTextField(props: IResultsTextAreaProps): JSX.Element {
  const { textFieldRef, showClipboard, value } = props;
  const classes = useStyles();
  return (
    <Box px={1} py={1}>
      <form className={classes.root} noValidate autoComplete="off">
        <div>
          <TextField
            id="outlined-multiline-flexible"
            label="Raw CSV data"
            multiline
            fullWidth
            rows={showClipboard ? 25 : 28} 
            value={value}
            variant="outlined"
            inputRef={textFieldRef}
          />
        </div>
      </form>
    </Box>
  );
}

export default ResultsTextField;
