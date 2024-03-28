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

// @mui material components
import Card from "@mui/material/Card";
import Switch from "@mui/material/Switch";
import Table from "examples/Tables/Table";
import Tab from "@mui/material/Tab";
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
// Soft UI Dashboard React components


import DealsData from "layouts/startup/pageComponents/StartUpDeals/data/DealsData";
// @mui material components
import Icon from "@mui/material/Icon";

// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SoftProgress from "components/SoftProgress";
import Separator from "layouts/startup/components/Separator"


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
      
      <SoftBox pt={1.5} pb={2} px={2} lineHeight={1.25} >
        <SoftTypography variant="caption" fontWeight="bold" color="text" textTransform="uppercase">
               investment info
        </SoftTypography>
        <SoftBox display="flex" py={1} mb={0.25}>
          <SoftBox mt={0.25}>
            {/* <Switch checked={followsMe} onChange={() => setFollowsMe(!followsMe)} /> */}
            <Tab icon={<ChevronRightIcon />} />
          </SoftBox>
          <SoftBox width="80%" ml={2}>
            <SoftTypography variant="button" fontWeight="regular" color="text">
          --------------- :1M
            </SoftTypography>
          </SoftBox>
        </SoftBox>
        <Separator/>  

        <SoftBox display="flex" py={1} mb={0.25}>
          <SoftBox mt={0.25}>
            {/* <Switch checked={answersPost} onChange={() => setAnswersPost(!answersPost)} /> */}
            <Tab icon={<ChevronRightIcon />} />
          </SoftBox>
          <SoftBox width="80%" ml={2}>
            <SoftTypography variant="button" fontWeight="regular" color="text">
            Investment amount : 500,000
            </SoftTypography>
          </SoftBox>
        </SoftBox>
        <SoftBox display="flex" py={1} mb={0.25}>
          <SoftBox mt={0.25}>
            {/* <Switch checked={answersPost} onChange={() => setAnswersPost(!answersPost)} /> */}
            <Tab icon={<ChevronRightIcon />} />
          </SoftBox>
          <SoftBox width="80%" ml={2}mb={3}>
            <SoftTypography variant="button" fontWeight="regular" color="text">
         investors : 5 
            </SoftTypography>
          </SoftBox>
        </SoftBox> 
        <SoftBox display="flex" py={1} mb={0.25}>
          </SoftBox>

        <SoftBox display="flex" py={1} mb={3}>
          <SoftBox mt={0.25}>
            {/* <Switch checked={answersPost} onChange={() => setAnswersPost(!answersPost)} /> */}
          </SoftBox>
          <SoftBox width="80%" ml={2} mb ={2}>
            <SoftTypography variant="caption" fontWeight="bold" color="text" textTransform="uppercase">
          Active offer :
            </SoftTypography>
          </SoftBox>
        </SoftBox>
      
      
        <SoftBox display="flex" alignItems="center" mb={10} >
      <SoftTypography variant="caption" color="text" fontWeight="small ">
        60%   
      </SoftTypography>
      <SoftBox width="30rem">
        <SoftProgress value="60" color="text" fontWeight="medium"variant="gradient" label={false} />
      </SoftBox>
   
          </SoftBox> 
        <Separator/>  

      {/* <SoftBox display="flex" py={1} mb={0.25}>
          <SoftBox mt={0.25}>
            <Switch checked={answersPost} onChange={() => setAnswersPost(!answersPost)} />
          </SoftBox>
          <SoftBox width="80%" ml={2}>
            <SoftTypography variant="h6" fontWeight="bold" color="info">
          Complition offer :
            </SoftTypography>
          </SoftBox>
        </SoftBox>
        
     
        <SoftBox display="flex" alignItems="center" >
        
     
      <SoftTypography variant="caption" color="text" fontWeight="medium">
        100 %
      </SoftTypography>
      <SoftBox width="30rem">
        <SoftProgress value="100" color="text" fontWeight="medium"variant="gradient" label={false} />
      </SoftBox>
      </SoftBox> */}
        {/* <SoftBox
            sx={{
              "& .MuiTableRow-root:not(:last-child)": {
                "& td": {
                  borderBottom: ({ borders: { borderWidth, borderColor } }) =>
                    `${borderWidth[1]} solid ${borderColor}`,
                },
              },
            }}
          >
            <Table columns={prCols} rows={prRows} />
          </SoftBox> */}

        {/* <SoftBox display="flex" py={1} mb={0.25}>
          <SoftBox mt={0.25}>
            <Switch checked={mentionsMe} onChange={() => setMentionsMe(!mentionsMe)} />
          </SoftBox>
          <SoftBox width="80%" ml={2}>
            <SoftTypography variant="button" fontWeight="regular" color="text">
              Email me when someone mentions me
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
            application
          </SoftTypography>
        </SoftBox>
        <SoftBox display="flex" py={1} mb={0.25}>
          <SoftBox mt={0.25}>
            <Switch checked={newLaunches} onChange={() => setNewLaunches(!newLaunches)} />
          </SoftBox>
          <SoftBox width="80%" ml={2}>
            <SoftTypography variant="button" fontWeight="regular" color="text">
              New launches and projects
            </SoftTypography>
          </SoftBox>
        </SoftBox>
        <SoftBox display="flex" py={1} mb={0.25}>
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
        </SoftBox> */}
      </SoftBox>
    </Card>
  );
}

export default PlatformSettings;
