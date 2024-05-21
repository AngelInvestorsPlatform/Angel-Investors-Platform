
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import MuiLink from "@mui/material/Link";

// @mui material components
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import Tooltip from "@mui/material/Tooltip";
import Icon from "@mui/material/Icon";

// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SoftAvatar from "components/SoftAvatar";
import SoftBadge from "components/SoftBadge";
import SoftProgress from "components/SoftProgress";

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

export default function data() {
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

    function GroupAvatars({ members }) {
      return (
        <AvatarGroup max={5}>
          {members.map(([image, name], index) => (
            <Tooltip key={name} title={name} placement="bottom">
              <span>
                <Avatar
                  alt={name}
                  src={image}
                  sx={{
                    width: 24,
                    height: 24,
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
              </span>
            </Tooltip>
          ))}
        </AvatarGroup>
      );
  }

  GroupAvatars.propTypes ={
    members: PropTypes.node.isRequired,
  }

    function Syndicate({ image, name, Lead }) {
      return (
        <Link to="/investor/yourSyndicates/SyndicateDetailsProfile">
          <MuiLink component="div" underline="hover" sx={{cursor:"pointer"}}>
          <SoftBox display="flex" alignItems="left" px={1} py={0.5}>
            <SoftBox mr={2}>
              <SoftAvatar src={image} alt={name} size="sm" variant="rounded" />
            </SoftBox>
            <SoftBox display="flex" alignText="left" flexDirection="column">
              <SoftTypography variant="button" fontWeight="medium">
                {name}
              </SoftTypography>
              <SoftTypography variant="caption" color="secondary">
                Lead :&nbsp;{Lead}
              </SoftTypography>
            </SoftBox>
          </SoftBox>
          </MuiLink>
        </Link>
        
      );
    }
    Syndicate.propTypes = {
      image: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      Lead: PropTypes.string.isRequired,
    };

    function SectorsFunction({sectors}) {
      const sect1 = sectors[0];
      const sect2 = sectors[1];
      const sect3 = sectors[2];
    
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
    SectorsFunction.propTypes = {
      sectors: PropTypes.arrayOf(PropTypes.string).isRequired,
    };

    function StatusFunction({status}) {
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
    StatusFunction.propTypes = {
      status: PropTypes.string.isRequired,
    };


  return {
    columns: [
      { name: "Syndicate", align: "left" },
      { name: "Sector", align: "center" },
      { name: "status", align: "center" },
      { name: "Active Deals", align: "center" },
      { name: "members", align: "left" },
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
      },
      {
        Syndicate: <Syndicate image={logoJira} name="TechSynergy" Lead=" Maria Smith" />,
        Sector: <SectorsFunction sectors={sectors2} />,
        status: <StatusFunction status="new"/>,
        "Active Deals": (
          <SoftTypography variant="caption" color="text" fontWeight="medium">
            1 Deal
          </SoftTypography>
        ),
        members: (
          <SoftBox display="flex" py={1}>
            {avatars([
              [team2, "Romina Hadid"],
              [team4, "Jessica Doe"],
            ])}
          </SoftBox>
        ),

      },
      {
        Syndicate:  <Syndicate image={logoInvesion} name="InnovateHub" Lead="John Doe"/>,
        Sector: <SectorsFunction sectors={sectors4} />,
        status: <StatusFunction status="inactive"/>,
        "Active Deals": (
          <SoftTypography variant="caption" color="text" fontWeight="medium">
            No Deals
          </SoftTypography>
        ),
        members: (
          <SoftBox display="flex" py={1}>
            {avatars([
              [team1, "Ryan Tompson"],
              [team3, "Alexander Smith"],
            ])}
          </SoftBox>
        ),

      },
      {
        Syndicate:  <Syndicate image={logoAtlassian} name="SmartInnovators" Lead="Sarah Johnson"/>,
        Sector: <SectorsFunction sectors={sectors3} />,
        status: <StatusFunction status="active"/>,
        "Active Deals": (
          <SoftTypography variant="caption" color="text" fontWeight="medium">
            5 Deals
          </SoftTypography>
        ),
        members: (
          <SoftBox display="flex" py={1}>
            {avatars([
              [team4, "Jessica Doe"],
              [team3, "Alexander Smith"],
              [team2, "Romina Hadid"],
              [team1, "Ryan Tompson"],
              [team4, "Jessica Doe"],
              [team3, "Alexander Smith"],
              [team2, "Romina Hadid"],
              [team1, "Ryan Tompson"],
            ])}
          </SoftBox>
        ),
      },
      {
        Syndicate:  <Syndicate image={logoSpotify} name="FutureInnovate" Lead="Michael Brown"/>,
        Sector: <SectorsFunction sectors={sectors6} />,
        status: <StatusFunction status="closed"/>,
        "Active Deals": (
          <SoftTypography variant="caption" color="text" fontWeight="medium">
            No Deals
          </SoftTypography>
        ),
        members: (
          <SoftBox display="flex" py={1}>
            {avatars([[team4, "Jessica Doe"]])}
          </SoftBox>
        ),
      },
    ],
  };
}
