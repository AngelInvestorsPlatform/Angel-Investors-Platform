import { useState, useEffect } from "react";
import PropTypes from "prop-types";

// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SoftAvatar from "components/SoftAvatar";


function Syndicate({ image, name, Lead }) {
    if (!image || !name || !Lead) return null;  // Render nothing if props are incomplete
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

// Define prop types for Syndicate
Syndicate.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  Lead: PropTypes.string.isRequired,
};

export default Syndicate;