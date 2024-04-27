import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import axios from "axios";
import { useAuthUser } from "context/authContext";

import Divider from "@mui/material/Divider";
import Icon from "@mui/material/Icon";
import Grid from "@mui/material/Grid";

import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SoftAvatar from "components/SoftAvatar";
import SoftButton from "components/SoftButton";
import SoftBadge from "components/SoftBadge";
import SoftAlert from "components/SoftAlert";

import Img from "assets/images/small-logos/logo-slack.svg";

import { Dialog, DialogContent, Paper } from "@mui/material";

function SyndicateDialog({ open, onClose, Data }) {
  const [registerError, setRegError] = useState("");
  const [registerConfirm, setRegConfirm] = useState("");
  const [syndicateID, setSyndicateID] = useState(" ");

  // Correctly handle updates to syndicateID when Data changes
  useEffect(() => {
    if (Data && Data.id) {
      setSyndicateID(Data.id);
    }
  }, [Data]);

    // Auth const
    const { userData } = useAuthUser();
    const token = userData ? userData.token : " ";
    const config = {
        headers: {
          Authorization: `Token ${token}`,
        },
      };

  const ApplyToSyndicate = async () => {
    try {
      console.log("ApplyToSyndicate called ",{syndicateID} );  // Check if this logs when you click the button
      const DJANGO_API = process.env.REACT_APP_DJANGO_API;
      const response = await axios.post(`${DJANGO_API}syndicates/join/${syndicateID}/`, null, config);
      console.log("Inside the request")

      if (response.status >= 200 && response.status < 300) {
        setRegConfirm("Your request to join the Syndicate has been completed successfully");
        console.log("Your request to join the Syndicate has been completed successfully");
        setRegError(""); // Clear any form registerError
      } else {
        setRegError(`Unexpected response status: ${response.status}`);
        console.log('Error response');
        setRegConfirm(""); //Clear any form registerConfirm
      }
    } catch (error) {
      let errorMessage = "Error setting up the request: " + error.message;
      if (error.response) {
        errorMessage = `Request failed with status: ${error.response.status}, message: ${
          error.response.data.message || error.message
        }`;
      } else if (error.request) {
        errorMessage = "No response received from the server.";
      }
      setRegError(errorMessage);
      setRegConfirm(""); //Clear any form registerConfirm
    }
  };

  const sectorsInfo = Data?.sectors ? Data.sectors.split(", ").sort() : [];

  const renderBadges = sectorsInfo.map((sector, key) => (
    <SoftBadge key={key} badgeContent={sector} color="dark" variant="gradient" size="md" />
  ));

  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="md">
      <DialogContent>
        <Paper mb={10} pb={10} style={{ height: "auto", maxHeight: "1000vh", padding: "20px" }}>
          {/*if register Success*/}
          {registerConfirm && (
            <SoftAlert fontSize="small" color="success" mt={2} dismissible>
              {registerConfirm}
            </SoftAlert>
          )}

          {/*if register Fail*/}
          {registerError &&(
            <SoftAlert fontSize="small" color="error" mt={2} dismissible>
              * {registerError}
            </SoftAlert>
          )}

          <Grid container alignItems="center" spacing={2}>
            {/* First Row */}
            <Grid item xs={8}>
              <SoftBox display="flex" alignItems="center" px={1} py={0.5}>
                <SoftBox mr={2}>
                  <SoftAvatar src={Img} alt="img" size="lg" variant="rounded" />
                </SoftBox>
                <SoftBox display="flex" flexDirection="column">
                  <SoftTypography variant="h4" fontWeight="medium">
                  {Data?.syndicate_name || "..."}
                  </SoftTypography>
                  <SoftTypography variant="body2" color="secondary">
                    Lead : {Data?.lead_name || "..."}
                  </SoftTypography>
                </SoftBox>
              </SoftBox>
            </Grid>
            <Grid item xs={4}>
              <SoftButton variant="gradient" color="info" size="medium" onClick={ApplyToSyndicate}>
                Apply To Syndicate
              </SoftButton>
            </Grid>

            {/* Divider */}
            <Grid item xs={12}>
              <Divider />
            </Grid>

            {/* Second Row */}
            <Grid item xs={12}>
              <SoftBox display="flex" py={1} pr={2}>
                <SoftTypography variant="button" fontWeight="bold" textTransform="capitalize">
                  &nbsp;
                </SoftTypography>
                {renderBadges}
              </SoftBox>
            </Grid>

            {/* Divider */}
            <Grid item xs={12}>
              <Divider />
            </Grid>

            {/* Third Row */}
            <Grid item xs={12}>
              <SoftBox>
                <SoftTypography variant="h5" fontWeight="bold">
                  About
                </SoftTypography>
              </SoftBox>
            </Grid>

            {/* Fourth Row */}
            <Grid item xs={12}>
              <SoftBox p={1}>
                <SoftTypography variant="body2" color="secondary">
                  {Data?.about || "..."}
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur tempus lorem
                  vel eros fermentum, sed convallis urna aliquet. Vivamus id luctus ligula.
                </SoftTypography>
              </SoftBox>
            </Grid>

            {/* Fifth Row */}
            <Grid item  xs={12}>
              <Grid container spacing={1}>
                {/* First Box */}
                <Grid item xs={6}>
                  <SoftBox
                    border="0.5px solid"
                    borderRadius="4px"
                    p={2}
                    color="secondary"
                    opacity="80%"
                  >
                    <SoftTypography variant="h6" fontWeight="bold">
                      Number of Active Deals
                    </SoftTypography>
                    <SoftTypography variant="h3" fontWeight="bold" color="info" textGradient>
                      {Data?.active_deals || "..."}
                    </SoftTypography>
                  </SoftBox>
                </Grid>

                {/* Second Box */}
                <Grid item  xs={6}>
                  <SoftBox
                    border="0.5px solid"
                    borderRadius="4px"
                    p={2}
                    color="secondary"
                    opacity="80%"
                  >
                    <SoftTypography variant="h6" fontWeight="bold">
                      Number of Members
                    </SoftTypography>
                    <SoftTypography variant="h3" fontWeight="bold" color="info" textGradient>
                      {Data?.members_count || "..."}
                    </SoftTypography>
                  </SoftBox>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Paper>
      </DialogContent>
    </Dialog>
  );
}

SyndicateDialog.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  Data: PropTypes.object,
};

export default SyndicateDialog;
