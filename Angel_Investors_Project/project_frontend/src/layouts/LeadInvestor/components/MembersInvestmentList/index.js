import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import { useAuthUser } from "context/authContext";

// @mui material components
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Icon from "@mui/material/Icon";

import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SoftBadge from "components/SoftBadge";

import ProfileDealList from "examples/Lists/ProfileDealList";
import CurrencyFormatter from "layouts/investor/pageComponents/YourDeals/data/CurrencyFormatter";

// Images
import team1 from "assets/images/team-1.jpg";
import team2 from "assets/images/team-2.jpg";
import team3 from "assets/images/team-3.jpg";
import team4 from "assets/images/team-4.jpg";

const images = [team1, team2, team3, team4];

function MembersInvestmentList({ DealID }) {
  const { userData } = useAuthUser();
  const token = userData ? userData.token : "";
  const config = {
    headers: {
      Authorization: `Token ${token}`,
    },
  };

  const [profiles, setProfiles] = useState([]);
  const [TotalInvestment, setTotal] = useState();

  useEffect(() => {
    const fetchDealsMemberList = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_DJANGO_API}deals/investments-in-deals/${DealID}/`,
          config
        );

        const memberData = response.data.investments.map((member) => ({
          image: images[Math.floor(Math.random() * images.length)], // Assign a random image from the images array
          name: member.investor_name,
          amount: (
            <SoftTypography variant="button" fontWeight="medium">
              <CurrencyFormatter amount={member.invested_amount} />
            </SoftTypography>
          ),
        }));

        setProfiles(memberData);
        setTotal(response.data.total_invested);
      } catch (error) {
        console.error("Error fetching members:", error);
        setProfiles([]); // Handle error by setting profiles to an empty array or show an error message
      }
    };

    fetchDealsMemberList();
  }, []); // Empty dependency array ensures this runs only once on component mount

  // Handling rendering based on the data or error state
  if (!profiles) {
    return <ProfileDealList title="Investors in this deal" message="Loading members..." />;
  } else if (profiles.length === 0) {
    return (
      <ProfileDealList title="Investors in this deal" message="No Investment in this deal.." />
    );
  } else {
    return (
      <Grid container spacing={3} alignItems="center">
        <Grid item xs={12} md={12} xl={12}>
          <Card sx={{ height: "100%" }}>
            <Grid container alignItems="center">
              <Grid item ml={2}>
                <SoftBox 
                  variant="gradient"
                  bgColor="info"
                  color="white"
                  width="4rem"
                  height="4rem"
                  marginLeft="auto"
                  borderRadius="md"
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  shadow="md"
                >
                  <Icon fontSize="large" color="inherit">
                    paid
                  </Icon>
                </SoftBox>
              </Grid>
              <Grid item >
                <SoftBox p={4}>
                  <SoftTypography mb={1} variant="h5" fontWeight="medium" textTransform="capitalize">
                    Total Investment In this deal
                  </SoftTypography>
                      <SoftTypography variant="h4" fontWeight="bold">
                        <CurrencyFormatter amount={TotalInvestment} />
                      </SoftTypography>
                </SoftBox>
              </Grid>
            </Grid>
          </Card>
        </Grid>
        <Grid item xs={12} md={12} xl={12}>
          <ProfileDealList title="Investors in this deal" profiles={profiles} />
        </Grid>
      </Grid>
    );
  }
}

MembersInvestmentList.propTypes = {
  DealID: PropTypes.string.isRequired,
};

export default MembersInvestmentList;
