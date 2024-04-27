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

//import syndicate components
import Syndicate from "layouts/investor/components/SyndicateComponents/Syndicate";
import SectorsFunction from "layouts/investor/components/SyndicateComponents/SectorsFunction";
import StatusFunction from "layouts/investor/components/SyndicateComponents/StatusFunction";
import MemberAvatars from "layouts/investor/components/SyndicateComponents/MemberAvatars";


//import Syndicate dialog
import SyndicateDialog from "layouts/investor/components/SyndicateDialog";

// Images
import logoXD from "assets/images/small-logos/logo-xd.svg";
import logoAtlassian from "assets/images/small-logos/logo-atlassian.svg";
import logoSlack from "assets/images/small-logos/logo-slack.svg";
import logoSpotify from "assets/images/small-logos/logo-spotify.svg";
import logoJira from "assets/images/small-logos/logo-jira.svg";
import logoInvesion from "assets/images/small-logos/logo-invision.svg";
import team1 from "assets/images/team-1.jpg";
import team2 from "assets/images/team-2.jpg";
import team3 from "assets/images/team-3.jpg";
import team4 from "assets/images/team-4.jpg";

// Data
//import SyndicatesTableData from "layouts/investor/data/SyndicatesTableData";
//import useSyndicatesTableData from "layouts/investor/data/useSyndicatesTableData";

const images = [logoXD, logoAtlassian, logoSlack, logoSpotify,logoJira,logoInvesion ];
function ExploreSyndicate() {
// Dialog const
  const [dialogOpen, setDialogOpen] = useState(false); 
  const [selectedSyndicate, setSelectedSyndicate] = useState(null);

  const handleOpenDialog = (syndicate) => {
    setSelectedSyndicate(syndicate);
    setDialogOpen(true);
}
  const handleCloseDialog = () => setDialogOpen(false);

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
    async function fetchSyndicateData() {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_DJANGO_API}syndicates/explore-syndicates/`,
          config
        );
        
        const formattedRows = response.data.map((syndicate) => ({
          Syndicate: (
            <Syndicate
              image={images[Math.floor(Math.random() * images.length)]}
              name={syndicate.syndicate_name}
              Lead={syndicate.lead_name}
            />
          ),
          Sector: <SectorsFunction sectors={syndicate.sectors.split(", ")} />,
          Status: <StatusFunction status={syndicate.status} />,
          "Active Deals": (
            <SoftTypography variant="caption" color="secondary" fontWeight="medium">
              {syndicate.active_deals} Deals
            </SoftTypography>
          ),
          Members: (
            <SoftBox display="flex" py={1}>
              <MemberAvatars members={syndicate.members} />
            </SoftBox>
          ),
          " ": (
            <SoftBox p={-5} sx={{ fontSize: "0.3rem" }}>
              <SoftButton color="info" size="small" variant="contained" onClick={() => handleOpenDialog(syndicate)}>
                <SoftTypography fontSize="11px" variant="caption" color="light" px={-1}>
                  View More
                </SoftTypography>
              </SoftButton>
{/*               {dialogOpen && (
                <SyndicateDialog
                  open={dialogOpen}
                  onClose={handleCloseDialog}
                  Data={responseData}
                />
              )} */}
              {/* <SyndicateDialog open={dialogOpen} onClose={handleCloseDialog} Data={syndicate} /> */}
            </SoftBox>
          ),
        }));
        
        setTableData({
          columns: [
            { name: "Syndicate", align: "left" },
            { name: "Sector", align: "center" },
            { name: "Status", align: "center" },
            { name: "Active Deals", align: "center" },
            { name: "Members", align: "center" },
            { name: " ", align: "center" },
          ],
          rows: formattedRows,
        });
      } catch (error) {
        console.error("Error fetching syndicates:", error);
      }
    }

    if (token) {
      fetchSyndicateData();
    }
  }, [token]); // Dependency array includes token
/////////
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <InvestorNavbar />
      <SoftBox py={3}>
        {/*   Syndicate table start here */}
        <SoftBox mb={3}>
          <Card>
            <SoftBox display="flex" justifyContent="space-between" alignItems="center" p={3}>
              <SoftBox>
                <SoftTypography variant="h4" color="info" fontWeight="regular" textGradient>
                  {" "}
                  Explore Syndicate
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
                    &nbsp; Browse all <strong> The Syndicate</strong>
                  </SoftTypography>
                </SoftBox>
              </SoftBox>
            </SoftBox>
            {selectedSyndicate && (
          <SyndicateDialog open={dialogOpen} onClose={handleCloseDialog} Data={selectedSyndicate} />
        )}
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

      </SoftBox>
      <Footer />
    </DashboardLayout>
  );
}

export default ExploreSyndicate;
