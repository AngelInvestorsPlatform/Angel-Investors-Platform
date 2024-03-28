

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
import Header from "layouts/LeadInvestor/components/Header";
import PlatformSettings from "layouts/profile/components/PlatformSettings";
// Investor layout components
// import SyndicateCard from "layouts/investor/InvestorProfile/components/SyndicateCard";

// Data for backend
import profilesListData from "layouts/LeadInvestor/data/membersListData.js";
// import SyndicateData from "layouts/investor/InvestorProfile/data/investorProfileSyndicateData";

// Images
import burceMars from "assets/images/bruce-mars.jpg";
import LeadNavbar from "layouts/LeadInvestor/components/LeadNavbar";


function Overview() {

//user variable || for backend link ||
//user header info
const name = "Ali Ahmad";
const lead = "Lead Investor";

// User information
const userInfo = {
  Lead: "Ali M. Ahmad",
  email: "AliAhmad@mail.com",
  mobile: "(966) 23 1234 123",
  country: "SA",
  experience: "3-5 years",
};

// Description
const descriptionInfo = "This syndicate offers a unique opportunity for investors to amplify their reach in the BioTech sector. By pooling resources, you can access promising startups that might be outside your individual investment range.  In addition, you'll benefit from the expertise of a proven leader in [industry], ensuring a meticulous evaluation process.  Furthermore, the syndicate fosters a collaborative network, allowing you to connect with like-minded investors and exchange valuable insights.  Finally, the streamlined investment process allows you to focus on making informed decisions, while the syndicate handles the due diligence and other details.";

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
    <LeadNavbar />
      <Header name = {name} lead ={lead} img={burceMars} />
      <SoftBox mt={5} mb={3}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6} xl={8}>
            <ProfileInfoCard
              title="About St8 Syndicate"
              description={descriptionInfo}
              info={userInfo}
              sectors={sectorsInfo}
              social={socialMediaInfo}
              action={{ route: "", tooltip: "Edit Profile" }}
            />
          </Grid>
          <Grid item xs={12} xl={4}>
            <ProfileDealList title="Syndicate members " profiles={profilesListData} />
          </Grid>
        </Grid>
      </SoftBox>
      <SoftBox>
      </SoftBox>

      <Footer />
    </DashboardLayout>
  );
}

export default Overview;
