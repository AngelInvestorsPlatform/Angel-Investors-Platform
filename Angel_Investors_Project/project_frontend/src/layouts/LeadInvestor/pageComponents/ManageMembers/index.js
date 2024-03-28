// @mui material components
import Card from "@mui/material/Card";
import React, { useState } from "react";

// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import { Link } from "react-router-dom";
//import MenuItem from "@mui/material/MenuItem";
//import Menu from "@mui/material/Menu";

// Soft UI Dashboard React examples
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import Table from "examples/Tables/Table";

// Soft UI Dashboard React base styles
import typography from "assets/theme/base/typography";

// Investor layout components
import LeadNavbar from "layouts/LeadInvestor/components/LeadNavbar";

// Data
import manageTableData from "./data/ManageData";


function Tables() {
  const { columns, rows } = manageTableData;

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <LeadNavbar />
      <SoftBox py={3}>
        <SoftTypography variant="h3" color="info" fontWeight="regular" textGradient>
          Manage Members
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


      <SoftBox display="flex" justifyContent="left">
        <SoftTypography
          variant="h9"
          color="info"
          fontWeight="regular"
          textGradient
          component={Link}
          to="/LeadInvestor/ManageMembers/JoiningRequests"
        >
          Joining Requests
        </SoftTypography>
      </SoftBox>
      
      <SoftBox display="flex" justifyContent="left">
        <SoftTypography
          variant="h9"
          color="info"
          fontWeight="regular"
          textGradient
          component={Link}
          //to="/LeadInvestor/ManageMembers/JoiningRequests"
        >
          Invite Members
        </SoftTypography>
      </SoftBox>

      <Footer />
    </DashboardLayout>
  );
}

export default Tables;
