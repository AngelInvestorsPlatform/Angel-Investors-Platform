import { useState } from "react";

//for API
import axios from "axios";

// react-router-dom components
import { Link } from "react-router-dom";
import { Navigate } from "react-router-dom";

// @mui material components
import Switch from "@mui/material/Switch";

// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SoftInput from "components/SoftInput";
import SoftButton from "components/SoftButton";
import SoftAlert from "components/SoftAlert";

// registers_forms layout components
import CoverLayout from "layouts/registers_forms/components/CoverLayout";

// Images
import startup from "assets/images/curved-images/curved-city.png";

function startup_form() {
  const [startup_name, setStartupName] = useState("");
  const [startup_sector, setStartupSector] = useState("");
  const [startup_stage, setStartupStage] = useState("");
  const [startup_phone, setPhone] = useState("");
  const [startup_team, setTeamSize] = useState("");
  const [startup_country, setCountry] = useState("");
  const [startup_city, setCity] = useState("");
  const [startup_web, setWebsite] = useState("");

  //for error alert
  const [Confirm, setConfirm]= useState("");
  const [Error, setError]= useState("");
  const [RedirectToDashboard, setRedirectToDashboard] = useState(false);

  const handleStartupNameChange = (e) => setStartupName(e.target.value);
  const handleStartupSectorChange = (e) => setStartupSector(e.target.value);
  const handleStartupStageChange = (e) => setStartupStage(e.target.value);
  const handlePhoneChange = (e) => setPhone(e.target.value);
  const handleTeamSizeChange = (e) => setTeamSize(e.target.value);
  const handleCountryChange = (e) => setCountry(e.target.value);
  const handleCityChange = (e) => setCity(e.target.value);
  const handleWebsiteChange = (e) => setWebsite(e.target.value);

  if (RedirectToDashboard) {
    return <Navigate to="/startup" />;
    //It needs to be modified according to the role type of the user
  }

  const handleStartupForm = async () => {
    try {
      const Response = await axios.post(`${process.env.REACT_APP_DJANGO_API}form/Startup/`, {
        startup_name,
        startup_phone,
        startup_sector,
        startup_stage,
        startup_team,
        startup_country,
        startup_city,
        startup_web,

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
    <CoverLayout
      title="Startup Form"
      description="Let's get to know you better!" image={startup}
    >

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


      <SoftBox component="form" role="form" width="200" display="flex" flex="row" flexWrap="wrap">
        {/* First Column */}
        <SoftBox flex="0 0 48%" mr={2} mb={3}>
          <SoftBox mb={3}>
            <SoftTypography component="label" variant="caption" fontWeight="bold">
              Startup Name
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
          <SoftBox mb={3}>
            <SoftTypography component="label" variant="caption" fontWeight="bold">
              Team Size
            </SoftTypography>
            <SoftInput
              type="text"
              placeholder="3 members"
              value={startup_team}
              onChange={handleTeamSizeChange}
            />
          </SoftBox>
          <SoftBox mb={3}>
            <SoftTypography component="label" variant="caption" fontWeight="bold">
              Phone
            </SoftTypography>
            <SoftInput
              type="tel"
              placeholder="(966) 514326789"
              value={startup_phone}
              onChange={handlePhoneChange}
            />
          </SoftBox>
          <SoftBox mb={2}>
            <SoftTypography component="label" variant="caption" fontWeight="bold">
              Website
            </SoftTypography>
            <SoftInput
              type="text"
              placeholder="www.website.com"
              value={startup_web}
              onChange={handleWebsiteChange}
            />
          </SoftBox>
        </SoftBox>

         {/* Second Column */}
         <SoftBox flex="0 0 48%" mb={3}>
          <SoftBox mb={2}>
            <SoftTypography component="label" variant="caption" fontWeight="bold">
              Startup Sector
            </SoftTypography>
            <select
              value={startup_sector}
              onChange={handleStartupSectorChange}
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
              <option value="">Select Sector</option>
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
          </SoftBox>
          <SoftBox mb={3}>
            <SoftTypography component="label" variant="caption" fontWeight="bold">
              Startup Stage
            </SoftTypography>
            <select
              value={startup_stage}
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
            </select>
          </SoftBox>
          <SoftBox mb={2}>
            <SoftTypography component="label" variant="caption" fontWeight="bold">
              Country
            </SoftTypography>
            <select
              value={startup_country}
              onChange={handleCountryChange}
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
              <option value="Eygpt">Eygpt</option>
              <option value="Oman">Oman</option>
              <option value="India">India</option>
              <option value="Other">Other</option>
            </select>
          </SoftBox>

          <SoftBox mb={2}>
            <SoftTypography component="label" variant="caption" fontWeight="bold">
              City
            </SoftTypography>
            <SoftInput
              type="text"
              placeholder="Saudi Arabia"
              value={startup_city}
              onChange={handleCityChange}
            />
          </SoftBox>
        </SoftBox>
      </SoftBox>
      <SoftBox mt={4} mb={1}>
        <SoftButton variant="gradient" color="info" fullWidth onClick={handleStartupForm}>
          Submit
        </SoftButton>
      </SoftBox>
    </CoverLayout>
  );
}
export default startup_form;
