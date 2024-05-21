/* eslint-disable react/prop-types */

// this page foe deals -> for startup //

// @mui material components
import Icon from "@mui/material/Icon";

// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SoftAvatar from "components/SoftAvatar";

// Images
import logoSpotify from "assets/images/small-logos/logo-spotify.svg";
import logoInvesion from "assets/images/small-logos/logo-invision.svg";
import logoJira from "assets/images/small-logos/logo-jira.svg";
import logoSlack from "assets/images/small-logos/logo-slack.svg";
import logoWebDev from "assets/images/small-logos/logo-webdev.svg";
import logoXD from "assets/images/small-logos/logo-xd.svg";
//
import StartupInfoCard from "examples/Cards/InfoCards/StartupInfoCard";
// sx={{ borderBottom: 1, borderColor: 'divider' }}
function Startups({ image, name, Founders, sect, stage }) {
  return (
    <SoftBox display="flex" alignItems="center" px={1} py={0} > {/* Added border for row separation */}
      <SoftBox >
        <SoftAvatar src={image} alt={name} size="sm" variant="rounded" />
      </SoftBox>
      <SoftBox flex={1}> {/* Allow content to grow within available space */}
        <SoftBox display="flex" >
           {/* Distribute content horizontally */}
          <SoftTypography color="info" variant="button" fontWeight="medium" sx={{ fontSize: "1.2rem"}}>
            {name}
          </SoftTypography>
          <SoftBox display="flex" flexDirection="column"> {/* Group sect and stage */}
            <SoftTypography color="info" variant="text" fontWeight="light" sx={{ fontSize: "1.2rem" }}>
              {sect}
            </SoftTypography>
            <SoftTypography  variant="text" color="text" sx={{ fontSize: "1rem" }}>
              {stage}
            </SoftTypography>
          </SoftBox>
        </SoftBox>
        <SoftTypography color="info" variant="text" fontWeight="light" sx={{ fontSize: "1.2rem" }}>
          {Founders}
        </SoftTypography>
      </SoftBox>
    </SoftBox>
  );
}

// Date of start
const DealsData = {
  columns: [
   
    { name: "information", align: "center" },
 
  ],

  rows: [
 {   information:  <Startups image={logoSlack} name="Fiverr" /> },
 {   information:  <Startups Founders ="Founders  : Denis Sklyarov" /> },
 {   information:  <Startups sect="Technology Sector" stage="pre-seed" /> },



  ],
};

export default DealsData;
