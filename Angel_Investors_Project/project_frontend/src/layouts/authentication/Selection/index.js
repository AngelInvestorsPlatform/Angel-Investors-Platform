import * as React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Navigate } from "react-router-dom";

//for API
import axios from "axios";

//for user auth global context
import { useAuthUser } from "context/authContext";

import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
// import CardActions from '@mui/material/CardActions';
import CardContent from "@mui/material/CardContent";
// import CardCover from '@mui/material/CardCover';
import SoftButton from "components/SoftButton";

import Icon from "@mui/material/Icon";
// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";

import SelectionLayout from "../components/SelectionLayout";
import SoftAlert from "components/SoftAlert";

function choose() {
  const { role, setrole, sessionId, csrfToken } = useAuthUser();
  const [logError, setLogError] = useState("");
  const [errorM, setError] = useState("");
  const [logConfirm, setLogConfirm] = useState("");
  const [RedirectToUserForm, setRedirectToUserForm] = useState(false);
  const [RedirectToUserIForm, setRedirectToUserIForm] = useState(false);
  const [RedirectToUserSForm, setRedirectToUserSForm] = useState(false);

  const [agreement, setAgremment] = useState(true);

  const handleSetAgremment = () => setAgremment(!agreement);

  if (RedirectToUserIForm) {
    return <Navigate to="/registers_forms/startups_form" />;
  }

  if (RedirectToUserSForm) {
    return <Navigate to="/registers_forms/investor_form" />;
  }

  const handleStartup = async () => {
    setrole("startup");
    setLogConfirm("The user role has been added successfully login");
    setRedirectToUserIForm(true);

    return <Navigate to="/registers_forms/startups_form" />;
  };
  const handleInvestor = async () => {
    setrole("investor");
    setLogConfirm("The user role has been added successfully login");
    setRedirectToUserSForm(true);
  };

  return (
    <SelectionLayout
      title=" Are you new to the platform? "
      description="Lets work together to help you get the most out of your experience.!"
      alertBox={
        <SoftBox>
          {/*if Success*/}
          {logConfirm && (
            <SoftAlert fontSize="small" color="success" mt={2} dismissible>
              {logConfirm}
            </SoftAlert>
          )}

          {/*if Fail*/}
          {logError && (
            <SoftAlert fontSize="small" color="error" mt={2} dismissible>
              {logError}
            </SoftAlert>
          )}
        </SoftBox>
      }
    >
      <Box component="ul" sx={{ display: "flex", flexDirection: "row", gap: 2, p: 0, m: 0 }}>
        <Card
          component="li"
          sx={{ width: "50%", flexGrow: 1 }}
          style={{ backgroundColor: "#633974" }}
        >
          <SoftBox mb={2}> </SoftBox>{" "}
          <CardContent>
            <SoftBox mb={2} ml={0.5}>
              <SoftTypography variant="h3" component="div" color="white">
                Start as Startup{" "}
              </SoftTypography>{" "}
            </SoftBox>{" "}
            <SoftTypography variant="body2" sx={{ fontSize: 20 }} color="white">
              Log in now to discover exclusive opportunities, connect with investors, and take your
              startup journey to the next level.
            </SoftTypography>
            <SoftBox mb={6}></SoftBox>
            <SoftTypography level="body-lg" fontWeight="lg" color="info">
              <SoftButton
                //  variant = "gradient"
                color="white"
                style={{ width: "50%" }}
                circular
                onClick={handleStartup}
              >
                {" "}
                {/* here put start up form */}
                Get Started
                <Icon sx={{ fontWeight: "bold" }}> arrow_forward </Icon>
              </SoftButton>
            </SoftTypography>{" "}
          </CardContent>{" "}
        </Card>{" "}
        <Card component="li" sx={{ width: "50%", flexGrow: 1 }}>
          <SoftBox mb={2}> </SoftBox>{" "}
          <CardContent>
            <SoftBox mb={2} ml={0.5}>
              <SoftTypography variant="h3" component="div" color="info" textGradient>
                Start as Investor{" "}
              </SoftTypography>{" "}
            </SoftBox>{" "}
            <SoftTypography variant="body2" sx={{ fontSize: 20 }} color="text.secondary">
              Join our club, meet other investors and start looking for exciting startups to invest
              in
            </SoftTypography>
            <SoftBox mb={10}></SoftBox>
            <SoftButton
              variant="gradient"
              color="info"
              style={{ width: "50%" }}
              circular
              onClick={handleInvestor}
            >
              {" "}
              {/* here put link path to investor form */}
              Get Started <Icon sx={{ fontWeight: "bold" }}> arrow_forward </Icon>{" "}
            </SoftButton>
          </CardContent>{" "}
        </Card>{" "}
      </Box>{" "}
      <SoftBox mb={20}></SoftBox>{" "}
    </SelectionLayout>
  );
}
export default choose;
