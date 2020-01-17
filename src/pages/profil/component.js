import React from "react";
import { CssBaseline, Typography } from "@material-ui/core";
import { Container } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import AppBar from "../../component/app-bar";
import Image from "../../asset/avatar.png";
import Plus from "../../asset/plus.png";
import UseStyle from "./style";

function Profil(props) {
  const classes = UseStyle();
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="xs" className={classes.container}>
        <AppBar />

        <Grid container spacing={0} className={classes.gridOne}>
          <Grid item xs={3} className={classes.profil}>
            <img src={Image} alt="" />
            <Grid item xs={0} className={classes.plus}>
              <img
                src={Plus}
                alt=""
                style={{ width: "20px", height: "20px" }}
              />
            </Grid>
          </Grid>
          <Grid
            item
            xs={9}
            style={{ display: "flex", justifyContent: "center" }}
          >
            <Grid container spacing={0}>
              <Grid item xs={4} className={classes.text}>
                <Typography className={classes.number}>100</Typography>
                <Typography>Postingan</Typography>
              </Grid>

              <Grid item xs={4} className={classes.text}>
                <Typography className={classes.number}>1m</Typography>
                <Typography>Pengikut</Typography>
              </Grid>

              <Grid item xs={4} className={classes.text}>
                <Typography className={classes.number}>23</Typography>
                <Typography>Mengikuti</Typography>
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={12}>
            <Typography className={classes.name}>
              Hisnia Wahdatul Muna
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  );
}

export default Profil;
