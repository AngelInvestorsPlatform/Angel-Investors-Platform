
// react-routers components
import { Link } from "react-router-dom";

// prop-types is library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
import Card from "@mui/material/Card";

// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SoftAvatar from "components/SoftAvatar";
import SoftButton from "components/SoftButton";
import SoftBadge from "components/SoftBadge";

function ProfileDealList({ title, profiles, message }) {

  const renderProfiles = profiles ? profiles.map(({ image, name, amount}) => (
    <SoftBox key={name} component="li" display="flex" alignItems="center" py={1} mb={1}>
      <SoftBox mr={2}>
        <SoftAvatar src={image} alt="something here" variant="rounded" shadow="md" />
      </SoftBox>
      <SoftBox
        display="flex"
        flexDirection="column"
        alignItems="flex-start"
        justifyContent="center"
      >
        <SoftTypography variant="button" fontWeight="medium">
          {name}
        </SoftTypography>
      </SoftBox>
      <SoftBox ml="auto">
      <SoftBox mr={2} >
        <SoftBadge  badgeContent={amount} color="success" variant="contained"/> 
        </SoftBox>
      </SoftBox>
    </SoftBox>
  )) : []; // Ensure that renderProfiles is an empty array if profiles is undefined

  return (
    <Card sx={{ height: "100%" }}>
      <SoftBox pt={2} px={2}>
        <SoftTypography variant="h6" fontWeight="bold" textTransform="capitalize">
          {title}
        </SoftTypography>
      </SoftBox>
      <SoftBox p={2}>
        {renderProfiles.length > 0 ? (
          <SoftBox component="ul" display="flex" flexDirection="column" p={1} m={0}>
            {renderProfiles}
          </SoftBox>
        ) : (
          <SoftBox  display="center" p={1} m={0}>
            <SoftTypography variant="caption">{message || 'No profiles available'}</SoftTypography>
          </SoftBox>
        )}
      </SoftBox>
    </Card>
  );
}

// Typechecking props for the ProfileDealList
ProfileDealList.propTypes = {
  title: PropTypes.string.isRequired,
  profiles: PropTypes.arrayOf(PropTypes.object),
  message: PropTypes.string,
};

export default ProfileDealList;
