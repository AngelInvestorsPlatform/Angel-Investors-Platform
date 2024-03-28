import { useState } from "react";
import React from "react";

//for API
import axios from "axios";

// react-router-dom components
import { Link } from "react-router-dom";
import { Navigate } from "react-router-dom";

// @mui material components
import Switch from "@mui/material/Switch";

//for user auth global context
import { useAuthUser } from "context/authContext";

import PropTypes from "prop-types";

// @mui material components
import Card from "@mui/material/Card";
import Checkbox from "@mui/material/Checkbox";
import Tooltip from "@mui/material/Tooltip";
import Icon from "@mui/material/Icon";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SoftInput from "components/SoftInput";
import SoftButton from "components/SoftButton";
import SoftAlert from "components/SoftAlert";

// layout components
import CoverLayout from "layouts/LeadInvestor/components/CoverLayout";

// Authentication layout components
import BasicLayout from "layouts/authentication/components/BasicLayout";
import Socials from "layouts/authentication/components/Socials";
import Separator from "layouts/registers_forms/components/Separator";

// Images
import syndicate from "assets/images/backgraund-images/investor-backgraund2.svg";
import { Info } from "@mui/icons-material";
import { dark } from "@mui/material/styles/createPalette";

const selectStyles = {
  width: "100%",
  padding: "0.75rem",
  fontSize: "1rem",
  backgroundColor: "#ffff",
  borderColor: "#e9ecef",
  color: "#888",
  border: "0.2",
  borderRadius: "8px",
  transition: "border-color 0.2s",
};

const handleFocus = (e) => {
  // Change border color when focused
  e.target.style.border = "2px solid #17c1e8";
};

const handleBlur = (e) => {
  // Reset border color when blurred
  e.target.style.border = "0.2px solid #e9ecef";
};
const required = { color: "red" };

