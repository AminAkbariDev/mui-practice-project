import { Card, CardActionArea,CardContent, makeStyles,Button, CardMedia, Typography, CardActions } from "@material-ui/core";

const useStyle = makeStyles((theme)=> (
  {
    card:{
        marginBottom:theme.spacing(5),
    },
    media: {
      height: "250px",
      [theme.breakpoints.down("sm")]:{
        height:150,
      }
    },
  }))

function Post() {
  const classes = useStyle(); 
  return (
    <Card className={classes.card}>
        <CardActionArea>
            <CardMedia className={classes.media}
            title="پست اول" 
            image="https://humannatureatwork.com/wp-content/uploads/2016/03/Depositphotos_36606389_original.jpg" />
       
        <CardContent>
            <Typography gutterBottom variant="h5">این پست اول است</Typography>
            <Typography variant="body1">لورم ایپسوم فلان است برای ساخت پروژه متریال لورم ایپسوم فلان است برای ساخت پروژه متریال لورم ایپسوم فلان است برای ساخت پروژه متریال لورم ایپسوم فلان است برای ساخت پروژه متریال لورم ایپسوم فلان است برای ساخت پروژه متریال لورم ایپسوم فلان است برای ساخت پروژه متریال </Typography>
        </CardContent>
        <CardActions>
            <Button size="small" color="primary">بیشتر بخوانید</Button>
            <Button size="small" color="primary">اشتراک گذاری</Button>
        </CardActions>
        </CardActionArea>
    </Card>
  );
}

export default Post;
