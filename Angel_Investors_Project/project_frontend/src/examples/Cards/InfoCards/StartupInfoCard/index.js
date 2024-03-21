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

import IconButton from "@mui/material/IconButton";

// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SoftBadge from "components/SoftBadge";
import SoftButton from "components/SoftButton";

// Soft UI Dashboard React base styles
import colors from "assets/theme/base/colors";
import typography from "assets/theme/base/typography";
import { Grid } from "@mui/material";

function StartupInfoCard({ title, description, info, sectors, stage, team, web, social, action }) {
  const labels = [];
  const values = [];
  const { socialMediaColors } = colors;
  const { size } = typography;

  // Convert this form `objectKey` of the object key in to this `object key`
  Object.keys(info).forEach((el) => {
    if (el.match(/[A-Z\s]+/)) {
      const uppercaseLetter = Array.from(el).find((i) => i.match(/[A-Z]+/));
      const newElement = el.replace(uppercaseLetter, ` ${uppercaseLetter.toLowerCase()}`);

      labels.push(newElement);
    } else {
      labels.push(el);
    }
  });

  // Push the object values into the values array
  Object.values(info).forEach((el) => values.push(el));

  // Render the card info items
  const renderItems = labels.map((label, key) => (
    <SoftBox key={label} display="flex" py={1} pr={2}>
      <SoftTypography variant="button" fontWeight="bold" textTransform="capitalize">
        {label}: &nbsp;
      </SoftTypography>
      <SoftTypography variant="button" fontWeight="regular" color="text">
        &nbsp;{values[key]}
      </SoftTypography>
    </SoftBox>
  ));

  // Render the card social media icons
  const renderSocial = social.map(({ link, icon, color }) => (
    <SoftBox
      key={color}
      component="a"
      href={link}
      target="_blank"
      rel="noreferrer"
      fontSize={size.lg}
      color={socialMediaColors[color].main}
      pr={1}
      pl={0.5}
      lineHeight={1}
    >
      {icon}
    </SoftBox>
  ));

  const renderBadges = sectors.map((sector, key) => (
    <SoftBadge key={key} badgeContent={sector} color="dark" variant="gradient" size="lg" />
  ));

  return (
    <Card sx={{ height: "100%" }}>
      <SoftBox display="flex" justifyContent="space-between" alignItems="center" pt={2} px={2}>
        <SoftTypography variant="h5" fontWeight="bold" textTransform="capitalize">
          {title}
        </SoftTypography>
        <SoftTypography component={Link} to={action.route} variant="body2" color="secondary">
          <Tooltip title={action.tooltip} placement="top">
            <Icon>edit</Icon>
          </Tooltip>
        </SoftTypography>
      </SoftBox>
      <SoftBox p={2}>
        <SoftBox mb={2} lineHeight={1}>
          <SoftTypography variant="body2" color="text" fontWeight="regular">
            {description}
          </SoftTypography>
        </SoftBox>
        <SoftBox opacity={0.3}>
          <Divider />
        </SoftBox>

        <SoftBox display="flex" px={4} py={1} justifyContent="space-between">
          <SoftBox display="flex" py={1} pr={2}>
            <SoftTypography variant="h5" fontWeight="bold" textTransform="capitalize">
              sectors: &nbsp;
            </SoftTypography>
            {renderBadges}
          </SoftBox>

          <SoftBox display="flex" py={1} pr={2}>
            <SoftTypography ml={5} variant="h5" fontWeight="bold" textTransform="capitalize">
              Stage: &nbsp;
            </SoftTypography>
            <SoftBadge badgeContent={stage} color="info" size="lg" />
          </SoftBox>

          <SoftBox display="flex" py={1} pr={2}>
            <SoftTypography ml={5} variant="h5" fontWeight="bold" textTransform="capitalize">
              TeamMembers: &nbsp;
            </SoftTypography>
            <SoftBadge badgeContent={team} color="info" size="lg" />
          </SoftBox>
        </SoftBox>

        <SoftBox opacity={0.3}>
          <Divider />
        </SoftBox>

        <Grid container spacing={15}>
          <Grid item mx={4} mb={4}>
          <SoftTypography mt={3} mb={2} variant="h5" fontWeight="bold" textTransform="capitalize">
            Startup Contact: &nbsp;
          </SoftTypography>
          <SoftBox>
            {renderItems}
            <SoftBox display="flex" py={1} pr={2}>
              <SoftTypography variant="button" fontWeight="bold" textTransform="capitalize">
                social: &nbsp;
              </SoftTypography>
              {renderSocial}
            </SoftBox>
          </SoftBox>
          </Grid>

          <Grid item mx={4} mb={1}> 
        <SoftBox display="flex" alignItems="center" justifyContent="center" py={9}>
            <SoftButton
              variant="contained"
              color="info"
              size="large"
              component={Link}
              to={web ? web : "#"} 
            >
              <Icon>website</Icon>
              &nbsp;Visit the website
            </SoftButton>
          </SoftBox>
          </Grid>
        </Grid>
      </SoftBox>
    </Card>
  );
}

// Typechecking props for the ProfileInfoCard
StartupInfoCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  info: PropTypes.objectOf(PropTypes.string).isRequired,
  sectors: PropTypes.arrayOf(PropTypes.string).isRequired,
  stage: PropTypes.string.isRequired,
  team: PropTypes.string.isRequired,
  web: PropTypes.string,
  social: PropTypes.arrayOf(PropTypes.object).isRequired,
  action: PropTypes.shape({
    route: PropTypes.string.isRequired,
    tooltip: PropTypes.string.isRequired,
  }).isRequired,
};

export default StartupInfoCard;
