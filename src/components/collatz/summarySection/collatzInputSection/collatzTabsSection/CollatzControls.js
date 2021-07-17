import { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    margin: "1em",
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

function CollatzControls({ number, setNumber, tab }) {
  const classes = useStyles();
  const [error, setError] = useState(false);
  const [helperText, setHelperText] = useState("");

  useEffect(() => {
    console.log(number);
    console.log(typeof number);
  }, [number]);

  const validateInput = (value) => {
    if (value === "") {
      setError(true);
      setHelperText("Number required (e.g. 5, 3e4)");
    } else if (value < 1) {
      setError(true);
      setHelperText("Number must be > 0");
    } else if (value > Number.MAX_SAFE_INTEGER) {
      setError(true);
      setHelperText(
        "This number is BIG. Use Big option for accuracy. " +
          "Results here for Big number are quick, but only approximate"
      );
    } else {
      setError(false);
      setHelperText("");
    }
  };

  const handleChange = (event) => {
    const { value } = event.target;
    validateInput(value);
    if (tab === "small") setNumber(value);
  };

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <TextField
        error={error}
        id="Number"
        label="Number"
        type="number"
        helperText={helperText}
        InputLabelProps={{
          shrink: true,
        }}
        value={number}
        onChange={handleChange}
        variant="outlined"
      />
    </form>
  );
}

export default CollatzControls;
