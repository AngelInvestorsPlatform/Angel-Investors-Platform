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

// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";

// Soft UI Dashboard React examples
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import Table from "examples/Tables/Table";
import StartUpNavbar from 'layouts/startup/components/StartUpNavbar';

// Data
// import authorsTableData from "layouts/tables/data/authorsTableData";
import DealsData from "layouts/startup/pageComponents/StartUpDeals/data/DealsData";

function Tables() {
  // const { columns, rows } = authorsTableData;
  const { columns: prCols, rows: prRows } = DealsData;

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <StartUpNavbar/> 
      <SoftBox mb={3}>
<SoftTypography variant="h3" color="info" fontWeight="regular" textGradient>
         Deals
                </SoftTypography>
                </SoftBox>
        <SoftBox mb={3}>
        <Card>
        
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
            <Table columns={prCols} rows={prRows} />
          </SoftBox>
        </Card>
      </SoftBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Tables;
