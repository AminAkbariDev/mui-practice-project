import { Grid, makeStyles } from "@material-ui/core";
import Navbar from "./Components/Navbar";
import Rightbar from "./Components/Sidebars/Rightbar";
import Leftbar from "./Components/Sidebars/Leftbar";
import Feed from "./Components/Feed";
import Add from "./Components/Add";

const useStyle = makeStyles((theme) => ({

  left: {
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
  },
}));

function App() {
  const classes = useStyle();
  return (
    <div className="App">
      <Navbar />

      <Grid container className={classes.container}>
        <Grid item sm={2} xs={2} >
          <Rightbar></Rightbar>
        </Grid>
        <Grid item sm={7} xs={10}>
          <Feed />
        </Grid>
        <Grid item sm={3} className={classes.left}>
          <Leftbar></Leftbar>
        </Grid>
      </Grid>
      <Add />
    </div>
  );
}

export default App;
