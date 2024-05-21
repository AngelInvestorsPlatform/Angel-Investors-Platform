import React, { useState, useEffect } from "react";

import { useParams } from 'react-router-dom';

//for API
import axios from "axios";

//for user auth global context
import { useAuthUser } from "context/authContext";

// @mui material components
import Grid from "@mui/material/Grid";
import Icon from "@mui/material/Icon";
import Card from "@mui/material/Card";

// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SoftAvatar from "components/SoftAvatar";

// Soft UI Dashboard React examples
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import PageLayout from "examples/LayoutContainers/PageLayout";
import Footer from "examples/Footer";
import Table from "examples/Tables/Table";
import DealsInfoCard from "examples/Cards/InfoCards/DealsInfoCard";
import DealsInvestCards from "examples/Cards/DealsInvestCards";

// Soft UI Dashboard React base styles
import typography from "assets/theme/base/typography";

// Investor layout components
import InvestorNavbar from "layouts/investor/components/InvestorNavbar";
import Projects from "layouts/investor/components/Projects";

// images
import logoAtlassian from "assets/images/small-logos/logo-atlassian.svg";
import { FlashOnRounded } from "@mui/icons-material";


function DealsDetails() {
  const { userId } = useParams();
  const { dealName } = useParams();
  const [userRole, setUserRole] = useState("");

  // Auth and config
  const { userData } = useAuthUser();
  const token = userData ? userData.token : " ";
  const config = {
    headers: {
      Authorization: `Token ${token}`,
    },
  };

  const fetchDealDetails = async () => {
    try {
      // Make the GET request
      const response = await axios.get(
        `${process.env.REACT_APP_DJANGO_API}/deals/deal-detail/${userId}/`,
        config
      );

      // Handle response
      return response.data;
    } catch (error) {
      console.error("Error fetching Deal Details:", error);
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

  const [Details, setDetails] = useState(null);

  useEffect(() => {
    const loadDetails = async () => {
      const DetailsData = await fetchDealDetails();
      setDetails(DetailsData);
    };

    loadDetails();
  }, []);

  const Startup = Details ? Details.startup_name : "GreenTech Innovations";
  const LeadName = Details ? Details.syndicate_lead_first_name : "Ahmad Nasser";
  const syndicate = Details ? Details.syndicate_name : "syndicate X";

  //memo
  const memorandum = Details ? Details.memo : "Lauding...";

  // Description
  /*   const [memorandum, setMemorandum] = useState(`
  GreenTech Innovations is poised to disrupt the renewable energy sector with its cutting-edge solar panel technology that significantly increases efficiency while reducing manufacturing costs.Our investment aims to accelerate the production and distribution of these solar panels across North America and Europe, targeting a reduction in the reliance on fossil fuels and a move towards more sustainable energy solutions.


  The funds will be used to:
  - Enhance the research and development team to push the boundaries of current solar technology.
  - Scale up production capabilities to meet the growing demand for renewable energy solutions.
  - Expand market reach through strategic partnerships with key players in the energy and housing sectors.

  This investment not only offers a lucrative return potential but also aligns with global efforts towards sustainability, making it an impactful venture in both economic and environmental terms. The management team comprises industry veterans who have previously led successful green startups to exits and IPOs, ensuring that the project is managed by experienced professionals.
`); */

  // Sectors

  //const sectorsInfo = ["Biotech", "Renewable Energy"];
  const sectorsInfo = Details?.sector ? Details.sector.split(", ").sort() : [];

  //leadInvest min deadline allocation valuation carry

  const leadInvestment = Details ? Details.lead_investment : "15000";
  const minimum = Details ? Details.minimum_investment : "10000";
  const deadline = Details ? Details.deadline : "5-18-2024";
  const valuation = Details ? Details.valuation : "20000000";
  const allocation = Details ? Details.allocation : "200000";
  const carry = Details ? Details.total_curry : "10";

  // role user_has_invested and amount invested_amount
  const userHasInvested = Details ? Details.user_has_invested : false;
  const amount = Details ? Details.invested_amount : "0";
  
  useEffect(() => {
    setUserRole(userHasInvested ? "invested" : "");
  }, [userHasInvested]); 

  return (
    <PageLayout px={10}>
      <SoftBox px={10}>
        <DashboardNavbar />
        <SoftBox py={3}>
          <SoftBox py={10}>
            {/* Startup Name Card */}
            <Card
              sx={{
                backdropFilter: `saturate(200%) blur(30px)`,
                backgroundColor: ({ functions: { rgba }, palette: { white } }) =>
                  rgba(white.main, 0.8),
                boxShadow: ({ boxShadows: { navbarBoxShadow } }) => navbarBoxShadow,
                position: "relative",
                mt: -8,
                mx: 3,
                py: 2,
                px: 2,
              }}
            >
              <Grid container spacing={3} alignItems="center">
                <Grid item>
                  <SoftAvatar
                    src={logoAtlassian}
                    alt="profile-image"
                    variant="rounded"
                    size="xl"
                    shadow="sm"
                  />
                </Grid>
                <Grid item>
                  <SoftBox height="100%" mt={0.5} lineHeight={1}>
                    <SoftTypography variant="h5" fontWeight="medium">
                      {Startup}
                    </SoftTypography>
                    <SoftTypography variant="button" color="text" fontWeight="medium">
                      By : {LeadName} - {syndicate}
                    </SoftTypography>
                  </SoftBox>
                </Grid>
              </Grid>
            </Card>
            {/* Deals Info Card */}
            <SoftBox px={6} mt={5} mb={3}>
              <Grid container spacing={3}>
                <Grid item xs={12} md={8} xl={8}>
                  <DealsInfoCard
                    title="Investment Memo"
                    description={memorandum}
                    sectors={sectorsInfo}
                    action={{ route: "", tooltip: "Edit Profile" }}
                  />
                </Grid>
                <Grid item xs={12} md={4} xl={4}>
                  <DealsInvestCards
                    dealID={userId}
                    leadInvest={leadInvestment}
                    min={minimum}
                    deadline={deadline}
                    role={userRole}
                    invAmount={amount}
                    allocation={allocation}
                    valuation={valuation}
                    carry={carry}
                  />
                </Grid>
              </Grid>
            </SoftBox>
          </SoftBox>
        </SoftBox>
        <Footer />
      </SoftBox>
    </PageLayout>
  );
}

export default DealsDetails;