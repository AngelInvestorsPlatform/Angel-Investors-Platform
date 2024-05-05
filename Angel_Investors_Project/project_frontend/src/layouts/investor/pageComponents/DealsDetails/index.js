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

// Soft UI Dashboard React base styles
import typography from "assets/theme/base/typography";

// Investor layout components
import InvestorNavbar from "layouts/investor/components/InvestorNavbar";
import Projects from "layouts/investor/components/Projects";

// images
import logoAtlassian from "assets/images/small-logos/logo-atlassian.svg";

function DealsDetails() {
  const name = "Ahmad Nasser";
  const job = "CEO";

  // User information
  const userInfo = {
    fullName: "Alec M. Thompson",
    email: "alecthompson@mail.com",
    mobile: "(44) 123 1234 123",
    country: "USA",
    experience: "1-2 years",
  };
  // Description
  const descriptionInfo = "Hi, I’m Alec Thompson, Decisions: If you can’t decide, the answer is no. If two equally difficult paths, choose the one more painful in the short term (pain avoidance is creating an illusion of equality).";

  // Sectors
  const sectorsInfo = ["Biotech", "Adtech", "Analytics", "Market"];

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
                      {name}
                    </SoftTypography>
                    <SoftTypography variant="button" color="text" fontWeight="medium">
                      {job}
                    </SoftTypography>
                  </SoftBox>
                </Grid>
              </Grid>
            </Card>
            {/* Deals Info Card */}
            <SoftBox px={6} mt={5} mb={3}>
              <Grid container spacing={3}>
                <Grid item xs={12} md={6} xl={6}>
                  <DealsInfoCard
                    title="Invest"
                    description={descriptionInfo}
                    info={userInfo}
                    sectors={sectorsInfo}
                    action={{ route: "", tooltip: "Edit Profile" }}
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