import {
  AppBar,
  InputBase,
  Toolbar,
  Typography,
  makeStyles,
  alpha,
  Badge,
  Avatar,
} from "@material-ui/core";
import { Cancel, Mail, Notifications, Search } from "@material-ui/icons";
import { useState } from "react";

const useStyle = makeStyles((theme) => ({
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
  },
  logoLg: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  logoSm: {
    display: "block",
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  search: {
    display: "flex",
    alignItems: "center",
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    borderRadius: theme.shape.borderRadius,
    width: "50%",
    [theme.breakpoints.down("xs")]: {
      display: (props) => (props.open ? "flex" : "none"),
      width: "60%",
    },
  },
  input: {
    color: "#fff",
    marginRight: theme.spacing(1),
    width: "100%     ",
  },
  iconDiv: {
    display: (props) => (props.open ? "none" : "flex"),
    alignItems: "center",
  },
  badge: {
    marginLeft: theme.spacing(2),
  },
  cancel: {
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  searchButton: {
    display: "none",
    marginLeft: theme.spacing(2),
    [theme.breakpoints.down("xs")]: {
      display: "block",
    },
  },
}));

function Navbar() {
  const [open, setOpen] = useState(false);
  const classes = useStyle({ open });
  return (
    <AppBar>
      <Toolbar className={classes.toolbar}>
        <Typography variant="h6" className={classes.logoLg}>
          وبلاگ امین
        </Typography>
        <Typography variant="h6" className={classes.logoSm}>
          امین
        </Typography>
        <div className={classes.search}>
          <Search />
          <InputBase placeholder="جستجو کنید..." className={classes.input} />
          <Cancel className={classes.cancel} onClick={() => setOpen(false)} />
        </div>
        <div className={classes.iconDiv}>
          <Search
            className={classes.searchButton}
            onClick={() => setOpen(true)}
          />
          <Badge
            overlap="circular"
            badgeContent={4}
            color="secondary"
            className={classes.badge}
          >
            <Mail />
          </Badge>
          <Badge
            overlap="circular"
            badgeContent={3}
            color="secondary"
            className={classes.badge}
          >
            <Notifications />
          </Badge>
          <Avatar
            alt="Amin Akbari"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrPf5JtWX65XwbOr-KHHcn-97HklVvmv8c3w&usqp=CAU"
          />
        </div>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
