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
import { Link } from "react-router-dom";
import { Navigate } from "react-router-dom";

//for API
import axios from "axios";


//for user auth global context
import { useAuthUser } from "context/authContext";

// @mui material components
import Switch from "@mui/material/Switch";

// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SoftInput from "components/SoftInput";
import SoftButton from "components/SoftButton";
import SoftAlert from "components/SoftAlert";

// Authentication layout components
import CoverLayout from "layouts/authentication/components/CoverLayout";

// Images
import curved9 from "assets/images/curved-images/white-curved.jpeg";

function SignIn() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(true);
  const [loginError, setLogError] = useState("");
  const [loginConfirm, setLogConfirm] = useState("");
  const [RedirectToDashboard, setRedirectToDashboard] = useState(false);
  const { userData, setUserData, isLoggedIn, setIsLoggedIn } = useAuthUser();

  const handleSetRememberMe = () => setRememberMe(!rememberMe);

  if (RedirectToDashboard) {
    return <Navigate to="/authentication/Dashboard" />;
    //It needs to be modified according to the role type of the user
  }

  const handleSignIn = async () => {
    try {
      const loginResponse = await axios.post(`${process.env.REACT_APP_DJANGO_API}auth/login`, {
        username,
        email,
        password,
      });

      if (loginResponse.status === 200) {
        setLogConfirm("successfully login");

        setUserData({ email, username });
        setIsLoggedIn(true);

        // Redirect to dashboard
        setRedirectToDashboard(true);

      } else {
        // Handle other response statuses or errors
        let errorMessage = "Login failed. Please try again later.";

        // Check if the response contains detailed error messages
        if (loginResponse.data && loginResponse.data.username) {
          // Extract the first error message for username field
          errorMessage = loginResponse.data.username[0];
        }
        setLogError(errorMessage);
      }
    } catch (errorX) {
      // Handle error, display appropriate message
      setLogError(" Sign In Failed: " + errorX.message);
    }
  };
  if (!isLoggedIn) {
    return (
      <CoverLayout
        title="Welcome back"
        description="Enter your email and password to sign in"
        image={curved9}
      >
        {/*if login Success*/}
        {loginConfirm && (
          <SoftAlert fontSize="small" color="success" mt={2} dismissible>
            {loginConfirm}
          </SoftAlert>
        )}

        {/*if login Fail*/}
        {loginError && (
          <SoftAlert fontSize="small" color="error" mt={2} dismissible>
            {loginError}
          </SoftAlert>
        )}
        <SoftBox component="form" role="form">
          <SoftBox mb={2}>
            <SoftBox mb={1} ml={0.5}>
              <SoftTypography component="label" variant="caption" fontWeight="bold">
                Username
              </SoftTypography>
            </SoftBox>
            <SoftInput
              type="text"
              placeholder="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </SoftBox>
          <SoftBox mb={2}>
            <SoftBox mb={1} ml={0.5}>
              <SoftTypography component="label" variant="caption" fontWeight="bold">
                Email
              </SoftTypography>
            </SoftBox>
            <SoftInput
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </SoftBox>
          <SoftBox mb={2}>
            <SoftBox mb={1} ml={0.5}>
              <SoftTypography component="label" variant="caption" fontWeight="bold">
                Password
              </SoftTypography>
            </SoftBox>
            <SoftInput
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </SoftBox>
          <SoftBox display="flex" alignItems="center">
            <Switch checked={rememberMe} onChange={handleSetRememberMe} />
            <SoftTypography
              variant="button"
              fontWeight="regular"
              onClick={handleSetRememberMe}
              sx={{ cursor: "pointer", userSelect: "none" }}
            >
              &nbsp;&nbsp;Remember me
            </SoftTypography>
          </SoftBox>
          <SoftBox mt={4} mb={1}>
            <SoftButton variant="gradient" color="info" fullWidth onClick={handleSignIn}>
              sign in
            </SoftButton>
          </SoftBox>
          <SoftBox mt={3} textAlign="center">
            <SoftTypography variant="button" color="text" fontWeight="regular">
              Don&apos;t have an account?{" "}
              <SoftTypography
                component={Link}
                to="/authentication/sign-up"
                variant="button"
                color="info"
                fontWeight="medium"
                textGradient
              >
                Sign up
              </SoftTypography>
            </SoftTypography>
          </SoftBox>
        </SoftBox>
      </CoverLayout>
    );
  } //end if
  else {
    return <Navigate to="landing" />;
  }
}

export default SignIn;
