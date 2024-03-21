import React from "react";
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";


import Divider from '@mui/material/Divider';
import Icon from "@mui/material/Icon";
import Grid from "@mui/material/Grid";

import SoftBox from 'components/SoftBox';
import SoftTypography from 'components/SoftTypography';
import SoftAvatar from "components/SoftAvatar";
import SoftButton from "components/SoftButton";
import SoftBadge from "components/SoftBadge";

import Img from "assets/images/small-logos/logo-slack.svg";

import { Dialog, DialogContent, Paper } from "@mui/material";

function SyndicateDialog({ open, onClose }) {
    const sectors = ["Biotech", "Adtech", "Analytics", "Market"];

    const renderBadges = sectors.map((sector, key) => (
        <SoftBadge key={key} badgeContent={sector} color="dark" variant="gradient" size="md" />
      ));

  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="md">
      <DialogContent>
        <Paper style={{ height: "100vh", maxHeight: "100vh",  padding: "20px" }}>
    
        <Grid container alignItems="center" spacing={2}>
      {/* First Row */}
      <Grid item xs={8}>
        <SoftBox display="flex" alignItems="center" px={1} py={0.5}>
          <SoftBox mr={2}>
            <SoftAvatar src={Img} alt="img" size="lg" variant="rounded" />
          </SoftBox>
          <SoftBox display="flex" flexDirection="column">
            <SoftTypography variant="h4" fontWeight="medium">
              VainTech
            </SoftTypography>
            <SoftTypography variant="body2" color="secondary">
              Lead : Ahmed Abo Jamal
            </SoftTypography>
          </SoftBox>
        </SoftBox>
      </Grid>
      <Grid item xs={4}>
        <SoftButton
          variant="gradient"
          color="info"
          size="medium"
          component={Link}
          to={"#"} 
        >
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
          <SoftTypography variant="body2" color="secondary" >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur tempus lorem vel eros fermentum, sed
            convallis urna aliquet. Vivamus id luctus ligula. Aenean at sem id ipsum placerat viverra. Nulla
            facilisi. Morbi vitae consequat justo. Integer posuere, ligula eget bibendum varius, odio lorem
            fermentum est, at consequat velit elit vitae lorem.
          </SoftTypography>
        </SoftBox>
      </Grid>
      
          {/* Fifth Row */}
          <Grid item xs={12}>
        <Grid container spacing={1}>
          {/* First Box */}
          <Grid item xs={6}>
            <SoftBox border="0.5px solid" borderRadius="4px" p={2} color="secondary" opacity="80%">
              <SoftTypography variant="h6" fontWeight="bold">
                Number of Active Deals
              </SoftTypography>
              <SoftTypography variant="h3" fontWeight="bold" color="info" textGradient>
                5
              </SoftTypography>
            </SoftBox>
          </Grid>

          {/* Second Box */}
          <Grid item xs={6}>
            <SoftBox  border="0.5px solid" borderRadius="4px" p={2} color="secondary" opacity="80%">
              <SoftTypography variant="h6" fontWeight="bold">
                Number of Members
              </SoftTypography>
              <SoftTypography variant="h3" fontWeight="bold" color="info" textGradient >
                10
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
  };

export default SyndicateDialog;
