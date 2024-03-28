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

function YourDeals() {
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
      <SoftBox
        component="form"
        role="form"
        width="100"
        display="flex"
        flex="row"
        flexWrap="wrap"
        justifyContent="center"
      >
        {/* First Column */}
        <SoftBox flex="0 0 30%" mt={12}>
          {" "}
          {/*mt={6}*/}
          <SoftBox mb={2} mr={6}>
            <SoftTypography component="label" variant="caption" fontWeight="bold">
              Startup name
            </SoftTypography>
            <SoftInput type="text" name="nameStartup" />
          </SoftBox>
          <SoftBox mb={2} mr={6}>
            <SoftBox mt={2} display="flex" justifyContent="space-between">
              <SoftTypography component="label" variant="caption" fontWeight="bold">
                Founders
              </SoftTypography>
            </SoftBox>
            <SoftInput type="text" name="Founders" />
          </SoftBox>

          <SoftBox mb={2} mr={6}>
            <SoftTypography component="label" variant="caption" fontWeight="bold">
              evaluation
            </SoftTypography>
            <SoftInput type="number" placeholder="" name="evaluationStartup" />
          </SoftBox>
          
          <SoftBox mb={2} mr={6}>
            <SoftTypography component="label" variant="caption" fontWeight="bold">
              Memo
            </SoftTypography>
          <SoftInput
            placeholder="Enter here"
            value={text}
            onChange={handleChange}
            multiline rows={10}
          />
          </SoftBox>
        </SoftBox>

        {/* 2 Column */}
        <SoftBox flex="0 0 30%" mb={3} mt={12}>
          <SoftBox mb={2} mr={6}>
            <SoftTypography component="label" variant="caption" fontWeight="bold">
              amount for the syndicate
            </SoftTypography>
            <SoftInput type="text" placeholder="allocated" />
          </SoftBox>
          <SoftBox mb={2} mr={6}>
            <SoftTypography component="label" variant="caption" fontWeight="bold">
              Total Carry
            </SoftTypography>
            <SoftInput type="number" placeholder="" />
          </SoftBox>
          <SoftBox mb={2} mr={6}>
            <SoftTypography component="label" variant="caption" fontWeight="bold">
              lead`s invest
            </SoftTypography>
            <SoftInput type="text" placeholder="Lead Syndicate" />
          </SoftBox>
          <SoftBox mb={2} mr={6}>
            <SoftTypography component="label" variant="caption" fontWeight="bold">
              min. investment
            </SoftTypography>
            <SoftInput type="number" placeholder="" />
          </SoftBox>
          <SoftBox mb={2} mr={6}>
            <SoftTypography component="label" variant="caption" fontWeight="bold">
              max. investment
            </SoftTypography>
            <SoftInput type="number" placeholder="" />
          </SoftBox>
          <SoftBox mb={2} mr={6}>
            <SoftTypography component="label" variant="caption" fontWeight="bold">
              Pitch Deck
            </SoftTypography>

            <SoftInput
              type="file"
              placeholder="Please select a PDF file"
              // required
              onChange={onFileChange}
            />
            {selectedFile && (
              <SoftBox>
                <span style={{ fontSize: "16px", color: "darkpurple" }}>
                  Selected File: {selectedFile.name} - Size: {selectedFile.size} bytes
                </span>{" "}
              </SoftBox>
            )}
          </SoftBox>
        </SoftBox>
      </SoftBox>

      <SoftBox mb={3} width="100" display="flex" flex="row" flexWrap="wrap" justifyContent="center">
        <SoftBox mt={4} mb={1}>
          <SoftButton
            variant="gradient"
            color="info"
            fullWidth
            circular
          
            style={{ padding: "15px 32px" }}
          >
            submit
          </SoftButton>
        </SoftBox>
      </SoftBox>

      <Footer />
    </DashboardLayout>
  );
}

export default YourDeals;
