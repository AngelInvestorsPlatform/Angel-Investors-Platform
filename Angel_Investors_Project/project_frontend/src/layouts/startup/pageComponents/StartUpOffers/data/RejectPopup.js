import React, { useState } from "react";
import PropTypes from "prop-types";
import axios from "axios";

// Import Material-UI components
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';

// Custom component imports if available
import SoftButton from "components/SoftButton"
import SoftBox from "components/SoftBox";

function OfferDecision({ id, token }) {
  const [open, setOpen] = useState(false);
  const [rejectionReason, setRejectionReason] = useState("");

  const handleAccept = async () => {
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_DJANGO_API}startups/offers-decision/${id}/`,
        { action: "accept" },
        { headers: { Authorization: `Token ${token}` } }
      );
      console.log("Offer accepted:", response.data);
      if (response.status >= 200 && response.status < 300) {
        window.location.reload();  // Refresh the page
      }
      // Optionally add some UI feedback here
    } catch (error) {
      console.error("Error accepting offer:", error);
    }
  };

  const handleReject = async () => {
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_DJANGO_API}startups/offers-decision/${id}/`,
        { action: "reject", rejection_reason: rejectionReason },
        { headers: { Authorization: `Token ${token}` } }
      );
      console.log("Offer rejected:", response.data);
      handleClose();  // Close the dialog after submission
      if (response.status >= 200 && response.status < 300) {
        window.location.reload();  // Refresh the page
      }
    } catch (error) {
      console.error("Error rejecting offer:", error);
    }
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleRejectionReasonChange = (event) => {
    setRejectionReason(event.target.value);
  };

  return (
    <div>
      <SoftBox display="flex" alignItems="center" >
      <SoftBox m={0.5}>
        <SoftButton variant="contained" color="success" size="small"  onClick={handleAccept}>
          Accept
        </SoftButton>
        </SoftBox>
        <SoftBox  m={0.5}>
        <SoftButton variant="contained" color="error" size="small" onClick={handleClickOpen}>
          Reject
        </SoftButton>
      </SoftBox>
      </SoftBox>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Reject Offer</DialogTitle>
        <DialogContent>
          <DialogContentText style={{ fontSize: 'smaller' }}>
            Please provide a reason for rejecting the offer.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="message"
            label="Rejection Reason"
            multiline
            rows={4}
            fullWidth
            variant="standard"
            color="info"
            value={rejectionReason}
            onChange={handleRejectionReasonChange}
          />
        </DialogContent>
        <DialogActions>
          <SoftButton onClick={handleClose}>Cancel</SoftButton>
          <SoftButton variant="gradient" color="info" onClick={handleReject}>
            Confirm Rejection
          </SoftButton>
        </DialogActions>
      </Dialog>
    </div>
  );
}

OfferDecision.propTypes = {
  id: PropTypes.number.isRequired,
  token: PropTypes.string.isRequired
};

export default OfferDecision;