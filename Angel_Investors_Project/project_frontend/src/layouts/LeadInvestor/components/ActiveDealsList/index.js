import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useAuthUser } from 'context/authContext';
import ProfileDealList from "examples/Lists/ProfileDealList";

import CurrencyFormatter from 'layouts/investor/pageComponents/YourDeals/data/CurrencyFormatter';

// Images
import logoXD from "assets/images/small-logos/logo-xd.svg";
import logoAtlassian from "assets/images/small-logos/logo-atlassian.svg";
import logoSlack from "assets/images/small-logos/logo-slack.svg";
import logoSpotify from "assets/images/small-logos/logo-spotify.svg";
import logoJira from "assets/images/small-logos/logo-jira.svg";
import logoInvesion from "assets/images/small-logos/logo-invision.svg";

const images = [logoXD, logoAtlassian, logoSlack, logoSpotify, logoJira, logoInvesion];



function ActiveDealsList() {
    const { userData } = useAuthUser();
    const token = userData ? userData.token : "";
    const config = {
      headers: {
        Authorization: `Token ${token}`,
      },
    };
  
    const [profiles, setProfiles] = useState([]);
  
    useEffect(() => {
      const fetchSyndicateDealsList = async () => {
        try {
          const response = await axios.get(
            `${process.env.REACT_APP_DJANGO_API}deals/syndicate-deals/`,
            config
          );
  
          const DealData = response.data.map(Deal => ({
            image: images[Math.floor(Math.random() * images.length)], // Assign a random image from the images array
            name: Deal.startup_name,
            amount: <CurrencyFormatter amount={Deal.allocation}/>
          }));
  
          setProfiles(DealData);
        } catch (error) {
          console.error("Error fetching Deals:", error);
          setProfiles([]); // Handle error by setting profiles to an empty array or show an error message
        }
      };
  
      fetchSyndicateDealsList();
    }, []); // Empty dependency array ensures this runs only once on component mount
  
      // Handling rendering based on the data or error state
      if (!profiles) {
          return <ProfileDealList title="Active Deals In Syndicate" message="Loading Deals..." />;
        } else if (profiles.length === 0) {
          return <ProfileDealList title="Active Deals In Syndicate" message="No Deals.." />;
        } else {
          return <ProfileDealList title="Active Deals In Syndicate" profiles={profiles} />;
        }
  }
  
  export default ActiveDealsList;
  