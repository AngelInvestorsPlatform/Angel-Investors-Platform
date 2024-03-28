import React, { Component } from "react";
import PropTypes from "prop-types";

import { NavLink } from "react-router-dom";

// @mui material components
import Grid from "@mui/material/Grid";
import Icon from "@mui/material/Icon";

// Soft UI Dashboard React examples
import Sidenav from "examples/Sidenav";

//import image 
import LogoName from "assets/images/logo-name.svg";

//import page component 
import StartUpDeals from "layouts/startup/pageComponents/StartUpDeals";
import StartUpHome from "layouts/startup/pageComponents/StartUpHome";
import StartUpOffers from "layouts/startup/pageComponents/StartUpOffers";
import StartUpRejected from "layouts/startup/pageComponents/StartUpRejected";
import StartUpProfile from "layouts/startup/startupProfile";
import InvestmentRound from "layouts/startup/InvestmentRound";
import SettingsProfile from "layouts/startup/pageComponents/SettingsProfile";
//style
// import styled from 'styled-components';

//icon
import SpaceShip from "examples/Icons/SpaceShip";
import Shop from "examples/Icons/Shop";
import Document from "examples/Icons/Document";
import CustomerSupport from "examples/Icons/CustomerSupport";
import Office from "examples/Icons/Office";
import Settings from "examples/Icons/Settings";
import { Home } from "@mui/icons-material";
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import DisabledByDefaultIcon from '@mui/icons-material/DisabledByDefault';

const routes = [ 
    { type: "title", title: "Home", key: "Home" },
     {
    type: "collapse",
    name: "Equity Overview",
    key: "StartUpHome",
    route: "/startup/StartUpHome",
    icon: <Home size="12px" />,
    component: < StartUpHome />,
    noCollapse: true,
  },
  {type : "divider"},
  { type: "title", title: "Deals", key: "Deals" },
  


  // {
  //   type: "collapse",
  //   name: "Your Deals",
  //   key: "StartUpDeals",
  //   route: "/startup/StartUpDeals",
  //   icon: <Document size="12px" />,
  //   component: <StartUpDeals />,
  //   noCollapse: true,
    
  // },
        {
            type: "collapse",
            name: "Offers",
            key: "Offers",
            route: "/Startup/StartUpOffers",
            icon: <AccessTimeIcon size="12px" />,
            component: < StartUpOffers />,
            noCollapse: true,
          },
          // {
          //   type: "collapse",
          //   name: "Rejected Deals",
          //   key: "Rejected",
          //   route: "/Startup/StartUpRejected",
          //   icon: <DisabledByDefaultIcon size="12px" />,
          //   component: < StartUpRejected />,
          //   noCollapse: true,
          // },
          {
            type: "collapse",
            name: "Investment Round",
            key: "InvestmentRound",
            route: "/Startup/InvestmentRound",
            icon: <SpaceShip size="12px" />,
            component: < InvestmentRound />,
            noCollapse: true,
          },
        
        


  {type : "divider"},
  { type: "title", title: "Account Manage", key: "account-pages" },
  {
    type: "collapse",
    name: "Profile",
    key: "StartUpProfile",
    route: "/startup/StartUpProfile",
    icon: <CustomerSupport size="12px" />,
    component: < StartUpProfile />,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "Settings",
    key: "SettingsProfile",
    route: "/startup/SettingsProfile",
    icon: <Settings size="12px" />,
    component: < SettingsProfile />,
    noCollapse: true,
    // for a temporary 
  },
];


function StartUpNavbar(){
  return (
    <Sidenav
      mainPage="/startup"
      brandName="Angel Investor Platform"
      brand={LogoName}
      routes={routes}
      // Add other props as needed
      
    ></Sidenav>
    
  );
}

export default StartUpNavbar;
