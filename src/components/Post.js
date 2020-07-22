import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';


const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: '100%',
    marginTop: 20,
    height: 'auto',
  },
  media: {
    minHeight: 0,
    height: 'auto',
    width: '100%',
    paddingTop: '100%', 
    objectFit: 'contain'
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export default function Post({ post }) {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            R
          </Avatar>
        }
        title={post && post.username}
      />
      <CardMedia
        className={classes.media}
        image={post && post.postUrl}
        alt='Image'
      />
      <CardContent style={{display: 'flex'}}>
        <Typography style={{marginRight: 10}} variant="body2" color='textPrimary' component='h5'>
          {post && post.username}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {post && post.caption}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
      </CardActions>
      <CardContent>
        <Typography paragraph>
          Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10
          minutes.
          </Typography>
      </CardContent>
    </Card>
  );
}
