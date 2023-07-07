import {
  Container,
  makeStyles,
  Avatar,
  Typography,
  Link,
  Divider,
} from "@material-ui/core";
import AvatarGroup from "@material-ui/lab/AvatarGroup";
import ImageList from "@material-ui/core/ImageList";
import ImageListItem from "@material-ui/core/ImageListItem";

const useStyle = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(9),
    position: "sticky",
    top: "0",
  },
  title: {
    fontSize: "16",
    fontWeight: 500,
    color: "#555",
  },
  image: {
    left: "auto",
    right: "0",
    transform: "translateX(0)",
    top: 0,
  },
  link: {
    fontSize: "16px",
    color: "#555",
    marginRight: "10px",
  },
}));

const imageList = [
  {
    img: "https://v4.mui.com/static/images/image-list/breakfast.jpg",
    title: "Image",
    author: "author",
    cols: 1,
  },
  {
    img: "https://v4.mui.com/static/images/image-list/burgers.jpg",
    title: "Image",
    author: "author",
    cols: 3,
  },
  {
    img: "https://v4.mui.com/static/images/image-list/camera.jpg",
    title: "Image",
    author: "author",
    cols: 4,
  },
  {
    img: "https://v4.mui.com/static/images/image-list/morning.jpg",
    title: "Image",
    author: "author",
    cols: 2,
  },
  {
    img: "https://v4.mui.com/static/images/image-list/breakfast.jpg",
    title: "Image",
    author: "author",
    cols: 1,
  },
  {
    img: "https://v4.mui.com/static/images/image-list/burgers.jpg",
    title: "Image",
    author: "author",
    cols: 3,
  },
];

const firendsList = [
  {
    name: "محمدامین اکبری",
    src: "https://v4.mui.com/static/images/avatar/1.jpg",
  },
  {
    name: "علی اصغر اکبری",
    src: "https://v4.mui.com/static/images/avatar/2.jpg",
  },
  { name: "متین فاضلی", src: "https://v4.mui.com/static/images/avatar/3.jpg" },
  {
    name: "علی اکبر اکبری",
    src: "",
  },
  { name: "حمید لولایی", src: "https://v4.mui.com/static/images/avatar/5.jpg" },
  { name: "حمید لولایی", src: "https://v4.mui.com/static/images/avatar/5.jpg" },
  { name: "حمید لولایی", src: "https://v4.mui.com/static/images/avatar/5.jpg" },
];

function Leftbar() {
  const classes = useStyle();
  return (
    <Container className={classes.container}>
      <Typography className={classes.title} gutterBottom>
        دوستان آنلاین
      </Typography>
      <AvatarGroup max={6} style={{ marginBottom: "25px", overflow:"hidden" }}>
        {firendsList.map((item) => (
          <Avatar alt={item.name} src={item.src} />
        ))}
      </AvatarGroup>
      <Typography className={classes.title} gutterBottom>
        گالری
      </Typography>
      <ImageList
        rowHeight={100}
        className={classes.imageList}
        cols={3}
        style={{ marginBottom: "25px" }}
      >
        {imageList.map((item) => (
          <ImageListItem key={item.img}>
            <img src={item.img} alt={item.title} className={classes.image} />
          </ImageListItem>
        ))}
      </ImageList>
      <Typography>دسته بندی ها</Typography>
      <Link component="button" href="" className={classes.link} variant="body2">
        ورزشی
      </Link>
      <Link component="button" href="" className={classes.link} variant="body2">
        سیاسی
      </Link>
      <Divider flexItem style={{ marginBottom: "10px" }} />
      <Link component="button" href="" className={classes.link} variant="body2">
        علمی
      </Link>
      <Link component="button" href="" className={classes.link} variant="body2">
        هنری
      </Link>
    </Container>
  );
}

export default Leftbar;
