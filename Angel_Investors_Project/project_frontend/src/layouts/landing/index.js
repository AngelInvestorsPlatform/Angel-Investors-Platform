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

// @mui material components
import Card from "@mui/material/Card";
import Checkbox from "@mui/material/Checkbox";

// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SoftInput from "components/SoftInput";
import SoftButton from "components/SoftButton";

// Authentication layout components
import BasicLayout from "layouts/landing/components/BasicLayout";
import Socials from "layouts/landing/components/Socials";
import Separator from "layouts/landing/components/Separator";

// Images
import curved6 from "assets/images/curved-images/curved14.jpg";

function Welcome() {
  const [agreement, setAgremment] = useState(true);

  const handleSetAgremment = () => setAgremment(!agreement);

  return (
    <BasicLayout
      title="Welcome!"
      description="Where the future of syndicates is being built"
      image={curved6}
    >
        <SoftBox p={1} mb={1} textAlign="center">
          <SoftTypography variant="h3" fontWeight="medium" color="white">
          Discover cutting-edge startups, connect with talented founders, and explore invesment opportunities, the community of ambitious entrepreneurs and investors who are shaping the future.
          </SoftTypography>
        </SoftBox>
        <SoftBox mb={2}></SoftBox>
        <SoftBox mt={4} mb={1}>
              <SoftButton variant="gradient" color="dark" fullWidth>
              Get Started! 
              </SoftButton> { /*we can add here the link to the choose page (to choose if they are investors or a startups) */}
            </SoftBox>
            <SoftBox mt={4} mb={1}>
              <SoftButton variant="gradient" color="info" fullWidth>
              About us
              </SoftButton>
            </SoftBox>
    </BasicLayout> 
    
  );
}

export default Welcome;
