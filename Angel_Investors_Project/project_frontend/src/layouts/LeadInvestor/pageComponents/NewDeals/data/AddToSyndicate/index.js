import { useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

// @mui material components
import Grid from "@mui/material/Grid";
import Icon from "@mui/material/Icon";
import Card from "@mui/material/Card";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions'


// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";
import SoftInput from "components/SoftInput";
import SoftTypography from "components/SoftTypography";
import SoftBadge from 'components/SoftBadge';

import SoftButton from "components/SoftButton";

const Add = ({ response }) => {
    const [open, setOpen] = useState(false);
  
    const handleAddClick = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
  
    if (response !== "accepted") {
      return null; // Do not render anything if response is not "Accepted"
    }

        
    const [selectedFile, setSelectedFile] = useState(null);

    const onFileChange = (event) => {
      const file = event.target.files[0];
      if (!file.type.includes("pdf")) {
        alert("Please select a PDF file!");
        return;
      }
      setSelectedFile(file);
    };
  
    return (
      <>
        <SoftButton color="info" onClick={handleAddClick}>
          <SoftTypography variant="caption" color="light">
            Add To Syndicate
          </SoftTypography>
        </SoftButton>
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>Add to Syndicate</DialogTitle>
          <DialogContent>
            {/* Add content for the dialog here */}
            <Grid container justifyContent="center">
              <Grid item>
                <SoftBox mb={2} mx={2}>
                  <SoftTypography component="label" variant="caption" fontWeight="bold">
                    Startup name
                  </SoftTypography>
                  <SoftInput type="text" name="nameStartup" />
                </SoftBox>
              </Grid>

              <Grid item>
                <SoftBox mb={2} mx={2}>
                  <SoftTypography component="label" variant="caption" fontWeight="bold">
                    Owner
                  </SoftTypography>
                  <SoftInput type="text" name="Owner" />
                </SoftBox>
              </Grid>

              <Grid item>
                <SoftBox mb={2} mx={2}>
                  <SoftTypography component="label" variant="caption" fontWeight="bold">
                    evaluation
                  </SoftTypography>
                  <SoftInput type="text" name="evaluation" />
                </SoftBox>
              </Grid>

              <Grid item>
                <SoftBox mb={2} mx={2}>
                  <SoftTypography component="label" variant="caption" fontWeight="bold">
                    Allocation
                  </SoftTypography>
                  <SoftInput type="text" name="Allocation" />
                </SoftBox>
              </Grid>

              <Grid item>
                <SoftBox mb={2} mx={2}>
                  <SoftTypography component="label" variant="caption" fontWeight="bold">
                    lead`s invest
                  </SoftTypography>
                  <SoftInput type="text" name="leadInvest" />
                </SoftBox>
              </Grid>

              <Grid item>
                <SoftBox mb={2} mx={2}>
                  <SoftTypography component="label" variant="caption" fontWeight="bold">
                    Total Carry
                  </SoftTypography>
                  <SoftInput type="text" name="Total Carry" />
                </SoftBox>
              </Grid>

              <Grid item>
                <SoftBox mb={2} mx={2}>
                  <SoftTypography component="label" variant="caption" fontWeight="bold">
                    min. investment
                  </SoftTypography>
                  <SoftInput type="text" name="minInvestment" />
                </SoftBox>
              </Grid>

              <Grid item>
                <SoftBox mb={2} mx={2}>
                  <SoftTypography component="label" variant="caption" fontWeight="bold">
                    Deadline
                  </SoftTypography>
                  <SoftInput type="Date" name="Deadline" />
                </SoftBox>
              </Grid>
            </Grid>
            {/* Pitch Deck */}
            <Grid container justifyContent="center">
              <Grid item>
                <SoftBox mb={2}>
                  <SoftTypography component="label" variant="caption" fontWeight="bold">
                    Pitch Deck
                  </SoftTypography>

                  <SoftInput
                    type="file"
                    placeholder="Please select a PDF file"
                    // required
                    onChange={onFileChange}
                  />
                  {selectedFile && (
                    <SoftBox>
                      <span style={{ fontSize: "16px", color: "darkpurple" }}>
                        Selected File: {selectedFile.name} - Size: {selectedFile.size} bytes
                      </span>{" "}
                    </SoftBox>
                  )}
                </SoftBox>
              </Grid>
            </Grid>

            {/* the memo start here */}
            <Grid container justifyContent="center">
              <Grid item>
                <SoftBox mb={2} mx={9}>
                  <SoftTypography component="label" variant="caption" fontWeight="bold">
                    Memo
                  </SoftTypography>
                  <TextField
                    fullWidth
                    placeholder="Enter the full details of the deal you want to present to investors"
                    multiline
                    rows={7}
                  />
                </SoftBox>
              </Grid>
            </Grid>

            {/* button */}
            <Grid container justifyContent="center">
              <Grid item >
                <SoftBox
                  mb={3}
                  width="100"
                  display="flex"
                  flex="row"
                  flexWrap="wrap"
                  justifyContent="center"
                >
                  <SoftBox mt={4} mb={1}>
                    <SoftButton
                      variant="gradient"
                      color="info"
                      fullWidth
                      circular
                      style={{ padding: "15px 32px" }}
                    >
                      add deal to Syndicate
                    </SoftButton>
                  </SoftBox>
                </SoftBox>
              </Grid>
            </Grid>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Close</Button>
          </DialogActions>
        </Dialog>
      </>
    );
  };

  Add.propTypes = {
    response: PropTypes.string,
  };

  export default Add;