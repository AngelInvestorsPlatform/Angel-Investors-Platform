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

/** 
  All of the routes for the Soft UI Dashboard React are added here,
  You can add a new route, customize the routes and delete the routes here.

  Once you add a new route on this file it will be visible automatically on
  the Sidenav.

  For adding a new route you can follow the existing routes in the routes array.
  1. The `type` key with the `collapse` value is used for a route.
  2. The `type` key with the `title` value is used for a title inside the Sidenav. 
  3. The `type` key with the `divider` value is used for a divider between Sidenav items.
  4. The `name` key is used for the name of the route on the Sidenav.
  5. The `key` key is used for the key of the route (It will help you with the key prop inside a loop).
  6. The `icon` key is used for the icon of the route on the Sidenav, you have to add a node.
  7. The `collapse` key is used for making a collapsible item on the Sidenav that has other routes
  inside (nested routes), you need to pass the nested routes inside an array as a value for the `collapse` key.
  8. The `route` key is used to store the route location which is used for the react router.
  9. The `href` key is used to store the external links location.
  10. The `title` key is only for the item with the type of `title` and its used for the title text on the Sidenav.
  10. The `component` key is used to store the component of its route.
*/

// Soft UI Dashboard React layouts
import Landing from "layouts/landing";
import Dashboard from "layouts/dashboard";
import Tables from "layouts/tables";
import Billing from "layouts/billing";
import VirtualReality from "layouts/virtual-reality";
import RTL from "layouts/rtl";
import Profile from "layouts/profile";
import SignIn from "layouts/authentication/sign-in";
import SignUp from "layouts/authentication/log-in";
import Selection from "layouts/authentication/Selection";
import Investor_form from "layouts/registers_forms/investor_form";
import Startups_form from "layouts/registers_forms/startups_form"
import Startup from "layouts/startup"
import Investor from "layouts/investor"


//import investor page component 
import YourSyndicate from "layouts/investor/pageComponents/YourSyndicates";
import YourDeals from "layouts/investor/pageComponents/YourDeals";
import ExploreSyndicate from "layouts/investor/pageComponents/ExploreSyndicate";
import InvestorProfile from "layouts/investor/InvestorProfile";

//import page component
import StartUpDeals from "layouts/startup/pageComponents/StartUpDeals";
import StartUpHome from "layouts/startup/pageComponents/StartUpHome";
// import StartUpPanding from "layouts/startup/pageComponents/StartUpPanding";
// import StartUpRejected from "layouts/startup/pageComponents/StartUpRejected";
import StartUpProfile from "layouts/startup/StartUpProfile";


// Soft UI Dashboard React icons
import Shop from "examples/Icons/Shop";
import Office from "examples/Icons/Office";
import Settings from "examples/Icons/Settings";
import Document from "examples/Icons/Document";
import SpaceShip from "examples/Icons/SpaceShip";
import CustomerSupport from "examples/Icons/CustomerSupport";
import CreditCard from "examples/Icons/CreditCard";
import Cube from "examples/Icons/Cube";

