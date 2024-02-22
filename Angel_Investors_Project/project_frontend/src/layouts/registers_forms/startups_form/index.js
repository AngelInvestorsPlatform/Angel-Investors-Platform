import { useState } from "react";

// react-router-dom components
import { Link } from "react-router-dom";

// @mui material components
import Switch from "@mui/material/Switch";

// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SoftInput from "components/SoftInput";
import SoftButton from "components/SoftButton";

// Authentication layout components
import CoverLayout from "layouts/authentication/components/CoverLayout";

// Images
import startup from "assets/images/investor.jpg.webp";

function startup_form() {
  const [startupName, setStartupName] = useState("");
  const [startupSector, setStartupSector] = useState("");
  const [startupStage, setStartupStage] = useState("");
  const [phone, setPhone] = useState("");
  const [teamSize, setTeamSize] = useState("");
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [website, setWebsite] = useState("");

  const handleStartupNameChange = (e) => setStartupName(e.target.value);
  const handleStartupSectorChange = (e) => setStartupSector(e.target.value);
  const handleStartupStageChange = (e) => setStartupStage(e.target.value);
  const handlePhoneChange = (e) => setPhone(e.target.value);
  const handleTeamSizeChange = (e) => setTeamSize(e.target.value);
  const handleCountryChange = (e) => setCountry(e.target.value);
  const handleCityChange = (e) => setCity(e.target.value);
  const handleWebsiteChange = (e) => setWebsite(e.target.value);

  return (
    <CoverLayout title="Startup Form" image={startup}>
      <SoftBox component="form" role="form" display="flex" flexWrap="wrap">
        {/* First Column */}
        <SoftBox flex="0 0 48%" mr={2} mb={3}>
          <SoftBox mb={2}>
            <SoftTypography component="label" variant="caption" fontWeight="bold">
              StartupName
            </SoftTypography>
            <SoftInput
              type="text"
              placeholder="Fill in the legal name"
              value={startupName}
              onChange={handleStartupNameChange}
              minLength={10}
            />
          </SoftBox>

          <SoftBox mb={2}>
            <SoftTypography component="label" variant="caption" fontWeight="bold">
              Team Size
            </SoftTypography>
            <SoftInput
              type="text"
              placeholder="3 members"
              value={teamSize}
              onChange={handleTeamSizeChange}
            />
          </SoftBox>

          <SoftBox mb={2}>
            <SoftTypography component="label" variant="caption" fontWeight="bold">
              Startup sector
            </SoftTypography>
            <select
              value={startupSector}
              onChange={handleStartupSectorChange}
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

          <SoftBox mb={2}>
            <SoftTypography component="label" variant="caption" fontWeight="bold">
              Country
            </SoftTypography>
            <select
              value={country}
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
        </SoftBox>

        {/* Second Column */}
        <SoftBox flex="0 0 48%" mb={3}>
          <SoftBox mb={2}>
            <SoftTypography component="label" variant="caption" fontWeight="bold">
              Startup Stage
            </SoftTypography>
            <select
              value={startupStage}
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
              City
            </SoftTypography>
            <SoftInput
              type="text"
              placeholder="Saudi Arabia"
              value={city}
              onChange={handleCityChange}
            />
          </SoftBox>

          <SoftBox mb={2}>
            <SoftTypography component="label" variant="caption" fontWeight="bold">
              Phone
            </SoftTypography>
            <SoftInput
              type="tel"
              placeholder="(966) 514326789"
              value={phone}
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
              value={website}
              onChange={handleWebsiteChange}
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
          component={Link}
          to="/startup"
        >
          Join Now
        </SoftButton>
      </SoftBox>
    </CoverLayout>
  );
}

export default startup_form;
