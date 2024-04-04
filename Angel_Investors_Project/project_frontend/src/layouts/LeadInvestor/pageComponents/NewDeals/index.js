// @mui material components
import Grid from "@mui/material/Grid";

import Card from "@mui/material/Card";

// Soft UI Dashboard React components
import Switch from "@mui/material/Switch";
import Tooltip from "@mui/material/Tooltip";
import Icon from "@mui/material/Icon";

//for user auth global context
import { useAuthUser } from "context/authContext";

// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SoftInput from "components/SoftInput";
import SoftButton from "components/SoftButton";

// registers_forms layout components
import CoverLayout from "layouts/registers_forms/components/CoverLayout";
import Separator from "layouts/registers_forms/components/Separator";
// Soft UI Dashboard React examples
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import Table from "examples/Tables/Table";

// Soft UI Dashboard React base styles
import typography from "assets/theme/base/typography";

// Investor layout components
import LeadNavbar from "layouts/LeadInvestor/components/LeadNavbar";
import Projects from "layouts/investor/components/Projects";

import { useEffect, useState } from "react";
import axios from "axios";
import { Info } from "@mui/icons-material";
// import { pdfjs } from "react-pdf";
// import PdfComp from "./PdfComp";

// pdfjs.GlobalWorkerOptions.workerSrc = new URL(
//   "pdfjs-dist/build/pdf.worker.min.js",
//   import.meta.url
// ).toString();

//data
import acceptances from "layouts/LeadInvestor/pageComponents/NewDeals/data/acceptances";
import additions from "layouts/LeadInvestor/pageComponents/NewDeals/data/additions";


function YourDeals() {

  const { columns2, rows2 } = acceptances;
  const { columns3, rows3 } = additions;
  const [text, setText] = useState("");

  const handleChange = (event) => {
    setText(event.target.value);
  };

  const [selectedFile, setSelectedFile] = useState(null);

  const onFileChange = (event) => {
    const file = event.target.files[0];
    if (!file.type.includes("pdf")) {
      alert("Please select a PDF file!");
      return;
    }
    setSelectedFile(file);
  };

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <LeadNavbar />
      {/* accepted card*/ }
      <SoftBox py={3}>
        <SoftBox mb={3}>
          <Card>
            <SoftBox display="flex" justifyContent="space-between" alignItems="center" p={3}>
              <SoftBox>
                <SoftTypography variant="h4" color="info" fontWeight="regular" textGradient>
                  {" "}
                  Accepted Deals
                </SoftTypography>
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
                    &nbsp; Browse all the <strong> accepted Deals</strong> and add to your syndicate
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
              <Table columns={columns2} rows={rows2} />
            </SoftBox>
          </Card>
        </SoftBox>
      </SoftBox>


      {/* accepted card*/ }
      <SoftBox py={3}>
        <SoftBox mb={3}>
          <Card>
            <SoftBox display="flex" justifyContent="space-between" alignItems="center" p={3}>
              <SoftBox>
                <SoftTypography variant="h4" color="info" fontWeight="regular" textGradient>
                  {" "}
                  Added Deals
                </SoftTypography>
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
                    &nbsp; Browse all the <strong> Deals you have added</strong> and add to your syndicate
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
              <Table columns={columns3} rows={rows3} />
            </SoftBox>
          </Card>
        </SoftBox>
      </SoftBox>


      <Footer />
    </DashboardLayout>
  );
}

export default YourDeals;
