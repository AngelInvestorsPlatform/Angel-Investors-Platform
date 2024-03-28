
// @mui material components
import Grid from "@mui/material/Grid";
import Icon from "@mui/material/Icon";

// Soft UI Dashboard React components

import React, { useState } from "react";

//for API
import axios from "axios";


import Tooltip from "@mui/material/Tooltip";


//for user auth global context
import { useAuthUser } from "context/authContext";

// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SoftInput from "components/SoftInput";
import SoftButton from "components/SoftButton";
import Card from "@mui/material/Card";
import Table from "examples/Tables/Table";
// @mui icons
import Separator from "layouts/registers_forms/components/Separator";

// Images
import investor from "assets/images/backgraund-images/investor-backgraund2.svg";
import SoftAlert from "components/SoftAlert";


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
                      `${borderWidth[33]} solid ${borderColor}`,
                   
                  },
                },
              }}   style={{ width: '450px' }}
            >
              <Table columns={columns} rows={rows}   />
            </SoftBox>
           \
         </Grid>
       
            


        
     {/* ////////////////////////*/}


   
    <Grid item xs={6} xl={4}>
  
          <SoftBox mb={2} >
    
       <SoftTypography  color="info" component="label" variant="h5" fontWeight="bold" >
       wanted amount (ask) 
       </SoftTypography>
       <SoftInput
         type="number"
         placeholder=""
           
       />
     </SoftBox>
   
     {/* ////////////////////////*/}


       <SoftBox mb={2} >
       <SoftTypography color="info" component="label" variant="h5" fontWeight="bold" >
       valuation
       </SoftTypography>
       <SoftInput
         type="number"
         placeholder=""
        />
   
       </SoftBox>
    
     {/* ////////////////////////*/}
      
        
     < SoftBox mb={3} width="100" display="flex" flex="row" flexWrap="wrap" justifyContent="center">
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

      </Grid>
       </Grid>    
      </SoftBox>
           

    
    </DashboardLayout>
    );
  }
  
export default invesRound;
