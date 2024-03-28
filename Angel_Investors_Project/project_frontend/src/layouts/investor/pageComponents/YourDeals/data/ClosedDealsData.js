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
const handlePage = () => {
  // this for view more
};
const ClosedDealsData = {
  columns2: [
    { name: "Deal Name", align: "left" }, // startup name
    { name: "Syndicate", align: "center" }, // syndicate name+lead
    { name: "Invested amount", align: "center" },
    { name: "Updates", align: "center" },
    { name: " ", align: "center" },
  ],
  rows2: [
    {
      "Deal Name": <Startup image={logoXD} SU_name="Xdreams" startupProfile="/startup" />,
      Syndicate: <S_Lead S_name="AB Syndicate" lead_name="Abdullah Mohammed" />,
      "Invested amount": (
        <SoftBadge
          variant="contained"
          badgeContent="SAR
100,000"
          color="success"
          size="xs"
          container
        />
      ),
      Updates: (
        <SoftButton color="info" size="small" variant="contained" onClick={handlePage}>
          <SoftTypography variant="caption" color="light" px={-1}>
            View updates
          </SoftTypography>
        </SoftButton>
      ),
    },
    /* Second row */
    {
      "Deal Name": <Startup image={logoAtlassian} SU_name="Aster" startupProfile="/startup" />,
      Syndicate: <S_Lead S_name="Syndicate1" lead_name="Abdullah Mohammed" />,
      "Invested amount": (
        <SoftBadge
          variant="contained"
          badgeContent="SAR
30,000"
          color="success"
          size="xs"
          container
        />
      ),
      Updates: (
        <SoftButton color="info" size="small" variant="contained" onClick={handlePage}>
          <SoftTypography variant="caption" color="light" px={-1}>
            View updates
          </SoftTypography>
        </SoftButton>
      ),
    },
    /* Third row */
    {
      "Deal Name": (
        <Startup
          image={logoSlack}
          SU_name="Stock
5"
          startupProfile="/startup"
        />
      ),
      Syndicate: <S_Lead S_name="Syndicate1" lead_name="Abdullah Mohammed" />,
      "Invested amount": (
        <SoftBadge
          variant="contained"
          badgeContent="SAR
75,000"
          color="success"
          size="xs"
          container
        />
      ),
      Updates: (
        <SoftButton color="info" size="small" variant="contained" onClick={handlePage}>
          <SoftTypography variant="caption" color="light" px={-1}>
            View updates
          </SoftTypography>
        </SoftButton>
      ),
    },
    /* Fourth row */
    {
      "Deal Name": <Startup image={logoJira} SU_name="Xdreams" startupProfile="/startup" />,
      Syndicate: (
        <S_Lead
          S_name="Syndicate1"
          lead_name="Fahad
Saleh"
        />
      ),
      "Invested amount": (
        <SoftBadge
          variant="contained"
          badgeContent="SAR 5000"
          color="success"
          size="xs"
          container
        />
      ),
      Updates: (
        <SoftButton color="info" size="small" variant="contained" onClick={handlePage}>
          <SoftTypography variant="caption" color="light" px={-1}>
            View updates
          </SoftTypography>
        </SoftButton>
      ),
    },
  ],
};
export default ClosedDealsData;
