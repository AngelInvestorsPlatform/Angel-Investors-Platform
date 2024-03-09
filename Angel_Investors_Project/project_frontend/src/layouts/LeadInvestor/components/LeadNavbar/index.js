import React, { Component } from "react";
import PropTypes from "prop-types";

import { NavLink } from "react-router-dom";

// @mui material components
import Grid from "@mui/material/Grid";
import Icon from "@mui/material/Icon";

// Soft UI Dashboard React examples
import Sidenav from "examples/Sidenav";

// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";

//import image 
import LogoName from "assets/images/logo-name.svg";

//import page component

import InvestorProfile from "layouts/investor/InvestorProfile"; // - lead -
import SidenavCardTolead from "examples/Sidenav/SidenavCardTolead";


//icon
import SpaceShip from "examples/Icons/SpaceShip";
import Shop from "examples/Icons/Shop";
import Document from "examples/Icons/Document";
import CustomerSupport from "examples/Icons/CustomerSupport";
import Office from "examples/Icons/Office";
import Settings from "examples/Icons/Settings";

const routes = [
  //  didn't delete this to make it easier for whoever is working on it - edit -
  // {
  //   type: "collapse",
  //   name: "Your Syndicates",
  //   key: "YourSyndicates",
  //   route: "/investor/yourSyndicates",
  //   icon: <Shop size="12px" />,
  //   component: < YourSyndicate />,
  //   noCollapse: true,
  // },
  // {
  //   type: "collapse",
  //   name: "Your Deals",
  //   key: "YourDeals",
  //   route: "/investor/YourDeals",
  //   icon: <Document size="12px" />,
  //   component: < YourDeals />,
  //   noCollapse: true,
  // },
  // {type : "divider"},
  // {
  //   type: "collapse",
  //   name: "Explore Syndicate",
  //   key: "ExploreSyndicate",
  //   route: "/investor/ExploreSyndicate",
  //   icon: <SpaceShip size="12px" />,
  //   component: < ExploreSyndicate />,
  //   noCollapse: true,
  // },
  {type : "divider"},
  { type: "title", title: "Account Manage", key: "account-pages" },
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
    //route: "/investor/profile",
    icon: <Settings size="12px" />,
    component: < profile />,
    noCollapse: true,
    active: false, // for a temporary 
  },
  // Add more route objects as needed
];

function InvestorNavbar() {
  return (
    <Sidenav
      mainPage="/investor"
      brandName="Angel Investor Platform"
      brand={LogoName}
      routes={routes}
      // Add other props as needed
      >
      <SoftBox pt={7} my={2} mx={2} mt="auto">
        <SidenavCardTolead/>
      </SoftBox>
      </Sidenav>
  );
}

export default InvestorNavbar;
