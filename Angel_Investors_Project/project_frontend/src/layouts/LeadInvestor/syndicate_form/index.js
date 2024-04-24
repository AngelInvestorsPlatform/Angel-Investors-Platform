import React, { useState, useEffect } from "react";

//for API
import axios from "axios";

// react-router-dom components
import { Link } from "react-router-dom";
import { Navigate } from "react-router-dom";

//for user auth global context
import { useAuthUser } from "context/authContext";

// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SoftInput from "components/SoftInput";
import SoftButton from "components/SoftButton";
import SoftAlert from "components/SoftAlert";

// layout components
import CoverLayout from "layouts/LeadInvestor/components/CoverLayout";
import FixedTags from "layouts/registers_forms/components/FixedTags";

// Images
import syndicate from "assets/images/backgraund-images/investor-backgraund2.svg";



function SyndicateForm() {
  // State Variables
  const [syndicateName, setSyndicateName] = useState("");
  const [syndicateAbout, setSyndicateAbout] = useState("");
  const [syndicateSector, setSyndicateSector] = useState("");
  const [selectedValue, setSelectedValue] = useState([]);
  const [errors, setErrors] = useState("");
  const [registerError, setRegError] = useState({ form: "", register: "" });
  const [isRedirect, setIsRedirect] = useState(false);

  // Auth and config
  const { userData } = useAuthUser();
  const userName = userData ? userData.first_name : "Loading...";
  const token = userData ? userData.token :" ";
  const config = {
    headers: {
        Authorization: `Token ${token}`,  
    },
  };

  // Handlers
  const handleInputChange = (setter) => (e) => setter(e.target.value);
  // Callback function to handle the selected value
  useEffect(() => {
    convertToText();
  }, [selectedValue]);

  const handleSelectedValue = (value) => {
    setSelectedValue(value);
    setSyndicateSector(selectedValue.map(item => item.title).join(', '))
  };

  const convertToText = async () => {
    setSyndicateSector(selectedValue.map(item => item.title).join(', '))// to convert the array to normal text
  };


  // Form Submission
  const handleSubmit = async () => {
    try {
      if (!syndicateName || !syndicateAbout || !syndicateSector) {
        setErrors("fields are required.");
        return;
      }
      const response = await axios.post(
        `${process.env.REACT_APP_DJANGO_API}/syndicates/manageSyndicate/`,
        {
          syndicate_name: syndicateName,
          sectors: syndicateSector,
          about: syndicateAbout,
        } ,
         config
       );

      if (response.status >= 200 && response.status < 300) {
        // Handle successful response
        setIsRedirect(true); // Redirect on successful registration
        setRegError({ ...errors, form: "" }); // Clear any form errors
      } else {
        // Handle unexpected status code correctly
        setRegError({ ...errors, register: `Unexpected response status: ${response.status}` });
      }
    } catch (error) {
      // Handle network error or server error response status codes (e.g., 500)
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        setRegError({
          ...errors,
          register: `Request failed with status: ${error.response.status}, message: ${
            error.response.data.detail || error.message
          }`,
        });
      } else if (error.request) {
        // The request was made but no response was received
        setRegError({ ...errors, register: "No response received from the server." });
      } else {
        // Something happened in setting up the request that triggered an Error
        setRegError({ ...errors, register: "Error setting up the request: " + error.message });
      }

      window.scrollTo({ top: 0, behavior: "smooth" }); // Scroll to top to show error message
    }
  };

  if (isRedirect) {
    return <Navigate to="/LeadInvestor" />;
  }
  return (
    <CoverLayout
      title="Create Your Syndicate"
      description="Become a Lead Investor!"
      image={syndicate}
    >
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
            <SoftTypography component="label" variant="caption" fontWeight="bold" fontSize="16px">
              Syndicate name <span style={{ color: "red" }}>*</span>
            </SoftTypography>
            <SoftInput
              type="text"
              name="syndicateName"
              value={syndicateName}
              onChange={handleInputChange(setSyndicateName)}
            />
          </SoftBox>
          <SoftBox mb={2}>
            <SoftTypography component="label" variant="caption" fontWeight="bold" fontSize="16px">
              Sector of the syndicate <span style={{ color: "red" }}>*</span>
            </SoftTypography>
            <FixedTags placeholder="Select  sector" onSelectedValueChange={handleSelectedValue} onClick={convertToText}/>
          </SoftBox>
        </SoftBox>

        {/* Second Column */}
        <SoftBox flex="0 0 48%" mb={3}>
          <SoftBox mb={2}>
            <SoftTypography component="label" variant="caption" fontWeight="bold" fontSize="16px">
              Syndicate lead name
            </SoftTypography>
            <SoftInput type="text"   value={userName}   disabled />
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
          Description about the Syndicate <span style={{ color: "red" }}>*</span>
        </SoftTypography>
        <SoftBox mb={3}>
          <SoftInput
            type="text"
            placeholder="Type here Syndicate Interests, goals, focused sector, startups stage, etc."
            value={syndicateAbout}
            onChange={handleInputChange(setSyndicateAbout)}
            multiline
            rows={8}
          />
        </SoftBox>
      </SoftBox>

      {errors && (
        <SoftTypography component="label" variant="caption" color="error">
          * {errors}
        </SoftTypography>
      )}

      <SoftBox mt={4} mb={1}>
        <SoftButton variant="gradient" color="info" fullWidth onClick={handleSubmit}>
          Submit
        </SoftButton>
      </SoftBox>
    </CoverLayout>
  );
}
export default SyndicateForm;
