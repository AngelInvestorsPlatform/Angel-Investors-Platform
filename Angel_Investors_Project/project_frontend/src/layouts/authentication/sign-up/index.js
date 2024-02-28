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
import { Navigate  } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';

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
import curved6 from "assets/images/curved-images/curved14.jpg";

function SignUp() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [agreement, setAgreement] = useState(false);
  const [error, setError] = useState("");
  const [registerError, setRegError] = useState("");
  const [registerConfirm, setRegConfirm] = useState("");
  const [redirectToSelect, setRedirectToSelect] = useState(false);
  const { userData, setUserData, isLoggedIn, setIsLoggedIn } = useAuthUser();

  if (redirectToSelect) {
    return <Navigate to="/investor" />;
  }

  //The following codes to handle input validity using JavaScript
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handlePasswordConfirmationChange = (event) => {
    setPasswordConfirmation(event.target.value);
  };

  const handleAgreementChange = () => {
    setAgreement(!agreement);
  };

  //on submit
  const handleSignUp = async () => {
    try {
      const DJANGO_API = process.env.REACT_APP_DJANGO_API;
  
      // Verify if email is correct
      if (!validateEmail(email)) {
        setError("Please enter a valid email address.");
        return;
      }
  
      // Verify if password meets requirements
      if (!validatePassword(password)) {
        setError(
          "Password must contain at least 8 characters, including uppercase, lowercase, and numbers."
        );
        return;
      }
  
      // Verify if password confirmation matches password
      if (password !== passwordConfirmation) {
        setError("Passwords do not match.");
        return;
      }
  
      // Verify if terms agreement is checked
      if (!agreement) {
        setError("Must agree to the terms and conditions to start.");
        return;
      }
  
      // If all conditions are met, proceed with registration
      const response = await axios.post(`${DJANGO_API}auth/register`, {
        email: email,
        username: username, // Setting username same as email
        password: password,
      });
  
      // If registration is successful, set user status to true
      if (response.status === 201) {
        setRegConfirm("successfully registered");
  
        // After registration, login with the same credentials
        const loginResponse = await axios.post(`${DJANGO_API}auth/login`, {
          email: email,
          username: username, // Setting username same as email
          password: password,
        });
  
        if (loginResponse.status === 200) {
          // If login is successful, set user data and LoggedIn
          setUserData({ email, username });
          setIsLoggedIn(true);
  
          // Redirect to Select
          setRedirectToSelect(true);
        } else {
          let errorMessage = "Login failed. Please try again later.";
  
          // Check if the response contains detailed error messages
          if (loginResponse.data && loginResponse.data.username) {
            // Extract the first error message for username field
            errorMessage = loginResponse.data.username[0];
          }
  
          setRegError(errorMessage);
        }
      } else {
        let errorMessage = "Registration failed. Please try again later.";
  
        // Check if the response contains detailed error messages
        if (response.data && response.data.username) {
          // Extract the first error message for username field
          errorMessage = response.data.username[0];
        }
  
        setRegError(errorMessage);
      }
    } catch (errorX) {
      setRegError("Failed: " + errorX.message);
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
      description="Enter your email and password to sign in"
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
        <SoftBox p={3} mb={1} mt={1} textAlign="center">
          <SoftTypography variant="h5" fontWeight="medium">
          Sign In
          </SoftTypography>
        </SoftBox>
        {/*         <SoftBox mb={2}>
          <Socials />
        </SoftBox>
        <Separator /> */}
        <SoftBox pt={2} pb={3} px={3}>
          <SoftBox component="form" role="form">
            <SoftBox mb={2}>
              <SoftInput
                type="text"
                placeholder="Username"
                name ="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </SoftBox>
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
                success={password && validatePassword(password)}
                error={password && !validatePassword(password)}
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

            <SoftBox display="flex" alignItems="center">
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
            </SoftBox>

            {/*error text*/}
            {error && (
              <SoftTypography fontSize="small" color="error" mt={2} dismissible>
                {error}
              </SoftTypography>
            )}

            <SoftBox mt={4} mb={1}>
              <SoftButton variant="gradient" color="info" fullWidth onClick={handleSignUp}>
                sign In
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

export default SignUp;
