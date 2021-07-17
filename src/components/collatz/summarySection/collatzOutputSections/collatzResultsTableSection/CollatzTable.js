import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles({
  table: {
    minWidth: 250,
  },
});

function CollatzTable({ number, bigNumber, steps, peak, tab }) {
  const classes = useStyles();

  const TableRows = () => {
    const isNumberEmpty = number === "";
    const ENTRY_PLACEHOLDER = "-";
    const placeHold = (entry) => (isNumberEmpty ? ENTRY_PLACEHOLDER : entry);
    return (
      <TableRow>
        <TableCell component="th" scope="row">
          {placeHold(tab === "small" ? number : bigNumber)}
        </TableCell>
        <TableCell align="left">{placeHold(steps)}</TableCell>
        <TableCell align="left">{placeHold(peak)}</TableCell>
      </TableRow>
    );
  };

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="results table">
        <TableHead>
          <TableRow>
            <TableCell>Number</TableCell>
            <TableCell align="left">Steps</TableCell>
            <TableCell align="left">Peak</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRows />
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default CollatzTable;
