import { makeStyles } from "@material-ui/core/styles";

const style = makeStyles(theme => ({
  container: {
    height: "100vh",
    width: "100%",
    padding: 0,
    backgroundColor: "#FFFFFF"
  },
  appbar: {
    backgroundColor: "#FAFAFA",
    boxShadow: "0px 4px 5px rgba(0, 0, 0, 0.04)",
    padding: 15
  },
  grid: {
    display: "flex",
    flexDirection: "row"
  },
  text: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center"
  },
  arrow: {
    display: "flex",
    justifyContent: "flex-start",
    backgroundColor: "red"
  },
  listMore: {
    display: "flex",
    justifyContent: "flex-end"
  },
  gridTwo: {
    padding: "25px 0px 0px 15px",
    display: "flex",
    alignItems: "center"
  },
  name: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    marginLeft: 40
  },
  nameTwo: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    marginLeft: 3
  },
  nameThree: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    marginLeft: 4
  },
  more: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  }
}));

export default style;
