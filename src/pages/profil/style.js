import { makeStyles } from "@material-ui/core/styles";

const style = makeStyles(theme => ({
  container: {
    height: "100vh",
    width: "100%",
    padding: 0
  },
  gridOne: {
    paddingTop: "6em"
  },
  profil: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center"
  },
  plus: {
    display: "flex",
    alignItems: "flex-end",
    marginLeft: "-1.2em"
  },
  text: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  },
  number: {
    fontWeight: "bold"
  },
  name: {
    paddingTop: "1em",
    paddingLeft: "1.4em"
  }
}));

export default style;
