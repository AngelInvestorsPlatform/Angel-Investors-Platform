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

//import Syndicate dialog
import SyndicateDialog from "layouts/investor/components/SyndicateDialog";

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

//instead of calling the sectors array
const sectors = ["Fintech", "Healthcare", "Analytics", "ML"];
const sectors1 = ["Finance", "Blockchain Investment", "Stock Trading"];
const sectors2 = ["Healthcare", "Telemedicine", "Medical Devices"];
const sectors3 = ["Food", "Beverage", "Plant-based", "Hospitality"];
const sectors4 = ["Fintech", "Pre-Seed", "Cryptocurrency"];
const sectors5 = [
  "Software-Development",
  "Software as a Service",
  "AI",
];
const sectors6 = ["Social Media", "Social Networking", "Content Creation", "Influencer Marketing"];



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

function Function({ sectors }) {
  const sect1 = sectors[0];
  const sect2 = sectors[1];
  const sect3 = sectors[2];
  const sect4 = sectors[3];

  return (
    <SoftBox display="flex" alignItems="center" px={1} py={0.5}>
      <SoftBox display="flex" flexDirection="column">
        <SoftTypography variant="text" fontWeight="light" sx={{ fontSize: "0.9rem" }}>
          {sect1},
        </SoftTypography>
        <SoftTypography variant="caption" color="secondary" sx={{ fontSize: "0.8rem" }}>
          {sect2}, {sect3}, ...
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

function ViewMore() {
  // for the dialog
  const [dialogOpen, setDialogOpen] = useState(false);

  const handleOpenDialog = () => {
    setDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setDialogOpen(false);
  };

  return (
    <SoftBox p={-5} sx={{ fontSize: "0.3rem" }}>
      <SoftButton color="info" size="small" variant="contained" onClick={handleOpenDialog}>
        <SoftTypography variant="caption" color="light" px={-1}>
          View More
        </SoftTypography>
      </SoftButton>
      <SyndicateDialog open={dialogOpen} onClose={handleCloseDialog} />
    </SoftBox>
  );
}

const SyndicatesTableData = {
  columns: [
    { name: "Syndicate", align: "left" },
    { name: "Sector", align: "center" },
    { name: "status", align: "center" },
    { name: "Deals", align: "center" },
    { name: "members", align: "center" },
    { name: "more", align: "center" },
  ],

  rows: [
    {
      Syndicate: <Syndicate image={logoSlack} name="VainTech" Lead="Lead : Ahmed Abo Jamal" />,
      Sector: <Function sectors={sectors} />,
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
      more: (<ViewMore/>),
    },
    {
      Syndicate: <Syndicate image={logoJira} name="AnotherUnion" Lead="Lead : John Doe" />,
      Sector: <Function sectors={sectors1} />,
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
      more: (<ViewMore/>)
    },
    {
      Syndicate: <Syndicate image={logoAtlassian} name="TechNerds" Lead="Lead : Sarah Smith" />,
      Sector: <Function sectors={sectors2} />,
      status: (
        <SoftBadge
          variant="gradient"
          badgeContent="inactive"
          color="secondary"
          size="xs"
          container
        />
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
      more: (<ViewMore/>)
    },
    {
      Syndicate: <Syndicate image={logoSpotify} name="FutureInnovate" Lead="Lead: Michael Brown" />,
      Sector: <Function sectors={sectors3} />,
      status: (
        <SoftBadge
          variant="gradient"
          badgeContent="inactive"
          color="secondary"
          size="xs"
          container
        />
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
      more: (<ViewMore/>)
    },
    {
      Syndicate: <Syndicate image={logoSlack} name="VainTech" Lead="Lead : Ahmed Abo Jamal" />,
      Sector: <Function sectors={sectors4} />,
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
      more: (<ViewMore/>)
    },
    {
      Syndicate: <Syndicate image={logoInvesion} name="TechGurus" Lead="Lead: Emma Johnson" />,
      Sector: <Function sectors={sectors1} />,
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
      more: (<ViewMore/>)
    },
    {
      Syndicate: <Syndicate image={logoAtlassian} name="GreenTech" Lead="Lead: Ethan Miller" />,
      Sector: <Function sectors={sectors6} />,
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
      more: (<ViewMore/>)
    },
    {
      Syndicate: <Syndicate image={logoJira} name="InnoHub" Lead="Lead: Michael Smith" />,
      Sector: <Function sectors={sectors5} />,
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
      more: (<ViewMore/>)
    },
    {
      Syndicate: <Syndicate image={logoInvesion} name="SoftTech" Lead="Lead: Olivia Davis" />,
      Sector: <Function sectors={sectors4} />,
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
      more: (<ViewMore/>)
    },
    {
      Syndicate: <Syndicate image={logoAtlassian} name="SocialTech" Lead="Lead: Emily Wilson" />,
      Sector: <Function sectors={sectors2} />,
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
      more: (<ViewMore/>)
    },
  ],
};

export default SyndicatesTableData;
