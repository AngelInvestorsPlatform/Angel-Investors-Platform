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

// Data
import SyndicatesTableData from "layouts/investor/data/SyndicatesTableData";

function ExploreSyndicate() {
  const { columns, rows } = SyndicatesTableData;

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <InvestorNavbar />
      <SoftBox py={3}>
        {/*   Syndicate table start here */}
        <SoftBox mb={3}>
          <Card>
            <SoftBox display="flex" justifyContent="space-between" alignItems="center" p={3}>
            <SoftBox>
            <SoftTypography variant="h4" color="info" fontWeight="regular" textGradient> Explore Syndicate</SoftTypography>
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
              &nbsp; Browse all <strong> The Syndicate</strong> 
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
        </SoftBox>

        {/*   Syndicate table end here */}
      </SoftBox>
      <Footer />
    </DashboardLayout>
  );
}

export default ExploreSyndicate;
