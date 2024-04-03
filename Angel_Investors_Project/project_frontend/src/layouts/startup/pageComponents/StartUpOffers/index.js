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

import OffersData from "layouts/startup/pageComponents/StartUpOffers/data/OffersData";

function Tables() {
  const { columns, rows } = OffersData;
  

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <StartUpNavbar/> 
      <SoftBox mb={3}>
<SoftTypography variant="h3" color="info" fontWeight="regular" textGradient>
        Offers
                </SoftTypography>
                </SoftBox>
      <SoftBox py={3}>
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
              <Table columns={columns} rows={rows} />
            </SoftBox>
          </Card>
        </SoftBox>
        </SoftBox>

      
      
      <Footer />
    </DashboardLayout>
  );
}

export default Tables;
