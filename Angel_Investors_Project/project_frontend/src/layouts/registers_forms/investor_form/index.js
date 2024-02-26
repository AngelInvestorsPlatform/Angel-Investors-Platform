import { useState } from "react";

//for API
import axios from "axios";

// react-router-dom components
import { Link } from "react-router-dom";
import { Navigate } from "react-router-dom";

// @mui material components
import Switch from "@mui/material/Switch";

//for user auth global context
import { useAuthUser } from "context/authContext";

// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SoftInput from "components/SoftInput";
import SoftButton from "components/SoftButton";

// registers_forms layout components
import CoverLayout from "layouts/registers_forms/components/CoverLayout";

// Images
import investor from "assets/images/investor.jpg.webp";
import SoftAlert from "components/SoftAlert";

function InvestorForm() {
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

  const [investor_name, setName] = useState("");
  const [investor_phone, setPhone] = useState("");
  const [investor_country, setCountry] = useState("");
  const [investor_sector, setSector] = useState("");
  const [investor_experience, setExperience] = useState("");
  const [investor_income, setIncome] = useState("");

  //for error alert
  const [Confirm, setConfirm]= useState("");
  const [RedirectToDashboard, setRedirectToDashboard] = useState(false);

  const handleNameChange = (e) => setName(e.target.value);
  const handlePhoneChange = (e) => setPhone(e.target.value);
  const handleCountryChange = (e) => setCountry(e.target.value);
  const handleSectorChange = (e) => setSector(e.target.value);
  const handleExperienceChange = (e) => setExperience(e.target.value);
  const handleIncomeChange = (e) => setIncome(e.target.value);

  if (RedirectToDashboard) {
    return <Navigate to="/investor" />;
    //It needs to be modified according to the role type of the user
  }

  const handleInvestorForm = async () => {
    try {
      const Response = await axios.post(`${process.env.REACT_APP_DJANGO_API}form/Investors/`, {
        investor_name,
        investor_phone,
        investor_country,
        investor_sector,
        investor_experience,
        investor_income,
      });
      if (Response.status === 200) {
          setConfirm("Data add successfully ");
          // Redirect to dashboard
          setRedirectToDashboard(true);
        
      } else {
        setError("Failed");  }
      } catch (errorX) {
      // Handle error, display appropriate message
      setError(" Add Failed: " + errorX.message);
    }
  };

  return (
    <CoverLayout title="Investor Form" description="Let's get to know you better!" image={investor}>
      {/* Alert Box */}
      <SoftBox>
       {/*if Success*/}
       {Confirm && (
          <SoftAlert fontSize="small" color="success" mt={2} dismissible>
            {Confirm}
          </SoftAlert>
        )}

        {/*if Fail*/}
        {Error && (
          <SoftAlert fontSize="small" color="error" mt={2} dismissible>
            {Error}
          </SoftAlert>
        )}
        </SoftBox>
      <SoftBox component="form" role="form" width="100" display="flex" flexWrap="wrap">
        {/* First Column */}
        <SoftBox flex="0 0 48%" mr={2} mb={3}>
        <SoftBox mb={2}>
            <SoftTypography component="label" variant="caption" fontWeight="bold">
              Username
            </SoftTypography>
            <SoftInput
              type="text"
              placeholder="Username"
              name="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </SoftBox>
          <SoftBox mb={2}>
            <SoftTypography component="label" variant="caption" fontWeight="bold">
              Email
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
            <SoftTypography component="label" variant="caption" fontWeight="bold">
              Name
            </SoftTypography>
            <SoftInput
              type="text"
              placeholder="Enter your full name"
              value={investor_name}
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
              placeholder="Enter your phone number"
              value={investor_phone}
              onChange={handlePhoneChange}
            />
          </SoftBox>
          <SoftBox mb={2}>
            <SoftTypography component="label" variant="caption" fontWeight="bold">
              Country
            </SoftTypography>
            <select
              value={investor_country}
              onChange={handleCountryChange}
              required
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
        </SoftBox>

        {/* Second Column */}
        <SoftBox flex="0 0 48%" mb={3}>
          <SoftBox mb={2}>
            <SoftTypography component="label" variant="caption" fontWeight="bold">
              Sector
            </SoftTypography>
            <select
              value={investor_sector}
              onChange={handleSectorChange}
              required
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
            </select>
          </SoftBox>
          <SoftBox mb={2}>
            <SoftTypography component="label" variant="caption" fontWeight="bold">
              Experience
            </SoftTypography>
            <select
              value={investor_experience}
              onChange={handleExperienceChange}
              required
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
              <option value="">Select your experience</option>
              <option value="less than 1 year">less than 1 year</option>
              <option value="1-2 years">1-2 years</option>
              <option value="3-5 years">3-5 years</option>
              <option value="6-10 years">6-10 years</option>
              <option value="more than 10 years">more than 10 years</option>
            </select>
          </SoftBox>
          <SoftBox mb={2}>
            <SoftTypography component="label" variant="caption" fontWeight="bold">
              Income
            </SoftTypography>
            <select
              value={investor_income}
              onChange={handleIncomeChange}
              required
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
          <SoftBox mb={2}>
            <SoftTypography component="label" variant="caption" fontWeight="bold">
              Password
            </SoftTypography>
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
              Re-type Password
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
        </SoftBox>
      </SoftBox>
      <SoftBox mt={4} mb={1}>
        <SoftButton
          variant="gradient"
          color="info"
          fullWidth
          circular
          onClick={handleInvestorForm}
        >
          submit
        </SoftButton>
      </SoftBox>
    </CoverLayout>
  );
}

export default InvestorForm;
