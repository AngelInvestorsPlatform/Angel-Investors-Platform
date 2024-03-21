

// @mui material components
import Grid from "@mui/material/Grid";
import Icon from "@mui/material/Icon";

// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";

// Soft UI Dashboard React base styles
import typography from "assets/theme/base/typography";

// Soft UI Dashboard React examples
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from 'examples/Navbars/DashboardNavbar';
import StartUpNavbar from 'layouts/startup/components/StartUpNavbar';
import Header from "layouts/profile/components/Header";
import PlatformSettings from "layouts/profile/components/PlatformSettings";

function Overview() {
    return (
      <DashboardLayout>
        <DashboardNavbar/> 
      <StartUpNavbar />
      <SoftBox mb={3}>
<SoftTypography variant="h3" color="info" fontWeight="regular" textGradient>
   Settings
                </SoftTypography>
                </SoftBox>
        <SoftBox mt={5} mb={3}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={12} xl={12}>
            <PlatformSettings />
          </Grid>
          </Grid>
          <SoftBox mt={5} mb={3}>
          <Grid item xs={12} md={12} xl={12}>
            <PlatformSettings />
          </Grid>
          </SoftBox>
          </SoftBox>

      {/* <Footer /> */}
    </DashboardLayout>
    )
}
export default Overview;