import { makeStyles } from "@material-ui/core/styles";

const Style = makeStyles(theme => ({
  container: {
    height: "100vh",
    width: "100%",
    padding: 0,
    overflowY: "scroll",
    overflowX: "hidden"
  },
  title: {
    color: "black"
  },
  appBar: {
    backgroundColor: "inherit"
  },
  iconCamera: {
    color: "#424242"
  },
  iconMessage: {
    color: "#424242",
    display: "flex",
    justifyContent: "flex-end"
  },
  gridContainer: {
    marginTop: "1.0em"
  },
  circle: {
    height: 70,
    width: 70,
    backgroundColor: "#bbb",
    borderRadius: "50%",
    display: "inline-block"
  },
  story: {
    // paddingLeft: 2
    display: "flex",
    flexDirection: "row"
  }
}));
export default Style;
