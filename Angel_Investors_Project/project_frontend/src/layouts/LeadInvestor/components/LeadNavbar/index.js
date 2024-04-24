import React, { Component } from "react";
import PropTypes from "prop-types";

import { NavLink } from "react-router-dom";

// @mui material components
import Grid from "@mui/material/Grid";
import Icon from "@mui/material/Icon";

// Soft UI Dashboard React examples
import Sidenav from "examples/Sidenav";
import ToggleButton from "examples/Sidenav/SidenavToggle";

// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";


// import image
import LogoName from "assets/images/logo-name.svg";

// import page component
import SidenavCardTolead from "examples/Sidenav/SidenavCardTolead";

// Your Syndicate
// import SyndicateProfile from "layouts/LeadInvestor/pageComponents/SyndicateProfile";
import LeadInvestor from "layouts/LeadInvestor";
import ActiveDeals from "layouts/LeadInvestor/pageComponents/ActiveDeals";
import NewDeals from "layouts/LeadInvestor/pageComponents/NewDeals";
import ManageMembers from "layouts/LeadInvestor/pageComponents/ManageMembers";

// Startups
import ExploreStartups from "layouts/LeadInvestor/pageComponents/ExploreStartups";
import AddStartups from "layouts/LeadInvestor/pageComponents/AddStartups";
import InvestorProfile from "layouts/investor/InvestorProfile"; // - lead -

// icons
import SpaceShip from "examples/Icons/SpaceShip";
import Shop from "examples/Icons/Shop";
import Document from "examples/Icons/Document";
import CustomerSupport from "examples/Icons/CustomerSupport";
import Office from "examples/Icons/Office";
import Settings from "examples/Icons/Settings";
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import PostAddIcon from '@mui/icons-material/PostAdd';
import ExploreIcon from '@mui/icons-material/Explore';
import TableViewOutlinedIcon from '@mui/icons-material/TableViewOutlined';
import HandshakeOutlinedIcon from '@mui/icons-material/HandshakeOutlined';
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import LeaderboardOutlinedIcon from '@mui/icons-material/LeaderboardOutlined';
import RocketLaunchOutlinedIcon from '@mui/icons-material/RocketLaunchOutlined';

// didn't delete this to make it easier for whoever is working on it - edit - <3 u

const routes = [
  { type: "title", title: "Your Syndicate", key: "Syndicate-pages" },
  {type: "divider" },
  {
    type: "collapse",
    name: "Overview",
    key: "Overview",
    route: "/LeadInvestor",
    icon: <LeaderboardOutlinedIcon size="12px" />,
    component: < LeadInvestor />,
    noCollapse: true,
  },
  /* {
    type: "collapse",
    name: "Syndicate Profile",
    key: "SyndicateProfile",
    route: "/LeadInvestor/SyndicateProfile",
    icon: <DashboardOutlinedIcon size="12px" />,
    component: < SyndicateProfile />,
    noCollapse: true,
  }, */
  {
    type: "collapse",
    name: "Active Deals",
    key: "ActiveDeals",
    route: "/LeadInvestor/ActiveDeals",
    icon: <HandshakeOutlinedIcon size="12px" />,
    component: < ActiveDeals />,
    noCollapse: true,
  }, 
  {
    type: "collapse",
    name: "New Deals",
    key: "NewDeals",
    route: "/LeadInvestor/NewDeals",
    icon: <RocketLaunchOutlinedIcon size="12px" />,
    component: < NewDeals />,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "Manage Members",
    key: "ManageMembers",
    route: "/LeadInvestor/ManageMembers",
    icon: <ManageAccountsIcon size="12px" />,
    component: < ManageMembers />,
    noCollapse: true,
  },
  { type: "divider" },
  { type: "title", title: "Startups", key: "Startups-pages" },
  {type: "divider" },
  {
    type: "collapse",
    name: "Explore Startups",
    key: "ExploreStartups",
    route: "/LeadInvestor/ExploreStartups",
    icon: <ExploreIcon size="12px" />,
    component: < ExploreStartups />,
    noCollapse: true,
  }, 
  {
    type: "collapse",
    name: "Add Startups",
    key: "AddStartups",
    route: "/LeadInvestor/AddStartups",
    icon: < PostAddIcon size="12px" />,
    component: < AddStartups />,
    noCollapse: true,
  },
  {type : "divider"},
  {type: "title", title: "Account Manage", key: "account-pages" },
  {
    type: "collapse",
    name: "Profile",
    key: "InvestorProfile",
    route: "/investor/profile",
    icon: <CustomerSupport size="12px" />,
    component: < InvestorProfile />,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "Settings",
    key: "Settings",
    route: "/investor/Profile",
    icon: <Settings size="12px" />,
    component: < InvestorProfile />,
    noCollapse: true,
    // active: false, //for a temporary
  },
  
  // Add more route objects as needed
];

function LeadNavbar() {
  return (
    <Sidenav
      mainPage="/LeadInvestor"
      brandName="Angel Investor Platform"
      brand={LogoName}
      routes={routes}
    >
     <SoftBox my={2} mx={2}>
          <ToggleButton />
      </SoftBox>
    </Sidenav>
  );
}

export default LeadNavbar;
