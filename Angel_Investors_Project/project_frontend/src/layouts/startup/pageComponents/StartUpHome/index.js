import React, { useState, useEffect } from "react";

//for API
import axios from "axios";

//for user auth global context
import { useAuthUser } from "context/authContext";

// @mui material components
import Card from "@mui/material/Card";

// @mui material components
import Grid from "@mui/material/Grid";
import Icon from "@mui/material/Icon";

// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";

import SoftTypography from "components/SoftTypography";

// @mui icons

// Soft UI Dashboard React examples
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";

import StartUpNavbar from "layouts/startup/components/StartUpNavbar";

import MiniStatisticsCard from "examples/Cards/StatisticsCards/MiniStatisticsCard";
import ReportsBarChart from "examples/Charts/BarCharts/ReportsBarChart";
import GradientLineChart from "examples/Charts/LineCharts/GradientLineChart";

import Projects from "layouts/dashboard/components/Projects";
import OrderOverview from "layouts/dashboard/components/OrderOverview";
import Separator from "layouts/startup/components/Separator";

// Data
import reportsBarChartData from "layouts/dashboard/data/reportsBarChartData";
import gradientLineChartData from "layouts/dashboard/data/gradientLineChartData";
// startup layout components
import Header from "layouts/startup/pageComponents/StartUpDeals/components/Header";
import SyndicateInfo from "layouts/startup/pageComponents/StartUpDeals/components/SyndicateInfo";
import DealInfo from "layouts/startup/pageComponents/StartUpDeals/components/DealInfo";
import typography from "assets/theme/base/typography";

// Data
import warQ from "assets/images/startups-logos/warq-logo.png";

//
function Deal() {
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

  const { size } = typography;
  const { chart, items } = reportsBarChartData;
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <StartUpNavbar />
      <Header name={name} job={job} img={warQ} />

      {/* ------------------------*/}
      <Separator />

      <SoftBox mb={3} mt={4}>
        <SoftTypography
          alignItems="center"
          variant="h3"
          color="info"
          fontWeight="regular"
          textGradient
        >
          Equity Overview
        </SoftTypography>
      </SoftBox>

      <SoftBox py={3}>
        <SoftBox mb={3}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={12} md={4} xl={4}>
              <MiniStatisticsCard
                title={{ text: "today's money" }}
                count="$53,000"
                percentage={{ color: "success", text: "+55%" }}
                icon={{ color: "info", component: "paid" }}
              />
            </Grid>
            <Grid item xs={12} sm={12} md={4} xl={4}>
              <MiniStatisticsCard
                title={{ text: "today's users" }}
                count="2,300"
                percentage={{ color: "success", text: "+3%" }}
                icon={{ color: "info", component: "public" }}
              />
            </Grid>
            <Grid item xs={12} sm={12} md={4} xl={4}>
              <MiniStatisticsCard
                title={{ text: "new clients" }}
                count="+3,462"
                percentage={{ color: "error", text: "-2%" }}
                icon={{ color: "info", component: "emoji_events" }}
              />
            </Grid>
          </Grid>
        </SoftBox>
        <SoftBox mb={3}>
          
        </SoftBox>
      </SoftBox>

      {/* ------------------------*/}
      <SoftBox mt={5} mb={3}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={4} xl={4}>
            <DealInfo />
          </Grid>
          <Grid item xs={12} md={8} xl={8}>
            <SyndicateInfo />
          </Grid>
        </Grid>
      </SoftBox>
      {/*  */}
      <Footer />
    </DashboardLayout>
  );
}

export default Deal;
