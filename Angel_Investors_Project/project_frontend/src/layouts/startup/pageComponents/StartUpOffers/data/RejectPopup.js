import React, { useState } from 'react';
import SoftButton from "components/SoftButton"
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';

const RejectPopup = () => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <SoftButton variant="contained" color="success" size="small" onClick={handleClose}>
        Accept
      </SoftButton>
      <SoftButton variant="contained" color="error" size="small" onClick={handleClickOpen}>
        Reject
      </SoftButton>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Reject Offer</DialogTitle>
        <DialogContent>
          <DialogContentText style={{ fontSize: 'smaller' }}>
            Please provide a reason for rejecting the offer.
          </DialogContentText>
          <TextField
            focused
            margin="dense"
            id="message"
            label="Message"
            multiline
            rows={4}
            fullWidth
            variant="standard"
            color="info"
          />
        </DialogContent>
        <DialogActions>
          <SoftButton onClick={handleClose}>Cancel</SoftButton>
          <SoftButton variant="gradient" color="info">
            Confirm Rejection
          </SoftButton>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default RejectPopup;