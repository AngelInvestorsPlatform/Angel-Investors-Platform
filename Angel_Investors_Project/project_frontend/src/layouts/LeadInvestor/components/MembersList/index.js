import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useAuthUser } from 'context/authContext';
import ProfileDealList from "examples/Lists/ProfileDealList";


// Images
import team1 from "assets/images/team-1.jpg";
import team2 from "assets/images/team-2.jpg";
import team3 from "assets/images/team-3.jpg";
import team4 from "assets/images/team-4.jpg";

const images = [team1, team2, team3, team4];

function MembersProfileList() {
  const { userData } = useAuthUser();
  const token = userData ? userData.token : "";
  const config = {
    headers: {
      Authorization: `Token ${token}`,
    },
  };

  const [profiles, setProfiles] = useState([]);

  useEffect(() => {
    const fetchSyndicateMemberList = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_DJANGO_API}syndicates/manageSyndicateMembers/`,
          config
        );

        const memberData = response.data.map(member => ({
          image: images[Math.floor(Math.random() * images.length)], // Assign a random image from the images array
          name: member.full_name,
          amount: member.deal_count // If you want to include deal count as "amount"
        }));

        setProfiles(memberData);
      } catch (error) {
        console.error("Error fetching members:", error);
        setProfiles([]); // Handle error by setting profiles to an empty array or show an error message
      }
    };

    fetchSyndicateMemberList();
  }, []); // Empty dependency array ensures this runs only once on component mount

    // Handling rendering based on the data or error state
    if (!profiles) {
        return <ProfileDealList title="Syndicate Members" message="Loading members..." />;
      } else if (profiles.length === 0) {
        return <ProfileDealList title="Syndicate Members" message="No Members.." />;
      } else {
        return <ProfileDealList title="Syndicate Members" profiles={profiles} />;
      }
}

export default MembersProfileList;
