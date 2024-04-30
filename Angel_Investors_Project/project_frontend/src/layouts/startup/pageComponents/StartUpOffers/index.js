import { useState, useEffect } from "react";
import axios from "axios";

//for user auth global context
import { useAuthUser } from "context/authContext";

// @mui material components
import Card from "@mui/material/Card";
import Icon from "@mui/material/Icon";

// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SoftAvatar from "components/SoftAvatar";

// Soft UI Dashboard React examples
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import Table from "examples/Tables/Table";
import StartUpNavbar from "layouts/startup/components/StartUpNavbar";

// Images
import logoXD from "assets/images/small-logos/logo-xd.svg";
import logoAtlassian from "assets/images/small-logos/logo-atlassian.svg";
import logoSlack from "assets/images/small-logos/logo-slack.svg";
import logoSpotify from "assets/images/small-logos/logo-spotify.svg";
import logoJira from "assets/images/small-logos/logo-jira.svg";
import logoInvesion from "assets/images/small-logos/logo-invision.svg";

const images = [logoXD, logoAtlassian, logoSlack, logoSpotify, logoJira, logoInvesion];
// Data
import RejectPopup from "./data/RejectPopup";

//import OffersData from "layouts/startup/pageComponents/StartUpOffers/data/OffersData";

function Tables() {
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
    async function fetchOffersData() {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_DJANGO_API}startups/review-offers/`,
          config
        );

        const formattedRows = response.data.map((offer) => ({
          "Syndicate name": (
            <SoftBox display="flex" alignItems="center" px={1} py={0.5}>
              <SoftBox mr={2}>
                <SoftAvatar
                  src={images[Math.floor(Math.random() * images.length)]}
                  alt={offer.syndicate_name}
                  size="sm"
                  variant="rounded"
                />
              </SoftBox>
              <SoftBox display="flex" flexDirection="column">
                <SoftTypography variant="button" fontWeight="medium">
                  {offer.syndicate_name}
                </SoftTypography>
              </SoftBox>
            </SoftBox>
          ),
          "Syndicate lead": (
            <SoftBox display="flex" flexDirection="column">
              <SoftTypography variant="caption" fontWeight="medium" color="text">
                {offer.lead_name}
              </SoftTypography>
              <SoftTypography variant="caption" color="secondary">
                {offer.lead_email}
              </SoftTypography>
            </SoftBox>
          ),
          "The offer": (
            <SoftBox width="250px">
              <SoftTypography
                variant="caption"
                color="secondary"
                fontWeight="medium"
                style={{ display: "block" }}
              >
                {offer.post}
              </SoftTypography>
            </SoftBox>
          ),
          action: <RejectPopup id={offer.id} token={token}/>,
        }));

        setTableData({
          columns: [
            { name: "Syndicate name", align: "left" },
            { name: "Syndicate lead", align: "left" },
            { name: "The offer", align: "left" },
            { name: "action", align: "center" },
          ],
          rows: formattedRows,
        });
      } catch (error) {
        console.error("Error fetching syndicates:", error);
      }
    }

    if (token) {
      fetchOffersData();
    }
  }, [token]); // Dependency array includes token

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <StartUpNavbar />

      <SoftBox py={3}>
        <SoftBox mb={3}>
          <Card>
            <SoftBox display="flex" justifyContent="space-between" alignItems="center" p={3}>
              <SoftBox>
                <SoftTypography variant="h4" color="info" fontWeight="regular" textGradient>
                  {" "}
                  Browse Offers
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
                    &nbsp; Browse all the <strong>offers you received </strong>from current
                    Investment Round
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
                    You do not have any new offers currently....
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

export default Tables;
