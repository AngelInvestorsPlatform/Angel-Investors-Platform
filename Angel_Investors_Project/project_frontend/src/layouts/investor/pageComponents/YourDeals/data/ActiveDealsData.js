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
import logoXD from "assets/images/users-images/Startup1.png";
import logoAtlassian from "assets/images/users-images/Startup2.png";
import logoSlack from "assets/images/users-images/Startup3.png";
import logoSpotify from "assets/images/users-images/Startup4.png";
import logoJira from "assets/images/users-images/Startup5.png";
import logoInvesion from "assets/images/users-images/Startup6.png";

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
    { name: "Syndicate", align: "center" }, // syndicate name+lead
    { name: "Sectors", align: "center" },
    { name: "Stage", align: "center" },
    { name: "Allocation", align: "center" },
    { name: "Deadline", align: "center" },
    { name: " ", align: "center" },
  ],
  rows: [
    {
      "Deal Name": <Startup image={logoXD} SU_name="Xdesign" startupProfile="/startup" />,
      Syndicate: <S_Lead S_name="Wingspan Syndicate" lead_name="Abdullah Mohammed" />,
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
      Deadline: <CountdownTimer deadline="2024-03-23" />,
      " ": (
        <SoftButton color="info" size="small" variant="contained" onClick={handlePage}>
          <SoftTypography variant="caption" color="light" px={-1}>
            View More
          </SoftTypography>
        </SoftButton>
      ),
    },
    /* Second row */
    {
      "Deal Name": <Startup image={logoAtlassian} SU_name="Ambrit" startupProfile="/startup" />,
      Syndicate: <S_Lead S_name="Angels investors" lead_name="Michael Levi" />,
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
      Deadline: <CountdownTimer deadline="2024-03-28" />,
      " ": (
        <SoftButton color="info" size="small" variant="contained" onClick={handlePage}>
          <SoftTypography variant="caption" color="light" px={-1}>
            View More
          </SoftTypography>
        </SoftButton>
      ),
    },
    /* Third row */
    {
      "Deal Name": <Startup image={logoSpotify} SU_name="Spotify" startupProfile="/startup" />,
      Syndicate: <S_Lead S_name="Archangel Investors" lead_name="Mohammed Khaled" />,
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
      Deadline: <CountdownTimer deadline="2024-04-4" />,
      " ": (
        <SoftButton color="info" size="small" variant="contained" onClick={handlePage}>
          <SoftTypography variant="caption" color="light" px={-1}>
            View More
          </SoftTypography>
        </SoftButton>
      ),
    },
    /* Fourth row */
    {
      "Deal Name": <Startup image={logoInvesion} SU_name="INV" startupProfile="/startup" />,
      Syndicate: <S_Lead S_name="Syndicate Capital" lead_name="Abduallah A" />,
      Sectors: <SoftBadge variant="gradient" badgeContent="ML" color="info" size="md" />,
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
          SAR 720,000
        </SoftTypography>
      ),
      Deadline: <CountdownTimer deadline="2024-03-29" />,
      " ": (
        <SoftButton color="info" size="small" variant="contained" onClick={handlePage}>
          <SoftTypography variant="caption" color="light" px={-1}>
            View More
          </SoftTypography>
        </SoftButton>
      ),
    },
    /* Fifth row */
    {
      "Deal Name": <Startup image={logoJira} SU_name="Jira" startupProfile="/startup" />,
      Syndicate: <S_Lead S_name="V" lead_name="Mona Ahmad" />,
      Sectors: (
        <SoftBadge variant="gradient" badgeContent="Market" color="info" size="md" />
      ),
      Stage: (
        <SoftBadge
          variant="contained"
          badgeContent="Series A"
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
          SAR 400,500
        </SoftTypography>
      ),
      Deadline: <CountdownTimer deadline="2024-04-10" />,
      " ": (
        <SoftButton color="info" size="small" variant="contained" onClick={handlePage}>
          <SoftTypography variant="caption" color="light" px={-1}>
            View More
          </SoftTypography>
        </SoftButton>
      ),
    },
  ],
};
export default ActiveDealsData;
