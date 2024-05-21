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

import { useState } from "react";

// react-router-dom components
import { Link } from "react-router-dom";
import { Navigate } from "react-router-dom";
// @mui material components
import Card from "@mui/material/Card";
import Checkbox from "@mui/material/Checkbox";
import Grid from "@mui/material/Grid";

//for user auth global context
import { useAuthUser } from "context/authContext";

// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SoftInput from "components/SoftInput";
import SoftButton from "components/SoftButton";
import MultiAuthorsCard from "examples/Cards/BlogCards/MultiAuthorsCard";
import Box from "@mui/material/Box";
import CardContent from "@mui/material/CardContent";

import Icon from "@mui/material/Icon";

// Authentication layout components
import BasicLayout from "layouts/landing/components/BasicLayout";

// Images
import curved6 from "assets/images/curved-images/curved-city.png";

// About us images
import AbuotUS from "assets/images/backgraund-images/about-us.svg";
/* 
https://i.postimg.cc/FRkWrZV9/Asset-36-2x.png
https://i.postimg.cc/kGxT8gHz/Asset-37-2x.png
https://i.postimg.cc/bYbC4mvg/Asset-38-2x.png
https://i.postimg.cc/fTN2sYtN/Asset-39-2x.png
https://i.postimg.cc/BQBhntH1/Asset-40-2x.png
https://i.postimg.cc/XYNsG3k1/Asset-41-2x.png
 */

