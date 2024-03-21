/**
=========================================================
* Soft UI Dashboard React - v4.0.1
=========================================================

* Product Page: https://www.creative-tim.com/product/soft-ui-dashboard-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

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
import Header from "layouts/profile/components/Header";
import PlatformSettings from "layouts/profile/components/PlatformSettings";
import StartUpNavbar from 'layouts/startup/components/StartUpNavbar';

// Data
import profilesListData from "layouts/profile/data/profilesListData";

// Images
import homeDecor1 from "assets/images/home-decor-1.jpg";
import homeDecor2 from "assets/images/home-decor-2.jpg";
import homeDecor3 from "assets/images/home-decor-3.jpg";
import team1 from "assets/images/team-1.jpg";
import team2 from "assets/images/team-2.jpg";
import team3 from "assets/images/team-3.jpg";
import team4 from "assets/images/team-4.jpg";

function Overview() {

//user variable || for backend link ||
// User header info
const name = "Alex Thompson";
const job = "Angel Investor";

// User information
const userInfo = {
  CommercialName: "Alec M. Thompson",
  email: "alecthompson@mail.com",
  mobile: "(44) 123 1234 123",
  country: "Saudi Arabia",
};

// Description
const descriptionInfo = "Our platform is cutting-edge fintech startup specializing in revolutionizing digital payments and financial transactions. Led by a team of industry experts, our mission is to streamline financial processes, enhance security, and provide seamless experiences for businesses and consumers alike. With innovative technologies and a forward-thinking approach, Wrq is poised to disrupt the fintech landscape and drive the future of finance.";

// Sectors
const sectorsInfo = ["Fintech"];

// Startup Stage
const stageInfo = "Pre-seed";

// Team members
const TeamMembers = "5";

// Social media links
const socialMediaInfo = [
  {
    link: "https://www.facebook.com/WrqFintech/",
    icon: <FacebookIcon />,
    color: "facebook",
  },
  {
    link: "https://twitter.com/WrqFintech",
    icon: <TwitterIcon />,
    color: "twitter",
  },
  {
    link: "https://www.instagram.com/WrqFintechOfficial/",
    icon: <InstagramIcon />,
    color: "instagram",
  },
  {
    link: "https://www.linkedin.com/company/WrqFintech/",
    icon: <LinkedInIcon />,
    color: "linkedin",
  },
];



  return (
    <DashboardLayout>
    <StartUpNavbar />
      <Header />
      <SoftBox mt={5} mb={3}>
        <Grid container spacing={3}>
          <Grid item>
          <StartupInfoCard
              title="About This Startup Company"
              description={descriptionInfo}
              info={userInfo}
              sectors={sectorsInfo}
              stage={stageInfo}
              team={TeamMembers}
              web="/landing"
              social={socialMediaInfo}
              action={{ route: "", tooltip: "Edit Profile" }}
            />
          </Grid>
          </Grid> 
          </SoftBox>
          {/*

     
      <SoftBox mb={3}>
        <Card>
          <SoftBox pt={2} px={2}>
            <SoftBox mb={0.5}>
              <SoftTypography variant="h6" fontWeight="medium">
                Projects
              </SoftTypography>
            </SoftBox>
            <SoftBox mb={1}>
              <SoftTypography variant="button" fontWeight="regular" color="text">
                Architects design houses
              </SoftTypography>
            </SoftBox>
          </SoftBox>
          <SoftBox p={2}>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6} xl={3}>
                <DefaultProjectCard
                  image={homeDecor1}
                  label="project #2"
                  title="modern"
                  description="As Uber works through a huge amount of internal management turmoil."
                  action={{
                    type: "internal",
                    route: "/pages/profile/profile-overview",
                    color: "info",
                    label: "view project",
                  }}
                  authors={[
                    { image: team1, name: "Elena Morison" },
                    { image: team2, name: "Ryan Milly" },
                    { image: team3, name: "Nick Daniel" },
                    { image: team4, name: "Peterson" },
                  ]}
                />
              </Grid>
              <Grid item xs={12} md={6} xl={3}>
                <DefaultProjectCard
                  image={homeDecor2}
                  label="project #1"
                  title="scandinavian"
                  description="Music is something that every person has his or her own specific opinion about."
                  action={{
                    type: "internal",
                    route: "/pages/profile/profile-overview",
                    color: "info",
                    label: "view project",
                  }}
                  authors={[
                    { image: team3, name: "Nick Daniel" },
                    { image: team4, name: "Peterson" },
                    { image: team1, name: "Elena Morison" },
                    { image: team2, name: "Ryan Milly" },
                  ]}
                />
              </Grid>
              <Grid item xs={12} md={6} xl={3}>
                <DefaultProjectCard
                  image={homeDecor3}
                  label="project #3"
                  title="minimalist"
                  description="Different people have different taste, and various types of music."
                  action={{
                    type: "internal",
                    route: "/pages/profile/profile-overview",
                    color: "info",
                    label: "view project",
                  }}
                  authors={[
                    { image: team4, name: "Peterson" },
                    { image: team3, name: "Nick Daniel" },
                    { image: team2, name: "Ryan Milly" },
                    { image: team1, name: "Elena Morison" },
                  ]}
                />
              </Grid>
              <Grid item xs={12} md={6} xl={3}>
                <PlaceholderCard title={{ variant: "h5", text: "New project" }} outlined />
              </Grid>
            </Grid>
          </SoftBox>
        </Card>
      </SoftBox> */}

      <Footer />
    </DashboardLayout>
  );
}

export default Overview;
