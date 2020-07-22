import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import AddIcon from '@material-ui/icons/Add';
import Tooltip from '@material-ui/core/Tooltip'
import Fab from '@material-ui/core/Fab';
import { makeStyles } from '@material-ui/core/styles';
import PostForm from './PostForm';

const useStyles = makeStyles((theme) => ({
  fab: {
    margin: theme.spacing(1),
  },
  absolute: {
    position: 'absolute',
    bottom: theme.spacing(2),
    right: theme.spacing(3),
  },
}));

export default function PostDialog() {
  const classes = useStyles()
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Tooltip title='post'>
      <Fab color="primary" size='small' className={classes.fab} onClick={handleClickOpen}>
        <AddIcon/>
      </Fab>
      </Tooltip>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogContent>
          <PostForm handleClose={handleClose} />
        </DialogContent>
      </Dialog>
    </div>
  );
}
