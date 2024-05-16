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
import LeadNavbar from "layouts/LeadInvestor/components/LeadNavbar";
import Projects from "layouts/investor/components/Projects";
import CountdownTimer from "layouts/investor/components/CountdownTimer";

// Data
import ActiveDealsData from "layouts/LeadInvestor/pageComponents/ActiveDeals/data/ActiveDealsData";
import CurrencyFormatter from "layouts/LeadInvestor/pageComponents/ActiveDeals/data/CurrencyFormatter";

// Images
import Startup1 from "assets/images/users-images/Startup1.png";
import Startup2 from "assets/images/users-images/Startup2.png";
import Startup3 from "assets/images/users-images/Startup3.png";
import Startup4 from "assets/images/users-images/Startup4.png";
import Startup5 from "assets/images/users-images/Startup5.png";
import Startup6 from "assets/images/users-images/Startup6.png";

const images = [Startup1, Startup2, Startup3, Startup4, Startup5, Startup6];

function YourDeals() {
  // Table const
  const [tableData, setTableData] = useState({ columns: [], rows: [] });

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
    async function fetchDealsData() {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_DJANGO_API}deals/syndicate-deals `,
          config
        );

        const formattedRows = response.data.map((deal) => ({
          "Deal Name": (
            <Link to={`/LeadInvestor/ActiveDeals/LeadDealsDetails/${deal.id}/${deal.startup_name}`}>
            <MuiLink component="div" underline="hover" sx={{ cursor: "pointer" }}>
            <SoftBox display="flex" alignItems="center" px={1} py={0.5}>
              <SoftBox mr={2}>
                <SoftAvatar
                  src={images[Math.floor(Math.random() * images.length)]}
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
          Sectors: (
            <SoftBadge variant="gradient" badgeContent={deal.sector} color="info" size="md" />
          ),
          Stage: (
            <SoftBadge variant="contained" badgeContent={deal.stage} color="secondary" size="md" />
          ),
          Allocation: <CurrencyFormatter amount={deal.allocation} />,
          Deadline: <CountdownTimer deadline={deal.deadline} />,
          " ": (
            <SoftButton color="info" size="small" variant="contained">
              <SoftTypography variant="caption" color="light" px={-1}>
                Updates
              </SoftTypography>
            </SoftButton>
          ),
        }));

        setTableData({
          columns: [
            { name: "Deal Name", align: "left" },
            { name: "Sectors", align: "center" },
            { name: "Stage", align: "center" },
            { name: "Allocation", align: "center" },
            { name: "Deadline", align: "center" },
            { name: " ", align: "center" },
          ],
          rows: formattedRows,
        });
      } catch (error) {
        console.error("Error fetching syndicates:", error);
      }
    }

    if (token) {
      fetchDealsData();
    }
  }, [token]); // Dependency array includes token

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <LeadNavbar />
      <SoftBox py={3}>
        {/*Deals table start here */}
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

        {/* Deals table end here */}
      </SoftBox>
      <Footer />
    </DashboardLayout>
  );
}

export default YourDeals;
