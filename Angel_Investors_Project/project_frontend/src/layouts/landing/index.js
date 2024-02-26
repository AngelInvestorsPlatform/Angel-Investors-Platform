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
import MultiAuthorsCard from "examples/Cards/BlogCards/MultiAuthorsCard";

// Authentication layout components
import BasicLayout from "layouts/landing/components/BasicLayout";

// Images
import curved6 from "assets/images/curved-images/curved-city.png";

function Welcome() {
  const [agreement, setAgremment] = useState(true);

  const handleSetAgremment = () => setAgremment(!agreement);

  return (
    <BasicLayout
      title=" Fueling Tomorrow's Success.!"
      description="Where the future of syndicates is being built"
      image={curved6}
    >
        <SoftBox p={1} mb={2} textAlign="center">
          <SoftTypography variant="h4" fontWeight="medium" color="dark">
          Discover cutting-edge startups, connect with talented founders, and explore invesment opportunities, the community of ambitious entrepreneurs and investors who are shaping the future.
          </SoftTypography>
        </SoftBox>
        <SoftBox p={1}  sx={{ textAlign: "center" }}>
        <SoftBox mt={4} mb={5} >
              <SoftButton variant="gradient" color="info"  style={{ width: '50%' }} circular component={Link}
            to="/authentication/Selection">
              Get Started! 
              </SoftButton> { /*we can add here the link to the choose page (to choose if they are investors or a startups) */}
            </SoftBox>
            </SoftBox>

            <SoftBox mt={4} mb={1}>
              <MultiAuthorsCard
                image="https://bitly.ws/3d468"
                title="About us"
                description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis non dolore est fuga nobis ipsum illum eligendi nemo iure repellat, soluta, optio minus ut reiciendis voluptates enim impedit veritatis officiis."
                action={{
                  type: "internal",
                  route: "/somewhere",
                }}
                author={{
                  image: "https://bitly.ws/3d47n",
                  name: "Aseel Alomari",
                 
                }}
                author2={{
                  image: "https://bitly.ws/3d47n",
                  name: "Lina alhumaidi",
                  
                }}
                author3={{
                  image: "https://bitly.ws/3d47n",
                  name: "Raghad aljuaythin",
                }}
                author4={{
                  image: "https://bitly.ws/3d47n",
                  name: "Reem alrasheed",
                }}
                author5={{
                  image: "https://bitly.ws/3d47n",
                  name: "Revan alghanaym",
                }}
                
              >
                
              </MultiAuthorsCard>
            </SoftBox>
    </BasicLayout> 
    
  );
}

export default Welcome;
