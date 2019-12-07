import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import IconButton from '@material-ui/core/IconButton';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

export default function AddFeedbackForm({ onCancel, onSubmit }) {
  return (
    <Dialog
      open
      onClose={onCancel}
      aria-labelledby="form-dialog-title"
      maxWidth="sm"
      fullWidth={true}
    >
      <DialogTitle id="form-dialog-title">Add Feedback</DialogTitle>
      <DialogContent>
        <div>
          <IconButton color={undefined} aria-label="Like">
           <ThumbUpIcon />
         </IconButton>
         <IconButton color={undefined} aria-label="Dislike">
           <ThumbDownIcon />
         </IconButton>
        </div>
        <TextField
          label="Name"
          fullWidth
          margin="normal"
        />
        <TextField
          label="Your comments"
          placeholder="Can add multiline text here"
          multiline
          fullWidth
          margin="normal"
          helperText="comments are optional"
        />
      </DialogContent>
      <DialogActions>
      <Button color="default">
          Cancel
        </Button>
        <Button color="primary" variant="contained">
          Submit
        </Button>
      </DialogActions>
    </Dialog>
  );
}