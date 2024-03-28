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







// Date of start
const DealsData = {
  columns: [
   
    { name: "information", align: "left" },
 
  ],

  rows: [
    {
      information: [logoSlack, " GLANTE"],
   
     
    },{      information: (
      <SoftTypography variant="center" color="text" fontWeight="medium">
      Founder:  khaled fahad 
      </SoftTypography>
    
    ),},
    {   information: (
      <SoftTypography variant="center" color="text" fontWeight="medium">
      Stage: Seed B
      </SoftTypography>
 ),},
 {   information: (
  <SoftTypography variant="center" color="text" fontWeight="medium">
  Sector: Healthcare
  </SoftTypography>
),},
  ],
};

export default DealsData;
