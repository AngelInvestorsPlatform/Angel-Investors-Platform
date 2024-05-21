import React, { useState } from "react";
import axios from "axios";
//for user auth global context
import { useAuthUser } from "context/authContext";

// MUI Components
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import Icon from "@mui/material/Icon";

// Custom Components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SoftInput from "components/SoftInput";
import SoftButton from "components/SoftButton";
import SoftAlert from "components/SoftAlert";

// Layout Components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import LeadNavbar from "layouts/LeadInvestor/components/LeadNavbar";

function YourDeals() {
  const required = { color: "red" };

  const { userData } = useAuthUser();
  const token = userData ? userData.token : " ";

  const [form, setForm] = useState({
    startup_name: "",
    full_name: "",
    sector: "",
    stage: "",
    email: "",
    phone: "",
    team_size: "",
    country: "",
    city: "",
    website: "",
    about: "",
    jobPosition: "",
  });

  // Error and confirmation messages
  const [message, setMessage] = useState({
    type: "",
    content: "",
  });

  // Handles form input changes
  const handleChange = (prop) => (event) => {
    setForm({ ...form, [prop]: event.target.value });
  };

  // Handles form submission
  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent default form submission
    try {
      // Here you would validate the required fields
      const requiredFields = ["startup_name", "full_name", "sector", "stage", "team_size", "email"];
      for (let field of requiredFields) {
        if (!form[field]) {
          setMessage({ type: "error", content: "Please fill in all required fields." });
          return;
        }
      }

      // API call
      const response = await axios.post(
        `${process.env.REACT_APP_DJANGO_API}startups/exclusive-startups/add/`,
        form,
        {
          headers: { Authorization: `Token ${token}` },
        }
      );

      if (response.status >= 200 && response.status < 300){
        setMessage({ type: "success", content: "Startup successfully Added." });
      } else {
        setMessage({ type: "error", content: "Failed to add the startup." });
      }
    } catch (error) {
      setMessage({
        type: "error",
        content: error.response?.data[0] || "An unexpected error occurred.",
      });
      console.error(error);
    }
  };

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <LeadNavbar />
      <SoftBox p={5}>
        <Card>
          <SoftBox display="flex" justifyContent="space-between" alignItems="center" p={3}>
            <SoftBox>
              <SoftTypography variant="h4" color="info" fontWeight="regular" textGradient>
                {" "}
                Added New Startup
              </SoftTypography>
              <SoftBox display="flex" alignItems="center" lineHeight={0}>
                <Icon
                  sx={{
                    fontWeight: "bold",
                    color: ({ palette: { info } }) => info.main,
                    mt: -0.3,
                  }}
                >
                  equalizer
                </Icon>
                <SoftTypography variant="button" fontWeight="regular" color="text">
                  &nbsp; If you have your own deal and want to add it to your syndicate, add its
                  details from here
                </SoftTypography>
              </SoftBox>
            </SoftBox>
          </SoftBox>

          <SoftBox p={10}>
          {/* Alert Box */}
          {message.content && (
            <SoftAlert color={message.type === "success" ? "success" : "error"} dismissible onClose={() => setMessage({ content: '', type: '' })}>
              <SoftTypography variant="caption" color="light">
              {message.content}
              </SoftTypography>
            </SoftAlert>
          )}

          {/******here*******/}
            <form onSubmit={handleSubmit}>
              <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                  <SoftTypography component="label" variant="caption" fontWeight="bold">
                    Startup name <span style={required}>*</span>
                  </SoftTypography>
                  <SoftInput
                    label="Startup Name *"
                    value={form.startup_name}
                    onChange={handleChange("startup_name")}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <SoftTypography component="label" variant="caption" fontWeight="bold">
                    Startup Owner Full Name <span style={required}>*</span>
                  </SoftTypography>
                  <SoftInput
                    label="Founder's Full Name *"
                    value={form.full_name}
                    onChange={handleChange("full_name")}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <SoftTypography component="label" variant="caption" fontWeight="bold">
                    Startup Sector <span style={required}>*</span>
                  </SoftTypography>
                  <SoftInput
                    label="Sector *"
                    value={form.sector}
                    onChange={handleChange("sector")}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <SoftTypography component="label" variant="caption" fontWeight="bold">
                    Startup Stage <span style={required}>*</span>
                  </SoftTypography>
                  <SoftInput label="Stage *" value={form.stage} onChange={handleChange("stage")} />
                </Grid>

                <Grid item xs={12} md={6}>
                  <SoftTypography component="label" variant="caption" fontWeight="bold">
                    Team Size <span style={required}>*</span>
                  </SoftTypography>
                  <SoftInput
                    label="Time Size *"
                    value={form.team_size}
                    onChange={handleChange("team_size")}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <SoftTypography component="label" variant="caption" fontWeight="bold">
                    Startup Email <span style={required}>*</span>
                  </SoftTypography>
                  <SoftInput label="Email " value={form.email} onChange={handleChange("email")} />
                </Grid>
                <Grid item xs={12} md={6}>
                  <SoftTypography component="label" variant="caption" fontWeight="bold">
                    Startup Phone
                  </SoftTypography>
                  <SoftInput label="Phone " value={form.phone} onChange={handleChange("phone")} />
                </Grid>
                <Grid item xs={12} md={6}>
                  <SoftTypography component="label" variant="caption" fontWeight="bold">
                    Startup Website
                  </SoftTypography>
                  <SoftInput
                    label="Website "
                    value={form.website}
                    onChange={handleChange("website")}
                  />
                </Grid>
              </Grid>
              <SoftBox
                mb={3}
                width="100"
                display="flex"
                flex="row"
                flexWrap="wrap"
                justifyContent="center"
              >
                <SoftBox mt={4} mb={1}>
                  <SoftButton
                    type="submit"
                    variant="gradient"
                    color="info"
                    fullWidth
                    circular
                    style={{ padding: "15px 32px" }}
                  >
                    Add
                  </SoftButton>
                </SoftBox>
              </SoftBox>
            </form>
          </SoftBox>
        </Card>
      </SoftBox>

      <Footer />
    </DashboardLayout>
  );
}

export default YourDeals;
