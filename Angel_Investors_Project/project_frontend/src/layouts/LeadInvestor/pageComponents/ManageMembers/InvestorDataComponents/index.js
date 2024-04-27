import React from 'react';
import PropTypes from 'prop-types';

// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SoftAvatar from "components/SoftAvatar";


function InvestorDataComponents({ image, name, email }) {
    return (
      <SoftBox display="flex" alignItems="center" px={1} py={0.5}>
        <SoftBox mr={2}>
          <SoftAvatar src={image} alt={name} size="sm" variant="rounded" />
        </SoftBox>
        <SoftBox display="flex" flexDirection="column">
          <SoftTypography variant="caption" fontWeight="medium">
            {name}
          </SoftTypography>
          <SoftTypography variant="caption" color="secondary">
            {email}
          </SoftTypography>
        </SoftBox>
      </SoftBox>
    );
  }

  InvestorDataComponents.propTypes = {
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
  };
  

  export default InvestorDataComponents;