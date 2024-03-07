import { useState } from "react";

/* eslint-disable react/prop-types */
// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SoftAvatar from "components/SoftAvatar";
import SoftBadge from "components/SoftBadge";
import SoftButton from "components/SoftButton";

// @mui material components
import Tooltip from "@mui/material/Tooltip";
import Card from "@mui/material/Card";
import Icon from "@mui/material/Icon";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";



// Images
import logoXD from "assets/images/small-logos/logo-xd.svg";
import logoAtlassian from "assets/images/small-logos/logo-atlassian.svg";
import logoSlack from "assets/images/small-logos/logo-slack.svg";
import logoSpotify from "assets/images/small-logos/logo-spotify.svg";
import logoJira from "assets/images/small-logos/logo-jira.svg";
import logoInvesion from "assets/images/small-logos/logo-invision.svg";
import team1 from "assets/images/team-1.jpg";
import team2 from "assets/images/team-2.jpg";
import team3 from "assets/images/team-3.jpg";
import team4 from "assets/images/team-4.jpg";



function Syndicate({ image, name, Lead }) {


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
          {Lead}
        </SoftTypography>
      </SoftBox>
    </SoftBox>
  );
}

function Function({ sect, interest }) {
  return (
    <SoftBox display="flex" alignItems="center" px={1} py={0.5}>
      <SoftBox display="flex" flexDirection="column">
        <SoftTypography variant="text" fontWeight="light" sx={{ fontSize: "0.9rem" }}>
          {sect}
        </SoftTypography>
        <SoftTypography variant="caption" color="secondary" sx={{ fontSize: "0.8rem" }}>
          {interest}
        </SoftTypography>
      </SoftBox>
    </SoftBox>
  );
}

const avatars = (members) =>
  members.map(([image, name]) => (
    <Tooltip key={name} title={name} placeholder="bottom">
      <SoftAvatar
        src={image}
        alt="name"
        size="xs"
        sx={{
          border: ({ borders: { borderWidth }, palette: { white } }) =>
            `${borderWidth[2]} solid ${white.main}`,
          cursor: "pointer",
          position: "relative",

          "&:not(:first-of-type)": {
            ml: -1.25,
          },

          "&:hover, &:focus": {
            zIndex: "10",
          },
        }}
      />
    </Tooltip>
  ));

function Morebtn() {
  const [menu, setMenu] = useState(null);

  const openMenu = ({ currentTarget }) => setMenu(currentTarget);
  const closeMenu = () => setMenu(null);

  const renderMenu = (
    <Menu
      id="simple-menu"
      anchorEl={menu}
      anchorOrigin={{
        vertical: "top",
        horizontal: "left",
      }}
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={Boolean(menu)}
      onClose={closeMenu}
    >
      <MenuItem onClick={closeMenu}>stage </MenuItem>
      <MenuItem onClick={closeMenu}>members name</MenuItem>
      <MenuItem onClick={closeMenu}> Deals startup name</MenuItem>
      <MenuItem onClick={closeMenu}> Join The Syndicate</MenuItem>
    </Menu>
  );
  return (
<SoftBox p={-5} sx={{ fontSize: "0.3rem" }}>
  <SoftButton color="info" size="small" variant="contained" onClick={openMenu}>
    <SoftTypography variant="caption" color = "light" px={-1}>View More</SoftTypography>
  </SoftButton>
  {renderMenu}
</SoftBox>
  );
}

