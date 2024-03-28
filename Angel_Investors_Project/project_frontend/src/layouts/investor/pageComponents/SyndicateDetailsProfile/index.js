// @mui material components
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Icon from "@mui/material/Icon";

// @mui icons
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SoftAvatar from "components/SoftAvatar";

// Soft UI Dashboard React examples
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import Footer from "examples/Footer";
import SyndicateInfoCard from "examples/Cards/InfoCards/SyndicateInfoCard";
import ProfileDealList from "examples/Lists/ProfileDealList";
import Table from "examples/Tables/Table";
import DefaultProjectCard from "examples/Cards/ProjectCards/DefaultProjectCard";
import PlaceholderCard from "examples/Cards/PlaceholderCard";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";

// Investor layout components
import Header from "layouts/LeadInvestor/components/Header";
import PlatformSettings from "layouts/profile/components/PlatformSettings";
// import SyndicateCard from "layouts/investor/InvestorProfile/components/SyndicateCard";
import InvestorNavbar from "layouts/investor/components/InvestorNavbar";

// Data for backend
import profilesListData from "layouts/LeadInvestor/data/membersListData.js";
import SyndicateDetailsDealsData from "layouts/investor/data/SyndicateDetailsDealsData";

// Images
import burceMars from "assets/images/bruce-mars.jpg";
import logoSlack from "assets/images/small-logos/logo-slack.svg";


function SyndicateDetails() {
  const { columns, rows } = SyndicateDetailsDealsData();

  //user variable || for backend link ||
  //user header info
  const name = "VainTech";
  const job = "Lead Investor : Ahmed Abo Jamal";

  // User information
  const userInfo = {
    Lead: "Ahmed Abo Jamal",
    email: "AhmedJamal@mail.com",
    mobile: "(966) 23 1234 123",
  };

  // Description
  const descriptionInfo =
    "This syndicate offers a unique opportunity for investors to amplify their reach in the BioTech sector. By pooling resources, you can access promising startups that might be outside your individual investment range.  In addition, you'll benefit from the expertise of a proven leader in [industry], ensuring a meticulous evaluation process.  Furthermore, the syndicate fosters a collaborative network, allowing you to connect with like-minded investors and exchange valuable insights.  Finally, the streamlined investment process allows you to focus on making informed decisions, while the syndicate handles the due diligence and other details.";

  // Sectors
  const sectorsInfo = ["Fintech", "Healthcare", "Analytics", "Market"];


  return (
    <DashboardLayout>
        <DashboardNavbar/>
      <InvestorNavbar />
      <SoftBox pt={11}>
      <Card
        sx={{
          backdropFilter: `saturate(200%) blur(30px)`,
          backgroundColor: ({ functions: { rgba }, palette: { white } }) => rgba(white.main, 0.8),
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
              src={logoSlack}
              alt="profile-image"
              variant="rounded"
              size="xl"
              shadow="sm"
            />
          </Grid>
          <Grid item>
            <SoftBox height="100%" mt={0.5} lineHeight={1}>
              <SoftTypography variant="h5" fontWeight="medium">
               {name}
              </SoftTypography>
              <SoftTypography variant="button" color="text" fontWeight="medium">
               {job}
              </SoftTypography>
            </SoftBox>
          </Grid>
          </Grid>
          </Card>
          </SoftBox>
          {/*the about card*/}
      <SoftBox mt={5} mb={3}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6} xl={8}>
            <SyndicateInfoCard
              title="About the Syndicate"
              description={descriptionInfo}
              info={userInfo}
              sectors={sectorsInfo}
            />
          </Grid>
          <Grid item xs={12} xl={4}>
            <ProfileDealList title="Syndicate members " profiles={profilesListData} />
          </Grid>
          

          {/*deals of the syndicate*/}
          <Grid item xs={12} md={12} xl={12}>
          <Card>
            <SoftBox display="flex" justifyContent="space-between" alignItems="center" p={3}>
              <SoftBox>
                <SoftTypography variant="h4" color="info" fontWeight="regular" textGradient>
                    Syndicate Active Deals
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
                    &nbsp;Current Deals Of <strong> This Syndicate</strong>
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
              <Table columns={columns} rows={rows} />
            </SoftBox>
          </Card>
          </Grid>
        </Grid>
      </SoftBox>
      <SoftBox></SoftBox>

      <Footer />
    </DashboardLayout>
  );
}

export default SyndicateDetails;
