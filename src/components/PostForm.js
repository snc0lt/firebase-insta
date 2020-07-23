import React, { useState, useContext } from 'react'
import { storage, db } from '../Config'
import firebase from 'firebase'
import { UserContext } from "../context/user";
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField'
import { useHistory } from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
  input: {
    display: 'none',
  },
  root: {
    height: '90vh',
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
    padding: theme.spacing(2, 6)
  },
  submit: {
    margin: theme.spacing(3),
    display: 'flex',
    justifyContent: 'center'
  },
  progress: {
    width: '100%'
  }
}));


function PostForm() {
  const classes = useStyles()
  const history = useHistory()
  const { currentUser } = useContext(UserContext)
  const [image, setImage] = useState(null)
  const [progress, setProgress] = useState(null)
  const [caption, setcaption] = useState('')

  const handleChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0])
    }
  }
  const handleUpload = () => {
      if (image) {
        storage.ref(`images/${image.name}`).put(image)
        .on(
          'state_changed',
          (snapshot) => {
            const progress = Math.round(
              (snapshot.bytesTransferred / snapshot.totalBytes) * 100
            )
            setProgress(progress)
          },
          (error) => console.log(error),
          () => {
            storage.ref('images').child(image.name).getDownloadURL()
              .then(url => {
                db.collection('posts').add({
                  timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                  caption,
                  postUrl: url,
                  username: currentUser.displayName
                })
                setProgress(0)
                setcaption('')
                setImage(null)
              })
          }
        )
        history.push('/home')
      }
  }
  return (
    <div className={classes.paper}>
      <Typography component="h1" variant="h5">
        do da thing
          </Typography>
      <form className={classes.form} noValidate onSubmit={handleUpload}>
        <TextField
          variant="outlined" value={caption}
          margin="normal" onChange={e => setcaption(e.target.value)}
          required
          fullWidth
          id="caption"
          label="caption"
          name="caption"
          autoFocus
        />
        <span>{image && image.name}</span>
        {progress && <progress value={progress} max='100' className={classes.progress} />}
        <div className={classes.submit}>
          <input
            accept="image/*"
            className={classes.input}
            id="contained-button-file"
            multiple
            type="file"
            onChange={handleChange}
          />
          <label htmlFor="contained-button-file">
            <Button variant="contained" color="primary" component="span">
              File
            </Button>
          </label>
          <Button style={{marginLeft: '5%'}} variant="contained" color="primary" component="span" onClick={handleUpload}>
              Upload
          </Button>
        </div>
      </form>
    </div>
  )
}

export default PostForm
