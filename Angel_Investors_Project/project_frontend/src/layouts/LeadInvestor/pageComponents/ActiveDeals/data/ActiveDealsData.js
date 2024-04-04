import PropTypes from "prop-types";
import { Link } from "react-router-dom";
// @mui material components
import Grid from "@mui/material/Grid";
import Icon from "@mui/material/Icon";
import Card from "@mui/material/Card";

// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";

// Soft UI Dashboard React base styles
import typography from "assets/theme/base/typography";
import SoftAvatar from "components/SoftAvatar";
import SoftBadge from "components/SoftBadge";
import SoftButton from "components/SoftButton";


//images
import logoXD from "assets/images/small-logos/logo-xd.svg";
import logoAtlassian from "assets/images/small-logos/logo-atlassian.svg";
import logoSlack from "assets/images/small-logos/logo-slack.svg";
import logoSpotify from "assets/images/small-logos/logo-spotify.svg";
import logoJira from "assets/images/small-logos/logo-jira.svg";
import logoInvesion from "assets/images/small-logos/logo-invision.svg";

// pages
import CountdownTimer from "layouts/investor/components/CountdownTimer";

// Data
function Startup({ image, SU_name, startupProfile }) {
  // Add 'startupProfile' prop for link
  return (
    <SoftBox display="flex" alignItems="center" px={1} py={0.5}>
      <SoftBox mr={2}>
        <SoftAvatar src={image} alt={SU_name} size="sm" variant="rounded" />
      </SoftBox>
      <SoftBox display="flex" flexDirection="column">
        {startupProfile ? ( // Conditionally render link basedon 'to' prop
          <Link to={startupProfile}>
            <SoftTypography variant="button" fontWeight="medium">
              {SU_name}
            </SoftTypography>
          </Link>
        ) : (
          <SoftTypography variant="button" fontWeight="medium">
            {SU_name}
          </SoftTypography>
        )}
      </SoftBox>
    </SoftBox>
  );
}
Startup.propTypes = {
  image: PropTypes.string.isRequired,
  SU_name: PropTypes.string.isRequired,
  startupProfile: PropTypes.string.isRequired,
};
function S_Lead({ S_name, lead_name }) {
  return (
    <SoftBox display="flex" flexDirection="column">
      <SoftTypography variant="caption" fontWeight="medium" color="text">
        {S_name}
      </SoftTypography>
      <SoftTypography variant="caption" color="secondary">
        Lead:&nbsp;
        {lead_name}
      </SoftTypography>
    </SoftBox>
  );
}
S_Lead.propTypes = {
  S_name: PropTypes.string.isRequired,
  lead_name: PropTypes.string.isRequired,
};
const handlePage = () => {};
const ActiveDealsData = {
  columns: [
    { name: "Deal Name", align: "left" }, // startup name
    { name: "Sectors", align: "center" },
    { name: "Stage", align: "center" },
    { name: "Allocation", align: "center" },
    { name: "Deadline", align: "center" },
    { name: " ", align: "center" },
  ],
  rows: [
    {
      "Deal Name": <Startup image={logoXD} SU_name="Xdesign" startupProfile="/startup" />,
      Sectors: (
        <SoftBadge variant="gradient" badgeContent="Fintech" color="info" size="md"  />
      ),
      Stage: (
        <SoftBadge
          variant="contained"
          badgeContent="Pre-Seed"
          color="secondary"
          size="md"
          
        />
      ),
      Allocation: (
        <SoftTypography
          variant="caption"
          color="secondary"
          fontWeight="bold"
          style={{ display: "block" }}
        >
          SAR 500,000
        </SoftTypography>
      ),
      Deadline: <CountdownTimer deadline="2024-04-23" />,
      " ": (
        <SoftButton color="info" size="small" variant="contained" onClick={handlePage}>
          <SoftTypography variant="caption" color="light" px={-1}>
            Add Updates
          </SoftTypography>
        </SoftButton>
      ),
    },
    /* Second row */
    {
      "Deal Name": <Startup image={logoAtlassian} SU_name="Ambrit" startupProfile="/startup" />,
      Sectors: (
        <SoftBadge variant="gradient" badgeContent="Adtech" color="info" size="md" />
      ),
      Stage: (
        <SoftBadge variant="contained" badgeContent="Seed" color="secondary" size="md" />
      ),
      Allocation: (
        <SoftTypography
          variant="caption"
          color="secondary"
          fontWeight="bold"
          style={{ display: "block" }}
        >
          SAR 1M
        </SoftTypography>
      ),
      Deadline: <CountdownTimer deadline="2024-05-28" />,
      " ": (
        <SoftButton color="info" size="small" variant="contained" onClick={handlePage}>
          <SoftTypography variant="caption" color="light" px={-1}>
            Add Updates
          </SoftTypography>
        </SoftButton>
      ),
    },
    /* Third row */
    {
      "Deal Name": <Startup image={logoSpotify} SU_name="Spotify" startupProfile="/startup" />,
      Sectors: (
        <SoftBadge variant="gradient" badgeContent="Health" color="info" size="md" />
      ),
      Stage: (
        <SoftBadge
          variant="contained"
          badgeContent="Series B"
          color="secondary"
          size="md"
        />
      ),
      Allocation: (
        <SoftTypography
          variant="caption"
          color="secondary"
          fontWeight="bold"
          style={{ display: "block" }}
        >
          SAR 800,000
        </SoftTypography>
      ),
      Deadline: <CountdownTimer deadline="2024-08-4" />,
      " ": (
        <SoftButton color="info" size="small" variant="contained" onClick={handlePage}>
          <SoftTypography variant="caption" color="light" px={-1}>
            Add Updates
          </SoftTypography>
        </SoftButton>
      ),
    },
  ],
};
export default ActiveDealsData;
