/**
=========================================================
* Soft UI Dashboard React - v4.0.1
=========================================================

* Product Page: https://www.creative-tim.com/product/soft-ui-dashboard-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/
// @mui material components
import Card from "@mui/material/Card";

// @mui material components
import Grid from "@mui/material/Grid";
import Icon from "@mui/material/Icon";

// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";

// @mui icons



// Soft UI Dashboard React examples
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";

import StartUpNavbar from 'layouts/startup/components/StartUpNavbar';


// startup layout components
import Header from "layouts/startup/pageComponents/StartUpDeals/components/Header";
import SyndicateInfo from "layouts/startup/pageComponents/StartUpDeals/components/SyndicateInfo";
import DealInfo from "layouts/startup/pageComponents/StartUpDeals/components/DealInfo";

// Data
import DealsData from "layouts/startup/pageComponents/StartUpDeals/data/DealsData";

function Deal() {

  const { columns: prCols, rows: prRows } = DealsData;

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <Header/>
      <StartUpNavbar/> 
      <SoftBox mt={5} mb={3}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6} xl={4}>
          <DealInfo/>
          </Grid>
          <Grid item xs={12} md={12} xl={8}>
             <SyndicateInfo />
          </Grid>
          </Grid>
          </SoftBox>
    {/*  */}
      <Footer />
    </DashboardLayout>
  );
}

export default Deal;
