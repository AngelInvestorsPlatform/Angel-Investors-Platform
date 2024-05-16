import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useAuthUser } from 'context/authContext';
import ProfileDealList from "examples/Lists/ProfileDealList";

import CurrencyFormatter from 'layouts/investor/pageComponents/YourDeals/data/CurrencyFormatter';

// Images
import Startup1 from "assets/images/users-images/Startup1.png";
import Startup2 from "assets/images/users-images/Startup2.png";
import Startup3 from "assets/images/users-images/Startup3.png";
import Startup4 from "assets/images/users-images/Startup4.png";
import Startup5 from "assets/images/users-images/Startup5.png";
import Startup6 from "assets/images/users-images/Startup6.png";

const images = [Startup1, Startup2, Startup3, Startup4, Startup5, Startup6];



function InvestmentInDeals() {
    const { userData } = useAuthUser();
    const token = userData ? userData.token : "";
    const config = {
      headers: {
        Authorization: `Token ${token}`,
      },
    };
  
    const [profiles, setProfiles] = useState([]);
  
    useEffect(() => {
      const fetchInvestorDealsList = async () => {
        try {
          const response = await axios.get(
            `${process.env.REACT_APP_DJANGO_API}deals/investor-investments/`,
            config
          );
  
          const DealData = response.data.map(Deal  => ({
            image: images[Math.floor(Math.random() * images.length)], // Assign a random image from the images array
            name: Deal.startup_name,
            amount: <CurrencyFormatter amount={Deal.invested_amount}/>
          }));
  
          setProfiles(DealData);
        } catch (error) {
          console.error("Error fetching Deals:", error);
          setProfiles([]); // Handle error by setting profiles to an empty array or show an error message
        }
      };
  
      fetchInvestorDealsList();
    }, []); // Empty dependency array ensures this runs only once on component mount
  
      // Handling rendering based on the data or error state
      if (!profiles) {
          return <ProfileDealList title="Investment in Deals " message="Loading Deals..." />;
        } else if (profiles.length === 0) {
          return <ProfileDealList title="Investment in Deals " message="No Deals.." />;
        } else {
          return <ProfileDealList title="Investment in Deals " profiles={profiles} />;
        }
  }
  
  export default InvestmentInDeals;
  