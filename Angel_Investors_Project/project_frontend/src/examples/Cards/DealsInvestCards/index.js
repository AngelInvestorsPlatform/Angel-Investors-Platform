import React, { useState, useEffect } from "react";

// react-routers components
import { Link } from "react-router-dom";

import axios from "axios";

//for user auth global context
import { useAuthUser } from "context/authContext";

// prop-types is library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
import Card from "@mui/material/Card";
import Divider from "@mui/material/Divider";
import { Grid } from "@mui/material";

// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SoftButton from "components/SoftButton";
import SoftInput from "components/SoftInput";
import SoftAlert from "components/SoftAlert";

//components
import CurrencyFormatter from "layouts/investor/pageComponents/YourDeals/data/CurrencyFormatter";
import Deal from "layouts/startup";

function DealsInvestCards({
  dealID,
  min,
  deadline,
  role,
  allocation,
  valuation,
  carry,
  leadInvest,
  invAmount,
}) {
  const [lastDate, setDate] = useState("");
  const [investmentAmount, setInvestmentAmount] = useState("");
  const [alert, setAlert] = useState({ message: "", type: "" });

  const handleInputChange = (e) => {
    setInvestmentAmount(e.target.value);
    if (alert.message) {
      setAlert({ message: "", type: "" }); // Clear alert when user starts typing again
    }
  };
  const DealId = dealID;


  // Auth const
  const { userData } = useAuthUser();
  const token = userData ? userData.token : " ";
  const config = {
    headers: {
      Authorization: `Token ${token}`,
    },
  };

  const handleSubmit = async () => {
    // Convert min from string to number
    const minimumInvestment = parseFloat(min);
    const investment = parseFloat(investmentAmount);

    if (investment < minimumInvestment) {
      setAlert({
        message: `The minimum investment amount is ${minimumInvestment}.`,
        type: "error",
      });
    } else {
      try {
        const response = await axios.post(
          `${process.env.REACT_APP_DJANGO_API}deals/invest-in/`,
          {
            deal: DealId,
            invested_amount: investmentAmount,
          },
          config
        );

        if (response.status === 200) {
          // Handle successful response
          setAlert({ message: "Investment submitted successfully", type: "success" });
        }
      } catch (error) {
        console.error("API call failed:", error);
        setAlert({ message: "Failed to submit investment", type: "error" });
      }
    }
  };

  useEffect(() => {
    setDate(new Date(deadline).toLocaleDateString("en-US", { month: "short", day: "numeric" }));
  }, [deadline]);

  return (
    <Card>
      <SoftBox display="flex" p={2} pt={3} pr={2} mb={4}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={12} xl={12}>
            <SoftBox>
              <SoftTypography variant="h5" fontWeight="bold" textTransform="capitalize">
                Invest &nbsp;
              </SoftTypography>
            </SoftBox>
            <SoftBox>
              <SoftTypography variant="caption"  >
                Minimum is <SoftTypography variant="caption" color="info" fontWeight="bold" size="md"> <CurrencyFormatter amount={min} /> </SoftTypography> . Invest by {lastDate}{" "}
              </SoftTypography>
            </SoftBox>
            <SoftBox opacity={0.5}>
              <Divider />
            </SoftBox>
          </Grid>
          {role === "invested" && (
            <Grid item xs={12} sm={12} xl={12}>
              <SoftTypography  variant="h6" color="success" >You have already invested with <CurrencyFormatter amount={invAmount}/> </SoftTypography>
            </Grid>
          )}
          {role === "lead" && (
            <Grid item xs={12} sm={12} xl={12}>
              <SoftTypography variant="h5" color="info" >You Lead This Deal</SoftTypography>
            </Grid>
          )}
          {role === "" && (
            <>
              <Grid item xs={12} sm={12} xl={12}>
                <SoftBox mt={-5} mb={2}>
                  <SoftTypography component="label" variant="caption" fontWeight="bold">
                    Amount to Invest
                  </SoftTypography>
                  <SoftInput
                    type="number"
                    name="investmentAmount"
                    value={investmentAmount}
                    onChange={handleInputChange}
                  />
                </SoftBox>
                <SoftBox display="flex" justifyContent="center" alignItems="center" mb={2}>
                  <SoftButton variant="contained" color="info" xs onClick={handleSubmit}>
                    <SoftTypography variant="caption" color="light">
                      Invest{" "}
                    </SoftTypography>
                  </SoftButton>
                </SoftBox>
                {alert.message && (
                  <SoftAlert
                    color={alert.type}
                    dismissible
                    onClose={() => setAlert({ message: "", type: "" })}
                  >
                    <SoftTypography color="light" variant="caption">
                      {alert.message}
                    </SoftTypography>
                  </SoftAlert>
                )}
                <SoftBox opacity={0.5}>
                  <Divider />
                </SoftBox>
              </Grid>
            </>
          )}
          <Grid item xs={12} sm={12} xl={12}>
            <SoftBox>
              <SoftBox py={1}>
                <SoftTypography variant="caption" fontWeight="bold">
                  Allocation:{" "}
                </SoftTypography>
                <SoftTypography variant="caption" color="secondary" fontWeight="bold" size="xxs">
                  <CurrencyFormatter amount={allocation} />{" "}
                </SoftTypography>
              </SoftBox>
              <SoftBox py={1}>
                <SoftTypography variant="caption" fontWeight="bold">
                  valuation:{" "}
                </SoftTypography>
                <SoftTypography variant="caption" color="secondary" fontWeight="bold" size="xxs">
                  <CurrencyFormatter amount={valuation} />{" "}
                </SoftTypography>
              </SoftBox>
              <SoftBox py={1}>
                <SoftTypography variant="caption" fontWeight="bold">
                  Lead Carry:{" "}
                </SoftTypography>
                <SoftTypography variant="caption" color="secondary" fontWeight="bold" size="xxs">
                  {carry}%{" "}
                </SoftTypography>
              </SoftBox>
              <SoftBox py={1}>
                <SoftTypography variant="caption" fontWeight="bold">
                  lead Investment:{" "}
                </SoftTypography>
                <SoftTypography variant="caption" color="secondary" fontWeight="bold" size="xxs">
                  <CurrencyFormatter amount={leadInvest} />{" "}
                </SoftTypography>
              </SoftBox>
              <SoftBox py={1}>
                <SoftTypography variant="caption" fontWeight="bold">
                  Investment Deadline:{" "}
                </SoftTypography>
                <SoftTypography variant="caption" color="secondary" fontWeight="bold" size="xxs">
                  {lastDate}{" "}
                </SoftTypography>
              </SoftBox>
            </SoftBox>
          </Grid>
        </Grid>
      </SoftBox>
    </Card>
  );
}

DealsInvestCards.propTypes = {
  min: PropTypes.number.isRequired,
  deadline: PropTypes.string.isRequired,
  role: PropTypes.string,
  invAmount: PropTypes.number,
  allocation: PropTypes.number.isRequired,
  valuation: PropTypes.number.isRequired,
  carry: PropTypes.string.isRequired,
  leadInvest: PropTypes.string.isRequired,
  dealID: PropTypes.string.isRequired,
};

export default DealsInvestCards;
