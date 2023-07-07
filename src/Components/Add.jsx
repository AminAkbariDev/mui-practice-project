import {
  Container,
  makeStyles,
  Tooltip,
  Fab,
  Modal,
  TextField,
  MenuItem,
  RadioGroup,
  FormControlLabel,
  Radio,
  FormLabel,
  Button,
  FormControl,
  Select,
  InputLabel,
  Snackbar,
} from "@material-ui/core";
import { Add as AddIcon } from "@material-ui/icons";
import { useState } from "react";
import MuiAlert from "@material-ui/lab/Alert";


const useStyle = makeStyles((theme) => ({
  fab: {
    position: "fixed",
    bottom: 15,
    right: 20,
  },
  container: {
    width: 500,
    height: 550,
    backgroundColor: "#fff",
    position: "absolute",
    paddingTop: 25,
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    margin: "auto",
    [theme.breakpoints.down("sm")]: {
      width: "100vw",
      height: "100vh",
    },
  },
  form: {
    padding: theme.spacing(2),
  },
  item: {
    marginBottom: theme.spacing(5),
  },
  select: {
    width: "100%",
  },
  label: {
    display: "block",
    width: "94%",
    transformOrigin: "top right",
  },
}));



function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

function Add() {
  const classes = useStyle();
  const [open, setOpen] = useState(false);
  const [openAlert, setAlert] = useState(false);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
  
    setAlert(false);
  };
  

  return (
    <>
      <Tooltip
        title="افزودن پست"
        aria-label="add"
        onClick={() => setOpen(true)}
      >
        <Fab color="primary" className={classes.fab}>
          <AddIcon />
        </Fab>
      </Tooltip>
      <Modal open={open}>
        <Container className={classes.container}>
          <form autoComplete="off" className={classes.Form}>
            <div className={classes.item}>
              <TextField placeholder="عنوان" style={{ width: "100%" }} />
            </div>
            <div className={classes.item}>
              <TextField
                id="outlined-multiline-static"
                label="پیام شما"
                multiline
                defaultValue="داستان خودت رو بگو..."
                variant="outlined"
                style={{ width: "100%" }}
              />
            </div>
            <div className={classes.item}>
              <FormControl className={classes.select}>
                <InputLabel
                  htmlFor="filled-age-native-simple"
                  className={classes.label}
                >
                  انتخاب دسترسی
                </InputLabel>
                <Select>
                  <MenuItem value="public">عمومی</MenuItem>
                  <MenuItem value="private">خصوصی</MenuItem>
                  <MenuItem value="frined">نمایش به دوستان</MenuItem>
                </Select>
              </FormControl>
            </div>

            <div className={classes.item}>
              <FormLabel component="legend">دسترسی کامنت گذاری</FormLabel>
              <RadioGroup>
                <FormControlLabel
                  value="all"
                  control={<Radio size="small" />}
                  label="برای همه"
                />
                <FormControlLabel
                  value="friends"
                  control={<Radio size="small" />}
                  label="برای دوستان"
                />
                <FormControlLabel
                  value="nobody "
                  control={<Radio size="small" />}
                  label="هیچکس"
                />
                <FormControlLabel
                  value="custom"
                  control={<Radio size="small" />}
                  disabled
                  label="دسترسی ویژه"
                />
              </RadioGroup>
            </div>
            <div className={classes.item}>
              <Button
                variant="outlined"
                color="primary"
                style={{ marginLeft: "10px" }}
                onClick={() => setAlert(true)}
              >
                ارسال
              </Button>
              <Button
                variant="outlined"
                color="secondary"
                onClick={() => setOpen(false)}
              >
                انصراف
              </Button>
            </div>
          </form>
        </Container>
      </Modal>

      <Snackbar open={openAlert} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success">
          پست با موفقیت ارسال شد!
        </Alert>
      </Snackbar>
    </>
  );
}

export default Add;
