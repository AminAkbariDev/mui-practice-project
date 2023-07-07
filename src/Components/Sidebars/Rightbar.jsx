import {
  CardActionArea,
  Container,
  Typography,
  makeStyles,
} from "@material-ui/core";
import {
  Bookmark,
  ExitToApp,
  Home,
  ListAlt,
  Person,
  PhotoCamera,
  PlayCircleOutline,
  Settings,
  Storefront,
  TabletMac,
} from "@material-ui/icons";

const useStyle = makeStyles((theme) => ({
  continer: {
    position: "sticky",
    top: "0",
    height: "100vh",
    backgroundColor: theme.palette.primary.main,
    color: "#fff",
    paddingTop: theme.spacing(9),
    [theme.breakpoints.up("sm")]: {
      backgroundColor: "#fff",
      color: "#555",
      border: "1px solid #f8f8f8",
    },
  },
  item: {
    display: "flex",
    alignItems: "center",
    marginBottom: theme.spacing(1),
    [theme.breakpoints.up("sm")]: {
      marginBottom: theme.spacing(1),
      cursor: "pointer",
    },
  },
  text: {
    fontWeight: "500",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  icon: {
    marginLeft: theme.spacing(1),
    [theme.breakpoints.up("sm")]: {
      fontSize: "18px",
    },
  },
  box: {
    display: "flex",
    justifyContent: "right",
    height: "50px",
    paddingRight: 10,
  },
}));

function Rightbar() {
  const classes = useStyle();
  return (
    <Container className={classes.continer}>
      <div className={classes.item}>
        <CardActionArea className={classes.box}>
          <Home className={classes.icon} />
          <Typography className={classes.text}>خانه</Typography>
        </CardActionArea>
      </div>

      <div className={classes.item}>
        <CardActionArea className={classes.box}>
          {" "}
          <Person className={classes.icon} />
          <Typography className={classes.text}>دوستان</Typography>
        </CardActionArea>
      </div>
      <div className={classes.item}>
        <CardActionArea className={classes.box}>
          {" "}
          <ListAlt className={classes.icon} />
          <Typography className={classes.text}>لیست ها</Typography>
        </CardActionArea>
      </div>
      <div className={classes.item}>
        <CardActionArea className={classes.box}>
          {" "}
          <PhotoCamera className={classes.icon} />
          <Typography className={classes.text}>دوربین</Typography>
        </CardActionArea>
      </div>
      <div className={classes.item}>
        <CardActionArea className={classes.box}>
          {" "}
          <PlayCircleOutline className={classes.icon} />
          <Typography className={classes.text}>ویدئو</Typography>
        </CardActionArea>
      </div>
      <div className={classes.item}>
        <CardActionArea className={classes.box}>
          {" "}
          <TabletMac className={classes.icon} />
          <Typography className={classes.text}>اپ</Typography>
        </CardActionArea>
      </div>

      <div className={classes.item}>
        <CardActionArea className={classes.box}>
          <Bookmark className={classes.icon} />
          <Typography className={classes.text}>مجموعه ها</Typography>
        </CardActionArea>
      </div>
      <div className={classes.item}>
        <CardActionArea className={classes.box}>
          <Storefront className={classes.icon} />
          <Typography className={classes.text}>بازار</Typography>
        </CardActionArea>
      </div>
      <div className={classes.item}>
        <CardActionArea className={classes.box}>
          <Settings className={classes.icon} />
          <Typography className={classes.text}>تنظیمات</Typography>
        </CardActionArea>
      </div>
      <div className={classes.item}>
        <CardActionArea className={classes.box}>
          <ExitToApp className={classes.icon} />
          <Typography className={classes.text}>خروج</Typography>
        </CardActionArea>
      </div>
    </Container>
  );
}

export default Rightbar;
