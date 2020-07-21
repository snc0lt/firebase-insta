import React, { useState, useEffect } from 'react';
import Post from './Post';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles'
import { db } from "../Config";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    overflow: 'hidden'
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));


function Home() {
  const [ posts, setPosts ] = useState([])

  useEffect(() => {
    db.collection('posts').onSnapshot(snapShot => {
      setPosts(snapShot.docs.map(doc => ({id: doc.id, post: doc.data()})))
    })  
  }, [])

  
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container spacing={4}>
        <Grid item sm={3}>
        </Grid>
        <Grid item xs={12} sm={5}>
          {
            posts.map(({post, id}) => (
              <Post post={post} key={id}/>
            ))
          }
        </Grid>
        <Grid item sm={3}>
        </Grid>
      </Grid>
    </div>
  );
}

export default Home;
