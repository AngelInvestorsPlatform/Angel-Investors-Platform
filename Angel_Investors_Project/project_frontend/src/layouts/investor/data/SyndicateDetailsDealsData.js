import { useState } from "react";

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
import CountdownTimer from 'layouts/investor/components/CountdownTimer';


import SoftButton from "components/SoftButton";

//images
import logoXD from "assets/images/small-logos/logo-xd.svg";
import logoAtlassian from "assets/images/small-logos/logo-atlassian.svg";
import logoSlack from "assets/images/small-logos/logo-slack.svg";
import logoSpotify from "assets/images/small-logos/logo-spotify.svg";
import logoJira from "assets/images/small-logos/logo-jira.svg";
import logoInvesion from "assets/images/small-logos/logo-invision.svg";

// Data

export default function data() {
function Startup({ image, SU_name, startupProfile }) {
  // Add 'startupProfile' prop for link
  return (
    <SoftBox display="flex" alignItems="center" px={1} py={0.5}>
      <SoftBox mr={2}>
        <SoftAvatar src={image} alt={SU_name} size="sm" variant="rounded" />
      </SoftBox>
      <SoftBox display="flex" flexDirection="column">
        {startupProfile ? ( // Conditionally render link based on 'to' prop
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
function SectorFunction({sector}){
return(
<SoftBadge variant="gradient" badgeContent={sector} color="info" size="md" />
);
}
SectorFunction.propTypes ={
    sector: PropTypes.string.isRequired,
}
function StageFunction({Stage}){
return(
<SoftBadge variant="contained" badgeContent={Stage} color="secondary" size="xs" />
);
}
StageFunction.propTypes ={
    Stage: PropTypes.string.isRequired,
}
function AllocationFunction({Allocation}){
return(
    <SoftTypography
    variant="caption"
    color="secondary"
    fontWeight="bold"
    style={{ display: "block" }}
  >
    SAR&nbsp;{Allocation}
  </SoftTypography>
);
}
AllocationFunction.propTypes ={
    Allocation: PropTypes.string.isRequired,
}

const handlePage=()=> {
 
};
return {
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
      "Deal Name": <Startup image={logoXD} SU_name="Tamara" startupProfile="#" />,
      Sectors:<SectorFunction sector="Fintech"/>,
      Stage: <StageFunction Stage="Pre-Seed"/>,
      Allocation: <AllocationFunction Allocation="5000,000"/>,
      Deadline:
      <CountdownTimer deadline="2024-03-30" />,
      " ":  (
        <SoftButton color="info" size="small" variant="contained" onClick={handlePage}>
        <SoftTypography variant="caption" color="light" px={-1}>
         More To invest
        </SoftTypography>
      </SoftButton>
      ),
    },
    {
        "Deal Name": <Startup image={logoJira} SU_name="John" startupProfile="#" />,
        Sectors: <SectorFunction sector="Healthcare" />,
        Stage: <StageFunction Stage="Seed" />,
        Allocation: <AllocationFunction Allocation="7000,000" />,
        Deadline: <CountdownTimer deadline="2024-04-1" />,
        " ": (
          <SoftButton color="info" size="small" variant="contained" onClick={handlePage}>
            <SoftTypography variant="caption" color="light" px={-1}>
              More To invest
            </SoftTypography>
          </SoftButton>
        ),
      },
      {
        "Deal Name": <Startup image={logoInvesion} SU_name="Emma" startupProfile="#" />,
        Sectors: <SectorFunction sector="Analytics" />,
        Stage: <StageFunction Stage="Series A" />,
        Allocation: <AllocationFunction Allocation="9000,000" />,
        Deadline: <CountdownTimer deadline="2024-06-30" />,
        " ": (
          <SoftButton color="info" size="small" variant="contained" onClick={handlePage}>
            <SoftTypography variant="caption" color="light" px={-1}>
              More To invest
            </SoftTypography>
          </SoftButton>
        ),
      },
      {
        "Deal Name": <Startup image={logoSpotify} SU_name="Sophia" startupProfile="#" />,
        Sectors: <SectorFunction sector="ML" />,
        Stage: <StageFunction Stage="Series B" />,
        Allocation: <AllocationFunction Allocation="12000,000" />,
        Deadline: <CountdownTimer deadline="2024-08-10" />,
        " ": (
          <SoftButton color="info" size="small" variant="contained" onClick={handlePage}>
            <SoftTypography variant="caption" color="light" px={-1}>
              More To invest
            </SoftTypography>
          </SoftButton>
        ),
      },
      {
        "Deal Name": <Startup image={logoXD} SU_name="Noah" startupProfile="#" />,
        Sectors: <SectorFunction sector="Market" />,
        Stage: <StageFunction Stage="seed" />,
        Allocation: <AllocationFunction Allocation="15000,000" />,
        Deadline: <CountdownTimer deadline="2024-03-23" />,
      },
  ],
};
};
