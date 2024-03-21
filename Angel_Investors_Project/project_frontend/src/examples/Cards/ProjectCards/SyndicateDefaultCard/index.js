/**
=========================================================
* Soft UI Dashboard React - v4.0.1
=========================================================

* Product Page: https://www.creative-tim.com/product/soft-ui-dashboard-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// react-router-dom components
import { Link } from "react-router-dom";

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Tooltip from "@mui/material/Tooltip";

// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SoftButton from "components/SoftButton";
import SoftAvatar from "components/SoftAvatar";
import SoftBadge from "components/SoftBadge";

function SyndicateDefaultCard({ image, sectors, title, lead, description, action, authors }) {
  const renderAuthors = authors.map(({ image: media, name }) => (
    <Tooltip key={name} title={name} placement="bottom">
      <SoftAvatar
        src={media}
        alt={name}
        size="xs"
        sx={({ borders: { borderWidth }, palette: { white } }) => ({
          border: `${borderWidth[2]} solid ${white.main}`,
          cursor: "pointer",
          position: "relative",
          ml: -1.25,

          "&:hover, &:focus": {
            zIndex: "10",
          },
        })}
      />
    </Tooltip>
  ));


  const renderBadges = sectors.map((sector, key) => (
    <SoftBadge key={key} badgeContent={sector} color="info" variant="gradient" size="sm" />
  ));


  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: "column",
        backgroundColor: "transparent",
        boxShadow: "none",
        overflow: "visible",
      }}
    >
        <CardMedia
          src={image}
          component="img"
          title={title}
          sx={{
            maxWidth: "70%",
            margin: 0,
            boxShadow: ({ boxShadows: { md } }) => md,
            objectFit: "cover",
            objectPosition: "center",
          }}
        />
      <SoftBox pt={3} px={0.5}>
        <SoftBox mb={1}>
          {action.type === "internal" ? (
            <SoftBox display="flex" flexDirection="column">
              <SoftTypography
                component={Link}
                to={action.route}
                variant="h5"
                textTransform="capitalize"
              >
                {title}
              </SoftTypography>
              <SoftTypography variant="caption">{lead}</SoftTypography>
            </SoftBox>
          ) : (
            <SoftTypography
              component="a"
              href={action.route}
              target="_blank"
              rel="noreferrer"
              variant="h5"
              textTransform="capitalize"
            >
              {title}
            </SoftTypography>
          )}
        </SoftBox>
        <SoftBox mx={-1} mb={1}>{renderBadges}</SoftBox>
        <SoftBox mb={3} lineHeight={0}>
          <SoftTypography variant="button" fontWeight="regular" color="text">
            {description}
          </SoftTypography>
        </SoftBox>
        <SoftBox display="flex" justifyContent="space-between" alignItems="center">
          {action.type === "internal" ? (
            <SoftButton
              component={Link}
              to={action.route}
              variant="outlined"
              size="small"
              color={action.color}
            >
              {action.label}
            </SoftButton>
          ) : (
            <SoftButton
              component="a"
              href={action.route}
              target="_blank"
              rel="noreferrer"
              variant="outlined"
              size="small"
              color={action.color}
            >
              {action.label}
            </SoftButton>
          )}
          <SoftBox display="flex">{renderAuthors}</SoftBox>
        </SoftBox>
      </SoftBox>
    </Card>
  );
}

// Setting default values for the props of DefaultProjectCard
SyndicateDefaultCard.defaultProps = {
  authors: [],
};

// Typechecking props for the DefaultProjectCard
SyndicateDefaultCard.propTypes = {
  image: PropTypes.string.isRequired,
  sectors: PropTypes.arrayOf(PropTypes.string).isRequired,
  title: PropTypes.string.isRequired,
  lead: PropTypes.string,
  description: PropTypes.string.isRequired,
  action: PropTypes.shape({
    type: PropTypes.oneOf(["external", "internal"]),
    route: PropTypes.string.isRequired,
    color: PropTypes.oneOf([
      "primary",
      "secondary",
      "info",
      "success",
      "warning",
      "error",
      "light",
      "dark",
      "white",
    ]).isRequired,
    label: PropTypes.string.isRequired,
  }).isRequired,
  authors: PropTypes.arrayOf(PropTypes.object),
};

export default SyndicateDefaultCard;
