import React, { useState, useEffect } from "react";

//for API
import axios from "axios";

//for user auth global context
import { useAuthUser } from "context/authContext";

// @mui material components
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Icon from "@mui/material/Icon";
import Link from "@mui/material/Link";

// Soft UI Dashboard React components
import SoftButton from "components/SoftButton";
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";

// Custom styles for the SidenavCard
import { card, cardContent, cardIconBox, cardIcon } from "examples/Sidenav/styles/sidenavCard";
import ToggleButton from "examples/Sidenav/SidenavToggle";

// Soft UI Dashboard React context
import { useSoftUIController } from "context";

function SidenavCard() {
  const [controller] = useSoftUIController();
  const { miniSidenav, sidenavColor } = controller;

  const [investorRole, setInvRole] = useState('investor'); 
  // Auth and config
  const { userData, setrole, role } = useAuthUser();
  const token = userData ? userData.token : " ";
  const config = {
    headers: {
      Authorization: `Token ${token}`,
    },
  };

  const fetchInvestorRoleData = async () => {
    try {
      // Make the GET request
      const response = await axios.get(
        `${process.env.REACT_APP_DJANGO_API}/investors/check-syndicate-lead/`,
        config
      );

      // Handle response
      return response.data;
    } catch (error) {
      console.error("Error fetching investor profile:", error);
      // Handle errors, e.g., token expired, network issues, etc.
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        console.error("Response data:", error.response.data);
        console.error("Response status:", error.response.status);
        console.error("Response headers:", error.response.headers);
      } else if (error.request) {
        // The request was made but no response was received
        console.error("Request error:", error.request);
      } else {
        // Something happened in setting up the request that triggered an Error
        console.error("Error", error.message);
      }
    }
  };


  useEffect(() => {
    const fetchRole = async () => {
      try {
        const fetchInvestorRole = await fetchInvestorRoleData(); // Assume this function fetches the role data
        if (fetchInvestorRole.is_syndicate_lead) {
          setInvRole('lead');
        } else {
          setInvRole('investor');
        }
      } catch (error) {
        console.error('Failed to fetch role:', error);
        // Optionally set role to 'investor' as a fallback
        setInvRole('investor');
      }
    };

    fetchRole();
  }, []); // Empty dependency array ensures this effect runs only once after the initial render

 // const InvestorRole = { role } ? { role } : "investor";

  return (
    <SoftBox>
      {investorRole === "lead" ? (
        <SoftBox>
          <ToggleButton />
        </SoftBox>
      ) : investorRole === "investor" ? (
        <Card sx={(theme) => card(theme, { miniSidenav })}>
          <CardContent sx={(theme) => cardContent(theme, { sidenavColor })}>
            {/*<SoftBox
            bgColor="white"
            width="2rem"
            height="2rem"
            borderRadius="md"
            shadow="md"
            mb={2}
            sx={cardIconBox}
          >
            <Icon fontSize="medium" sx={(theme) => cardIcon(theme, { sidenavColor })}>
              star
            </Icon>
          </SoftBox> */}
            <SoftBox lineHeight={1}>
              <SoftTypography variant="h6" color="white">
                Wanna be a lead?
              </SoftTypography>
              <SoftBox mb={1.825} mt={-1}>
                <SoftTypography variant="caption" color="white" fontWeight="medium">
                  Create your own syndicate.
                </SoftTypography>
              </SoftBox>
              <SoftButton
                component={Link}
                href="/LeadInvestor/syndicate_form"
                size="small"
                color="white"
                fullWidth
                // onClick={handleSyndicate}
                // to="/LeadInvestor/syndicate_form"
              >
                create New
              </SoftButton>
            </SoftBox>
          </CardContent>
        </Card>
      ) : (
        <Card sx={(theme) => card(theme, { miniSidenav })}>
        <CardContent sx={(theme) => cardContent(theme, { sidenavColor })}>
          {investorRole}
        </CardContent>
      </Card>
      )}
    </SoftBox>
  );
}

export default SidenavCard;
