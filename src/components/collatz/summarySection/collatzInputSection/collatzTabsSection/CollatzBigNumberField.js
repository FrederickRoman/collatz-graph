import { useState, useEffect } from "react";
import makeStyles from '@mui/styles/makeStyles';
import TextField from "@mui/material/TextField";

import fromExponential from "from-exponential";

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

function CollatzBigNumberField({ bigNumber, tab, value, setValue }) {
  const classes = useStyles();
  const [error, setError] = useState(false);
  const [helperText, setHelperText] = useState("");

  const validateInput = (value) => {
    console.log(`Big int value: ${value}`);
    if (value === "") {
      console.log(`Big int value: ""`);
      setError(true);
      setHelperText("Number required (e.g. 5, 3e4)");
      return value;
    } else {
      const expStringNumber = fromExponential(value);
      if (!new RegExp("^\\d+$").test(expStringNumber)) {
        console.log(`Big int value: not just digits`);
        setError(true);
        setHelperText(
          "Wrong Format. Number must be positive decimal or exponential (e.g. 5, 3e4)"
        );
        return value;
      } else {
        setError(false);
        setHelperText("Press run button");
        return expStringNumber;
      }
    }
  };

  const handleChange = (event) => {
    const { value } = event.target;
    if (tab === "big") setValue(validateInput(value));
  };

  useEffect(() => {
    console.log(bigNumber);
  }, [bigNumber]);

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <TextField
        multiline
        maxRows={4}
        error={error}
        id="Number"
        label="Number"
        type="number"
        helperText={helperText}
        InputLabelProps={{
          shrink: true,
        }}
        value={value}
        onChange={handleChange}
        variant="outlined"
      />
    </form>
  );
}

export default CollatzBigNumberField;
