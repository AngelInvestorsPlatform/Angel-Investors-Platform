import { useState } from "react";

/* eslint-disable react/prop-types */
// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SoftAvatar from "components/SoftAvatar";
import SoftBadge from "components/SoftBadge";
import SoftButton from "components/SoftButton";
import SoftInput from "components/SoftInput";


// @mui material components
import Tooltip from "@mui/material/Tooltip";
import Card from "@mui/material/Card";
import Icon from "@mui/material/Icon";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";



// Images
import logoXD from "assets/images/small-logos/logo-xd.svg";
import logoAtlassian from "assets/images/startups-logos/Wix.png";
import logoSlack from "assets/images/startups-logos/fiverr.png";
import logoSpotify from "assets/images/startups-logos/WiFiMap.png";
import logoJira from "assets/images/startups-logos/SimilarWeb.png";
import logoInvesion from "assets/images/startups-logos/D-ID.png";
import team1 from "assets/images/team-1.jpg";
import team2 from "assets/images/team-2.jpg";
import team3 from "assets/images/team-3.jpg";
import team4 from "assets/images/team-4.jpg";



function Startups({ image, name, Founders  }) {


  return (
    <SoftBox display="flex" alignItems="center" px={1} py={0.5}>
      <SoftBox mr={2}>
        <SoftAvatar src={image} alt={name} size="sm" variant="rounded" />
      </SoftBox>
      <SoftBox display="flex" flexDirection="column">
        <SoftTypography variant="button" fontWeight="medium">
          {name}
        </SoftTypography>
        <SoftTypography variant="caption" color="secondary">
          {Founders }
        </SoftTypography>
      </SoftBox>
    </SoftBox>
  );
}

function Function({ sect, stage }) {
  return (
    <SoftBox display="flex" alignItems="center" px={1} py={0.5}>
      <SoftBox display="flex" flexDirection="column">
        <SoftTypography variant="text" fontWeight="light" sx={{ fontSize: "0.9rem" }}>
          {sect}
        </SoftTypography>
        <SoftTypography variant="caption" color="secondary" sx={{ fontSize: "0.8rem" }}>
          {stage}
        </SoftTypography>
      </SoftBox>
    </SoftBox>
  );
}

function Offerbtn() {
  const [menu, setMenu] = useState(null);

  const openMenu = ({ currentTarget }) => setMenu(currentTarget);
  const closeMenu = () => setMenu(null);

  return (
<SoftBox p={-5} display="flex" alignItems="center">
      <SoftInput
        pr={3} // Reduced padding right for spacing
        py={3}
        placeholder="Your offer details"
        icon={{ component: "message", direction: "left" }}
        height="50px"
        flex={2} // Allow input to grow horizontally
      />
      <SoftButton
        color="info"
        size="small"
        variant="contained"
        onClick={openMenu}
      >
        <SoftTypography variant="caption" color="light" px={-1}>
          Send Offer
        </SoftTypography>
      </SoftButton>
    </SoftBox>
  );
}

