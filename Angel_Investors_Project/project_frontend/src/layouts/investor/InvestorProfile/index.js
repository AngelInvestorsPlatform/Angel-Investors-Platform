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
import ProfileDealList from "examples/Lists/ProfileDealList";
import DefaultProjectCard from "examples/Cards/ProjectCards/DefaultProjectCard";
import PlaceholderCard from "examples/Cards/PlaceholderCard";

// Investor layout components
import Header from "layouts/investor/InvestorProfile/components/Header";
import PlatformSettings from "layouts/profile/components/PlatformSettings";
// Investor layout components
import InvestorNavbar from "layouts/investor/components/InvestorNavbar";
import SyndicateCard from "layouts/investor/InvestorProfile/components/SyndicateCard";

// Data for backend
import profilesListData from "layouts/investor/InvestorProfile/data/profilesListData";
import SyndicateData from "layouts/investor/InvestorProfile/data/investorProfileSyndicateData";
import InvestmentInDeals from "./components/InvestmentInDeals";

// Images
import burceMars from "assets/images/bruce-mars.jpg";

function Overview() {
  // Auth and config
  const { userData } = useAuthUser();
  const token = userData ? userData.token : " ";
  const config = {
    headers: {
      Authorization: `Token ${token}`,
    },
  };

  const fetchInvestorProfile = async () => {
    try {
      // Make the GET request
      const response = await axios.get(
        `${process.env.REACT_APP_DJANGO_API}/investors/profile/`,
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
      const profileData = await fetchInvestorProfile();
      setProfile(profileData);
    };

    loadProfile();
  }, []);

  
  

  //User syndicate request
  async function fetchSyndicateData() {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_DJANGO_API}investors/joined-syndicates/`,
        config
      );
      return response.data; // Return the data from the API call
    } catch (error) {
      console.error("Error fetching syndicates:", error);
      return []; // Return an empty array in case of an error
    }
  }

  const [syndicate, setSyndicate] = useState(null);
  useEffect(() => {
    const loadSyndicate = async () => {
      const syndicateData = await fetchSyndicateData();
      setSyndicate(syndicateData);
    };
  
    loadSyndicate();
  }, []);

  //user variable || for backend link ||
  //user header info
  /* profile ? profile.first_name : "Loading..." */
  const name = profile ? profile.full_name : "Loading...";
  const job = "Angel Investor";

  // User information
  const userInfo = {
    fullName: profile ? profile.full_name : "Loading...",
    mobile: profile ? profile.phone : "Loading...",
    country: profile ? profile.country : "Loading...",
    experience: profile ? profile.experience : "Loading...",
    income: profile ? profile.income : "Loading...",
  };

  // Description
  const descriptionInfo = profile ? profile.about : "Loading...";
  // Sectors
  const sectors = profile ? profile.sectors : " ";
  const sectorsInfo = sectors.split(", ").sort(); // Splits the string and sorts alphabetically

  return (
    <DashboardLayout>
      <InvestorNavbar />
      <Header name={name} job={job} img={burceMars} />
      <SoftBox mt={5} mb={3}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={8} xl={8}>
            <ProfileInfoCard
              title="About Investor"
              description={descriptionInfo}
              info={userInfo}
              sectors={sectorsInfo}
              action={{ route: "", tooltip: "Edit Profile" }}
            />
          </Grid>
          <Grid item xs={12} md={4} xl={4}>
            <InvestmentInDeals/>
          </Grid>
        </Grid>
      </SoftBox>
      <SoftBox>
        <SyndicateCard Syndicate={syndicate} />
      </SoftBox>

      <Footer />
    </DashboardLayout>
  );
}

export default Overview;
