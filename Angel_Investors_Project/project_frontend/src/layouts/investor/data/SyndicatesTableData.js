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
import logoXD from "assets/images/users-images/Startup1.png";
import logoAtlassian from "assets/images/users-images/Startup2.png";
import logoSlack from "assets/images/users-images/Startup3.png";
import logoSpotify from "assets/images/users-images/Startup4.png";
import logoJira from "assets/images/users-images/Startup5.png";
import logoInvesion from "assets/images/users-images/Startup6.png";
import team1 from "assets/images/users-images/team1.png";
import team2 from "assets/images/users-images/team2.png";
import team3 from "assets/images/users-images/team3.png";
import team4 from "assets/images/users-images/team4.png";
import team5 from "assets/images/users-images/team5.png";

//instead of calling the sectors array
const sectors = ["Fintech", "Healthcare", "Analytics", "ML"];
const sectors1 = ["Finance", "Blockchain Investment", "Stock Trading"];
const sectors2 = ["Healthcare", "Telemedicine", "Medical Devices"];
const sectors3 = ["Food", "Beverage", "Plant-based", "Hospitality"];
const sectors4 = ["Fintech", "Pre-Seed", "Cryptocurrency"];
const sectors5 = ["Software-Development", "Software as a Service", "AI"];
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
          Lead :&nbsp;{Lead}
        </SoftTypography>
      </SoftBox>
    </SoftBox>
  );
}

function SectorsFunction({ sectors }) {
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

function StatusFunction({ status }) {
  let color;
  switch (status.toLowerCase()) {
    case 'new':
      color = 'success';
      break;
    case 'active':
      color = 'info';
      break;
    case 'inactive':
      color = 'secondary';
      break;
    case 'closed':
      color = 'error';
      break;
    default:
      color = 'light'; // Default color if status doesn't match any case
      break;
  }

  return (
    <SoftBadge variant="gradient" badgeContent={status} color={color} size="md" border />
  );
}

const avatars = (members) => {
  if (members.length <= 5) {
    return members.map(([image, name]) => (
      <Tooltip key={name} title={name} placeholder="bottom">
        <SoftAvatar
          src={image}
          alt={name}
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
  } else {
    const remainingMembers = members.length - 4;
    const visibleMembers = members.slice(0, 4);
    return (
      <>
        {visibleMembers.map(([image, name]) => (
          <Tooltip key={name} title={name} placeholder="bottom">
            <SoftAvatar
              src={image}
              alt={name}
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
        ))}
        <Tooltip title={`${remainingMembers} other members`} placeholder="bottom">
          <SoftAvatar
            bgColor="secondary"
            alt={`+${remainingMembers}`}
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
          >
            +{remainingMembers}
          </SoftAvatar>
        </Tooltip>
      </>
    );
  }
};



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
        <SoftTypography fontSize="11px" variant="caption" color="light" px={-1}>
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
    { name: "Active Deals", align: "center" },
    { name: "members", align: "center" },
    { name: " ", align: "center" },
  ],

  rows: [
    {
      Syndicate: <Syndicate image={logoSlack} name="VainTech" Lead="Ahmed Abo Jamal" />,
      Sector: <SectorsFunction sectors={sectors} />,
      status: <StatusFunction status="new"/>,
      "Active Deals": (
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
      " ": (<ViewMore/>),
    },
    {
      Syndicate: <Syndicate image={logoJira} name="AnotherUnion" Lead="Lead : John Doe" />,
      Sector: <SectorsFunction sectors={sectors1} />,
      status: <StatusFunction status="Active"/>,
      "Active Deals": (
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
      " ": (<ViewMore/>)
    },
    {
      Syndicate: <Syndicate image={logoAtlassian} name="TechNerds" Lead="Sarah Smith" />,
      Sector: <SectorsFunction sectors={sectors2} />,
      status: <StatusFunction status="Inactive"/>,
      "Active Deals": (
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
      " ": (<ViewMore/>)
    },
    {
      Syndicate: <Syndicate image={logoSpotify} name="FutureInnovate" Lead="Michael Brown" />,
      Sector: <SectorsFunction sectors={sectors3} />,
      status: <StatusFunction status="Inactive"/>,
      "Active Deals": (
        <SoftTypography variant="caption" color="secondary" fontWeight="medium">
          No Deals
        </SoftTypography>
      ),
      members: (
        <SoftBox display="flex" py={1}>
          {avatars([[team4, "Jessica Doe"]])}
        </SoftBox>
      ),
      " ": (<ViewMore/>)
    },
    {
      Syndicate: <Syndicate image={logoSlack} name="VainTech" Lead="Ahmed Abo Jamal" />,
      Sector: <SectorsFunction sectors={sectors4} />,
      status: <StatusFunction status="new"/>,
      "Active Deals": (
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
      " ": (<ViewMore/>)
    },
    {
      Syndicate: <Syndicate image={logoInvesion} name="TechGurus" Lead="Emma Johnson" />,
      Sector: <SectorsFunction sectors={sectors1} />,
      status: <StatusFunction status="Active"/>,
      "Active Deals": (
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
            [team2, "Nathan Wilson"],
            [team1, "Olivia Brown"],
            [team2, "Sophia Lee"],
          ])}
        </SoftBox>
      ),
      " ": (<ViewMore/>)
    },
    {
      Syndicate: <Syndicate image={logoAtlassian} name="GreenTech" Lead="Ethan Miller" />,
      Sector: <SectorsFunction sectors={sectors6} />,
      status: <StatusFunction status="Closed"/>,
      "Active Deals": (
        <SoftTypography variant="caption" color="secondary" fontWeight="medium">
          4 Deals
        </SoftTypography>
      ),
      members: (
        <SoftBox display="flex" py={1}>
          {avatars([
            [team3, "Ethan Miller"],
            [team4, "Ava Wilson"],
            [team2, "Nathan Wilson"],
            [team1, "Olivia Brown"],
            [team2, "Sophia Lee"],
            [team2, "Nathan Wilson"],
            [team1, "Olivia Brown"],
            [team2, "Sophia Lee"],
            [team2, "Nathan Wilson"],
            [team1, "Olivia Brown"],
            [team2, "Sophia Lee"],
          ])}
        </SoftBox>
      ),
      " ": (<ViewMore/>)
    },
    {
      Syndicate: <Syndicate image={logoJira} name="InnoHub" Lead="Michael Smith" />,
      Sector: <SectorsFunction sectors={sectors5} />,
      status: <StatusFunction status="new"/>,
      "Active Deals": (
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
      " ": (<ViewMore/>)
    },
    {
      Syndicate: <Syndicate image={logoInvesion} name="SoftTech" Lead="Olivia Davis" />,
      Sector: <SectorsFunction sectors={sectors4} />,
      status: <StatusFunction status="Active"/>,
      "Active Deals": (
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
            [team2, "Nathan Wilson"],
          ])}
        </SoftBox>
      ),
      " ": (<ViewMore/>)
    },
    {
      Syndicate: <Syndicate image={logoAtlassian} name="SocialTech" Lead="Emily Wilson" />,
      Sector: <SectorsFunction sectors={sectors2} />,
      status: <StatusFunction status="Closed"/>,
      "Active Deals": (
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
            [team1, "Olivia Brown"],
            [team2, "Sophia Lee"],
          ])}
        </SoftBox>
      ),
      " ": (<ViewMore/>)
    },
  ],
};

export default SyndicatesTableData;
