// @mui material components
import Grid from "@mui/material/Grid";
import Icon from "@mui/material/Icon";

// Soft UI Dashboard React components
import React, { useState, useEffect } from "react";

//for API
import axios from "axios";

//for user auth global context
import { useAuthUser } from "context/authContext";

// react-router-dom components
import { Link } from "react-router-dom";
import { Navigate } from "react-router-dom";

// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SoftInput from "components/SoftInput";
import SoftButton from "components/SoftButton";
import Card from "@mui/material/Card";
import Table from "examples/Tables/Table";
import SoftAvatar from "components/SoftAvatar";
// @mui icons
import Separator from "layouts/registers_forms/components/Separator";

// Soft UI Dashboard React examples
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";

import StartUpNavbar from "layouts/startup/components/StartUpNavbar";

//  layout components
import Header from "layouts/startup/InvestmentRound/components/Header";

//data
//import Round from "layouts/startup/InvestmentRound/data/Round";

import warQ from "assets/images/startups-logos/logoQ.png";

function invesRound() {
  // Data
  const [ask, setAsk] = useState("");
  const [valuation, setValuation] = useState("");

  // Error state
  const [error, setError] = useState(""); // Initialize error state to an empty string
  const [confirm, setConfirm] = useState("");

  // Handle form changes
  const handleAskChange = (event) => {
    setAsk(event.target.value);
  };

  const handleValuationChange = (event) => {
    // Consider adding validation here
    setValuation(event.target.value);
  };

  //here is the start of the get startup info (the table)
  const [tableData, setTableData] = useState({ columns: [], rows: [] });

  // Auth const
  const { userData } = useAuthUser();
  const token = userData ? userData.token : " ";
  const config = {
    headers: {
      Authorization: `Token ${token}`,
    },
  };
  useEffect(() => {
    //////// here is the start of request
    async function fetchStartupData() {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_DJANGO_API}startups/profile/`,
          config
        );

        const Startup = response.data;

        const formattedRows = [
          {
            information: (
              <SoftBox display="flex" alignItems="center" px={1} py={1}>
                <SoftBox mr={2}>
                  <SoftAvatar
                    src={warQ}
                    alt={Startup.startup_name}
                    size="sm"
                    variant="rounded"
                  />
                </SoftBox>
                <SoftTypography
                  color="info"
                  variant="button"
                  fontWeight="medium"
                  sx={{ fontSize: "1.2rem" }}
                >
                  {Startup.startup_name}
                </SoftTypography>
              </SoftBox>
            ),
          },
          {
            information: (
              <SoftBox display="flex" alignItems="center" px={1} py={1}>
                <SoftTypography
                  color="info"
                  variant="text"
                  fontWeight="light"
                  sx={{ fontSize: "1.2rem" }}
                >
                  {Startup.job_position}: {Startup.full_name}
                </SoftTypography>
              </SoftBox>
            ),
          },
          {
            information: (
              <SoftBox display="flex" flexDirection="column" px={1} py={1}>
                <SoftTypography
                  color="info"
                  variant="text"
                  fontWeight="light"
                  sx={{ fontSize: "1.2rem" }}
                >
                  Sector: {Startup.sector}
                </SoftTypography>
                <SoftTypography variant="text" color="text" sx={{ fontSize: "1rem" }}>
                  Stage: {Startup.stage}
                </SoftTypography>
              </SoftBox>
            ),
          },
        ];

        setTableData({
          columns: [{ name: "information", align: "center" }],
          rows: formattedRows,
        });
      } catch (error) {
        console.error("Error fetching startup profile:", error);
      }
    }

    if (token) {
      fetchStartupData();
    }
  }, [token]); // Dependency array includes token

  //////////////// submit request
  // Form submission handler
  const handleSubmit = async () => {
    try {
      if (!ask || !valuation) {
        setError("Asking price and estimated valuation are required.");
        return;
      }else{
        setError("");
      }

      // Handle potential non-numeric input for valuation
      if (isNaN(valuation) || parseFloat(valuation) < 0) {
        setError("Estimated valuation must be a non-negative number.");
        return;
      }else{
        setError("");
      }

      const response = await axios.post(
        `${process.env.REACT_APP_DJANGO_API}startups/investment-round/`,
        {
          ask,
          valuation,
        },
        config
      );

      if (response.status >= 200 && response.status < 300) {
        setConfirm("Your request has been sent successfully")
        setError(""); // Clear any form errors

      } 
      // ...
    } catch (errorX) {
      console.error("Error submitting data:", errorX);
      if (errorX.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        console.error("HTTP Error:", errorX.response.status);
        const errorMessage = errorX.response.data[0]; // Accessing the first item of the array
        console.error("Error Message:", errorMessage);
        setError(errorMessage);  // Assuming setError is a state setter from useState
    } else if (error.request) {
        // The request was made but no response was received
        console.error("No response was received:", errorX.request);
        setError("No response received from the server.");
    } else {
        // Something happened in setting up the request that triggered an Error
        console.error("Error setting up the request:", errorX.message);
        setError("Error setting up the request: " + errorX.message);

    }}
  };

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <Header />
      <StartUpNavbar />
      <SoftBox mt={5} mb={3}>
        <Grid container spacing={3}>
          <Grid item xs={6} md={6} xl={6}>
            <SoftBox
              ml={12}
              sx={{
                "& .MuiTableRow-root:not(:last-child)": {
                  "& td": {
                    borderBottom: ({ borders: { borderWidth, borderColor } }) =>
                      `${borderWidth[1]} solid ${borderColor}`,
                  },
                },
              }}
              style={{ width: "350px" }}
            >
              {tableData.rows.length > 0 ? (
                <Table columns={tableData.columns} rows={tableData.rows} />
              ) : (
                <SoftBox py={2} px={3}>
                  <SoftTypography variant="h6" fontWeight="regular" color="text">
                    No data available or loading...
                  </SoftTypography>
                </SoftBox>
              )}
            </SoftBox>
          </Grid>

          {/*------------------------------------------------------------------------------------------*/}

          <Grid item xs={6} xl={4}>
            <SoftBox mb={2}>
              <SoftTypography color="info" component="label" variant="h5" fontWeight="bold">
                wanted amount (ask)
              </SoftTypography>
              <SoftInput
                type="number"
                placeholder=""
                name="ask"
                value={ask}
                onChange={handleAskChange}
              />
            </SoftBox>

            {/*------------------------------------------------------------------------------------------*/}

            <SoftBox mb={2}>
              <SoftTypography color="info" component="label" variant="h5" fontWeight="bold">
                valuation
              </SoftTypography>
              <SoftInput
                type="number"
                placeholder=""
                name="valuation"
                value={valuation}
                onChange={handleValuationChange}
              />
            </SoftBox>

            {/*------------------------------------------------------------------------------------------*/}
            {error && (
              <SoftBox>
                <SoftTypography variant="caption" color="error">{error}</SoftTypography>
              </SoftBox>
            )}
            {confirm && (
              <SoftBox>
                <SoftTypography variant="caption" color="success">{confirm}</SoftTypography>
              </SoftBox>
            )}

            {/*------------------------------------------------------------------------------------------*/}
            <SoftBox
              mb={3}
              width="100"
              display="flex"
              flex="row"
              flexWrap="wrap"
              justifyContent="center"
            >
              <SoftBox mt={4} mb={1}>
                <SoftButton
                  variant="gradient"
                  color="info"
                  fullWidth
                  circular
                  onClick={handleSubmit}
                  style={{ padding: "15px 32px" }}
                >
                  submit
                </SoftButton>
              </SoftBox>
            </SoftBox>
          </Grid>
        </Grid>
      </SoftBox>
    </DashboardLayout>
  );
}

export default invesRound;
