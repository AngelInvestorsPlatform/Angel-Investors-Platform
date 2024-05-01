import { useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

// @mui material components
import Icon from "@mui/material/Icon";
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';

// Soft UI Dashboard React components
import SoftTypography from "components/SoftTypography";
import SoftBadge from 'components/SoftBadge';

function OfferStatus({ response, Rejection }) {
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const handleReasonClick = () => {
    setOpen(true);
  };

  const getColor = () => {
    if (response === "accepted") {
      return "success";
    } else if (response === "rejected") {
      return "error";
    } else if (response === "pending") {
      return "secondary";
    }
    return "light"; // You can set a default color or handle other cases as needed
  };

  return (
    <>
      <SoftBadge
        variant="contained"
        badgeContent={response}
        color={getColor()}
        size="xs"
        container
      />
      {response === "rejected" && (
        <>
          &nbsp;
          <Link component="button" onClick={handleReasonClick}><Icon>message</Icon></Link>
          <Dialog open={open} onClose={handleClose}>
            <DialogTitle>Reason for Rejection</DialogTitle>
            <DialogContent>
              <SoftTypography variant="caption" color="secondary">
                {Rejection ? Rejection : "No reason provided"} {/* This will safely handle undefined or null */}
              </SoftTypography>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose}>Close</Button>
            </DialogActions>
          </Dialog>
        </>
      )}
    </>
  );
}

OfferStatus.propTypes = {
  response: PropTypes.string.isRequired,
  Rejection: PropTypes.string,
};

export default OfferStatus;
