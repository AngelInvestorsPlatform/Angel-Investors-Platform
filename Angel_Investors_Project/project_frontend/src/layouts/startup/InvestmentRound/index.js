
// @mui material components
import Grid from "@mui/material/Grid";
import Icon from "@mui/material/Icon";

// Soft UI Dashboard React components
import React, { useState, useEffect } from "react";

//for API
import axios from "axios";

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
// @mui icons
import Separator from "layouts/registers_forms/components/Separator";


// Soft UI Dashboard React examples
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";

import StartUpNavbar from 'layouts/startup/components/StartUpNavbar';


//  layout components
import Header from "layouts/startup/InvestmentRound/components/Header";
//data
import Round from "layouts/startup/InvestmentRound/data/Round";

function invesRound() {
    const { columns, rows } = Round;

// Data
const [ask, setAsk] = useState("");
const [valuation, setValuation] = useState("");

// Error state
const [error, setError] = useState(""); // Initialize error state to an empty string

// Handle form changes
const handleAskChange = (event) => {
  setAsk(event.target.value);
};

const handleValuationChange = (event) => {
  // Consider adding validation here
  setValuation(event.target.value);
};

// Form submission handler
const handleSubmit = async () => {
  try {
    // Assuming DJANGO_API is a valid environment variable
    const apiUrl = process.env.REACT_APP_DJANGO_API;

    if (!ask || !valuation) {
      setError("Asking price and estimated valuation are required.");
      return;
    }

    // Handle potential non-numeric input for valuation
    if (isNaN(valuation) || parseFloat(valuation) < 0) {
      setError("Estimated valuation must be a non-negative number.");
      return;
    }

    const data = {
      ask,
      valuation,
      
    };
      // ...
    } catch (error) {
      console.error("Error submitting data:", error);
      setError("An error occurred. Please try again."); // Improve error message
    }
  };
  
    return (
      <DashboardLayout>
      <DashboardNavbar />
      <Header/>
      <StartUpNavbar/> 
      <SoftBox mt={5} mb={3}>
        <Grid container spacing={3}>
          <Grid item xs={6} md={6} xl={6}>
    
            <SoftBox ml={12}
              sx={{
                "& .MuiTableRow-root:not(:last-child)": {
                  "& td": {
                    borderBottom: ({ borders: { borderWidth, borderColor } }) =>
                      `${borderWidth[1]} solid ${borderColor}`,
                   
                  },
                },
              }}   style={{ width: '350px' }}
            >
              <Table columns={columns} rows={rows}   />
            </SoftBox>
           
         </Grid>
       
            


        
     {/*------------------------------------------------------------------------------------------*/}



   
    <Grid item xs={6} xl={4}>
  
          <SoftBox mb={2} >
    
       <SoftTypography  color="info" component="label" variant="h5" fontWeight="bold" >
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


       <SoftBox mb={2} >
       <SoftTypography color="info" component="label" variant="h5" fontWeight="bold" >
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

        
     < SoftBox mb={3} width="100" display="flex" flex="row" flexWrap="wrap" justifyContent="center">
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
