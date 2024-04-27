import { useState, useEffect } from "react";
import axios from "axios";

//for user auth global context
import { useAuthUser } from "context/authContext";

// @mui material components
import Card from "@mui/material/Card";
import Icon from "@mui/material/Icon";
import Grid from "@mui/material/Grid";
import CloseIcon from "@mui/icons-material/Close"; // Using CloseIcon for "X"
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SoftAvatar from "components/SoftAvatar";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import SoftBadge from "components/SoftBadge";

// Soft UI Dashboard React examples
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import Table from "examples/Tables/Table";

// Investor layout components
import LeadNavbar from "layouts/LeadInvestor/components/LeadNavbar";
import InvestorDataComponents from "layouts/LeadInvestor/pageComponents/ManageMembers/InvestorDataComponents";
import AboutInvestorComponent from "layouts/LeadInvestor/pageComponents/ManageMembers/AboutInvestorComponent";

//Images
import team1 from "assets/images/team-1.jpg";
import team2 from "assets/images/team-2.jpg";
import team3 from "assets/images/team-3.jpg";
import team4 from "assets/images/team-4.jpg";
import team5 from "assets/images/team5.jpg";
const images = [team1, team2, team3, team4, team5];

// Data
//import manageTableData from "./data/ManageData";
//import joinTableData from "./data/JoinData";
import InviteMembersPopup from "./InviteMembers";

