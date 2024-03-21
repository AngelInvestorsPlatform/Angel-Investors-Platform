
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
import DealsData from "layouts/startup/InvestmentRound/data/DealsData";

function Round() {
  const { columns, rows } = DealsData;
 
    return (
      <DashboardLayout>
      <DashboardNavbar />
      <Header/>
      <StartUpNavbar/> 
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
            <SoftBox component="form" role="form" width="100" display="flex" flex="row" flexWrap="wrap" mt={4} >
     
     {/* ////////////////////////*/}

   {/* third Column */}
   <SoftBox flex="0 0 20%"  mr={9} mb={3} ml={30}>
     <SoftBox mb={2}>
       <SoftTypography  color="info" component="label" variant="h5" fontWeight="bold" textGradient>
       wanted amount (ask) 
       </SoftTypography>
       <SoftInput
         type="number"
         placeholder=""
         minLength={10}
        
       />
     </SoftBox></SoftBox>
<SoftBox flex="0 0 20%" mr={9} mb={3} ml={6}>
     <SoftBox mb={2}>
       <SoftTypography color="info" component="label" variant="h5" fontWeight="bold" textGradient>
       valuation
       </SoftTypography>
       <SoftInput
         type="number"
         placeholder=""
         minLength={10}
     
       />
     </SoftBox>
       </SoftBox>
    
 <SoftBox mt={4} mb={1}>
   <SoftButton variant="gradient" color="info" circular fullWidth 
   to="/startup">
     Submit
   </SoftButton>
 </SoftBox> 
   


</SoftBox>
          </Card>

      {/* <Grid container spacing={6} alignItems="center">
          <Grid item>
           
          </Grid>
         
          <Grid item xs={10} lg={10} align="center">
            <SoftBox mt={15} mb={1}>
              <SoftTypography
                variant="h4"
                color="info"
                fontWeight="bold"
                align="center"
                textGradient
              >
              Welcome funder!
              </SoftTypography>
               </SoftBox>
          </Grid>
          </Grid> */}
 {/* <SoftBox mt={12} mb={12} mr={12}  ml={12}> */}
  
          {/* <SoftTypography  variant="h4"  mb={1} mr={5}  ml={30}
                    color="text"
                    fontWeight="bold"
                    align="center"
                    textGradient   >
             Founder : khaled fahad 
                </SoftTypography>
                <SoftTypography  variant="h4"  mb={1} mr={5}  ml={5}
                    color="text"
                    fontWeight="bold"
                    align="center"
                    textGradient    >
            StartUp Name : Bellatrixfly
                </SoftTypography>
                <SoftTypography  variant="h4"  mb={1} mr={5}  ml={30}
                    color="text"
                    fontWeight="bold"
                    align="center"
                    textGradient    >
           Sector : Informstion Teqnologyy
                </SoftTypography>
                <SoftTypography  variant="h4"  mb={2} mr={5}  ml={5}
                    color="text"
                    fontWeight="bold"
                    align="center"
                    textGradient    >
              Stage : Seed A
                </SoftTypography> */}
                {/* </SoftBox> */}
        
     
           

    
    </DashboardLayout>
    );
  }
  
export default Round;
