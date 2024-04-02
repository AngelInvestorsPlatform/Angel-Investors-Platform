import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';
import SoftButton from "components/SoftButton"

const InviteMembersPopup = () => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <SoftButton variant="gradient" color="info" onClick={handleClickOpen}>
        Invite Member
      </SoftButton>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Invite Member</DialogTitle>
        <DialogContent>
          <DialogContentText style={{fontSize: 'smaller'}}>
            Invite a new member to your syndicate.
          </DialogContentText>
          <TextField
          focused
          margin="dense"
          id="email"
          label="Email"
          type="email"
          fullWidth
          variant="standard" 
          color="info"
        />
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
          <Button onClick={handleClose}>Cancel</Button>
          <SoftButton variant="gradient" color="info">Send Invitation</SoftButton>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default InviteMembersPopup;
