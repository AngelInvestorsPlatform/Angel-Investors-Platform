/**
=========================================================
* Soft UI Dashboard React - v4.0.1
=========================================================

* Product Page: https://www.creative-tim.com/product/soft-ui-dashboard-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// react-routers components
import { Link } from "react-router-dom";

// prop-types is library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
import Card from "@mui/material/Card";
import Divider from "@mui/material/Divider";
import Tooltip from "@mui/material/Tooltip";
import Icon from "@mui/material/Icon";
import Grid from "@mui/material/Grid";

// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SoftBadge from "components/SoftBadge";
import SoftButton from "components/SoftButton";

import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import FileOpenIcon from "@mui/icons-material/FileOpen";

// Soft UI Dashboard React base styles
import colors from "assets/theme/base/colors";
import typography from "assets/theme/base/typography";

function DealsInfoCard({ title, description, web, file, sectors }) {
  const labels = [];
  const values = [];
  const { size } = typography;

  const renderBadges = sectors.map((sector, key) => (
    <SoftBadge key={key} badgeContent={sector} color="info" variant="gradient" size="sm" />
  ));

  return (
    <Card sx={{ height: "100%" }}>
      <SoftBox display="flex" p={2} pt={4} pr={2}>
        <SoftTypography variant="button" fontWeight="bold" textTransform="capitalize">
          &nbsp;
        </SoftTypography>
        {renderBadges}
      </SoftBox>
      <SoftBox opacity={0.3}>
        <Divider />
      </SoftBox>
      <SoftBox display="flex" justifyContent="space-between" alignItems="center" pt={2} px={2}>
        <SoftTypography variant="h5" fontWeight="bold" textTransform="capitalize">
          {title}
        </SoftTypography>
      </SoftBox>
      <SoftBox p={2}>
        <SoftBox mb={2} lineHeight={1}>
          <div
            style={{
              padding: "25px",
              margin: "20px",
              borderRadius: "8px",
              boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
              whiteSpace: "pre-wrap", // Ensures that whitespace and line breaks are preserved, and text is wrapped
              lineHeight: "1.6", // Adjust line spacing
              textAlign: "justify", // Justify text for better alignment
              textColor:"gray",
              fontSize:"17px",

            }}
          >
            <p>{description}</p>
          </div>
        </SoftBox>
        <SoftBox opacity={0.3}>
          <Divider />
        </SoftBox>
        <SoftBox width="auto" display="flex" justifyContent="center" alignItems="center">
          <Grid container spacing={3} justifyContent="center" alignItems="center">
            <Grid item xs={12} sm={6} xl={4}>
              <SoftButton variant="text" color="info" gradient onClick={file}>
                {" "}
                <FileOpenIcon /> &nbsp; Pitch Deck &nbsp; <KeyboardDoubleArrowRightIcon />
              </SoftButton>
            </Grid>
            <Grid item xs={12} sm={6} xl={4}>
              <SoftButton variant="text" color="info" gradient onClick={web}>
                {" "}
                <Icon>language</Icon> &nbsp; visit website &nbsp;
                <KeyboardDoubleArrowRightIcon />
              </SoftButton>
            </Grid>
          </Grid>
        </SoftBox>
      </SoftBox>
    </Card>
  );
}

// Typechecking props for the DealsInfoCard
DealsInfoCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  sectors: PropTypes.arrayOf(PropTypes.string).isRequired,
  web: PropTypes.string,
  file: PropTypes.string,
  action: PropTypes.shape({
    route: PropTypes.string.isRequired,
    tooltip: PropTypes.string.isRequired,
  }).isRequired,
};

export default DealsInfoCard;
