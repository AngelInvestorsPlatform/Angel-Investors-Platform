import React from "react";
import PropTypes from "prop-types";
import SoftTypography from "components/SoftTypography";

const AboutInvestorComponent = ({ text }) => {
  const displayText = text.length > 20 ? `${text.substring(0, 20)}...` : text;
  return (
    <SoftTypography
      variant="caption"
      color="secondary"
      fontWeight="medium"
      style={{ display: "block" }}
    >
      {displayText}
    </SoftTypography>
  );
};

AboutInvestorComponent.propTypes = {
  text: PropTypes.string.isRequired,
};

export default AboutInvestorComponent;