const routes = [{
        type: "collapse",
        name: "Dashboard",
        key: "dashboard",
        route: "/dashboard",
        icon: < Shop size = "12px" / > ,
        component: < Dashboard / > ,
        noCollapse: true,
    },

    {
        type: "collapse",
        name: "Landing",
        key: "landing",
        route: "/landing",
        icon: < Shop size = "12px" / > ,
        component: < Landing / > ,
        noCollapse: true,
    },

    {
        type: "collapse",
        name: "Tables",
        key: "tables",
        route: "/tables",
        icon: < Office size = "12px" / > ,
        component: < Tables / > ,
        noCollapse: true,
    },
    {
        type: "collapse",
        name: "Billing",
        key: "billing",
        route: "/billing",
        icon: < CreditCard size = "12px" / > ,
        component: < Billing / > ,
        noCollapse: true,
    },
    {
        type: "collapse",
        name: "Virtual Reality",
        key: "virtual-reality",
        route: "/virtual-reality",
        icon: < Cube size = "12px" / > ,
        component: < VirtualReality / > ,
        noCollapse: true,
    },
    {
        type: "collapse",
        name: "RTL",
        key: "rtl",
        route: "/rtl",
        icon: < Settings size = "12px" / > ,
        component: < RTL / > ,
        noCollapse: true,
    },
    { type: "title", title: "Account Pages", key: "account-pages" },
    {
        type: "collapse",
        name: "Profile",
        key: "profile",
        route: "/profile",
        icon: < CustomerSupport size = "12px" / > ,
        component: < Profile / > ,
        noCollapse: true,
    },
    {/* {
        type: "collapse",
        name: "Sign In",
        key: "sign-in",
        route: "/authentication/sign-in",
        icon: < Document size = "12px" / > ,
        component: < SignIn / > ,
        noCollapse: true,
    }, */},
    {
        type: "collapse",
        name: "Log In",
        key: "log-in",
        route: "/authentication/log-in",
        icon: < SpaceShip size = "12px" / > ,
        component: < SignUp / > ,
        noCollapse: true,
    },
    {
        type: "collapse",
        name: "Selection",
        key: "selection",
        route: "/authentication/Selection",
        icon: < SpaceShip size = "12px" / > ,
        component: < Selection / > ,
        noCollapse: true,
    },
    {
        type: "collapse",
        name: "Investor_form",
        key: "investor_form",
        route: "/registers_forms/investor_form",
        icon: < Document size = "12px" / > ,
        component: < Investor_form / > ,
        noCollapse: true,
    },
    {
        type: "collapse",
        name: "Startups_form ",
        key: "startups_form ",
        route: "/registers_forms/startups_form",
        icon: < SpaceShip size = "12px" / > ,
        component: < Startups_form / > ,
        noCollapse: true,
    },
    {
        type: "collapse",
        name: "startup ",
        key: "startup",
        route: "/startup",
        icon: < SpaceShip size = "12px" / > ,
        component: < Startup / > ,
        noCollapse: true,
    },
    {
        type: "collapse",
        name: "Startup Home",
        key: "StartUpHome",
        route: "/startup/StartUpHome",
        icon: < Document size = "12px" / > ,
        component: < StartUpHome / > ,
        noCollapse: true,
    },

    {
        type: "collapse",
        name: "Profile",
        key: "StartUpProfile",
        route: "/startup/StartUpProfile",
        icon: < CustomerSupport size = "12px" / > ,
        component: < StartUpProfile / > ,
        noCollapse: true,
    },

    {
        type: "collapse",
        name: "Startup Deals",
        key: "StartUpDeals",
        route: "/startup/StartUpDeals",
        icon: < Shop size = "12px" / > ,
        component: < StartUpDeals / > ,
        noCollapse: true,
    },



    {
        type: "collapse",
        name: "investor ",
        key: "investor",
        route: "/investor",
        icon: < Shop size = "12px" / > ,
        component: < Investor / > ,
        noCollapse: true,
    },
    {
        type: "collapse",
        name: "Your Syndicates",
        key: "YourSyndicates",
        route: "/investor/yourSyndicates",
        icon: < Shop size = "12px" / > ,
        component: < YourSyndicate / > ,
        noCollapse: true,
    },
    {
        type: "collapse",
        name: "Your Deals",
        key: "YourDeals",
        route: "/investor/YourDeals",
        icon: < Document size = "12px" / > ,
        component: < YourDeals / > ,
        noCollapse: true,
    },
    {
        type: "collapse",
        name: "Explore Syndicate",
        key: "ExploreSyndicate",
        route: "/investor/ExploreSyndicate",
        icon: < SpaceShip size = "12px" / > ,
        component: < ExploreSyndicate / > ,
        noCollapse: true,
    },
    {
        type: "collapse",
        name: "Investor Profile",
        key: "InvestorProfile",
        route: "/investor/profile",
        icon: < CustomerSupport size = "12px" / > ,
        component: < InvestorProfile / > ,
        noCollapse: true,
    },
];

export default routes;