import React from "react";
import PropTypes from "prop-types";

import SoftTypography from "components/SoftTypography";

const CurrencyFormatter = ({ amount }) => {
    const formatCurrency = (value) => {
        // Convert the number to a string and format as currency without currency symbol
        const format = new Intl.NumberFormat('en-US', {
          style: 'decimal', // Use 'currency' for currency formatting
          maximumFractionDigits: 0, // No decimal places for whole numbers
        });
    
        if (value >= 1e9) {
          return `SAR ${(value / 1e9).toFixed(1)}B`;
        } else if (value >= 1e6) {
          return `SAR ${(value / 1e6).toFixed(1)}M`;
        } else {
          return `SAR ${format.format(value)}`; // Use the formatting here for thousands
        }
      };

  return (
    <SoftTypography variant="caption" color="secondary" fontWeight="bold">
      {formatCurrency(amount)}
    </SoftTypography>
  );
};

CurrencyFormatter.propTypes = {
  amount: PropTypes.number.isRequired,
};

export default CurrencyFormatter;
