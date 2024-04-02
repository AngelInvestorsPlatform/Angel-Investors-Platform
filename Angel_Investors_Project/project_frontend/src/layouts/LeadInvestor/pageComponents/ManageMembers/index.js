// @mui material components
import Card from "@mui/material/Card";
import React, { useState } from "react";

// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";

// Soft UI Dashboard React examples
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import Table from "examples/Tables/Table";

// Investor layout components
import LeadNavbar from "layouts/LeadInvestor/components/LeadNavbar";

// Data
import manageTableData from "./data/ManageData";
import joinTableData from "./data/JoinData";
import InviteMembersPopup from "./InviteMembers";

function Tables() {
  const { columns, rows } = manageTableData;
  const { columns2, rows2 } = joinTableData;

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <LeadNavbar />
      <SoftBox py={3} display="flex" justifyContent="space-between" alignItems="center">
        <SoftBox width="70%">
          <SoftTypography variant="h3" color="info" fontWeight="regular" textGradient>
            Manage Members
          </SoftTypography>
        </SoftBox>
        <SoftBox ml="auto">
          <InviteMembersPopup absolute position="top" right={0} top={80}></InviteMembersPopup>
        </SoftBox>
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

      <SoftBox mb={3}>
        <SoftBox display="flex" justifyContent="space-between" alignItems="center">
          <SoftTypography variant="h3" color="info" fontWeight="regular" textGradient p={3}>
            Joining Requests
          </SoftTypography>
        </SoftBox>
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
            <Table columns={columns2} rows={rows2} />
          </SoftBox>
        </Card>
      </SoftBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Tables;
