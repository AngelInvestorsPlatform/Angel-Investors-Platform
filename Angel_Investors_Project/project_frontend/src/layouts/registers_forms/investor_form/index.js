import React, { useState, useEffect } from "react";

//for API
import axios from "axios";

// react-router-dom components
import { Link } from "react-router-dom";
import { Navigate } from "react-router-dom";

// @mui material components
import Switch from "@mui/material/Switch";
import Tooltip from "@mui/material/Tooltip";
import Icon from "@mui/material/Icon";

//for user auth global context
import { useAuthUser } from "context/authContext";

// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SoftInput from "components/SoftInput";
import SoftButton from "components/SoftButton";

// registers_forms layout components
import CoverLayout from "layouts/registers_forms/components/CoverLayout";
import Separator from "layouts/registers_forms/components/Separator";
import FixedTags from "layouts/registers_forms/components/FixedTags";

// Images
import investor from "assets/images/backgraund-images/investor-backgraund2.svg";
import SoftAlert from "components/SoftAlert";

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

const handleFocus = (event) => {
  // Change border color when focused
  event.target.style.border = "2px solid #17c1e8";
};

const handleBlur = (event) => {
  // Reset border color when blurred
  event.target.style.border = "0.2px solid #e9ecef";
};

function InvestorForm() {
  //form Data variables
  const [email, setEmail] = useState("");
  const [first_name, setfirst_name] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [full_name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [country, setCountry] = useState("");
  const [sectors, setSector] = useState("");
  const [experience, setExperience] = useState("");
  const [income, setIncome] = useState("");
  const [photo, setphoto] = useState("");
  const [about, setabout] = useState("");

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
    return <Navigate to="/investor" />;
  }

  //The following codes to handle input validity using JavaScript
  const handleEmailChange = (event) => setEmail(event.target.value);
  const handlePasswordChange = (event) => setPassword(event.target.value);
  const handlePasswordConfirmationChange = (event) => setPasswordConfirmation(event.target.value);

  const handleNameChange = (e) => setName(e.target.value) || setfirst_name(e.target.value);
  const handlePhoneChange = (e) => setPhone(e.target.value);
  const handleCountryChange = (e) => setCountry(e.target.value);
  const handleSectorChange = (e) => setSector(e.target.value);
  const handleExperienceChange = (e) => setExperience(e.target.value);
  const handleIncomeChange = (e) => setIncome(e.target.value);
  const handlephotoChange = (e) => setphoto(e.target.value);
  const handleaboutChange = (e) => setabout(e.target.value);

  const [RedirectToUserI, setRedirectToUserI] = useState(false);

  if (RedirectToUserI) {
    return <Navigate to="/investor" />;
  }

  const [selectedValue, setSelectedValue] = useState([]); // State to hold the selected value

  useEffect(() => {
    convertToText();
  }, [selectedValue]);

  // Callback function to handle the selected value
  const handleSelectedValue = (value) => {
    setSelectedValue(value);
  };

  const convertToText = async () => {
    setSector(selectedValue.map((item) => item.title).join(", ")); // to convert the array to normal text
  };

  //on submit
  const handleSubmit = async () => {
    try {
      const DJANGO_API = process.env.REACT_APP_DJANGO_API;
      setrole("investor");

      // Validate if all required fields are filled out
      if (
        !email ||
        !password ||
        !passwordConfirmation ||
        !full_name ||
        !sectors ||
        !experience ||
        !income ||
        !country ||
        !about
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

        const response = await axios.post(`${process.env.REACT_APP_DJANGO_API}investors/register/`, {
          email,
          password,
          first_name,
          full_name,
          role,
          phone,
          country,
          sectors,
          experience,
          country,
          income,
          about,
        });
      

          if (response.status >= 200 && response.status < 300) {
            // Handle successful response
            setRegConfirm("successfully registered, Please Login to your account")
            window.scrollTo({ top: 0, behavior: "smooth" }); // Scroll to top to show confirm message
            setRegError({ ...registerError, form: "" }); // Clear any form registerError
          } else {
            // Handle unexpected status code correctly
            setRegError({ ...registerError, register: `Unexpected response status: ${response.status}` });
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
            setRegError({ ...registerError, register: "Error setting up the request: " + error.message });
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
      title="Investor Registration"
      description="Let's get to know you better!"
      image={investor}
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
              Email <span style={{ color: "red" }}>*</span>
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
                Password <span style={{ color: "red" }}>*</span>
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
              Re-type Password <span style={{ color: "red" }}>*</span>
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
              Name <span style={{ color: "red" }}>*</span>
            </SoftTypography>
            <SoftInput
              type="text"
              placeholder="Your full name"
              value={full_name}
              onChange={handleNameChange}
              required
              minLength={10}
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
        </SoftBox>

        {/* Second Column */}
        <SoftBox flex="0 0 48%" mb={3}>
        <SoftBox mt={2} display="flex" justifyContent="space-between">
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
              Country <span style={{ color: "red" }}>*</span>
            </SoftTypography>
            <select
              value={country}
              onChange={handleCountryChange}
              required
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
              <option value="Egypt">Egypt</option>
              <option value="Oman">Oman</option>
              <option value="India">India</option>
              <option value="Other">Other</option>
            </select>
          </SoftBox>
          <SoftBox mb={1}>
            <SoftTypography component="label" variant="caption" fontWeight="bold">
              Experience <span style={{ color: "red" }}>*</span>
            </SoftTypography>
            <select
              value={experience}
              onChange={handleExperienceChange}
              required
              style={selectStyles}
              onFocus={handleFocus}
              onBlur={handleBlur}
            >
              <option value="">Select your Experience</option>
              <option value="Less than 1 year">Less than 1 year</option>
              <option value="1-2 years">1-2 years</option>
              <option value="3-5 years">3-5 years</option>
              <option value="6-10 years">6-10 years</option>
              <option value="More than 10 years">More than 10 years</option>
            </select>
          </SoftBox>
          <SoftBox mb={1}>
            <SoftTypography component="label" variant="caption" fontWeight="bold">
              Income <span style={{ color: "red" }}>*</span>
            </SoftTypography>
            <select value={income} onChange={handleIncomeChange} required style={selectStyles}>
              <option value="">Select your income</option>
              <option value="Less than 100K">Less than 100K</option>
              <option value="200K-300k">200K-300k</option>
              <option value="300K-400k">300K-400k</option>
              <option value="400k-500k">400k-500k</option>
              <option value="600k-700k">600k-700k</option>
              <option value="800k-900k">800k-900k</option>
              <option value="More than 900k">More than 900k</option>
            </select>
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
        </SoftBox>
      </SoftBox>
      <SoftBox mb={1}>
        <SoftTypography component="label" variant="caption" fontWeight="bold">
          About <span style={{ color: "red" }}>*</span>
        </SoftTypography>
        <SoftInput
          type="text"
          placeholder="Tell us about you and your intrest?"
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
        <SoftButton variant="gradient" color="info" fullWidth circular onClick={handleSubmit}>
          submit
        </SoftButton>
      </SoftBox>
    </CoverLayout>
  );
}

export default InvestorForm;
