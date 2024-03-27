/**
=========================================================
* Soft UI Dashboard React - v4.0.1
=========================================================

* Product Page: https://www.creative-tim.com/product/soft-ui-dashboard-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com
Angel_Investors_Project/project_frontend/src/layouts/authentication/components/Separator
 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

import { useState } from "react";

// @mui material components
import Card from "@mui/material/Card";
import Switch from "@mui/material/Switch";
import Cube from "examples/Icons/Cube";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import Separator from "layouts/startup/components/Separator"
import DealsData from "layouts/startup/pageComponents/StartUpDeals/data/DealsData";

//instead of calling the sectors array
const sectors = ["Fintech", "Healthcare", "Analytics", "ML"];
const sectors1 = ["Finance", "Blockchain Investment", "Stock Trading"];
const sectors2 = ["Healthcare", "Telemedicine", "Medical Devices"];
const sectors3 = ["Food", "Beverage", "Plant-based", "Hospitality"];
const sectors4 = ["Fintech", "Pre-Seed", "Cryptocurrency"];
const sectors5 = [
  "Software-Development",
  "Software as a Service",
  "AI",
];
const sectors6 = ["Social Media", "Social Networking", "Content Creation", "Influencer Marketing"];





function PlatformSettings() {
  const [followsMe, setFollowsMe] = useState(true);
  const [answersPost, setAnswersPost] = useState(false);
  const [mentionsMe, setMentionsMe] = useState(true);
  const [newLaunches, setNewLaunches] = useState(false);
  const [productUpdate, setProductUpdate] = useState(true);
  const [newsletter, setNewsletter] = useState(true);
  const { columns: prCols, rows: prRows } = DealsData;
  return (
    
    <Card>
      <SoftBox pt={2} px={2}>
        <SoftTypography variant="h6" fontWeight="medium" textTransform="capitalize">
         
        </SoftTypography>
      </SoftBox>
      <SoftBox pt={1.5} pb={2} px={2} lineHeight={1.25}>
        <SoftTypography variant="caption" fontWeight="bold" color="text" textTransform="uppercase">
          Stage
        </SoftTypography>
        <SoftBox display="flex" py={1} mb={0.25}>
          <SoftBox mt={0.25}>
            {/* <Switch checked={followsMe} onChange={() => setFollowsMe(!followsMe)} /> */}
            <Tab icon={<ChevronRightIcon />} />
          
          </SoftBox>
          <SoftBox width="80%" ml={2}>
            <SoftTypography variant="button" fontWeight="regular" color="text">
            Seed - Series A - Series B startups
            </SoftTypography>
          </SoftBox>
        </SoftBox>
        <SoftBox display="flex" py={1} mb={0.25}>
          <SoftBox mt={0.25}>
            {/* <Switch checked={mentionsMe} onChange={() => setMentionsMe(!mentionsMe)} /> */}
            <Tab icon={<ChevronRightIcon />} />

          </SoftBox>
          <SoftBox width="80%" ml={2}>
            <SoftTypography variant="button" fontWeight="regular" color="text">
            Technology Sector
            </SoftTypography>
          </SoftBox>
        </SoftBox>
        <Separator/>
        <SoftBox display="flex" py={1} mb={0.25}>
          <SoftBox mt={0.25}>
            {/* //icon */}
              <Tab icon={<ChevronRightIcon />} />
          </SoftBox>
          <SoftBox width="80%" ml={2}>
            <SoftTypography variant="button" fontWeight="regular" color="text">
             investing since Dec 2020
            </SoftTypography>
          </SoftBox>
        </SoftBox>
        <SoftBox display="flex" py={1} mb={0.25}>
          <SoftBox mt={0.25}>
            {/* <Switch checked={mentionsMe} onChange={() => setMentionsMe(!mentionsMe)} /> */}
            <Tab icon={<ChevronRightIcon />} />

          </SoftBox>
          <SoftBox width="80%" ml={2}>
            <SoftTypography variant="button" fontWeight="regular" color="text">
           22 Deals 
            </SoftTypography>
          </SoftBox>
        </SoftBox>
        <SoftBox display="flex" py={1} mb={0.25}>
          <SoftBox mt={0.25}>
            {/* <Switch checked={mentionsMe} onChange={() => setMentionsMe(!mentionsMe)} /> */}
            <Tab icon={<ChevronRightIcon />} />

          </SoftBox>
          <SoftBox width="80%" ml={2}>
            <SoftTypography variant="button" fontWeight="regular" color="text">
          3M investment
            </SoftTypography>
          </SoftBox>
        </SoftBox>

        <SoftBox mt={3}>
          <SoftTypography
            variant="caption"
            fontWeight="bold"
            color="text"
            textTransform="uppercase"
          >
            About
          </SoftTypography>
        </SoftBox>
        <SoftBox display="flex" py={1} mb={0.25}>
          <SoftBox mt={0.25}>
            {/* <Switch checked={newLaunches} onChange={() => setNewLaunches(!newLaunches)} /> */}
          </SoftBox>
          <SoftBox width="80%" ml={2}>
            <SoftTypography variant="button" fontWeight="regular" color="text">
            Alec Thompson, Decisions: If you can’t decide, the answer is no. If two equally difficult paths, choose the one more painful in the short term (pain avoidance is creating an illusion of equality).
            </SoftTypography>
          </SoftBox>
        </SoftBox>
        </SoftBox>

        {/* <SoftBox display="flex" py={1} mb={0.25}>
          <SoftBox mt={0.25}>
            <Switch checked={productUpdate} onChange={() => setProductUpdate(!productUpdate)} />
          </SoftBox>
          <SoftBox width="80%" ml={2}>
            <SoftTypography variant="button" fontWeight="regular" color="text">
              Monthly product updates
            </SoftTypography>
          </SoftBox>
        </SoftBox>
        <SoftBox display="flex" py={1} mb={0.25}>
          <SoftBox mt={0.25}>
            <Switch checked={newsletter} onChange={() => setNewsletter(!newsletter)} />
          </SoftBox>
          <SoftBox width="80%" ml={2}>
            <SoftTypography variant="button" fontWeight="regular" color="text">
              Subscribe to newsletter
            </SoftTypography>
          </SoftBox>
        </SoftBox>
      </SoftBox> */}
    </Card>
  );
}

export default PlatformSettings;
