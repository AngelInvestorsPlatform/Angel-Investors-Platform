import { useState, useEffect } from "react";
import axios from "axios";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import MuiLink from "@mui/material/Link";

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

// Soft UI Dashboard React examples
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import Table from "examples/Tables/Table";

// Soft UI Dashboard React base styles
import typography from "assets/theme/base/typography";

// Investor layout components
import InvestorNavbar from "layouts/investor/components/InvestorNavbar";
import Projects from "layouts/investor/components/Projects";

// Data
import ActiveDealsData from "layouts/investor/pageComponents/YourDeals/data/ActiveDealsData";
import ClosedDealsData from "layouts/investor/pageComponents/YourDeals/data/ClosedDealsData";
import CurrencyFormatter from "layouts/investor/pageComponents/YourDeals/data/CurrencyFormatter";
import CountdownTimer from "layouts/investor/components/CountdownTimer";

// Images
import logoXD from "assets/images/small-logos/logo-xd.svg";
import logoAtlassian from "assets/images/small-logos/logo-atlassian.svg";
import logoSlack from "assets/images/small-logos/logo-slack.svg";
import logoSpotify from "assets/images/small-logos/logo-spotify.svg";
import logoJira from "assets/images/small-logos/logo-jira.svg";
import logoInvesion from "assets/images/small-logos/logo-invision.svg";

const images = [logoXD, logoAtlassian, logoSlack, logoSpotify, logoJira, logoInvesion];

function YourDeals() {
  // Table const
  const [tableData, setTableData] = useState({ columns: [], rows: [] });
  const [tableData2, setTableData2] = useState({ columns: [], rows: [] });

  // Auth const
  const { userData } = useAuthUser();
  const token = userData ? userData.token : " ";
  useEffect(() => {
    const config = {
      headers: {
        Authorization: `Token ${token}`,
      },
    };
    //////// here is the start of request
    async function fetchActiveDealsData() {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_DJANGO_API}deals/investor-deals/`,
          config
        );

        const formattedRows = response.data.map((deal, index) => ({
          "Deal Name": (
          <Link to={`/investor/YourDeals/DealsDetails/${deal.id}/${deal.startup_name}`}>
            <MuiLink component="div" underline="hover" sx={{ cursor: "pointer" }}>
            <SoftBox display="flex" alignItems="center" px={1} py={0.5}>
              <SoftBox mr={2}>
                <SoftAvatar
                  src={images[ index % images.length]}
                  alt={deal.startup_name}
                  size="sm"
                  variant="rounded"
                />
              </SoftBox>
              <SoftBox display="flex" flexDirection="column">
                <SoftTypography variant="button" fontWeight="medium">
                  {deal.startup_name}
                </SoftTypography>
              </SoftBox>
            </SoftBox>
            </MuiLink>
            </Link>
          ),
          Syndicate: (
            <SoftBox display="flex" flexDirection="column">
              <SoftTypography variant="caption" fontWeight="medium" color="text">
                {deal.syndicate_name}
              </SoftTypography>
              <SoftTypography variant="caption" color="secondary">
                Lead:&nbsp;
                {deal.syndicate_lead_name}
              </SoftTypography>
            </SoftBox>
          ),
          Sectors: (
            <SoftBadge variant="gradient" badgeContent={deal.sector} color="info" size="md" />
          ),
          Stage: (
            <SoftBadge variant="contained" badgeContent={deal.stage} color="secondary" size="md" />
          ),
          Allocation: <CurrencyFormatter amount={deal.allocation} />,
          Deadline: <CountdownTimer deadline={deal.deadline} />,
        }));

        setTableData({
          columns: [
            { name: "Deal Name", align: "left" }, // startup name
            { name: "Syndicate", align: "center" }, // syndicate name+lead
            { name: "Sectors", align: "center" },
            { name: "Stage", align: "center" },
            { name: "Allocation", align: "center" },
            { name: "Deadline", align: "center" },
          ],
          rows: formattedRows,
        });
      } catch (error) {
        console.error("Error fetching syndicates:", error);
      }
    }

    //////// here is the start of request
    async function fetchClosedDealsData() {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_DJANGO_API}deals/investor-investments/`,
          config
        );

        const formattedRows = response.data.map((deal, index) => ({
          "Deal Name": (
            <SoftBox display="flex" alignItems="center" px={1} py={0.5}>
              <SoftBox mr={2}>
                <SoftAvatar
                  src={images[ index % images.length]}
                  alt={deal.startup_name}
                  size="sm"
                  variant="rounded"
                />
              </SoftBox>
              <SoftBox display="flex" flexDirection="column">
                <SoftTypography variant="button" fontWeight="medium">
                  {deal.startup_name}
                </SoftTypography>
              </SoftBox>
            </SoftBox>
          ),
          Syndicate: (
            <SoftBox display="flex" flexDirection="column">
              <SoftTypography variant="caption" fontWeight="medium" color="text">
                {deal.syndicate_name}
              </SoftTypography>
            </SoftBox>
          ),
          "Invested amount": (
            <CurrencyFormatter amount= {deal.invested_amount} />
              ),
          " ": (
            <SoftButton color="info" size="small" variant="contained">
              <SoftTypography variant="caption" color="light" px={-1}>
                View More
              </SoftTypography>
            </SoftButton>
          ),
        }));

        setTableData2({
          columns: [
            { name: "Deal Name", align: "left" }, // startup name
            { name: "Syndicate", align: "center" }, // syndicate name+lead
            { name: "Invested amount", align: "center" },
            { name: " ", align: "center" },
          ],
          rows: formattedRows,
        });
      } catch (error) {
        console.error("Error fetching syndicates:", error);
      }
    }
    if (token) {
      fetchActiveDealsData();
      fetchClosedDealsData();
    }
  }, [token]); // Dependency array includes token

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <InvestorNavbar />
      <SoftBox py={3}>
        <SoftBox mb={3}>
          <Card>
            <SoftBox display="flex" justifyContent="space-between" alignItems="center" p={3}>
              <SoftBox>
                <SoftTypography variant="h4" color="info" fontWeight="regular" textGradient>
                  {" "}
                  Active Deals
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
                    &nbsp; Browse all the <strong> Active Deals</strong> and invest right away!
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
                    No data available deals or loading...
                  </SoftTypography>
                </SoftBox>
              )}
            </SoftBox>
          </Card>
        </SoftBox>
      </SoftBox>
      {/* Second Table*/}
      <SoftBox py={3}>
        <SoftBox mb={3}>
          <Card>
            <SoftBox display="flex" justifyContent="space-between" alignItems="center" p={3}>
              <SoftBox>
                <SoftTypography variant="h4" color="info" fontWeight="regular" textGradient>
                  {" "}
                  Closed Deals
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
                    &nbsp; Browse all the <strong> previous Deals </strong> you invested in.
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
              {tableData2.rows.length > 0 ? (
                <Table columns={tableData2.columns} rows={tableData2.rows} />
              ) : (
                <SoftBox py={2} px={3}>
                  <SoftTypography variant="h6" fontWeight="regular" color="text">
                    No data available deals or loading...
                  </SoftTypography>
                </SoftBox>
              )}
            </SoftBox>
          </Card>
        </SoftBox>
      </SoftBox>
      <Footer />
    </DashboardLayout>
  );
}
export default YourDeals;
