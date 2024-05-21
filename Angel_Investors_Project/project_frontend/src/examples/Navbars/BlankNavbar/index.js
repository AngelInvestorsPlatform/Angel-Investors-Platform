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

import { useState, useEffect } from "react";

// react-router components
// import { Link } from "react-router-dom";
import { HashLink as Link } from 'react-router-hash-link';

//for API
import axios from "axios";

//for user auth global context
import { useAuthUser } from "context/authContext";

// prop-types is a library for typechecking of props.
import PropTypes from "prop-types";

// @mui material components
import Container from "@mui/material/Container";
import Icon from "@mui/material/Icon";

// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SoftButton from "components/SoftButton";

// Soft UI Dashboard React examples
import BlankNavbarLink from "examples/Navbars/BlankNavbar/BlankNavbarLink";
import BlankNavbarMobile from "examples/Navbars/BlankNavbar/BlankNavbarMobile";
import DefaultNavbarLink from "examples/Navbars/DefaultNavbar/DefaultNavbarLink";


// Soft UI Dashboard React base styles
import breakpoints from "assets/theme/base/breakpoints";
import logoName from "assets/images/logo-name.svg";

function BlankNavbar({ transparent, light, action }) {
  const [mobileNavbar, setMobileNavbar] = useState(false);
  const [mobileView, setMobileView] = useState(false);

  const openMobileNavbar = ({ currentTarget }) => setMobileNavbar(currentTarget.parentNode);
  const closeMobileNavbar = () => setMobileNavbar(false);

  const { userData, setUserData, isLoggedIn, setIsLoggedIn } = useAuthUser();
  const [logError, setLogError] = useState("");
  const [logConfirm, setLogConfirm] = useState("");

  useEffect(() => {
    // A function that sets the display state for the BlankNavbarMobile.
    function displayMobileNavbar() {
      if (window.innerWidth < breakpoints.values.lg) {
        setMobileView(true);
        setMobileNavbar(false);
      } else {
        setMobileView(false);
        setMobileNavbar(false);
      }
    }

    /** 
     The event listener that's calling the displayMobileNavbar function when 
     resizing the window.
    */
    window.addEventListener("resize", displayMobileNavbar);

    // Call the displayMobileNavbar function to set the state with the initial value.
    displayMobileNavbar();

    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", displayMobileNavbar);
  }, []);

  const handleLogout = async () => {
    try {
      const logoutResponse = await axios.post(`${process.env.REACT_APP_DJANGO_API}auth/logout`, {});

      if (logoutResponse.status === 200) {
        setLogConfirm("successfully logged Out");

        setUserData(null); // Clear user data
        setIsLoggedIn(false); // Set login status to false
        
      } else setLogError("Error : not logged out");
    } catch (errorX) {
      // Handle error, display appropriate message
      setLogError(" Logout Failed: " + errorX.message);
    }
  };

  return (
    <Container>
      <SoftBox
        py={1.5}
        px={{ xs: transparent ? 4 : 5, sm: transparent ? 2 : 5, lg: transparent ? 0 : 5 }}
        my={2}
        mx={3}
        width="calc(100% - 48px)"
        borderRadius="section"
        shadow={transparent ? "none" : "md"}
        color={light ? "white" : "dark"}
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        position="absolute"
        left={0}
        zIndex={3}
        sx={({ palette: { transparent: transparentColor, white }, functions: { rgba } }) => ({
          backgroundColor: transparent ? transparentColor.main : rgba(white.main, 0.8),
          backdropFilter: transparent ? "none" : `saturate(200%) blur(30px)`,
        })}
      >
        <SoftBox component={Link} to="/" py={transparent ? 1.5 : 0.75} lineHeight={1}  display="flex" flexWrap="wrap">
          <SoftBox justifyContent="center" component="img" src={logoName} alt="warQ" width="20%" />
          <SoftBox mt={.5}>
            <SoftTypography
              variant="Body 1"
              fontWeight="light"
              fontSize="small"
              style={{ marginLeft: "15px" }}
              sx={{
                color: ({ palette: { white, secondary } }) => (light ? white.main : secondary.main),
                verticalAlign: "middle",
              }}
            >
              Angel Investors platform
            </SoftTypography>
          </SoftBox>
        </SoftBox>

        {isLoggedIn ? (
          <>
            <SoftBox color="inherit" display={{ xs: "none", lg: "flex" }} m={0} p={0}>

            </SoftBox>
            <SoftBox display={{ xs: "none", lg: "inline-block" }}>
              <SoftTypography color={light} variant="button" fontWeight="regular" m={3}>
                Welcome, {userData.first_name}!
              </SoftTypography>
            </SoftBox>
          </>
        ) : (
          <SoftBox color="inherit" display={{ xs: "none", lg: "flex" }} m={0} p={0}>
          <DefaultNavbarLink
            icon="key"
            name="log in"
            route="/authentication/log-in"
            light={light}
          />          
          </SoftBox>
        )}

  
{/*         <SoftBox
          display={{ xs: "inline-block", lg: "none" }}
          lineHeight={0}
          py={1.5}
          pl={1.5}
          color="inherit"
          sx={{ cursor: "pointer" }}
          onClick={openMobileNavbar}
        >
          <Icon fontSize="Default">{mobileNavbar ? "close" : "menu"}</Icon>
        </SoftBox> */}
      </SoftBox>
    </Container>
  );
}

// Setting default values for the props of BlankNavbar
BlankNavbar.defaultProps = {
  transparent: false,
  light: false,
  action: false,
};

// Typechecking props for the BlankNavbar
BlankNavbar.propTypes = {
  transparent: PropTypes.bool,
  light: PropTypes.bool,
  action: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.shape({
      type: PropTypes.oneOf(["external", "internal"]).isRequired,
      route: PropTypes.string.isRequired,
      color: PropTypes.oneOf([
        "primary",
        "secondary",
        "info",
        "success",
        "warning",
        "error",
        "dark",
        "light",
      ]),
      label: PropTypes.string.isRequired,
    }),
  ]),
};

export default BlankNavbar;
