/* eslint-disable react/prop-types */
// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SoftAvatar from "components/SoftAvatar";
import SoftBadge from "components/SoftBadge";
//icon
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
// Images
import team2 from "assets/images/team-2.jpg";
import team3 from "assets/images/team-3.jpg";
import team4 from "assets/images/team-4.jpg";
import { Icon } from "@mui/material";

function Author({ image, name, email }) {
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
          {email}
        </SoftTypography>
      </SoftBox>
    </SoftBox>
  );
}

function Function({ job, org }) {
  return (
    <SoftBox display="flex" flexDirection="column">
      <SoftTypography variant="caption" fontWeight="medium" color="text">
        {job}
      </SoftTypography>
      <SoftTypography variant="caption" color="secondary">
        {org}
      </SoftTypography>
    </SoftBox>
  );
}

const authorsTableData = {
  columns: [
    { name: "Syndicate_Lead", align: "left" },
    { name: "Syndicate_name", align: "left" },
    { name: "Date", align: "center" },
    { name: "offer", align: "center" },
     { name: "action", align: "center" },
  ],

  rows: [
    {
      Syndicate_Lead: <Author image={team4} name="Laurent Perrier" email="laurent@creative-tim.com" />,
      Syndicate_name: <Function job="Executive" org="Projects" />,
      
      Date: (
        <SoftTypography variant="caption" color="secondary" fontWeight="medium">
          19/09/17
        </SoftTypography>
      ),
      offer: (
        <SoftTypography variant="caption" color="secondary" fontWeight="medium">
          1,500,000
        </SoftTypography>
      ),
      action: (
        <SoftTypography
          component="a"
          href="#"
          variant="caption"
          color="secondary"
          fontWeight="medium"
        >
          X
        </SoftTypography>
      ),
    },
    {
      Syndicate_Lead: <Author image={team2} name="John Michael" email="john@creative-tim.com" />,
      Syndicate_name: <Function job="Manager" org="Organization" />,
      Date: (
        <SoftTypography variant="caption" color="secondary" fontWeight="medium">
          23/04/18
        </SoftTypography>
      ),
      offer: (
        <SoftTypography variant="caption" color="secondary" fontWeight="medium">
          1,000,000
        </SoftTypography>
      ),
      action: (
        <SoftTypography
          component="a"
          href="#"
          variant="caption"
          color="secondary"
          fontWeight="medium"
        >
          X
        </SoftTypography>
      ),
    },
    {
      Syndicate_Lead: <Author image={team3} name="Alexa Liras" email="alexa@creative-tim.com" />,
      Syndicate_name: <Function job="Programator" org="Developer" />,
    
      Date: (
        <SoftTypography variant="caption" color="secondary" fontWeight="medium">
          11/01/19
        </SoftTypography>
        
      ),
      offer: (
        <SoftTypography variant="caption" color="secondary" fontWeight="medium">
          500,000
        </SoftTypography>
      ),
      action: (
        <SoftTypography
          component="a"
          href="#"
          variant="caption"
          color="secondary"
          fontWeight="medium"
        >
          X
        </SoftTypography>
      ),
    },
    {
      Syndicate_Lead: <Author image={team4} name="Laurent Perrier" email="laurent@creative-tim.com" />,
      Syndicate_name: <Function job="Executive" org="Projects" />,
      
      Date: (
        <SoftTypography variant="caption" color="secondary" fontWeight="medium">
          19/09/17
        </SoftTypography>
      ),
      offer: (
        <SoftTypography variant="caption" color="secondary" fontWeight="medium">
          1,500,000
        </SoftTypography>
      ),
      action: (
        <SoftTypography
          component="a"
          href="#"
          variant="caption"
          color="secondary"
          fontWeight="medium"
        >
          X
        </SoftTypography>
      ),
    },
    {
      Syndicate_Lead: <Author image={team3} name="Michael Levi" email="michael@creative-tim.com" />,
      Syndicate_name: <Function job="Programator" org="Developer" />,
     
      Date: (
        <SoftTypography variant="caption" color="secondary" fontWeight="medium">
          24/12/08
        </SoftTypography>
      ),
      offer: (
        <SoftTypography variant="caption" color="secondary" fontWeight="medium">
          350,000
        </SoftTypography>
      ),
      action: (
        <SoftTypography
          component="a"
          href="#"
          variant="caption"
          color="secondary"
          fontWeight="medium"
        >
      X
        </SoftTypography>
      ),
    },
    {
      Syndicate_Lead: <Author image={team2} name="Richard Gran" email="richard@creative-tim.com" />,
      Syndicate_name: <Function job="Manager" org="Executive" />,
      
      Date: (
        <SoftTypography variant="caption" color="secondary" fontWeight="medium">
          04/10/21
        </SoftTypography>
      ),
      offer: (
        <SoftTypography variant="caption" color="secondary" fontWeight="medium">
         900,000
        </SoftTypography>
      ),
      action: (
        <SoftTypography
          component="a"
          href="#"
          variant="caption"
          color="secondary"
          fontWeight="medium"
        >
          X
        </SoftTypography>
      ),
    },
    {
      Syndicate_Lead: <Author image={team4} name="Miriam Eric" email="miriam@creative-tim.com" />,
      Syndicate_name: <Function job="Programtor" org="Developer" />,
      
      Date: (
        <SoftTypography variant="caption" color="secondary" fontWeight="medium">
          14/09/20
        </SoftTypography>
      ),
      offer: (
        <SoftTypography variant="caption" color="secondary" fontWeight="medium">
          2,000,000
        </SoftTypography>
      ),
      action: (
        <SoftTypography
          component="a"
          href="#"
          variant="caption"
          color="secondary"
          fontWeight="medium"
        >
          X
        </SoftTypography>
      ),
    },
    {
      Syndicate_Lead: <Author image={team3} name="Michael Levi" email="michael@creative-tim.com" />,
      Syndicate_name: <Function job="Programator" org="Developer" />,
     
      Date: (
        <SoftTypography variant="caption" color="secondary" fontWeight="medium">
          24/12/08
        </SoftTypography>
      ),
      offer: (
        <SoftTypography variant="caption" color="secondary" fontWeight="medium">
          350,000
        </SoftTypography>
      ),
      action: (
        <SoftTypography
          component="a"
          href="#"
          variant="caption"
          color="secondary"
          fontWeight="medium"
        >
      X
        </SoftTypography>
      ),
    },
  ],
};

export default authorsTableData;
