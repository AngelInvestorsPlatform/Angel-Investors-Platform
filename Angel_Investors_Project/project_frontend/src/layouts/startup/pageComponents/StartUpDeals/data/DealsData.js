/* eslint-disable react/prop-types */

// this page foe deals -> for startup //

// @mui material components
import Icon from "@mui/material/Icon";

// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SoftProgress from "components/SoftProgress";

// Images
import logoSpotify from "assets/images/small-logos/logo-spotify.svg";
import logoInvesion from "assets/images/small-logos/logo-invision.svg";
import logoJira from "assets/images/small-logos/logo-jira.svg";
import logoSlack from "assets/images/small-logos/logo-slack.svg";
import logoWebDev from "assets/images/small-logos/logo-webdev.svg";
import logoXD from "assets/images/small-logos/logo-xd.svg";

function Completion({ value, color }) {
  return (
    <SoftBox display="flex" alignItems="center">
      <SoftTypography variant="caption" color="text" fontWeight="medium">
        {value}%
      </SoftTypography>
      <SoftBox width="8rem">
        <SoftProgress value={value} color={color} variant="gradient" label={false} />
      </SoftBox>
    </SoftBox>
  );
}

const action = (
  <Icon sx={{ cursor: "pointer", fontWeight: "bold" }} fontSize="small">
    more_vert
  </Icon>
);
// Date of start
const DealsData = {
  columns: [
    { name: "syndicate_name", align: "left" },
    { name: "Amount", align: "left" },
    { name: "status", align: "left" },
    { name: "Date_Of_Start", align: "center" },
    { name: "completion", align: "center" },
    { name: "action", align: "center" },
  ],

  rows: [
    {
      syndicate_name: [logoSlack, " GLANTE"],
      Amount: (
        <SoftTypography variant="button" color="text" fontWeight="medium">
          $200,500
        </SoftTypography>
      ),
      status: (
        <SoftTypography variant="caption" color="text" fontWeight="medium">
          working
        </SoftTypography>
      ),
      Date_Of_Start: (
        <SoftTypography variant="caption" color="text" fontWeight="medium">
          23/04/18
        </SoftTypography>
      ),
      completion: <Completion value={60} color="info" />,
      action,
    },
    {
      syndicate_name: [logoInvesion, "Invesion"],
      Amount: (
        <SoftTypography variant="button" color="text" fontWeight="medium">
          $500,000
        </SoftTypography>
      ),
      status: (
        <SoftTypography variant="caption" color="text" fontWeight="medium">
          done
        </SoftTypography>
      ),
      Date_Of_Start: (
        <SoftTypography variant="caption" color="text" fontWeight="medium">
          23/04/18
        </SoftTypography>
      ),
      completion: <Completion value={100} color="success" />,
      action,
    },
    {
      syndicate_name: [logoJira, "Jira"],
      Amount: (
        <SoftTypography variant="button" color="text" fontWeight="medium">
          $300,400
        </SoftTypography>
      ),
      status: (
        <SoftTypography variant="caption" color="text" fontWeight="medium">
          canceled
        </SoftTypography>
      ),
      Date_Of_Start: (
        <SoftTypography variant="caption" color="text" fontWeight="medium">
          23/04/18
        </SoftTypography>
      ),
      completion: <Completion value={30} color="error" />,
      action,
    },
    {
      syndicate_name: [logoSlack, "Slack"],
      Amount: (
        <SoftTypography variant="button" color="text" fontWeight="medium">
          $100,900
        </SoftTypography>
      ),
      status: (
        <SoftTypography variant="caption" color="text" fontWeight="medium">
          canceled
        </SoftTypography>
      ),
      Date_Of_Start: (
        <SoftTypography variant="caption" color="text" fontWeight="medium">
          23/04/18
        </SoftTypography>
      ),
      completion: <Completion value={0} color="error" />,
      action,
    },
    {
      syndicate_name: [logoWebDev, "Webdev"],
      Amount: (
        <SoftTypography variant="button" color="text" fontWeight="medium">
          $140,000
        </SoftTypography>
      ),
      status: (
        <SoftTypography variant="caption" color="text" fontWeight="medium">
          working
        </SoftTypography>
      ),
      Date_Of_Start: (
        <SoftTypography variant="caption" color="text" fontWeight="medium">
          23/04/18
        </SoftTypography>
      ),
      completion: <Completion value={80} color="info" />,
      action,
    },
    {
      syndicate_name: [logoXD, "Adobe XD"],
      Amount: (
        <SoftTypography variant="button" color="text" fontWeight="medium">
          $200,300
        </SoftTypography>
      ),
      status: (
        <SoftTypography variant="caption" color="text" fontWeight="medium">
          done
        </SoftTypography>
      ),
      Date_Of_Start: (
        <SoftTypography variant="caption" color="text" fontWeight="medium">
          23/04/18
        </SoftTypography>
      ),
      completion: <Completion value={100} color="success" />,
      action,
    },
    {
      syndicate_name: [ logoSlack , "CAMEO"],
      Amount: (
        <SoftTypography variant="button" color="text" fontWeight="medium">
          $200,500
        </SoftTypography>
      ),
      status: (
        <SoftTypography variant="caption" color="text" fontWeight="medium">
          working
        </SoftTypography>
      ),
      Date_Of_Start: (
        <SoftTypography variant="caption" color="text" fontWeight="medium">
          23/04/18
        </SoftTypography>
      ),
      completion: <Completion value={60} color="info" />,
      action,
    },
    {
      syndicate_name: [logoJira, "Jira"],
      Amount: (
        <SoftTypography variant="button" color="text" fontWeight="medium">
          $300,400
        </SoftTypography>
      ),
      status: (
        <SoftTypography variant="caption" color="text" fontWeight="medium">
          canceled
        </SoftTypography>
      ),
      Date_Of_Start: (
        <SoftTypography variant="caption" color="text" fontWeight="medium">
          23/04/18
        </SoftTypography>
      ),
      completion: <Completion value={30} color="error" />,
      action,
    },
  ],
};

export default DealsData;
