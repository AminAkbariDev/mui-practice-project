import { Container, makeStyles } from "@material-ui/core";
import Post from "./Post";

const useStyle = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(9),
  },
}));

function Feed() {
  const classes = useStyle();
  return (
    <Container className={classes.container}>
      <Post />
      <Post />
      <Post />
      <Post />
    </Container>
  );
}

export default Feed;
