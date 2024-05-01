import { useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

// @mui material components
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';

// Soft UI Dashboard React components
import SoftTypography from "components/SoftTypography";
import { Message } from "@mui/icons-material";

function ShowOffer({ Message }) {
    const [open, setOpen] = useState(false);
  
    const handleOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
  
    return (
      <>
        <Link variant="contained" color="primary" onClick={handleOpen}>
          Display the offer
        </Link>
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>THE OFFER</DialogTitle>
          <DialogContent>
            <SoftTypography variant="caption" color="secondary">
              {Message}
            </SoftTypography>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Close</Button>
          </DialogActions>
        </Dialog>
      </>
    );
  }

  ShowOffer.propTypes = {
    Message: PropTypes.string.isRequired,
  };

  export default ShowOffer;
