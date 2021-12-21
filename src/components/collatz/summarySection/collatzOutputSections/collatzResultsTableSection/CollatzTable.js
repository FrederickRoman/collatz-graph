import React from "react";
import makeStyles from '@mui/styles/makeStyles';
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

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
