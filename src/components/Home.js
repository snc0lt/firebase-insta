import React, { useState, useEffect } from 'react';
import Post from './Post';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles'
import { db } from "../Config";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));


function Home() {
  const [ posts, setPost ] = useState([])

  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container spacing={4}>
        <Grid item sm={3}>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Post />
        </Grid>
        <Grid item sm={3}>
        </Grid>
      </Grid>
    </div>
  );
}

export default Home;
