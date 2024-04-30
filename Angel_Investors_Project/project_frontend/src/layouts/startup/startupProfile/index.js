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
import StartupInfoCard from "examples/Cards/InfoCards/StartupInfoCard";
import ProfilesList from "examples/Lists/ProfilesList";
import DefaultProjectCard from "examples/Cards/ProjectCards/DefaultProjectCard";
import PlaceholderCard from "examples/Cards/PlaceholderCard";

// startup layout components
import Header from "layouts/startup/startupProfile/components/Header";
import PlatformSettings from "layouts/profile/components/PlatformSettings";
import StartUpNavbar from "layouts/startup/components/StartUpNavbar";

import profilesListData from "layouts/profile/data/profilesListData";

// Images
import homeDecor1 from "assets/images/home-decor-1.jpg";
import homeDecor2 from "assets/images/home-decor-2.jpg";
import homeDecor3 from "assets/images/home-decor-3.jpg";
import team1 from "assets/images/team-1.jpg";
import team2 from "assets/images/team-2.jpg";
import team3 from "assets/images/team-3.jpg";
import team4 from "assets/images/team-4.jpg";
import warQ from "assets/images/startups-logos/warq-logo.png";
function Overview() {
  //user variable || for backend link ||

  // Auth and config
  const { userData } = useAuthUser();
  const token = userData ? userData.token : " ";
  const config = {
    headers: {
      Authorization: `Token ${token}`,
    },
  };

  const fetchStartupProfile = async () => {
    try {
      // Make the GET request
      const response = await axios.get(
        `${process.env.REACT_APP_DJANGO_API}/startups/profile/`,
        config
      );

      // Handle response
      return response.data;
    } catch (error) {
      console.error("Error fetching startup profile:", error);
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
      const profileData = await fetchStartupProfile();
      setProfile(profileData);
    };

    loadProfile();
  }, []);

  // User header info
  const name = profile ? profile.startup_name : "Loading...";
  const job = profile ? profile.job_position + ": " + profile.full_name : "Loading...";

  // User information
  const userInfo = {
    position: profile ? profile.job_position : "Loading...",
    name: profile ? profile.full_name : "Loading...",
    email: profile ? profile.email : "Loading...",
    mobile: profile ? profile.phone : "Loading...",
    country: profile ? profile.country : "Loading...",
    city: profile ? profile.city : "...",
  };

  // Description
  const descriptionInfo = profile ? profile.about : "Loading...";

  // Sectors
  const sectors = profile ? profile.sector : " ";
  const sectorsInfo = sectors.split(", ").sort();

  // Startup Stage
  const stageInfo = profile ? profile.stage : "Loading...";

  // Team members
  const TeamMembers = profile ? profile.team_size : "Loading...";

  const website = profile ? profile.website : "Loading...";

  return (
    <DashboardLayout>
      <StartUpNavbar />
       <Header name={name} job={job} img={warQ} />
      <SoftBox mt={5} mb={3} ml={6}>
        <Grid container spacing={3}>
          <Grid item>
            <StartupInfoCard
              title="About This Startup Company"
              description={descriptionInfo}
              info={userInfo}
              sectors={sectorsInfo}
              stage={stageInfo}
              team={TeamMembers}
              web={website}
              action={{ route: "", tooltip: "Edit Profile" }}
            />
          </Grid>
        </Grid>
      </SoftBox>

      <Footer />
    </DashboardLayout>
  );
}

export default Overview;