const SyndicatesTableData = {
  columns: [
    { name: "Syndicate", align: "left" },
    { name: "About", align: "center" },
    { name: "status", align: "center" },
    { name: "Deals", align: "center" },
    { name: "members", align: "center" },
    { name: "more", align: "center" },
  ],

  rows: [
    {
      Syndicate: <Syndicate image={logoSlack} name="VainTech" Lead="Lead : Ahmed Abo Jamal" />,
      About: <Function sect="Technology Sector" interest="Fintech pr-seed startup" />,
      status: (
        <SoftBadge variant="gradient" badgeContent="New" color="success" size="xs" container />
      ),
      Deals: (
        <SoftTypography variant="caption" color="secondary" fontWeight="medium">
          3 Deals
        </SoftTypography>
      ),
      members: (
        <SoftBox display="flex" py={1}>
          {avatars([
            [team1, "Ryan Tompson"],
            [team2, "Romina Hadid"],
            [team3, "Alexander Smith"],
            [team4, "Jessica Doe"],
          ])}
        </SoftBox>
      ),
      more: (<Morebtn/>)
    },
    {
      Syndicate: <Syndicate image={logoJira} name="AnotherUnion" Lead="Lead : John Doe" />,
      About: <Function sect="Finance Sector" interest="Blockchain investment" />,
      status: (
        <SoftBadge variant="gradient" badgeContent="Active" color="info" size="xs" container />
      ),
      Deals: (
        <SoftTypography variant="caption" color="secondary" fontWeight="medium">
          5 Deals
        </SoftTypography>
      ),
      members: (
        <SoftBox display="flex" py={1}>
          {avatars([
            [team2, "Alice Johnson"],
            [team1, "Michael Brown"],
            [team4, "Emily Wilson"],
            [team2, "David Lee"],
          ])}
        </SoftBox>
      ),
      more: (<Morebtn/>)
    },
    {
      Syndicate: <Syndicate image={logoAtlassian} name="TechNerds" Lead="Lead : Sarah Smith" />,
      About: <Function sect="Healthcare Sector" interest="Telemedicine startups" />,
      status: (
        <SoftBadge variant="gradient" badgeContent="inactive" color="secondary" size="xs" container />
      ),
      Deals: (
        <SoftTypography variant="caption" color="secondary" fontWeight="medium">
          2 Deals
        </SoftTypography>
      ),
      members: (
        <SoftBox display="flex" py={1}>
          {avatars([
            [team1, "Jack Brown"],
            [team4, "Olivia Davis"],
          ])}
        </SoftBox>
      ),
      more: (<Morebtn/>)
    },
    {
      Syndicate: <Syndicate image={logoSpotify} name="FutureInnovate" Lead="Lead: Michael Brown" />,
      About: <Function sect=" Food & Beverage Sector" interest="Plant-based food startups" />,
      status: (
        <SoftBadge variant="gradient" badgeContent="inactive" color="secondary" size="xs" container />
      ),
      Deals: (
        <SoftTypography variant="caption" color="secondary" fontWeight="medium">
         No Deals
        </SoftTypography>
      ),
      members: (
        <SoftBox display="flex" py={1}>
          {avatars([[team4, "Jessica Doe"]])}
        </SoftBox>
      ),
      more: (<Morebtn/>)
    },
    {
      Syndicate: <Syndicate image={logoSlack} name="VainTech" Lead="Lead : Ahmed Abo Jamal" />,
      About: <Function sect="Technology Sector" interest="Fintech pr-seed startup" />,
      status: (
        <SoftBadge variant="gradient" badgeContent="New" color="success" size="xs" container />
      ),
      Deals: (
        <SoftTypography variant="caption" color="secondary" fontWeight="medium">
          3 Deals
        </SoftTypography>
      ),
      members: (
        <SoftBox display="flex" py={1}>
          {avatars([
            [team1, "Ryan Tompson"],
            [team2, "Romina Hadid"],
            [team3, "Alexander Smith"],
            [team4, "Jessica Doe"],
          ])}
        </SoftBox>
      ),
      more: (<Morebtn/>)
    },
    {
      Syndicate: <Syndicate image={logoInvesion} name="TechGurus" Lead="Lead: Emma Johnson" />,
      About: <Function sect="Artificial Intelligence Sector" interest="Machine learning startups" />,
      status: (
        <SoftBadge variant="gradient" badgeContent="Active" color="info" size="xs" container />
      ),
      Deals: (
        <SoftTypography variant="caption" color="secondary" fontWeight="medium">
          8 Deals
        </SoftTypography>
      ),
      members: (
        <SoftBox display="flex" py={1}>
          {avatars([
            [team3, "Emma Johnson"],
            [team2, "Nathan Wilson"],
            [team1, "Olivia Brown"],
            [team2, "Sophia Lee"],
          ])}
        </SoftBox>
      ),
      more: (<Morebtn/>)
    },
    {
      Syndicate: <Syndicate image={logoAtlassian} name="GreenTech" Lead="Lead: Ethan Miller" />,
      About: <Function sect="Sustainable Energy Sector" interest="Renewable energy startups" />,
      status: (
        <SoftBadge variant="gradient" badgeContent="Closed" color="error" size="xs" container />
      ),
      Deals: (
        <SoftTypography variant="caption" color="secondary" fontWeight="medium">
          4 Deals
        </SoftTypography>
      ),
      members: (
        <SoftBox display="flex" py={1}>
          {avatars([
            [team3, "Ethan Miller"],
            [team4, "Ava Wilson"],
            [team2, "Logan Davis"],
            [team4, "Chloe Brown"],
          ])}
        </SoftBox>
      ),
      more: (<Morebtn/>)
    },
    {
      Syndicate: <Syndicate image={logoJira} name="InnoHub" Lead="Lead: Michael Smith" />,
      About: <Function sect="Startups Incubation Sector" interest="Early-stage startups support" />,
      status: (
        <SoftBadge variant="gradient" badgeContent="New" color="success" size="xs" container />
      ),
      Deals: (
        <SoftTypography variant="caption" color="secondary" fontWeight="medium">
          2 Deals
        </SoftTypography>
      ),
      members: (
        <SoftBox display="flex" py={1}>
          {avatars([
            [team1, "Michael Smith"],
            [team2, "Sophia Brown"],
            [team3, "Emma Lee"],
            [team4, "James Wilson"],
          ])}
        </SoftBox>
      ),
      more: (<Morebtn/>)
    },
    {
      Syndicate: <Syndicate image={logoInvesion} name="SoftTech" Lead="Lead: Olivia Davis" />,
      About: <Function sect="Software Development Sector" interest="Software as a Service (SaaS) companies" />,
      status: (
        <SoftBadge variant="gradient" badgeContent="Active" color="info" size="xs" container />
      ),
      Deals: (
        <SoftTypography variant="caption" color="secondary" fontWeight="medium">
          6 Deals
        </SoftTypography>
      ),
      members: (
        <SoftBox display="flex" py={1}>
          {avatars([
            [team4, "Olivia Davis"],
            [team2, "Ethan Johnson"],
            [team2, "Mia Wilson"],
            [team3, "Noah Smith"],
          ])}
        </SoftBox>
      ),
      more: (<Morebtn/>)
    },
    {
      Syndicate: <Syndicate image={logoAtlassian} name="SocialTech" Lead="Lead: Emily Wilson" />,
      About: <Function sect="Social Media Sector" interest="Social networking platforms" />,
      status: (
        <SoftBadge variant="gradient" badgeContent="Closed" color="error" size="xs" container />
      ),
      Deals: (
        <SoftTypography variant="caption" color="secondary" fontWeight="medium">
          3 Deals
        </SoftTypography>
      ),
      members: (
        <SoftBox display="flex" py={1}>
          {avatars([
            [team4, "Emily Wilson"],
            [team1, "Sophia Johnson"],
            [team1, "Lucas Davis"],
            [team2, "Liam Smith"],
          ])}
        </SoftBox>
      ),
      more: (<Morebtn/>)
    },
  ],
};

export default SyndicatesTableData;
