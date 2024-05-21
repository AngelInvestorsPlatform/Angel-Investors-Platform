import { useState, useEffect } from "react";
import PropTypes from "prop-types";

// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";


function SectorsFunction({ sectors }) {
    if (!sectors) return null;  // Render nothing if props are incomplete
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

// Define prop types for SectorsFunction
SectorsFunction.propTypes = {
  sectors: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default SectorsFunction;