function Welcome() {
  const { role, setrole, sessionId, csrfToken } = useAuthUser();
  const [RedirectToUserIForm, setRedirectToUserIForm] = useState(false);
  const [RedirectToUserSForm, setRedirectToUserSForm] = useState(false);

  if (RedirectToUserIForm) {
    return <Navigate to="/registers_forms/startups_form" />;
  }

  if (RedirectToUserSForm) {
    return <Navigate to="/registers_forms/investor_form" />;
  }

  const handleStartup = async () => {
    setrole("startup");
    setRedirectToUserIForm(true);
  };
  const handleInvestor = async () => {
    setrole("investor");
    setRedirectToUserSForm(true);
  };

  return (
    <BasicLayout
      title=" Fueling Tomorrow's Success.!"
      description="Where the future of syndicates is being built"
      image={curved6}
    >
      <SoftBox p={1} mb={2} textAlign="center">
        <SoftTypography variant="h4" fontWeight="medium" color="dark">
          Discover cutting-edge startups, connect with talented founders, and explore invesment
          opportunities, the community of ambitious entrepreneurs and investors who are shaping the
          future.
        </SoftTypography>
      </SoftBox>
      <SoftBox p={1} sx={{ textAlign: "center" }}>
        <SoftBox mt={4} mb={5} id="getStarted">
          <Grid container spacing={3} justifyContent="center" sx={{ textAlign: "center" }}>
            <Grid item xs={10} lg={10} mb={8} align="center">
              <SoftBox mt={10} mb={1}>
                <SoftTypography
                  variant="h1"
                  color="info"
                  fontWeight="bold"
                  align="center"
                  textGradient
                >
                  Are you new to the platform?
                </SoftTypography>
              </SoftBox>
              <SoftBox>
                <SoftTypography variant="h3" color="info" fontWeight="regular" textGradient>
                  Lets work together to help you get the most out of your experience.!
                </SoftTypography>
              </SoftBox>
            </Grid>
          </Grid>
          <Box
            component="ul"
            Align="left"
            sx={{ display: "flex", flexDirection: "row", gap: 2, p: 0, m: 0 }}
          >
            <Card
              component="li"
              sx={{ width: "50%", flexGrow: 1 }}
              style={{ backgroundColor: "#633974" }}
            >
              <SoftBox mb={2}> </SoftBox>{" "}
              <CardContent>
                <SoftBox mb={2} ml={0.5}>
                  <SoftTypography variant="h3" component="div" color="white">
                    Start as Startup{" "}
                  </SoftTypography>{" "}
                </SoftBox>{" "}
                <SoftTypography variant="body2" sx={{ fontSize: 20 }} color="white">
                  Sign up now to discover exclusive opportunities, connect with investors, and take
                  your startup journey to the next level.
                </SoftTypography>
                <SoftBox mb={6}></SoftBox>
                <SoftTypography level="body-lg" fontWeight="lg" color="info">
                  <SoftButton
                    //  variant = "gradient"
                    color="white"
                    style={{ width: "50%" }}
                    circular
                    onClick={handleStartup}
                  >
                    {" "}
                    {/* here put start up form */}
                    Get Started
                    <Icon sx={{ fontWeight: "bold" }}> arrow_forward </Icon>
                  </SoftButton>
                </SoftTypography>{" "}
              </CardContent>{" "}
            </Card>{" "}
            <Card component="li" sx={{ width: "50%", flexGrow: 1 }}>
              <SoftBox mb={2}> </SoftBox>{" "}
              <CardContent>
                <SoftBox mb={2} ml={0.5}>
                  <SoftTypography variant="h3" component="div" color="info" textGradient>
                    Start as Investor{" "}
                  </SoftTypography>{" "}
                </SoftBox>{" "}
                <SoftTypography variant="body2" sx={{ fontSize: 20 }} color="text.secondary">
                  Join our club, meet other investors and start looking for exciting startups to
                  invest in
                </SoftTypography>
                <SoftBox mb={10}></SoftBox>
                <SoftButton
                  variant="gradient"
                  color="info"
                  style={{ width: "50%" }}
                  circular
                  onClick={handleInvestor}
                >
                  {" "}
                  {/* here put link path to investor form */}
                  Get Started <Icon sx={{ fontWeight: "bold" }}> arrow_forward </Icon>{" "}
                </SoftButton>
              </CardContent>{" "}
            </Card>{" "}
          </Box>{" "}
          <SoftBox mb={20}></SoftBox>{" "}
          {/*               <SoftButton  variant="gradient" color="info"  style={{ width: '50%' }} circular component={Link}
            to="/authentication/Selection">
              Get Started! 
              </SoftButton>*/}
        </SoftBox>
      </SoftBox>

      <SoftBox mt={4} mb={1} id="aboutUs">
        <MultiAuthorsCard
          image={AbuotUS}
          title="About us"
          description={
            <SoftBox >
              <SoftTypography variant="body2" component="p" color="text" mt={3} >
                Welcome to our corner of innovation and collaboration!
              </SoftTypography>
              <SoftTypography variant="body2" component="p" color="text" mt={3}>
                As female students at Qassim University&apos;s Department of Information Technology,
                we are driven by a shared passion for technology, entrepreneurship, and empowerment.
                At our core, we believe in the power of bridging the gap between startups and larger
                companies, creating a vibrant ecosystem where ideas flourish and dreams take flight.
              </SoftTypography>
              <SoftTypography variant="body2" component="p" color="text" mt={3}>
                In our journey, we aspire to be more than just students; we are catalysts for
                change, trailblazers in our field, and advocates for diversity and inclusion.
                Through our platform, we seek to empower aspiring entrepreneurs by providing them
                with the resources, support, and investment opportunities they need to turn their
                visions into reality.
              </SoftTypography>
              <SoftTypography variant="body2" component="p" color="text" mt={3}>
                With a commitment to innovation and a dedication to fostering growth, we invite you
                to join us on this exhilarating journey of transformation. Together, let&apos;s
                shape the future of technology and entrepreneurship.
              </SoftTypography>
            </SoftBox>
          }
          action={{
            type: "internal",
            route: "/somewhere",
          }}
          author={{
            image: "https://i.postimg.cc/BQBhntH1/Asset-40-2x.png",
            name: "Aseel Alomari",
          }}
          author2={{
            image: "https://i.postimg.cc/XYNsG3k1/Asset-41-2x.png",
            name: "Lina alhumaidi",
          }}
          author3={{
            image: "https://i.postimg.cc/bYbC4mvg/Asset-38-2x.png",
            name: "Raghad aljuaythin",
          }}
          author4={{
            image: "https://i.postimg.cc/FRkWrZV9/Asset-36-2x.png",
            name: "Reem alrasheed",
          }}
          author5={{
            image: "https://i.postimg.cc/kGxT8gHz/Asset-37-2x.png",
            name: "Revan alghanaym",
          }}
        ></MultiAuthorsCard>
      </SoftBox>
    </BasicLayout>
  );
}

export default Welcome;
