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
// import StartUpPanding from "layouts/startup/pageComponents/StartUpPanding";
// import StartUpRejected from "layouts/startup/pageComponents/StartUpRejected";
import startupProfile from "layouts/startup/startupProfile";

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
  


  {
    type: "collapse",
    name: "Your Deals",
    key: "StartUpDeals",
    route: "/startup/StartUpDeals",
    icon: <Document size="12px" />,
    component: <StartUpDeals />,
    noCollapse: true,
    
  },
        // {
        //     type: "collapse",
        //     name: "Panding Deals",
        //     key: "PandingDeals",
        //     route: "/Startup/StartUpPanding",
        //     icon: <SpaceShip size="12px" />,
        //     component: < StartUpPanding />,
        //     noCollapse: true,
        //   },
        //   {
        //     type: "collapse",
        //     name: "Rejected Deals",
        //     key: "RejectedDeals",
        //     route: "/Startup/StartUpRejected",
        //     icon: <SpaceShip size="12px" />,
        //     component: < StartUpRejected />,
        //     noCollapse: true,
        //   },

//

  {type : "divider"},
  { type: "title", title: "Account Manage", key: "account-pages" },
  {
    type: "collapse",
    name: "Profile",
    key: "StartUpProfile",
    route: "/startup/StartUpProfile",
    icon: <CustomerSupport size="12px" />,
    component: < startupProfile />,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "Settings",
    key: "Settings",
    //route: "/startup/profile",
    icon: <Settings size="12px" />,
    component: < profile />,
    noCollapse: true,
    active: false, // for a temporary 
  },
  // Add more route objects as needed
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
