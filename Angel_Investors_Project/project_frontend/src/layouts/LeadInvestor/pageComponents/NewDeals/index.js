// @mui material components
import Grid from "@mui/material/Grid";

import Card from "@mui/material/Card";

// Soft UI Dashboard React components
import Switch from "@mui/material/Switch";
import Tooltip from "@mui/material/Tooltip";
import Icon from "@mui/material/Icon";

//for user auth global context
import { useAuthUser } from "context/authContext";

// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SoftInput from "components/SoftInput";
import SoftButton from "components/SoftButton";
import SoftAvatar from "components/SoftAvatar";
import SoftBadge from "components/SoftBadge";

// registers_forms layout components
import CoverLayout from "layouts/registers_forms/components/CoverLayout";
import Separator from "layouts/registers_forms/components/Separator";
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

import { useEffect, useState } from "react";
import axios from "axios";
import { Info } from "@mui/icons-material";

//data
import acceptances from "layouts/LeadInvestor/pageComponents/NewDeals/data/acceptances";
import additions from "layouts/LeadInvestor/pageComponents/NewDeals/data/additions";
import ShowOffer from "layouts/LeadInvestor/pageComponents/NewDeals/data/ShowOffer";
import OfferStatus from "layouts/LeadInvestor/pageComponents/NewDeals/data/OfferStatus";
import AddToSyndicate from "layouts/LeadInvestor/pageComponents/NewDeals/data/AddToSyndicate";

// Images
import logoXD from "assets/images/users-images/Startup1.png";
import logoAtlassian from "assets/images/users-images/Startup2.png";
import logoSlack from "assets/images/users-images/Startup3.png";
import logoSpotify from "assets/images/users-images/Startup4.png";
import logoJira from "assets/images/users-images/Startup5.png";
import logoInvesion from "assets/images/users-images/Startup6.png";

//const images = [logoXD, logoAtlassian, logoSlack, logoSpotify, logoJira, logoInvesion];


import Startup1 from "assets/images/users-images/Startup1.png";
import Startup2 from "assets/images/users-images/Startup2.png";
import Startup3 from "assets/images/users-images/Startup3.png";
import Startup4 from "assets/images/users-images/Startup4.png";
import Startup5 from "assets/images/users-images/Startup5.png";
import Startup6 from "assets/images/users-images/Startup6.png";

const images = [Startup1, Startup2, Startup3, Startup4, Startup5, Startup6];

function YourDeals() {
  const { columns3, rows3 } = additions;

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
    //////// here is the start of lead offers requests
    async function fetchOffersData() {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_DJANGO_API}startups/lead-offers/`,
          config
        );

        // Define a custom sorting function
        const sortOffers = (a, b) => {
          const priority = { accepted: 1, rejected: 2, pending: 3 };
          return priority[a.action] - priority[b.action];
        };

        // Sort the offers based on the custom sorting function
        const sortedOffers = response.data.sort(sortOffers);

        const formattedRows = sortedOffers.map((offer) => ({
          "Deal Name": (
            <SoftBox display="flex" alignItems="center" px={1} py={0.5}>
              <SoftBox mr={2}>
                <SoftAvatar
                  src={images[Math.floor(Math.random() * images.length)]}
                  alt={offer.startup_name}
                  size="sm"
                  variant="rounded"
                />
              </SoftBox>
              <SoftBox display="flex" flexDirection="column">
                <SoftTypography variant="button" fontWeight="medium">
                  {offer.startup_name}
                </SoftTypography>
              </SoftBox>
            </SoftBox>
          ),
          Owner: (
            <SoftTypography variant="caption" fontWeight="medium">
              {offer.full_name}
            </SoftTypography>
          ),
          "The offer": <ShowOffer Message={offer.post} />,
          status: <OfferStatus response={offer.action} Rejection={offer.rejection_reason} />,
          " ": <AddToSyndicate response={offer.action} startupID={offer.startup_id} startupName={offer.startup_name} fullName={offer.full_name} dealType="startup" />,
        }));

        setTableData({
          columns: [
            { name: "Deal Name", align: "left" },
            { name: "Owner", align: "center" },
            { name: "The offer", align: "center" },
            { name: "status", align: "center" },
            { name: " ", align: "center" },
          ],
          rows: formattedRows,
        });
      } catch (error) {
        console.error("Error fetching syndicates:", error);
      }
    }
    async function fetchExclusiveData() {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_DJANGO_API}startups/exclusive-startups/list/`,
          config
        );

        const formattedRows = response.data.map((Startup) => ({
          "Deal Name": (
            <SoftBox display="flex" alignItems="center" px={1} py={0.5}>
              <SoftBox mr={2}>
                <SoftAvatar
                  src={images[Math.floor(Math.random() * images.length)]}
                  alt={Startup.startup_name}
                  size="sm"
                  variant="rounded"
                />
              </SoftBox>
              <SoftBox display="flex" flexDirection="column">
                <SoftTypography variant="button" fontWeight="medium">
                  {Startup.startup_name}
                </SoftTypography>
              </SoftBox>
            </SoftBox>
          ),
          Owner: (
            <SoftTypography variant="caption" fontWeight="medium">
              {Startup.full_name}
            </SoftTypography>
          ),
          about: (
            <SoftBox display="flex" flexDirection="column">
              <SoftBox >
              <SoftTypography variant="caption">{Startup.sector}</SoftTypography>
            </SoftBox>
              <SoftBox>
              <SoftBadge
                variant="contained"
                badgeContent={Startup.stage}
                color="secondary"
                size="md"
              />
              </SoftBox>
            </SoftBox>
          ),
          " ": <AddToSyndicate response="accepted" startupID={Startup.id} startupName={Startup.startup_name} fullName={Startup.full_name} dealType="ExclusiveStartup" />,
        }));

        setTableData2({
          columns: [
            { name: "Deal Name", align: "left" },
            { name: "Owner", align: "center" },
            { name: "about", align: "center" },
            { name: " ", align: "center" },
          ],
          rows: formattedRows,
        });
      } catch (error) {
        console.error("Error fetching syndicates:", error);
      }
    }

    if (token) {
      fetchOffersData();
      fetchExclusiveData();
    }
  }, [token]); // Dependency array includes token

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <LeadNavbar />
      {/* accepted card*/}
      <SoftBox py={3}>
        <SoftBox mb={3}>
          <Card>
            <SoftBox display="flex" justifyContent="space-between" alignItems="center" p={3}>
              <SoftBox>
                <SoftTypography variant="h4" color="info" fontWeight="regular" textGradient>
                  {" "}
                  Requested Deals
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
                    &nbsp; Browse all the <strong>Offers you have sent</strong> and their status
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
      </SoftBox>

      {/* accepted card*/}
      <SoftBox py={3}>
        <SoftBox mb={3}>
          <Card>
            <SoftBox display="flex" justifyContent="space-between" alignItems="center" p={3}>
              <SoftBox>
                <SoftTypography variant="h4" color="info" fontWeight="regular" textGradient>
                  {" "}
                  Added Deals
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
                    &nbsp; Browse all the <strong> exclusive startup you have added</strong> and add
                    to your syndicate
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

export default YourDeals;