const StartupssTableData = {
  columns: [
    { name: "Startups", align: "left" },
    { name: "About", align: "center" },
    { name: "Ask", align: "center" },
    { name: "valuation", align: "center" },
    { name: "Offer", align: "center" },
  ],

  rows: [
    {
      Startups: <Startups image={logoSlack} name="Fiverr" Founders ="Founders  : Denis Sklyarov" />,
      About: <Function sect="Technology Sector" stage="pre-seed" />,
      Ask: (
        <SoftTypography variant="caption" color="secondary" fontWeight="medium">
          $100K
        </SoftTypography>      ),
      valuation: (
        <SoftTypography variant="caption" color="secondary" fontWeight="medium">
          $5M
        </SoftTypography>
      ),
      Offer: (
         <Offerbtn/>
      )
    },
    {
      Startups: <Startups image={logoJira} name="SimilarWeb" Founders ="Founders  : Igor Goldenberg" />,
      About: <Function sect="Finance Sector" stage="Series A" />,
      Ask: (
        <SoftTypography variant="caption" color="secondary" fontWeight="medium">
          $500K
        </SoftTypography>      ),
      valuation: (
        <SoftTypography variant="caption" color="secondary" fontWeight="medium">
          $7M
        </SoftTypography>
      ),
      Offer: (<Offerbtn/>)
    },
    {
      Startups: <Startups image={logoAtlassian} name="Wix" Founders ="Founders  : Igor Goldenberg" />,
      About: <Function sect="Healthcare Sector" stage="Pre-Seed" />,
      Ask: (
        <SoftTypography variant="caption" color="secondary" fontWeight="medium">
          $200K
        </SoftTypography>      ),
      valuation: (
        <SoftTypography variant="caption" color="secondary" fontWeight="medium">
          $10M
        </SoftTypography>
      ),
      Offer: (<Offerbtn/>)
    },
    {
      Startups: <Startups image={logoSpotify} name="WiFi Map" Founders ="Founders : Igor Goldenberg" />,
      About: <Function sect=" Food & Beverage Sector" stage="Series B" />,
      Ask: (
        <SoftTypography variant="caption" color="secondary" fontWeight="medium">
          $100K
        </SoftTypography>      ),
      valuation: (
        <SoftTypography variant="caption" color="secondary" fontWeight="medium">
          $2M
        </SoftTypography>
      ),
      
      Offer: (<Offerbtn/>)
    },
    {
      Startups: <Startups image={logoInvesion} name="D-ID" Founders ="Founders  : Ahmed Abo Jamal" />,
      About: <Function sect="Technology Sector" stage="Other" />,
      Ask: (
        <SoftTypography variant="caption" color="secondary" fontWeight="medium">
          $50K
        </SoftTypography>      ),
      valuation: (
        <SoftTypography variant="caption" color="secondary" fontWeight="medium">
          $1M
        </SoftTypography>
      ),
      
      Offer: (<Offerbtn/>)
    },
    {
      Startups: <Startups image={logoAtlassian} name="Astria" Founders ="Founders : Dan Dovrat" />,
      About: <Function sect="Artificial Intelligence Sector" stage="Seed" />,
      Ask: (
        <SoftTypography variant="caption" color="secondary" fontWeight="medium">
          $250K
        </SoftTypography>      ),
      valuation: (
        <SoftTypography variant="caption" color="secondary" fontWeight="medium">
          $4M
        </SoftTypography>
      ),
      
      Offer: (<Offerbtn/>)
    },
    {
      Startups: <Startups image={logoSlack} name="GreenTech" Founders ="Founders : Guy L" />,
      About: <Function sect="Sustainable Energy Sector" stage="Pre-Seed" />,
      Ask: (
        <SoftTypography variant="caption" color="secondary" fontWeight="medium">
          $500K
        </SoftTypography>      ),
      valuation: (
        <SoftTypography variant="caption" color="secondary" fontWeight="medium">
          $8M
        </SoftTypography>
      ),
      
      Offer: (<Offerbtn/>)
    },
    {
      Startups: <Startups image={logoJira} name="Bounce" Founders ="Founders : Michael Smith" />,
      About: <Function sect="Startups Incubation Sector" stage="Series B" />,
      Ask: (
        <SoftTypography variant="caption" color="secondary" fontWeight="medium">
          $800K
        </SoftTypography>      ),
      valuation: (
        <SoftTypography variant="caption" color="secondary" fontWeight="medium">
          $12M
        </SoftTypography>
      ),
     
      Offer: (<Offerbtn/>)
    },
    {
      Startups: <Startups image={logoInvesion} name="SoftTech" Founders ="Founders : Olivia Davis" />,
      About: <Function sect="Software Development Sector" stage="Seed" />,
      Ask: (
        <SoftTypography variant="caption" color="secondary" fontWeight="medium">
          $100K
        </SoftTypography>      ),
      valuation: (
        <SoftTypography variant="caption" color="secondary" fontWeight="medium">
          $5M
        </SoftTypography>
      ),
      
      Offer: (<Offerbtn/>)
    },
    {
      Startups: <Startups image={logoAtlassian} name="SocialTech" Founders ="Founders : Emily Wilson" />,
      About: <Function sect="Social Media Sector" stage="Seed" />,
      Ask: (
        <SoftTypography variant="caption" color="secondary" fontWeight="medium">
          $200K
        </SoftTypography>      ),
      valuation: (
        <SoftTypography variant="caption" color="secondary" fontWeight="medium">
          $6M
        </SoftTypography>
      ),
     
      Offer: (<Offerbtn/>)
    },
  ],
};

export default StartupssTableData;
