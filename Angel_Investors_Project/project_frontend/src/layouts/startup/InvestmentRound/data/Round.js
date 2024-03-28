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



// function StartUp({ image, name, Founder, stage, sector }) {
//   return (
//     <SoftBox display="flex" alignItems="center" px={1} py={0.5}>
//       <SoftBox mr={2}>
//         <SoftAvatar src={image} alt={name} size="sm" variant="rounded" />
//       </SoftBox>
//       <SoftBox display="flex" flexDirection="column">
//         <SoftTypography variant="button" fontWeight="medium">
//           {name}
//         </SoftTypography>
//         <SoftTypography variant="caption" color="secondary">
//           {Founder}
//         </SoftTypography>
//         <SoftTypography variant="caption" color="text" fontWeight="medium">
//        {stage}
//         </SoftTypography>
//         <SoftTypography variant="caption" color="text" fontWeight="medium">
//        {sector}
//         </SoftTypography>
//       </SoftBox>
//     </SoftBox>
//   );
// }




// Date of start
const DealsData = {
  columns: [
    { name: "SATRTUP", align: "left" },
    { name: "FOUNDER", align: "left" },
    { name: "STAGE", align: "left" },
    { name: "sector", align: "center" },
 
  ],

  rows: [
    {
      SATRTUP: [logoSlack, " GLANTE"],
      FOUNDER: (
        <SoftTypography variant="button" color="text" fontWeight="medium">
          khaled fahad 
        </SoftTypography>
      ),
      STAGE: (
        <SoftTypography variant="caption" color="text" fontWeight="medium">
         Seed B
        </SoftTypography>
      ),
      sector: (
        <SoftTypography variant="caption" color="text" fontWeight="medium">
       Healthcare
        </SoftTypography>
      ),
     
    },
   
  ],
};

export default DealsData;