function syndicate_form() {
  //form Data variables
  const [syndicate_name, setSyndicateName] = useState("");
  const [leadsyndicate_name, setLeadSyndicateName] = useState("");
  const [syndicate_about, setSyndicateAbout] = useState("");


  //error handling variables

  const [error, setError] = useState("");
  const [registerError, setRegError] = useState("");
  const [registerConfirm, setRegConfirm] = useState("");
  const [formMessage, setFormMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  //redirect variable
  const [redirect, setRedirect] = useState(false);

  // auth variables saving
  const { userData, setUserData, isLoggedIn, setIsLoggedIn, role, setrole } = useAuthUser();

  if (redirect) {
    //Redirect To Dashboard
    return <Navigate to="/LeadInvestor" />;
  }

  //The following codes to handle input validity using JavaScript
 
  const handleSyndicateNameChange = (e) => setSyndicateName(e.target.value);
  const handleLeadSyndicateNameChange = (e) => setLeadSyndicateName(e.target.value);
  const handleSyndicateAboutChange = (e) => setSyndicateAbout(e.target.value);

  // const [RedirectToUserI, setRedirectToUserI] = useState(false);
  const [RedirectToUserS, setRedirectToUserS] = useState(false);

  if (RedirectToUserS) {
    return <Navigate to="/authenticatio/log-in" />;
  }

  //on submit
  const handleSubmit = async () => {
    try {
      const DJANGO_API = process.env.REACT_APP_DJANGO_API;
      // setrole("startup");

      // Validate if all required fields are filled out
      /* if (
        !email ||
        !password ||
        !passwordConfirmation ||
        !startup_name ||
        !startup_sector ||
        !startup_stage ||
        !startup_team ||
        !startup_country
      ) {
        setError("fields are required.");
        return;
      } */

      // Verify if email is correct
     /*  if (!validateEmail(email)) {
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
      } */

      setError("");
      // If all conditions are met, proceed with registration
      const response1 = await axios.post(`${DJANGO_API}auth/register`, {
        email,
        password,
        first_name,
        role,
      });

      // If registration is successful, set user status to true
      if (response1.status === 201 || response1.status === 200) {
        const Response2 = await axios.post(`${process.env.REACT_APP_DJANGO_API}form/Startup/`, {
          /* startup_name,
          startup_phone,
          startup_sector,
          startup_stage,
          startup_team,
          startup_country,
          startup_city,
          startup_web, */
        });
        if (Response2.status === 200 || Response2.status === 201) {
          setRegConfirm("successfully registered, Please Login to your account");
          const { data } = Response2;
          setFormMessage(data);
          //setRedirectToUserS(true);

          window.scrollTo({ top: 0, behavior: "smooth" });
        } else {
          let errorMessageY = "Registration failed. Please try again later.";
          setErrorMessage(errorMessageY);
        }
        // Check if the response contains detailed error messages
      } else {
        // Extract the first error message for username field
        //400 58
        if (response1) {
          // Extract the first error message for username field
          let errorMessageX = response1;
          setErrorMessage(errorMessageX);
        }
      }
    } catch (errorX) {
      setRegError("Failed: " + errorX.message + "\n" + errorMessage);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <CoverLayout
      title="Create Your Syndicate"
      description="Become a Lead Investor!"
      image={syndicate}
    >

      <SoftBox
        component="form"
        role="form"
        width="400"
        display="flex"
        flex="row"
        flexWrap="wrap"
        justifyContent="space-between"
      >
        {/* First Column */}
        <SoftBox flex="0 0 48%" mb={3}>
          <SoftBox mb={2}>
            <SoftTypography component="label" variant="caption" fontWeight="bold"  fontSize="16px">
              Syndicate name
            </SoftTypography>
            <SoftInput
              type="text"
              //placeholder=""
              name="text"
              value={syndicate_name}
              onChange={handleSyndicateNameChange}
              //success={email && validateEmail(email)}
              //error={email && !validateEmail(email)}
            />
          </SoftBox>
           <SoftBox mb={2}>
            <SoftTypography component="label" variant="caption" fontWeight="bold" fontSize="16px">
            Sector of the syndicate
            </SoftTypography>
            <SoftInput
              type="text"
              //placeholder=""
              //value={startup_team}
              //onChange={handleTeamSizeChange}
            />
          </SoftBox> 
        </SoftBox>

        {/* Second Column */}
        <SoftBox flex="0 0 48%" mb={3}>
          <SoftBox mb={2}>
            <SoftTypography component="label" variant="caption" fontWeight="bold" fontSize="16px">
              Syndicate lead name
            </SoftTypography>
            <SoftInput
              type="email"
              //placeholder="Full legel name"
              value={leadsyndicate_name}
              onChange={handleLeadSyndicateNameChange}
            />
          </SoftBox>
         {/*  <SoftBox mb={2}>
            <SoftTypography component="label" variant="caption" fontWeight="bold" fontSize="16px">
              Add members by invite them through email
            </SoftTypography>
            <SoftInput
              type="text"
              placeholder="Ali.ahmad@gmail.com"
              //value={startup_phone}
              //onChange={handlePhoneChange}
            />
          </SoftBox> */}
        </SoftBox>
      </SoftBox>

      <SoftBox mb={3} flex="0 0 50%">
        
        <SoftTypography component="label" variant="caption" fontWeight="bold" fontSize="20px">
          Description about the Syndicate
        </SoftTypography>  
        <SoftBox mb={3}>     
          <SoftInput
            type="text"
            placeholder="Type here Syndicate Interests, goals, focused sector, startups stage, etc.."
            value={handleSyndicateAboutChange}
            onChange={syndicate_about}
            //required
            multiline rows={15}
          />
        </SoftBox>
      </SoftBox>
      

      {error && (
        <SoftTypography component="label" variant="caption" fontWeight="regular" color="error">
          * {error}
        </SoftTypography>
      )}

      <SoftBox mt={4} mb={1}>
        <SoftButton
          variant="gradient"
          color="info"
          circular
          fullWidth
         // onClick={handleSubmit}
         href="/LeadInvestor"
        >
          Submit
        </SoftButton>
      </SoftBox>
    </CoverLayout>
  );
}
export default syndicate_form;
