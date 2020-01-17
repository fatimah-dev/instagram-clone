import React from "react";
import AppBar from "@material-ui/core/AppBar";
import { Grid, Toolbar } from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import DehazeIcon from "@material-ui/icons/Dehaze";
import Typography from "@material-ui/core/Typography";

function Component(props) {
  const { classes } = props;
  return (
    <AppBar position="static" className={classes.appbar}>
      <Toolbar>
        <Grid item xs={6} className={classes.name}>
          <Typography>hisnia2811</Typography>
          <ExpandMoreIcon />
        </Grid>
        <Grid item xs={6} className={classes.icon}>
          <DehazeIcon />
        </Grid>
      </Toolbar>
    </AppBar>
  );
}

export default Component;
