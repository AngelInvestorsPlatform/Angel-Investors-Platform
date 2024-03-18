// @mui material components
import Grid from "@mui/material/Grid";
import Icon from "@mui/material/Icon";
import Card from "@mui/material/Card";

// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";

// Soft UI Dashboard React examples
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import Table from "examples/Tables/Table";

// Soft UI Dashboard React base styles
import typography from "assets/theme/base/typography";

// Investor layout components
import InvestorNavbar from 'layouts/investor/components/InvestorNavbar';
import Projects from "layouts/investor/components/Projects";

// Data


function YourDeals() {


  return (
    <DashboardLayout>
      <DashboardNavbar />
      <InvestorNavbar />
      <SoftBox py={3}>
        {/*  your Deals table start here */}
        <Projects/>

        {/*  your Deals table end here */}
      </SoftBox>
      <Footer />
    </DashboardLayout>
  );
}

export default YourDeals;
