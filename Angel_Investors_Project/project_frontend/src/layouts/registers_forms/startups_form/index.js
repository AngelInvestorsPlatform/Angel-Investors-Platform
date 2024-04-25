import React, { useState, useEffect } from "react";

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

// registers_forms layout components
import CoverLayout from "layouts/registers_forms/components/CoverLayout";
import FixedTags from "layouts/registers_forms/components/FixedTags";

// Authentication layout components
import BasicLayout from "layouts/authentication/components/BasicLayout";
import Socials from "layouts/authentication/components/Socials";
import Separator from "layouts/registers_forms/components/Separator";

// Images
import startup from "assets/images/backgraund-images/startup-backgraund2.svg";

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

function startupform() {
  //form Data variables
  const [email, setEmail] = useState("");
  const [first_name, setfirst_name] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [startup_name, setStartupName] = useState("");
  const [sector, setStartupSector] = useState("");
  const [stage, setStartupStage] = useState("");
  const [phone, setPhone] = useState("");
  const [team_size, setTeamSize] = useState("");
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [website, setWebsite] = useState("");
  const [photo, setphoto] = useState("");
  const [about, setabout] = useState("");
  const [full_name, setfull_name] = useState("");
  const [job_position, setjob_position] = useState("");

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
    return <Navigate to="/startup" />;
  }

  //The following codes to handle input validity using JavaScript
  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);
  const handlePasswordConfirmationChange = (e) => setPasswordConfirmation(e.target.value);

  const handleStartupNameChange = (e) =>
    setStartupName(e.target.value) || setfirst_name(e.target.value);
  const handleStartupSectorChange = (e) => setStartupSector(e.target.value);
  const handleStartupStageChange = (e) => setStartupStage(e.target.value);
  const handlePhoneChange = (e) => setPhone(e.target.value);
  const handleTeamSizeChange = (e) => setTeamSize(e.target.value);
  const handleCountryChange = (e) => setCountry(e.target.value);
  const handleCityChange = (e) => setCity(e.target.value);
  const handleWebsiteChange = (e) => setWebsite(e.target.value);
  const handlephotoChange = (e) => setphoto(e.target.value);
  const handleaboutChange = (e) => setabout(e.target.value);
  const handlefull_nameChange = (e) => setfull_name(e.target.value);
  const handlejob_positionChange = (e) => setjob_position(e.target.value);

  const [RedirectToUserS, setRedirectToUserS] = useState(false);

  /* if (RedirectToUserS) {
    return <Navigate to="/authenticatio/log-in" />;
  }
  
  if (RedirectToUserS) {
    //Redirect To Dashboard
    return <Navigate to="/startup" />;
  } */

  const [selectedValue, setSelectedValue] = useState([]); // State to hold the selected value

  useEffect(() => {
    convertToText();
  }, [selectedValue]);

  // Callback function to handle the selected value
  const handleSelectedValue = (value) => {
    setSelectedValue(value);
  };

  const convertToText = async () => {
    setStartupSector(selectedValue.map((item) => item.title).join(", ")); // to convert the array to normal text
  };

  //on submit
  const handleSubmit = async () => {
    try {
      const DJANGO_API = process.env.REACT_APP_DJANGO_API;
      setrole("startup");

      // Validate if all required fields are filled out
      if (
        !email ||
        !password ||
        !passwordConfirmation ||
        !startup_name ||
        !sector ||
        !stage ||
        !team_size ||
        !country
      ) {
        setError("fields are required.");
        return;
      }

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

      setError("");

      /////////////////////////////////////////
      const response = await axios.post(`${process.env.REACT_APP_DJANGO_API}startups/register/`, {
        email,
        password,
        first_name,
        startup_name,
        full_name,
        role,
        phone,
        sector,
        city,
        country,
        team_size,
        about,
        website,
        stage,
        job_position,
      });

      if (response.status >= 200 && response.status < 300) {
        // Handle successful response
        setRegConfirm("successfully registered, Please Login to your account");
        setRegError({ ...registerError, form: "" }); // Clear any form registerError
      } else {
        // Handle unexpected status code correctly
        setRegError({
          ...registerError,
          register: `Unexpected response status: ${response.status}`,
        });
      }
    } catch (error) {
      // Handle network error or server error response status codes (e.g., 500)
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        setRegError({
          ...registerError,
          register: `Request failed with status: ${error.response.status}, message: ${
            error.response.data.detail || error.message
          }`,
        });
      } else if (error.request) {
        // The request was made but no response was received
        setRegError({ ...registerError, register: "No response received from the server." });
      } else {
        // Something happened in setting up the request that triggered an Error
        setRegError({
          ...registerError,
          register: "Error setting up the request: " + error.message,
        });
      }

      window.scrollTo({ top: 0, behavior: "smooth" }); // Scroll to top to show error message
    }
  };

  /////////////////////////////////////////

  const validateEmail = (email) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  const validatePassword = (password) => {
    const re = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    return re.test(password);
  };

  return (
    <CoverLayout
      title="Startup Registration"
      description="Let's get to know you better!"
      image={startup}
    >
      {/* Alert Box */}
      {/*if register Success*/}
      {registerConfirm && (
        <SoftAlert fontSize="small" color="success" mt={2} dismissible>
          {registerConfirm}
        </SoftAlert>
      )}

      {/*if register Fail*/}
      {registerError.register && (
        <SoftAlert fontSize="small" color="error" mt={2} dismissible>
          * {registerError.register}
        </SoftAlert>
      )}

      {registerError.form && (
        <SoftAlert fontSize="small" color="error" mt={2} dismissible>
          * {registerError.form}
        </SoftAlert>
      )}
      {/*if from has a message*/}
      {formMessage && (
        <SoftAlert fontSize="small" color="Secondary" mt={2} dismissible>
          {formMessage}
        </SoftAlert>
      )}

      <SoftBox component="form" role="form" width="100" display="flex" flex="row" flexWrap="wrap">
        {/* First Column */}
        <SoftBox flex="0 0 48%" mr={2} mb={3}>
          <SoftBox mb={2}>
            <SoftTypography component="label" variant="caption" fontWeight="bold">
              Email <span style={required}>*</span>
            </SoftTypography>
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
            <SoftBox mt={2} display="flex" justifyContent="space-between">
              <SoftTypography component="label" variant="caption" fontWeight="bold">
                Password <span style={required}>*</span>
              </SoftTypography>
              <Tooltip
                title="Password must contain at least 8 characters, including uppercase, lowercase, and numbers."
                placement="right-start"
              >
                <Icon>error_outline</Icon>
              </Tooltip>
            </SoftBox>
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
          <SoftBox mb={2}>
            <SoftTypography component="label" variant="caption" fontWeight="bold">
              Re-type Password <span style={required}>*</span>
            </SoftTypography>
            <SoftInput
              type="password"
              placeholder="Re-type Password"
              name="passwordConfirmation"
              value={passwordConfirmation}
              onChange={handlePasswordConfirmationChange}
              success={passwordConfirmation && password == passwordConfirmation}
              error={passwordConfirmation && password !== passwordConfirmation}
            />
          </SoftBox>
          <SoftBox mb={2}>
            <SoftTypography component="label" variant="caption" fontWeight="bold">
              Startup Name <span style={required}>*</span>
            </SoftTypography>
            <SoftInput
              type="text"
              placeholder="Fill in the legal name"
              value={startup_name}
              onChange={handleStartupNameChange}
              required
              minLength={10}
            />
          </SoftBox>
          <SoftBox mb={2}>
            <SoftTypography component="label" variant="caption" fontWeight="bold">
              Team Size <span style={required}>*</span>
            </SoftTypography>
            <SoftInput
              type="text"
              placeholder="3 members"
              value={team_size}
              onChange={handleTeamSizeChange}
            />
          </SoftBox>
          <SoftBox mb={2}>
            <SoftTypography component="label" variant="caption" fontWeight="bold">
              Phone Number (Optional)
            </SoftTypography>
            <SoftInput
              type="tel"
              placeholder="0514326789"
              value={phone}
              onChange={handlePhoneChange}
            />
          </SoftBox>
          <SoftBox mb={2}>
            <SoftTypography component="label" variant="caption" fontWeight="bold">
              Full name
            </SoftTypography>
            <SoftInput
              type="text"
              placeholder="Ahmd Ali"
              value={full_name}
              onChange={handlefull_nameChange}
            />
          </SoftBox>
        </SoftBox>

        {/* Second Column */}
        <SoftBox flex="0 0 48%" mb={3}>
          <SoftBox mb={1}>
            <SoftTypography component="label" variant="caption" fontWeight="bold">
              Profile picture
            </SoftTypography>
            <Tooltip title="Maximum image size: 5 MB." placement="right-start">
              <Icon>error_outline</Icon>
            </Tooltip>
          </SoftBox>
          <SoftBox mt={1} mb={1}>
            {/* Image upload section */}
            <label htmlFor="photo">
              <input type="file" id="photo" hidden onChange={handlephotoChange} />
              <SoftButton variant="contained" component="span" fullWidth>
                Upload
              </SoftButton>
            </label>

            {/* Display uploaded image (optional) */}
            {/* 
            {photo && <img src={photo} alt="Profile Picture" style={{ maxWidth: "200px" }} />}
           */}
          </SoftBox>
          <SoftBox mb={1}>
            <SoftTypography component="label" variant="caption" fontWeight="bold">
              Sector <span style={{ color: "red" }}>*</span>
            </SoftTypography>
            {/* <select
            value={sectors}
            onChange={handleSectorChange}
            required
            style={selectStyles}
            onFocus={handleFocus}
            onBlur={handleBlur}
            >
            <option value="">Select your sector</option>
            <option value="Biotech">Biotech</option>
            <option value="Adtech">Adtech</option>
            <option value="Analytics">Analytics</option>
            <option value="Market">Market</option>
            <option value="Agriculture & Food Processing">Agriculture & Food Processing</option>
            <option value="Information Technology">Information Technology</option>
            <option value="ICT">ICT</option>
            <option value="Health">Health</option>
            <option value="Finance">Finance</option>
            <option value="Education">Education</option>
          </select> */}
            <FixedTags
              placeholder="Select your sector"
              onSelectedValueChange={handleSelectedValue}
              onClick={convertToText}
            />
            {/* <p> select value : {selectedValue.map(item => item.title).join(', ')}</p>
        <p>set value : {sectors}</p> */}
          </SoftBox>
          {/* <SoftBox mb={1}>
            <SoftTypography component="label" variant="caption" fontWeight="bold">
              Startup Sector <span style={required}>*</span>
            </SoftTypography>
            <select
              value={sector}
              onChange={handleStartupSectorChange}
              style={selectStyles}
              onFocus={handleFocus}
              onBlur={handleBlur}
            >
              <option value="" disabled>
                Select Sector
              </option>
              <option value="Technology">Technology</option>
              <option value="Healthcare">Healthcare</option>
              <option value="Environmental technology">Environmental technology</option>
              <option value="Streaming services">Streaming services</option>
              <option value="Ecommerce">Ecommerce</option>
              <option value="Delivery services">Delivery services</option>
              <option value="Educational technology">Educational technology</option>
              <option value="Marketing">Marketing</option>
              <option value="Artificial Intelligence">Artificial Intelligence</option>
              <option value="LegalTech">LegalTech</option>
            </select>
          </SoftBox> */}
          <SoftBox mb={1}>
            <SoftTypography component="label" variant="caption" fontWeight="bold">
              Startup Stage <span style={required}>*</span>
            </SoftTypography>
            <SoftInput
              type="stage"
              placeholder="Pre-seed, Seed, Series A or Series B ..."
              value={stage}
              onChange={handleStartupStageChange}
            />
            {/* <select
              value={stage}
              onChange={handleStartupStageChange}
              style={{
                width: "100%",
                padding: "0.75rem",
                fontSize: "1rem",
                backgroundColor: "#f4f4f4",
                color: "#888",
                border: "none",
                borderRadius: "8px",
              }}
            >
              <option value="">Select Stage</option>
              <option value="Pre-seed ">Pre-seed </option>
              <option value="Seed">Seed</option>
              <option value="Series A">Series A</option>
              <option value="Series B">Series B</option>
            </select> */}
          </SoftBox>
          <SoftBox mb={1}>
            <SoftTypography component="label" variant="caption" fontWeight="bold">
              Country <span style={required}>*</span>
            </SoftTypography>
            <select
              value={country}
              onChange={handleCountryChange}
              style={selectStyles}
              onFocus={handleFocus}
              onBlur={handleBlur}
            >
              <option value="">Select your country</option>
              <option value="USA">United States</option>
              <option value="UK">United Kingdom</option>
              <option value="Canada">Canada</option>
              <option value="Saudi Arabia">Saudi Arabia</option>
              <option value="Kuwait">Kuwait</option>
              <option value="Qatar">Qatar</option>
              <option value="Bahrain">Bahrain</option>
              <option value="United Arab Emirates">United Arab Emirates</option>
              <option value="Eygpt">Eygpt</option>
              <option value="Oman">Oman</option>
              <option value="India">India</option>
              <option value="Other">Other</option>
            </select>
          </SoftBox>

          <SoftBox mb={1}>
            <SoftTypography component="label" variant="caption" fontWeight="bold">
              City
            </SoftTypography>
            <SoftInput type="text" placeholder="Riyadh" value={city} onChange={handleCityChange} />
          </SoftBox>
          <SoftBox mb={1}>
            <SoftBox mt={4} display="flex" justifyContent="space-between">
              <SoftTypography component="label" variant="caption" fontWeight="bold">
                Website
              </SoftTypography>
              <Tooltip title="should be valid website URL." placement="right-start">
                <Icon>error_outline</Icon>
              </Tooltip>
            </SoftBox>
            <SoftInput
              type="url"
              placeholder="https://www.web.com/"
              value={website}
              onChange={handleWebsiteChange}
              success={website && validateURL(website)}
              error={website && !validateURL(website)}
            />
          </SoftBox>
          <SoftBox mb={2}>
            <SoftTypography component="label" variant="caption" fontWeight="bold">
              Job Position
            </SoftTypography>
            <SoftInput
              type="text"
              placeholder="Founder"
              value={job_position}
              onChange={handlejob_positionChange}
            />
          </SoftBox>
        </SoftBox>
      </SoftBox>
      <SoftBox mb={1}>
        <SoftTypography component="label" variant="caption" fontWeight="bold">
          About <span style={{ color: "red" }}>*</span>
        </SoftTypography>
        <SoftInput
          type="text"
          placeholder="Tell us about your startup ..."
          value={about}
          onChange={handleaboutChange}
          required
          multiline
          rows={10}
        />
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
          onClick={handleSubmit} 
        >
          Submit
        </SoftButton>
      </SoftBox>
    </CoverLayout>
  );
}
export default startupform;
