import { Theme } from "@mui/material/styles";

// import makeStyles from "@mui/styles/makeStyles";
// import createStyles from "@mui/styles/createStyles";

import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Grid } from "@mui/material";

// const useStyles = makeStyles((theme: Theme) =>
//   createStyles({
//     root: {
//       "& .MuiTextField-root": {
//         margin: theme.spacing(1),
//       },
//     },
//   })
// );

interface IResultsTextAreaProps {
  textFieldRef: any;
  showClipboard: boolean;
  value: string;
}

function ResultsTextField(props: IResultsTextAreaProps): JSX.Element {
  const { textFieldRef, showClipboard, value } = props;
  // const classes = useStyles();
  return (
    <Box px={1} py={1}>
      <Grid container justifyContent="center" alignItems="center">
        <Grid item>
          <Box
            component="form"
            noValidate
            autoComplete="off"
            width="100%"
          >
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
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default ResultsTextField;
