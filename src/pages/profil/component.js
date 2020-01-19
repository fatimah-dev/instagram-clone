import React from "react";
import { CssBaseline, Typography, Button, AppBar } from "@material-ui/core";
import { Container } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import ListMore from "../../asset/list-more.svg";
import ArrowDown from "../../asset/down-arrow 1.svg";
import User from "../../asset/user-plus.svg";
import Tim from "../../asset/tim.svg";
import More from "../../asset/more.svg";
import UseStyle from "./style";

function Profil(props) {
  const classes = UseStyle();
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="xs" className={classes.container}>
        <AppBar className={classes.appbar} position="static">
          <Grid container spacing={0} className={classes.grid}>
            <Grid item xs={6} className={classes.text}>
              <Typography style={{ color: "#000000" }}>hisnia</Typography>
              &nbsp;
              <img src={ArrowDown} />
            </Grid>

            <Grid item xs={6} className={classes.listMore}>
              <img src={ListMore} />
            </Grid>
          </Grid>
        </AppBar>

        <Grid container spacing={0} className={classes.gridTwo}>
          <Grid item xs={1}>
            <img src={User} />
          </Grid>
          <Grid item xs={3} className={classes.name}>
            <Typography style={{ fontSize: 16, fontWeight: "bold" }}>
              230
            </Typography>
            <Typography style={{ fontSize: 14 }}>Postingan</Typography>
          </Grid>

          <Grid item xs={3} className={classes.nameTwo}>
            <Typography style={{ fontSize: 16, fontWeight: "bold" }}>
              2.300
            </Typography>
            <Typography style={{ fontSize: 14 }}>Pengikut</Typography>
          </Grid>

          <Grid item xs={3} className={classes.nameThree}>
            <Typography style={{ fontSize: 16, fontWeight: "bold" }}>
              23
            </Typography>
            <Typography style={{ fontSize: 14 }}>Mengikuti</Typography>
          </Grid>
        </Grid>

        <Grid item xs={12} style={{ marginTop: 5, paddingLeft: 15 }}>
          <Typography style={{ fontSize: 14, fontWeight: "bold" }}>
            Hisnia Wahdatul Muna
          </Typography>
        </Grid>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: 20
          }}
        >
          <Button
            disableRiple={true}
            style={{
              backgroundColor: "#01AEEB",
              textTransform: "none",
              width: "90%"
            }}
          >
            <Typography style={{ fontSize: 16, color: "#FFFFFF", padding: 5 }}>
              Edit Profil
            </Typography>
          </Button>
        </div>
        <hr
          style={{
            marginTop: 25,
            border: "0.5px solid rgba(0, 0, 0, 0.2)"
          }}
        />

        <Grid container spacing={0} className={classes.gridIcon}>
          <Grid item xs={6} className={classes.more}>
            <img src={More} />
          </Grid>

          <Grid item xs={6} className={classes.more}>
            <img src={Tim} />
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  );
}

export default Profil;
