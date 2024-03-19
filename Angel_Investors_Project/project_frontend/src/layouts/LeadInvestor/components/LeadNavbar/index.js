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

// import image
import LogoName from "assets/images/logo-name.svg";

// import page component
import SidenavCardTolead from "examples/Sidenav/SidenavCardTolead";

// Your Syndicate
import SyndicateProfile from "layouts/LeadInvestor/pageComponents/SyndicateProfile";
import Overview from "layouts/LeadInvestor/pageComponents/Overview";
import ActiveDeals from "layouts/LeadInvestor/pageComponents/ActiveDeals";
import NewDeals from "layouts/LeadInvestor/pageComponents/NewDeals";
import ManageMembers from "layouts/LeadInvestor/pageComponents/ManageMembers";

// Startups
import ExploreStartups from "layouts/LeadInvestor/pageComponents/ExploreStartups";
import AddStartups from "layouts/LeadInvestor/pageComponents/AddStartups";
import InvestorProfile from "layouts/investor/InvestorProfile"; // - lead -

// icon
import SpaceShip from "examples/Icons/SpaceShip";
import Shop from "examples/Icons/Shop";
import Document from "examples/Icons/Document";
import CustomerSupport from "examples/Icons/CustomerSupport";
import Office from "examples/Icons/Office";
import Settings from "examples/Icons/Settings";

// didn't delete this to make it easier for whoever is working on it - edit - <3 u

const routes = [
  { type: "title", title: "Your Syndicate", key: "Syndicate-pages" },
  {type: "divider" },
  {
    type: "collapse",
    name: "Syndicate Profile",
    key: "SyndicateProfile",
    route: "/LeadInvestor/SyndicateProfile",
    icon: <Shop size="12px" />,
    component: < SyndicateProfile />,
    noCollapse: true,
  },
  {
    type: "Overview",
    name: "Overview",
    key: "Overview",
    route: "/LeadInvestor/Overview",
    icon: <Document size="12px" />,
    component: < Overview />,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "ActiveDeals",
    key: "ActiveDeals",
    route: "/LeadInvestor/ActiveDeals",
    icon: <SpaceShip size="12px" />,
    component: < ActiveDeals />,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "NewDeals",
    key: "NewDeals",
    route: "/LeadInvestor/NewDeals",
    icon: <SpaceShip size="12px" />,
    component: < NewDeals />,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "ManageMembers",
    key: "ManageMembers",
    route: "/LeadInvestor/ManageMembers",
    icon: <SpaceShip size="12px" />,
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
    icon: <CustomerSupport size="12px" />,
    component: < ExploreStartups />,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "Add Startups",
    key: "AddStartups",
    route: "/LeadInvestor/AddStartups",
    icon: <CustomerSupport size="12px" />,
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
    route: "/investor/InvestorProfile",
    icon: <Settings size="12px" />,
    component: < InvestorProfile />,
    noCollapse: true,
    active: false, //for a temporary
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
      <SoftBox pt={7} my={2} mx={2} mt="auto">
      </SoftBox>
    </Sidenav>
  );
}

export default LeadNavbar;
