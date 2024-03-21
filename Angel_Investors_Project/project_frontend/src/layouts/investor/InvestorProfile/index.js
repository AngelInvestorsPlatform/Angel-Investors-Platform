

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
import InvestorNavbar from 'layouts/investor/components/InvestorNavbar';
import SyndicateCard from "layouts/investor/InvestorProfile/components/SyndicateCard";

// Data for backend
import profilesListData from "layouts/investor/InvestorProfile/data/profilesListData";
import SyndicateData from "layouts/investor/InvestorProfile/data/investorProfileSyndicateData";

// Images
import burceMars from "assets/images/bruce-mars.jpg";


function Overview() {

//user variable || for backend link ||
//user header info
const name = "Alex Thompson";
const job = "Angel Investor";

// User information
const userInfo = {
  fullName: "Alec M. Thompson",
  email: "alecthompson@mail.com",
  mobile: "(44) 123 1234 123",
  country: "USA",
  experience: "1-2 years",
};

// Description
const descriptionInfo = "Hi, I’m Alec Thompson, Decisions: If you can’t decide, the answer is no. If two equally difficult paths, choose the one more painful in the short term (pain avoidance is creating an illusion of equality).";

// Sectors
const sectorsInfo = ["Biotech", "Adtech", "Analytics", "Market"];

// Social media links
const socialMediaInfo = [
  {
    link: "https://www.facebook.com/CreativeTim/",
    icon: <FacebookIcon />,
    color: "facebook",
  },
  {
    link: "https://twitter.com/creativetim",
    icon: <TwitterIcon />,
    color: "twitter",
  },
  {
    link: "https://www.instagram.com/creativetimofficial/",
    icon: <InstagramIcon />,
    color: "instagram",
  },
  {
    link: "https://www.linkedin.com/company/creativetim/",
    icon: <LinkedInIcon />,
    color: "linkedin",
  },
];



  return (
    <DashboardLayout>
    <InvestorNavbar />
      <Header name = {name} job ={job} img={burceMars} />
      <SoftBox mt={5} mb={3}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6} xl={8}>
            <ProfileInfoCard
              title="About Investor"
              description={descriptionInfo}
              info={userInfo}
              sectors={sectorsInfo}
              social={socialMediaInfo}
              action={{ route: "", tooltip: "Edit Profile" }}
            />
          </Grid>
          <Grid item xs={12} xl={4}>
            <ProfileDealList title="Investment in Deals " profiles={profilesListData} />
          </Grid>
        </Grid>
      </SoftBox>
      <SoftBox>
      <SyndicateCard Syndicate={SyndicateData} />
      </SoftBox>

      <Footer />
    </DashboardLayout>
  );
}

export default Overview;
