import React from "react";
import UseStyle from "./style";
import {
  Container,
  AppBar,
  Toolbar,
  Typography,
  Grid,
  CssBaseline,
  Paper
} from "@material-ui/core";
import CameraAltOutlinedIcon from "@material-ui/icons/CameraAltOutlined";
import SendOutlinedIcon from "@material-ui/icons/SendOutlined";

function HomePage(props) {
  const classes = UseStyle();
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="xs" className={classes.container}>
        <AppBar className={classes.appBar} position="static">
          <Toolbar>
            <Grid container spacing={0}>
              <Grid item xs={4}>
                <CameraAltOutlinedIcon className={classes.iconCamera} />
              </Grid>
              <Grid item xs={7}>
                <Typography className={classes.title}>Instagram</Typography>
              </Grid>
              <Grid item xs={1}>
                <SendOutlinedIcon className={classes.iconMessage} />
              </Grid>
            </Grid>
          </Toolbar>
        </AppBar>
        <Grid container spacing={0} className={classes.gridContainer}>
          <div style={{ paddingLeft: 8 }}>
            <div style={{ paddingLeft: 5 }}>
              <span className={classes.circle} />
            </div>
            <div align="center" style={{ paddingLeft: 6 }}>
              Your Story
            </div>
          </div>
          <div style={{ paddingLeft: 8 }}>
            <div style={{ paddingLeft: 5 }}>
              <span className={classes.circle} />
            </div>
            <div align="center" style={{ paddingLeft: 6 }}>
              jeromepolin
            </div>
          </div>
          <div style={{ paddingLeft: 8 }}>
            <div style={{ paddingLeft: 5 }}>
              <span className={classes.circle} />
            </div>
            <div align="center" style={{ paddingLeft: 6 }}>
              yuanvirna
            </div>
          </div>
        </Grid>
        <Paper style={{ marginTop: 20 }}>
          <div
            style={{
              border: "1px solid black",
              paddingTop: 3,
              paddingBottom: 3
            }}
          >
            <Grid container spacing={0}>
              <Grid
                item
                xs={2}
                style={{
                  paddingLeft: 10,
                  paddingTop: 2
                }}
              >
                <span
                  style={{
                    height: 31,
                    width: 31,
                    backgroundColor: "#bbb",
                    borderRadius: "50%",
                    display: "inline-block"
                  }}
                />
              </Grid>
              <Grid item xs={7} style={{ paddingTop: 6 }}>
                test
              </Grid>
              <Grid
                item
                xs={2}
                style={{
                  display: "flex",
                  justifyContent: "flex-end",
                  paddingRight: 10,
                  paddingTop: 10
                }}
              >
                test
              </Grid>
            </Grid>
          </div>
          <div>
            <Paper
              style={{
                backgroundColor: "red",
                height: 190
              }}
            >
              <h1
                style={{
                  marginLeft: 12
                }}
              >
                gambar X
              </h1>
            </Paper>
          </div>
          <div style={{ marginTop: 7, paddingBottom: 5, marginLeft: 12 }}>
            love komen message
          </div>
          <div style={{ marginTop: 5, marginBottom: 5, marginLeft: 12 }}>
            likes
          </div>
          <div style={{ marginLeft: 12 }}>account and caption </div>
          <div style={{ marginLeft: 12 }}>view all comment</div>
          <div style={{ marginTop: 5 }}>
            <Grid container spacing={0} style={{ marginLeft: 10 }}>
              <Grid item xs={2}>
                <span
                  style={{
                    height: 23,
                    width: 23,
                    backgroundColor: "#bbb",
                    borderRadius: "50%",
                    display: "inline-block"
                  }}
                />
              </Grid>
              <Grid item xs={6}>
                Add a comment
              </Grid>
              <Grid item xs={4}>
                icon love plus
              </Grid>
            </Grid>
          </div>
        </Paper>
      </Container>
    </React.Fragment>
  );
}

export default HomePage;
