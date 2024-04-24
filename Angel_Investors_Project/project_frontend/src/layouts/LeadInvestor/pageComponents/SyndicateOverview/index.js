import React, { useState, useEffect } from "react";

//for API
import axios from "axios";

//for user auth global context
import { useAuthUser } from "context/authContext";

// @mui material components
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

// @mui icons
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";

// Soft UI Dashboard React examples
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import Footer from "examples/Footer";
import ProfileInfoCard from "examples/Cards/InfoCards/ProfileInfoCard";
import SyndicateInfoCard from "examples/Cards/InfoCards/SyndicateInfoCard";
import ProfileDealList from "examples/Lists/ProfileDealList";
import DefaultProjectCard from "examples/Cards/ProjectCards/DefaultProjectCard";
import PlaceholderCard from "examples/Cards/PlaceholderCard";

// Investor layout components
import Header from "layouts/LeadInvestor/components/Header";
import PlatformSettings from "layouts/profile/components/PlatformSettings";
// Investor layout components
// import SyndicateCard from "layouts/investor/InvestorProfile/components/SyndicateCard";

// Data for backend
import membersListData from "layouts/LeadInvestor/data/membersListData.js";
import ActiveDealsData from "layouts/LeadInvestor/data/ActiveDealsData";
import NewDealsData from "layouts/LeadInvestor/data/NewDealsData";

// import SyndicateData from "layouts/investor/InvestorProfile/data/investorProfileSyndicateData";

// Images
import burceMars from "assets/images/bruce-mars.jpg";
import LeadNavbar from "layouts/LeadInvestor/components/LeadNavbar";

function Overview() {

   // Auth and config
   const { userData } = useAuthUser();
   const token = userData ? userData.token : " ";
   const config = {
     headers: {
       Authorization: `Token ${token}`,
     },
   };
 
   const fetchSyndicateProfile = async () => {
     try {
       // Make the GET request
       const response = await axios.get(
         `${process.env.REACT_APP_DJANGO_API}/syndicates/manageSyndicate/`,
         config
       );
 
       // Handle response
       return response.data;
     } catch (error) {
       console.error("Error fetching investor profile:", error);
       // Handle errors, e.g., token expired, network issues, etc.
       if (error.response) {
         // The request was made and the server responded with a status code
         // that falls out of the range of 2xx
         console.error("Response data:", error.response.data);
         console.error("Response status:", error.response.status);
         console.error("Response headers:", error.response.headers);
       } else if (error.request) {
         // The request was made but no response was received
         console.error("Request error:", error.request);
       } else {
         // Something happened in setting up the request that triggered an Error
         console.error("Error", error.message);
       }
     }
   };
 
   const [profile, setProfile] = useState(null);
 
   useEffect(() => {
     const loadProfile = async () => {
       const profileData = await fetchSyndicateProfile();
       setProfile(profileData);
     };
 
     loadProfile();
   }, []);


  //user variable || for backend link ||
  //user header info
  const name = profile ? profile.syndicate_name : "Loading...";
  const lead = "Lead: Ali Ahmad";
  const title = `About ${name} Syndicate`

  // User information
  const userInfo = {
    Lead: "Ali M. Ahmad",
    email: "AliAhmad@mail.com",
    mobile: "(966) 23 1234 123",
    country: "SA",
    experience: "3-5 years",
  };

   // Description
   const descriptionInfo = profile ? profile.about : "Loading...";
   // Sectors
   const sectors = profile ? profile.sectors : " "
   const sectorsInfo = sectors.split(', ').sort(); // Splits the string and sorts alphabetically
 

  return (
    <DashboardLayout>
      <LeadNavbar />
      <Header name={name} lead={lead} img={burceMars} />

      <SoftBox mt={5} mb={3}>

        <Grid container spacing={3}>
          <Grid item xs={12} md={6} xl={8}>
            <SyndicateInfoCard
              title="About St8 Syndicate"
              description={descriptionInfo}
              sectors={sectorsInfo}
              info={userInfo}
            />
          </Grid>
          <Grid item xs={3} xl={4}>
            <ProfileDealList title="Syndicate members " profiles={membersListData} />
          </Grid>
          <Grid item xs={6} xl={4}>
            <ProfileDealList title="Active Deals" profiles={ActiveDealsData} />
          </Grid>

          <Grid item xs={6} xl={4}>
            <ProfileDealList title="New Deals" profiles={NewDealsData} />
          </Grid>
        </Grid>
        </SoftBox>

      <Footer />
    </DashboardLayout>
  );
}

export default Overview;