function Tables() {
  // Table const
  const [manageTableData, setManageTableData] = useState({ columns: [], rows: [] });
  const [joinTableData, setJoinTableData] = useState({ columns: [], rows: [] });
  const [rejectedTableData, setRejectedTableData] = useState({ columns: [], rows: [] });

  // Auth const
  const { userData } = useAuthUser();
  const token = userData ? userData.token : " ";
  useEffect(() => {
    const config = {
      headers: {
        Authorization: `Token ${token}`,
      },
    };

    // handle buttons
    const handleAccept = async (id) => {
      try {
        const response = await axios.put(
          `${process.env.REACT_APP_DJANGO_API}syndicates/manage-join-requests/${id}/`,
          { action: "accepted" },
          config
        );
        console.log("User has been accepted: ", response.data); // Log or handle response data
         if (response.status >= 200 && response.status < 300) {
           window.location.reload(); // Refresh the page
         }
      } catch (error) {
        console.error("Error accepting member:", error);
      }
    };

    const handleReject = async (id) => {
      try {
        const response = await axios.put(
          `${process.env.REACT_APP_DJANGO_API}syndicates/manage-join-requests/${id}/`,
          { action: "rejected" },
          config
        );
        console.log("User has been rejected: ", response.data); // Log or handle response data
        if (response.status >= 200 && response.status < 300) {
          window.location.reload(); // Refresh the page
        }
      } catch (error) {
        console.error("Error rejecting member:", error);
      }
    };

    ////////////////////////////////////////////////////
    // here is the start of Manage members Table API request :

    async function fetchMembersData() {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_DJANGO_API}syndicates/manageSyndicateMembers/`,
          config
        );

        const formattedRows = response.data.map((syndicateMembers) => ({
          "Investor Name": (
            <InvestorDataComponents
              image={images[Math.floor(Math.random() * images.length)]}
              name={syndicateMembers.full_name}
              email={syndicateMembers.email}
            />
          ),
          Sectors: (
            <SoftBadge
              variant="gradient"
              badgeContent={syndicateMembers.sectors}
              color="info"
              size="md"
            />
          ),
          About: <AboutInvestorComponent text={syndicateMembers.about} />,
          "Active Deals": (
            <SoftTypography variant="caption" color="secondary" fontWeight="medium">
              {syndicateMembers.deal_count} Deals
            </SoftTypography>
          ),
          "  ": (
            <IconButton aria-label="delete" disabled color="primary">
              <DeleteIcon />
            </IconButton>
          ),
        }));

        setManageTableData({
          columns: [
            { name: "Investor Name", align: "left" },
            { name: "Sectors", align: "center" },
            { name: "About", align: "center" },
            { name: "Active Deals", align: "center" },
            { name: "  ", align: "center" },
          ],
          rows: formattedRows,
        });
      } catch (error) {
        console.error("Error fetching syndicates:", error);
      }
    }

    if (token) {
      fetchMembersData();
    }

    ////////////////////////////////////////////

    ///////////////////////////////////////////
    //here is the start of Joining syndicate request Table API request

    async function fetchJoiningData() {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_DJANGO_API}syndicates/manage-join-requests/`,
          config
        );
        const filteredData = response.data.filter((investor) => investor.action === "pending");

        const formattedRows = filteredData.map((syndicateMembers) => ({
          "Investor Name": (
            <InvestorDataComponents
              image={images[Math.floor(Math.random() * images.length)]}
              name={syndicateMembers.investor_name}
              email={syndicateMembers.investor_email}
            />
          ),
          Sectors: (
            <SoftBadge
              variant="gradient"
              badgeContent={syndicateMembers.investor_sectors}
              color="info"
              size="md"
            />
          ),
          About: <AboutInvestorComponent text={syndicateMembers.investor_about} />,
          Action: (
            <Grid container spacing={1} justifyContent="flex-end">
              <Grid item>
                <IconButton
                  color="error"
                  aria-label="Reject"
                  onClick={() => handleReject(syndicateMembers.id)}
                >
                  <CloseIcon fontSize="small" />
                </IconButton>
              </Grid>
              <Grid item>
                <IconButton
                  color="success"
                  aria-label="Accept"
                  onClick={() => handleAccept(syndicateMembers.id)}
                >
                  <CheckCircleIcon fontSize="small" />
                </IconButton>
              </Grid>
            </Grid>
          ),
        }));

        setJoinTableData({
          columns: [
            { name: "Investor Name", align: "left" },
            { name: "Sectors", align: "left" },
            { name: "About", align: "left" },
            { name: "Action", align: "center" },
          ],
          rows: formattedRows,
        });

        //rejected Table Data is here
        const filteredRejectedData = response.data.filter(
          (investor) => investor.action === "rejected"
        );

        const formattedRejectedRows = filteredRejectedData.map((syndicateMembers) => ({
          "Investor Name": (
            <InvestorDataComponents
              image={images[Math.floor(Math.random() * images.length)]}
              name={syndicateMembers.investor_name}
              email={syndicateMembers.investor_email}
            />
          ),
          Sectors: (
            <SoftBadge
              variant="gradient"
              badgeContent={syndicateMembers.investor_sectors}
              color="info"
              size="md"
            />
          ),
        }));

        setRejectedTableData({
          columns: [
            { name: "Investor Name", align: "left" },
            { name: "Sectors", align: "left" },
          ],
          rows: formattedRejectedRows,
        });
      } catch (error) {
        console.error("Error fetching syndicates:", error);
      }
    }

    if (token) {
      fetchJoiningData();
    }

    ///////////////////////////
  }, [token]); // Dependency array includes token

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <LeadNavbar />
      <SoftBox py={3}>
        <SoftBox mb={3}>
          <Card>
            <SoftBox display="flex" justifyContent="space-between" alignItems="center" p={3}>
              <SoftBox>
                <SoftTypography variant="h4" color="info" fontWeight="regular" textGradient>
                  {" "}
                  Manage Members
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
                    &nbsp; Browse all the <strong>Members joining </strong>your Syndicate
                  </SoftTypography>
                </SoftBox>
              </SoftBox>
              <SoftBox ml="auto">
                <InviteMembersPopup absolute position="top" right={0} top={80}></InviteMembersPopup>
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
              {manageTableData.rows.length > 0 ? (
                <Table columns={manageTableData.columns} rows={manageTableData.rows} />
              ) : (
                <SoftBox py={2} px={3}>
                  <SoftTypography variant="h6" fontWeight="regular" color="text">
                    No Members available or loading...
                  </SoftTypography>
                </SoftBox>
              )}
            </SoftBox>
          </Card>
        </SoftBox>
      </SoftBox>

      <SoftBox mt={3} mb={5}>
        <Card>
          <SoftBox display="flex" justifyContent="space-between" alignItems="center" p={3}>
            <SoftBox>
              <SoftTypography variant="h4" color="info" fontWeight="regular" textGradient>
                {" "}
                Joining Requests
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
                  &nbsp; Browse users who would like <strong>to join </strong>your Syndicate
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
            {joinTableData.rows.length > 0 ? (
              <Table columns={joinTableData.columns} rows={joinTableData.rows} />
            ) : (
              <SoftBox py={2} px={3}>
                <SoftTypography variant="h6" fontWeight="regular" color="text">
                  No Joining Request
                </SoftTypography>
              </SoftBox>
            )}
          </SoftBox>
        </Card>
      </SoftBox>

      <SoftBox mt={6} mb={5}>
        <Card>
          <SoftBox display="flex" justifyContent="space-between" alignItems="center" p={3}>
            <SoftBox>
              <SoftTypography variant="h4" color="info" fontWeight="regular" textGradient>
                {" "}
                rejected Requests
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
                  &nbsp; Browse users requests that you have <strong>rejected </strong>from your
                  Syndicate
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
            {rejectedTableData.rows.length > 0 ? (
              <Table columns={rejectedTableData.columns} rows={rejectedTableData.rows} />
            ) : (
              <SoftBox py={2} px={3}>
                <SoftTypography variant="h6" fontWeight="regular" color="text">
                  No rejected Users
                </SoftTypography>
              </SoftBox>
            )}
          </SoftBox>
        </Card>
      </SoftBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Tables;
