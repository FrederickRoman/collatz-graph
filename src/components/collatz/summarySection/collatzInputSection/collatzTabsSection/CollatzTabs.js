import React, { useState } from "react";
import PropTypes from "prop-types";
// import makeStyles from "@mui/styles/makeStyles";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

import CollatzControls from "./CollatzControls.js";
import CollatzBigNumberField from "./CollatzBigNumberField.js";

import IconButton from "@mui/material/IconButton";
import TrendingDownIcon from "@mui/icons-material/TrendingDown";

import Container from "@mui/material/Container";

function TabPanel({ children, value, index, ...other }) {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`wrapped-tabpanel-${index}`}
      aria-labelledby={`wrapped-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography component={"span"}>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `wrapped-tab-${index}`,
    "aria-controls": `wrapped-tabpanel-${index}`,
  };
}

// const useStyles = makeStyles((theme) => ({
//   root: {
//     flexGrow: 1,
//     backgroundColor: theme.palette.background.paper,
//   },
//   tabs_container: {
//     justifyContent: "space-evenly",
//   },
// }));

export default function TabsWrappedLabel({ controlProps, tab, setTab }) {
  // const classes = useStyles();
  const { bigNumber, setBigNumber } = controlProps;
  const [valueSync, setValueSync] = useState(true);
  const [value, setValue] = useState(bigNumber);

  const handleChange = (event, newValue) => {
    setTab(newValue);
  };

  const BigLabel = () => (
    <span>
      Big ( &gt; 2<sup>53</sup> -1 )
    </span>
  );

  const handleMouseDown = () => {
    controlProps.setBigNumber(value);
  };

  return (
    <Box flexGrow={1} bgcolor="palette.background.paper">
      <AppBar position="static">
        <Tabs
          value={tab}
          onChange={handleChange}
          aria-label="wrapped label tabs example"
          // classes={{ flexContainer: classes.tabs_container }}
          sx={{ backgroundColor: "gray", justifyContent: "space-evenly" }}
        >
          <Tab value="small" label="Small" wrapped {...a11yProps("small")} />
          <Tab value="big" label={<BigLabel />} {...a11yProps("big")} />
        </Tabs>
      </AppBar>
      <TabPanel value={tab} index="small">
        <Container>
          <CollatzControls {...controlProps} tab={tab} />
        </Container>
      </TabPanel>
      <TabPanel value={tab} index="big">
        <Container
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            margin: 0,
          }}
        >
          <CollatzBigNumberField
            {...{ bigNumber, setBigNumber }}
            tab={tab}
            value={value}
            setValue={setValue}
            valueSync={valueSync}
            setValueSync={setValueSync}
          />
          <IconButton
            aria-label="run graph"
            color="secondary"
            onMouseDown={handleMouseDown}
            size="large"
          >
            <TrendingDownIcon />
          </IconButton>
        </Container>
      </TabPanel>
    </Box>
  );
}
