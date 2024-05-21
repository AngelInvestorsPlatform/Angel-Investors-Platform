// @mui material components
import Tooltip from "@mui/material/Tooltip";
import Icon from "@mui/material/Icon";

// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SoftAvatar from "components/SoftAvatar";
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

export default function data() {
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

    const more = (
      <Icon sx={{ cursor: "pointer", fontWeight: "bold" }} fontSize="small">
        more_vert
      </Icon>
    );

  return {
    columns: [
      { name: "Syndicate", align: "left" },
      { name: "members", align: "left" },
      { name: "About", align: "center" },
      { name: "Deals", align: "center" },
      { name: "more", align: "center" },
    ],

    rows: [
      {
        Syndicate: (
          <SoftBox display="flex" alignItems="center" px={1} py={0.5}>
            <SoftBox mr={2}>
              <SoftAvatar src={logoSlack} size="sm" variant="rounded" />
            </SoftBox>
            <SoftBox display="flex" flexDirection="column">
              <SoftTypography variant="button" fontWeight="medium">
                VainTech
              </SoftTypography>
              <SoftTypography variant="caption" color="secondary">
                Lead : Ahmed Abo Jamal
              </SoftTypography>
            </SoftBox>
          </SoftBox>
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
        About: (
          <SoftBox display="flex" alignItems="center" px={1} py={0.5}>
            <SoftBox display="flex" flexDirection="column">
              <SoftTypography variant="text" fontWeight="light" sx={{ fontSize: "0.9rem" }}>
                Technology Sector
              </SoftTypography>
              <SoftTypography variant="caption" color="secondary" sx={{ fontSize: "0.8rem" }}>
                Fintech pr-seed startups
              </SoftTypography>
            </SoftBox>
          </SoftBox>
        ),
        Deals: (
          <SoftTypography variant="caption" color="text" fontWeight="medium">
            3 Deals
          </SoftTypography>
        ),
        more,
      },
      {
        Syndicate: (
          <SoftBox display="flex" alignItems="center" px={1} py={0.5}>
            <SoftBox mr={2}>
              <SoftAvatar src={logoJira} size="sm" variant="rounded" />
            </SoftBox>
            <SoftBox display="flex" flexDirection="column">
              <SoftTypography variant="button" fontWeight="medium">
                TechSynergy
              </SoftTypography>
              <SoftTypography variant="caption" color="secondary">
                Lead: Maria Smith
              </SoftTypography>
            </SoftBox>
          </SoftBox>
        ),
        members: (
          <SoftBox display="flex" py={1}>
            {avatars([
              [team2, "Romina Hadid"],
              [team4, "Jessica Doe"],
            ])}
          </SoftBox>
        ),
        About: (
          <SoftBox display="flex" alignItems="center" px={1} py={0.5}>
            <SoftBox display="flex" flexDirection="column">
              <SoftTypography variant="text" fontWeight="light" sx={{ fontSize: "0.9rem" }}>
                Healthcare Sector
              </SoftTypography>
              <SoftTypography variant="caption" color="secondary" sx={{ fontSize: "0.8rem" }}>
                Telemedicine startups
              </SoftTypography>
            </SoftBox>
          </SoftBox>
        ),
        Deals: (
          <SoftTypography variant="caption" color="text" fontWeight="medium">
            1 Deal
          </SoftTypography>
        ),
        more,
      },
      {
        Syndicate: (
          <SoftBox display="flex" alignItems="center" px={1} py={0.5}>
            <SoftBox mr={2}>
              <SoftAvatar src={logoInvesion} size="sm" variant="rounded" />
            </SoftBox>
            <SoftBox display="flex" flexDirection="column">
              <SoftTypography variant="button" fontWeight="medium">
                InnovateHub
              </SoftTypography>
              <SoftTypography variant="caption" color="secondary">
                Lead: John Doe
              </SoftTypography>
            </SoftBox>
          </SoftBox>
        ),
        members: (
          <SoftBox display="flex" py={1}>
            {avatars([
              [team1, "Ryan Tompson"],
              [team3, "Alexander Smith"],
            ])}
          </SoftBox>
        ),
        About: (
          <SoftBox display="flex" alignItems="center" px={1} py={0.5}>
            <SoftBox display="flex" flexDirection="column">
              <SoftTypography variant="text" fontWeight="light" sx={{ fontSize: "0.9rem" }}>
                Education Sector
              </SoftTypography>
              <SoftTypography variant="caption" color="secondary" sx={{ fontSize: "0.8rem" }}>
                EdTech startups
              </SoftTypography>
            </SoftBox>
          </SoftBox>
        ),
        Deals: (
          <SoftTypography variant="caption" color="text" fontWeight="medium">
            No Deals
          </SoftTypography>
        ),
        more,
      },
      {
        Syndicate: (
          <SoftBox display="flex" alignItems="center" px={1} py={0.5}>
            <SoftBox mr={2}>
              <SoftAvatar src={logoAtlassian} size="sm" variant="rounded" />
            </SoftBox>
            <SoftBox display="flex" flexDirection="column">
              <SoftTypography variant="button" fontWeight="medium">
                SmartInnovators
              </SoftTypography>
              <SoftTypography variant="caption" color="secondary">
                Lead: Sarah Johnson
              </SoftTypography>
            </SoftBox>
          </SoftBox>
        ),
        members: (
          <SoftBox display="flex" py={1}>
            {avatars([
              [team4, "Jessica Doe"],
              [team3, "Alexander Smith"],
              [team2, "Romina Hadid"],
              [team1, "Ryan Tompson"],
            ])}
          </SoftBox>
        ),
        About: (
          <SoftBox display="flex" alignItems="center" px={1} py={0.5}>
            <SoftBox display="flex" flexDirection="column">
              <SoftTypography variant="text" fontWeight="light" sx={{ fontSize: "0.9rem" }}>
                E-commerce Sector
              </SoftTypography>
              <SoftTypography variant="caption" color="secondary" sx={{ fontSize: "0.8rem" }}>
                Fashion-tech startups
              </SoftTypography>
            </SoftBox>
          </SoftBox>
        ),
        Deals: (
          <SoftTypography variant="caption" color="text" fontWeight="medium">
            5 Deals
          </SoftTypography>
        ),
        more,
      },
      {
        Syndicate: (
          <SoftBox display="flex" alignItems="center" px={1} py={0.5}>
            <SoftBox mr={2}>
              <SoftAvatar src={logoSpotify} size="sm" variant="rounded" />
            </SoftBox>
            <SoftBox display="flex" flexDirection="column">
              <SoftTypography variant="button" fontWeight="medium">
                FutureInnovate
              </SoftTypography>
              <SoftTypography variant="caption" color="secondary">
                Lead: Michael Brown
              </SoftTypography>
            </SoftBox>
          </SoftBox>
        ),
        members: (
          <SoftBox display="flex" py={1}>
            {avatars([[team4, "Jessica Doe"]])}
          </SoftBox>
        ),
        About: (
          <SoftBox display="flex" alignItems="center" px={1} py={0.5}>
            <SoftBox display="flex" flexDirection="column">
              <SoftTypography variant="text" fontWeight="light" sx={{ fontSize: "0.9rem" }}>
                Food & Beverage Sector
              </SoftTypography>
              <SoftTypography variant="caption" color="secondary" sx={{ fontSize: "0.8rem" }}>
                Plant-based food startups
              </SoftTypography>
            </SoftBox>
          </SoftBox>
        ),
        Deals: (
          <SoftTypography variant="caption" color="text" fontWeight="medium">
            No Deals
          </SoftTypography>
        ),
        more,
      },
    ],
  };
}
