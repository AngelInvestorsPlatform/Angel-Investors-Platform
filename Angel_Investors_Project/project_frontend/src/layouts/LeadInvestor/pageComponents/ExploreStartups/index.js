import { useState, useEffect } from "react";
import axios from "axios";
import PropTypes from "prop-types";

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
import SoftBadge from "components/SoftBadge";
import SoftButton from "components/SoftButton";
import SoftInput from "components/SoftInput";

// Soft UI Dashboard React examples
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import Table from "examples/Tables/Table";

// Soft UI Dashboard React base styles
import typography from "assets/theme/base/typography";

// Investor layout components
import LeadNavbar from "layouts/LeadInvestor/components/LeadNavbar";

// Images
import logoXD from "assets/images/small-logos/logo-xd.svg";
import logoAtlassian from "assets/images/small-logos/logo-atlassian.svg";
import logoSlack from "assets/images/small-logos/logo-slack.svg";
import logoSpotify from "assets/images/small-logos/logo-spotify.svg";
import logoJira from "assets/images/small-logos/logo-jira.svg";
import logoInvesion from "assets/images/small-logos/logo-invision.svg";

// Data
import startupsTableData from "layouts/LeadInvestor/data/startupsTableData";
import SendOffer from "layouts/LeadInvestor/data/SendOffer";

const images = [logoXD, logoAtlassian, logoSlack, logoSpotify, logoJira, logoInvesion];

function ExploreStartups() {
  // Table const
  const [tableData, setTableData] = useState({ columns: [], rows: [] });
  const { userData } = useAuthUser();

  // Auth const
  const token = userData ? userData.token : " ";
  useEffect(() => {
    const config = {
      headers: {
        Authorization: `Token ${token}`,
      },
    };
    //////// here is the start of request
    async function fetchRoundData() {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_DJANGO_API}startups/Explore-investment-rounds/`,
          config
        );

        const formattedRows = response.data.map((round) => ({
          Startups: (
            <SoftBox display="flex" alignItems="center" px={1} py={0.5}>
              <SoftBox mr={2}>
                <SoftAvatar
                  src={images[Math.floor(Math.random() * images.length)]}
                  alt={round.startup_name}
                  size="sm"
                  variant="rounded"
                />
              </SoftBox>
              <SoftBox display="flex" flexDirection="column">
                <SoftTypography variant="button" fontWeight="medium">
                  {round.startup_name}
                </SoftTypography>
                <SoftTypography variant="caption" color="secondary">
                  {round.job_position} : {round.full_name}
                </SoftTypography>
              </SoftBox>
            </SoftBox>
          ),
          About: (
            <SoftBox display="flex" alignItems="center" px={1} py={0.5}>
              <SoftBox display="flex" flexDirection="column">
                <SoftTypography variant="text" fontWeight="light" sx={{ fontSize: "0.9rem" }}>
                  {round.sector}
                </SoftTypography>
                <SoftTypography variant="caption" color="secondary" sx={{ fontSize: "0.8rem" }}>
                  {round.stage}
                </SoftTypography>
              </SoftBox>
            </SoftBox>
          ),
          Contact: (
            <SoftBox display="flex" alignItems="center" px={1} py={0.5}>
              <SoftBox display="flex" flexDirection="column">
                <SoftTypography variant="text" fontWeight="light" sx={{ fontSize: "0.9rem" }}>
                  {round.email}
                </SoftTypography>
                <SoftTypography variant="caption" color="secondary" sx={{ fontSize: "0.8rem" }}>
                  {round.phone}
                </SoftTypography>
              </SoftBox>
            </SoftBox>
          ),
          Ask: (
            <SoftBox mr={2}>
              <SoftBadge
                badgeContent={
                  <SoftTypography variant="caption" color="secondary" fontWeight="medium">
                    {round.ask}
                  </SoftTypography>
                }
                color="info"
                variant="contained"
              />
            </SoftBox>
          ),
          valuation: (
            <SoftTypography variant="caption" color="secondary" fontWeight="medium">
              {round.valuation}
            </SoftTypography>
          ),
          Offer: (<SendOffer round={round.id} token={token} />
          ),
        }));

        setTableData({
          columns: [
            { name: "Startups", align: "left" },
            { name: "About", align: "center" },
            { name: "Contact", align: "center" },
            { name: "Ask", align: "center" },
            { name: "valuation", align: "center" },
            { name: "Offer", align: "center" },
          ],
          rows: formattedRows,
        });
      } catch (error) {
        console.error("Error fetching syndicates:", error);
      }
    }

    if (token) {
      fetchRoundData();
    }
  }, [token]); // Dependency array includes token

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <LeadNavbar />
      <SoftBox py={3}>
        {/*   Startups table start here */}
        <SoftBox mb={3}>
          <Card>
            <SoftBox display="flex" justifyContent="space-between" alignItems="center" p={3}>
              <SoftBox>
                <SoftTypography variant="h4" color="info" fontWeight="regular" textGradient>
                  Explore Startups
                </SoftTypography>
                <SoftBox display="flex" alignItems="center" lineHeight={0}>
                  <Icon
                    sx={{
                      fontWeight: "bold",
                      color: ({ palette: { info } }) => info.main,
                      mt: -0.3,
                    }}
                  >
                    equalizer
                  </Icon>
                  <SoftTypography variant="button" fontWeight="regular" color="text">
                    &nbsp; Browse all <strong> The Startups</strong>
                  </SoftTypography>
                </SoftBox>
              </SoftBox>
            </SoftBox>
            <SoftBox
              sx={{
                "& .MuiTableRow-root:not(:last-child)": {
                  "& td": {
                    borderBottom: ({ borders: { borderWidth, borderColor } }) =>
                      `${borderWidth[1]} solid ${borderColor}`,
                  },
                },
              }}
            >
              {tableData.rows.length > 0 ? (
                <Table columns={tableData.columns} rows={tableData.rows} />
              ) : (
                <SoftBox py={2} px={3}>
                  <SoftTypography variant="h6" fontWeight="regular" color="text">
                    No data available or loading...
                  </SoftTypography>
                </SoftBox>
              )}
            </SoftBox>
          </Card>
        </SoftBox>

        {/*   Syndicate table end here */}
      </SoftBox>
      <Footer />
    </DashboardLayout>
  );
}

export default ExploreStartups;
