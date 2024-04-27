// hooks/useSyndicatesTableData.js
import { useState, useEffect } from "react";
import PropTypes from "prop-types";

// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SoftAvatar from "components/SoftAvatar";
import SoftBadge from "components/SoftBadge";
import SoftButton from "components/SoftButton";

function StatusFunction({ status }) {
  let badgeColor;
  switch (status.toLowerCase()) {
    case "new":
      badgeColor = "success";
      break;
    case "active":
      badgeColor = "info";
      break;
    case "inactive":
      badgeColor = "secondary";
      break;
    case "closed":
      badgeColor = "error";
      break;
    default:
      badgeColor = "light"; // Default color if status doesn't match any case
      break;
  }

  return <SoftBadge variant="gradient" badgeContent={status} color={badgeColor} size="md" border />;
}

// Define prop types for StatusFunction
StatusFunction.propTypes = {
  status: PropTypes.string.isRequired,
};

export default StatusFunction;