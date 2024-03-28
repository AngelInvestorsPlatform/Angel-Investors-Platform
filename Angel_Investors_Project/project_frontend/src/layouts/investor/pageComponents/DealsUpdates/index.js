// @mui material components
import Grid from "@mui/material/Grid";
import Icon from "@mui/material/Icon";
import Card from "@mui/material/Card";

// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SoftAvatar from "components/SoftAvatar";
import TimelineList from "examples/Timeline/TimelineList";
import TimelineItem from "examples/Timeline/TimelineItem";

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
import logoInvesion from "assets/images/small-logos/logo-invision.svg";

function DealsDetails() {
  const deal = "Tamara";
  const ceoName = "Ahmad Abddallh";

  // User information
  const userInfo = {
    investment: "100,000",
    allocation: "1M",
    "lead's Investment": "10,000",
    totalCarry: "15%",
  };
  // Description
  const dealInfo =
    " Describe the deal here";

  // Sectors
  const sectorsInfo = ["Fintech", "Adtech"];

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
                    src={logoInvesion}
                    alt="profile-image"
                    variant="rounded"
                    size="xl"
                    shadow="sm"
                  />
                </Grid>
                <Grid item>
                  <SoftBox height="100%" mt={0.5} lineHeight={1}>
                    <SoftTypography variant="h5" fontWeight="medium">
                      {deal}
                    </SoftTypography>
                    <SoftTypography variant="button" color="text" fontWeight="medium">
                      {ceoName}
                    </SoftTypography>
                  </SoftBox>
                </Grid>
              </Grid>
            </Card>
            {/* Deals Info Card */}
            <SoftBox px={6} mt={5} mb={3}>
              <Grid container spacing={3}>
                <Grid item xs={12} md={6} xl={12}>
                  <DealsInfoCard
                    title="About Deal"
                    description={dealInfo}
                    info={userInfo}
                    sectors={sectorsInfo}
                  />
                </Grid>
                {/* Deals Update Card */}
                <Grid item xs={12} md={6} xl={12}>
                  <TimelineList title="Updates">
                    <TimelineItem
                      color="success"
                      icon="notifications"
                      title="$2400 Design changes"
                      dateTime="22 DEC 7:20 PM"
                      description="People care about how you see the world, how you think, what motivates you, what you’re struggling with or afraid of."
                      badges={["design"]}
                    />
                    <TimelineItem
                      color="error"
                      icon="inventory_2"
                      title="New order #1832412"
                      dateTime="21 DEC 11 PM"
                      description="People care about how you see the world, how you think, what motivates you, what you’re struggling with or afraid of."
                      badges={["order", "#1832412"]}
                    />
                    <TimelineItem
                      icon="shopping_cart"
                      title="Server payments for April"
                      dateTime="21 DEC 9:34 PM"
                      description="People care about how you see the world, how you think, what motivates you, what you’re struggling with or afraid of."
                      badges={["server", "payments"]}
                      lastItem
                    />
                  </TimelineList>
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
