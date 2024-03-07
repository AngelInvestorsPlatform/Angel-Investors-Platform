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
import { Navigate } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";

//axios package for linking with API URLS
import axios from "axios";

//for user auth global context
import { useAuthUser } from "context/authContext";

import PropTypes from "prop-types";

// @mui material components
import Card from "@mui/material/Card";
import Checkbox from "@mui/material/Checkbox";

// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SoftInput from "components/SoftInput";
import SoftButton from "components/SoftButton";
import SoftAlert from "components/SoftAlert";

// Authentication layout components
import BasicLayout from "layouts/authentication/components/BasicLayout";
import Socials from "layouts/authentication/components/Socials";
import Separator from "layouts/authentication/components/Separator";

// Images
import curved6 from "assets/images/curved-images/curved-city.png";

function LogIn() {
  //form Data variables
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  //error handling variables
  const [error, setError] = useState("");
  const [registerError, setRegError] = useState("");
  const [registerConfirm, setRegConfirm] = useState("");

  // auth variables saving
  const { userData, setUserData, role, setrole, isLoggedIn, setIsLoggedIn } = useAuthUser();

  //redirect variable
  const [RedirectToUserPage, setRedirectToUserPage] = useState(false);

  if (RedirectToUserPage) {
    if (role == "startup") {
      return <Navigate to="/startup" />;
    } else if (role == "investor") {
      return <Navigate to="/investor" />;
    }
  }

  //The following codes to handle input validity using JavaScript
  //Set the email and user name to be the same value
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  //on submit
  const handleLogIn = async () => {
    try {
      const DJANGO_API = process.env.REACT_APP_DJANGO_API;

      // Verify if email is correct
      if (!validateEmail(email)) {
        setError("Please enter a valid email address.");
        return;
      }
      // After registration, login with the same credentials

      const loginResponse = await axios.post(`${DJANGO_API}auth/login`, {
        username: username, // Sending username same as email
        password: password,
      });

      if (loginResponse.status === 200) {
        // If login is successful, extract user data from response body
        const { token, first_name, email, role } = loginResponse.data;
        // Set user data and login status
        setUserData({ email, first_name, role, token });
        setrole(role);
        setIsLoggedIn(true);

        // Redirect to Select
        setRedirectToUserPage(true);
      } else {
        setRegError("Login failed: ", loginResponse);
      }
    } catch (error) {
      // Handle network or other errors
      setRegError("Error occurred while logging in: ", error.message);
    }
  };

  const validateEmail = (email) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  const validatePassword = (password) => {
    const re = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    return re.test(password);
  };

  return (
    <BasicLayout
      title="Welcome back"
      description="Enter your email and password to log in"
      image={curved6}
    >
      {/*if register Success*/}
      {registerConfirm && (
        <SoftAlert fontSize="small" color="success" mt={2} dismissible>
          {registerConfirm}
        </SoftAlert>
      )}

      {/*if register Fail*/}
      {registerError && (
        <SoftAlert fontSize="small" color="error" mt={2} dismissible>
          {registerError}
        </SoftAlert>
      )}
      <Card>
        {/*         <SoftBox mb={2}>
          <Socials />
        </SoftBox>
        <Separator /> */}
        <SoftBox pt={2} pb={3} px={3}>
          <SoftBox component="form" role="form">
            {/*<SoftBox mb={2}>
               <SoftInput
                type="text"
                placeholder="Username"
                name ="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </SoftBox> */}
            <SoftBox mb={2}>
              <SoftInput
                type="email"
                placeholder="Email"
                name="email"
                value={email}
                onChange={handleEmailChange}
                success={email && validateEmail(email)}
                error={email && !validateEmail(email)}
              />
            </SoftBox>

            <SoftBox mb={2}>
              <SoftInput
                type="password"
                placeholder="Password"
                name="password"
                value={password}
                onChange={handlePasswordChange}
                required
              />
            </SoftBox>

            {/*<SoftBox mb={2} display="flex" alignItems="center">
              <SoftTypography
                variant="button"
                fontWeight="regular"
                onClick={googleUrl}
                sx={{ cursor: "poiner", userSelect: "none" }}
              >
                &nbsp;&nbsp;You can also sign in with&nbsp;
              </SoftTypography>
              <SoftTypography
                component="a"
                href="googleUrl"
                variant="button"
                fontWeight="bold"
                textGradient
              >
                Google
              </SoftTypography>
            </SoftBox> */}

            {/*             <SoftBox display="flex" alignItems="center">
              <Checkbox checked={agreement} onChange={handleAgreementChange} />
              <SoftTypography
                variant="button"
                fontWeight="regular"
                onClick={handleAgreementChange}
                sx={{ cursor: "pointer", userSelect: "none" }}
              >
                &nbsp;&nbsp;I agree on the&nbsp;
              </SoftTypography>
              <SoftTypography
                component="a"
                href="#"
                variant="button"
                fontWeight="bold"
                textGradient
              >
                Terms and Conditions
              </SoftTypography>
            </SoftBox> */}

            {/*error text*/}
            {error && (
              <SoftTypography fontSize="small" color="error" mt={2} dismissible>
                {error}
              </SoftTypography>
            )}

            <SoftBox mt={4} mb={1}>
              <SoftButton variant="gradient" color="info" fullWidth onClick={handleLogIn}>
                Login
              </SoftButton>
            </SoftBox>

            <SoftBox mt={3} textAlign="center">
              <SoftTypography variant="button" color="text" fontWeight="regular">
                Don not have an account ?&nbsp;
                <SoftTypography
                  component={Link}
                  to="/landing#getStarted"
                  variant="button"
                  color="dark"
                  fontWeight="bold"
                  textGradient
                >
                  Sign Up
                </SoftTypography>
              </SoftTypography>
            </SoftBox>
          </SoftBox>
        </SoftBox>
      </Card>
    </BasicLayout>
  );
}

export default LogIn;
