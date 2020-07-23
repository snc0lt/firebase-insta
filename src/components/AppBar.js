import React, { useContext } from 'react';
import { Link } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { CssBaseline, Container } from '@material-ui/core';
import { UserContext } from "../context/user";
import { auth } from '../Config';
import { useHistory } from "react-router-dom";
import AddIcon from '@material-ui/icons/Add';
import Tooltip from '@material-ui/core/Tooltip'
import Fab from '@material-ui/core/Fab';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  fab: {
    margin: theme.spacing(1),
  }
}));

export default function ButtonAppBar() {
  const history = useHistory()
  const classes = useStyles()
  const { currentUser } = useContext(UserContext)

  const onLogOut = () => {
    auth.signOut()
    history.push('/login')
  }
  return (
    <div className={classes.root}>
      <AppBar position="static" color='transparent'>
        <CssBaseline>
          <Container maxWidth='md'>
            <Toolbar>
              <Typography variant="h6" className={classes.title}>
                <Link className='button_link fake' to='/home'>
                  fakestagram
                </Link>
              </Typography>
              {
                currentUser ? (
                  <>
                    <Tooltip title='post'>
                      <Link className='button_link' to='/post'>
                        <Fab color="primary" size='small' className={classes.fab}>
                          <AddIcon />
                        </Fab>
                      </Link>
                    </Tooltip>
                    <Button onClick={onLogOut}>
                      Logout
                    </Button>
                  </>
                ) : (
                    <>
                      <Button >
                        <Link className='button_link' to='/login'>
                          Login
                      </Link>
                      </Button>
                      <Button >
                        <Link className='button_link' to='/signup'>
                          Signup
                      </Link>
                      </Button>
                    </>
                  )
              }
            </Toolbar>
          </Container>
        </CssBaseline>
      </AppBar>
    </div>
  );
}
