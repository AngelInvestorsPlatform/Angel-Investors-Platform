import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

//for API
import axios from "axios";

//for user auth global context
import { useAuthUser } from "context/authContext";

// @mui material components
import Grid from "@mui/material/Grid";
import Icon from "@mui/material/Icon";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";

// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";
import SoftInput from "components/SoftInput";
import SoftTypography from "components/SoftTypography";
import SoftBadge from "components/SoftBadge";
import SoftAlert from "components/SoftAlert";
import SoftButton from "components/SoftButton";

function Add({ response, startupID, startupName, fullName, dealType }) {
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

  const [Valuation, setValuation] = useState("");
  const [allocation, setAllocation] = useState("");
  const [leadInvest, setLeadInvest] = useState("");
  const [totalCarry, setTotalCarry] = useState("");
  const [minInvestment, setMinInvestment] = useState("");
  const [deadline, setDeadline] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const [memo, setMemo] = useState("");
  const { userData } = useAuthUser();
  const token = userData ? userData.token : " ";

  const handleInputChange = (setter) => (event) => {
    setter(event.target.value);
  };

  const [alert, setAlert] = useState({ message: "", type: "" });

  const onFileChange = (event) => {
    const file = event.target.files[0];
    if (!file.type.includes("pdf")) {
      setAlert({
        message: "Please select a PDF file!",
        type: "error",
      });
      return;
    }
    setSelectedFile(file);
  };



  const handleSubmit = async () => {
    try {
      if (
        !Valuation ||
        !allocation ||
        !leadInvest ||
        !totalCarry ||
        !minInvestment ||
        !deadline ||
        !memo
      ) {
        setAlert({
          message: "All fields must be filled",
          type: "error",
        });
        return;
      }

      const config = {
        headers: {
          Authorization: `Token ${token}`,
        },
      };
      if (dealType == "startup") {
        const response = await axios.post(
          `${process.env.REACT_APP_DJANGO_API}deals/add-New-Deal/`,
          {
            startup_id: startupID,
            memo: memo,
            valuation: Valuation,
            allocation: allocation,
            lead_investment: leadInvest,
            total_curry: totalCarry,
            minimum_investment: minInvestment,
            deadline: deadline,
          },
         config
        );

        if (response.status >= 200 && response.status < 300) {
          setAlert({
            message: "Your deal has been sent to syndicate successfully.",
            type: "success",
          });
        }
        
      } else if (dealType == "ExclusiveStartup") {
        const response = await axios.post(
          `${process.env.REACT_APP_DJANGO_API}deals/add-New-Deal/`,
          {
            exclusive_startup_id: startupID,
            memo: memo,
            valuation: Valuation,
            allocation: allocation,
            lead_investment: leadInvest,
            total_curry: totalCarry,
            minimum_investment: minInvestment,
            deadline: deadline,
          },
          config
        );

        if (response.status >= 200 && response.status < 300) {
          setAlert({
            message: "Your deal has been sent to syndicate successfully.",
            type: "success",
          });
        }
      }


    } catch (error) {
      console.log(error);
      if (error.response) {
        setAlert({
          message: error.response.data.non_field_errors,
          type: "error",
        });
      } else {
        // Something happened in setting up the request that triggered an Error
        setAlert({
          message: error.message,
          type: "error",
        });
      }
    }
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
                <SoftInput type="text" value={startupName} name="nameStartup" disabled />
              </SoftBox>
            </Grid>

            <Grid item>
              <SoftBox mb={2} mx={2}>
                <SoftTypography component="label" variant="caption" fontWeight="bold">
                  Owner
                </SoftTypography>
                <SoftInput type="text" value={fullName} name="Owner" disabled />
              </SoftBox>
            </Grid>

            <Grid item>
              <SoftBox mb={2} mx={2}>
                <SoftTypography component="label" variant="caption" fontWeight="bold">
                  Valuation
                </SoftTypography>
                <SoftInput
                  type="number"
                  name="Valuation"
                  value={Valuation}
                  onChange={handleInputChange(setValuation)}
                />
              </SoftBox>
            </Grid>

            <Grid item>
              <SoftBox mb={2} mx={2}>
                <SoftTypography component="label" variant="caption" fontWeight="bold">
                  Allocation
                </SoftTypography>
                <SoftInput
                  type="number"
                  name="Allocation"
                  value={allocation}
                  onChange={handleInputChange(setAllocation)}
                />
              </SoftBox>
            </Grid>

            <Grid item>
              <SoftBox mb={2} mx={2}>
                <SoftTypography component="label" variant="caption" fontWeight="bold">
                  lead`s invest
                </SoftTypography>
                <SoftInput
                  type="number"
                  name="leadInvest"
                  value={leadInvest}
                  onChange={handleInputChange(setLeadInvest)}
                />
              </SoftBox>
            </Grid>

            <Grid item>
              <SoftBox mb={2} mx={2}>
                <SoftTypography component="label" variant="caption" fontWeight="bold">
                  Total Carry
                </SoftTypography>
                <SoftInput
                  type="text"
                  name="Total Carry"
                  value={totalCarry}
                  onChange={handleInputChange(setTotalCarry)}
                />
              </SoftBox>
            </Grid>

            <Grid item>
              <SoftBox mb={2} mx={2}>
                <SoftTypography component="label" variant="caption" fontWeight="bold">
                  min. investment
                </SoftTypography>
                <SoftInput
                  type="number"
                  name="minInvestment"
                  value={minInvestment}
                  onChange={handleInputChange(setMinInvestment)}
                />
              </SoftBox>
            </Grid>

            <Grid item>
              <SoftBox mb={2} mx={2}>
                <SoftTypography component="label" variant="caption" fontWeight="bold">
                  Deadline
                </SoftTypography>
                <SoftInput
                  type="Date"
                  name="Deadline"
                  value={deadline}
                  onChange={handleInputChange(setDeadline)}
                />
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
                  value={memo}
                  onChange={handleInputChange(setMemo)}
                />
              </SoftBox>
            </Grid>
          </Grid>

          {/* button */}
          <Grid container justifyContent="center">
            <Grid item>
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
                    onClick={handleSubmit}
                    style={{ padding: "15px 32px" }}
                  >
                    add deal to Syndicate
                  </SoftButton>
                </SoftBox>
              </SoftBox>
            </Grid>
          </Grid>
          {alert.message && (
            <SoftAlert
              color={alert.type}
              dismissible
              onClose={() => setAlert({ message: "", type: "" })}
            >
             <SoftTypography variant="caption" color="light" >{alert.message}</SoftTypography> 
            </SoftAlert>
          )}

        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

Add.propTypes = {
  response: PropTypes.string,
  startupID: PropTypes.string.isRequired,
  startupName: PropTypes.string.isRequired,
  fullName: PropTypes.string.isRequired,
  // is't startup or exclusive startup
  dealType: PropTypes.string.isRequired,
};

export default Add;
