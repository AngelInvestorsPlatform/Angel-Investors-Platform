import React from "react";

import PropTypes from "prop-types";

import Tooltip from "@mui/material/Tooltip";
import SoftAvatar from "components/SoftAvatar";

import team1 from "assets/images/users-images/team1.png";
import team2 from "assets/images/users-images/team2.png";
import team3 from "assets/images/users-images/team3.png";
import team4 from "assets/images/users-images/team4.png";
import team5 from "assets/images/users-images/team5.png";
import SoftTypography from "components/SoftTypography";

const images = [team1, team2, team3, team4];

/*   // Placeholder image
  const defaultImage = images[Math.floor(Math.random() * images.length)];
  // Converts member data from API format to the expected format for avatars
 
function convertMembersToAvatarFormat (membersList) {
  return membersList.map(member => [
    defaultImage,  // Use default image for all, adjust if image data becomes available
    member.full_name
  ]);
}; */

function MemberAvatars({ members }) {

  // Placeholder image
  const defaultImage = images[Math.floor(Math.random() * images.length)];
  // Converts member data from API format to the expected format for avatars
 
    // Converts member data from API format to the expected format for avatars
  const convertMembersToAvatarFormat = (membersList) => {
    return membersList.map(member => [
      defaultImage,  // Use default image for all, adjust if image data becomes available
      member.full_name
    ]);
  };

  // Process members data
  const avatarData = convertMembersToAvatarFormat(members);
  
  if(avatarData.length == 0){
    return (
      <SoftTypography variant="caption" color="secondary" sx={{ fontSize: "0.8rem" }}>No members</SoftTypography>
    )

  } else if (avatarData.length <= 5) {
    return avatarData.map(([image, full_name]) => (
      <Tooltip key={full_name} title={full_name} placement="bottom">
        <SoftAvatar
          src={image || defaultImage}
          alt={full_name}
          size="xs"
          sx={{
            border: ({ borders: { borderWidth }, palette: { white } }) =>
              `${borderWidth[2]} solid ${white.main}`,
            cursor: "pointer",
            position: "relative",
            "&:not(:first-of-type)": {
              ml: -1.25,
            },
            "&:hover, &:focus": {
              zIndex: "10",
            },
          }}
        />
      </Tooltip>
    ));
  } else {
    const remainingMembers = avatarData.length - 4;
    const visibleMembers = avatarData.slice(0, 4);
    return (
      <>
        {visibleMembers.map(([image, full_name]) => (
          <Tooltip key={full_name} title={full_name} placement="bottom">
            <SoftAvatar
              src={image || defaultImage}
              alt={full_name}
              size="xs"
              sx={{
                border: ({ borders: { borderWidth }, palette: { white } }) =>
                  `${borderWidth[2]} solid ${white.main}`,
                cursor: "pointer",
                position: "relative",
                "&:not(:first-of-type)": {
                  ml: -1.25,
                },
                "&:hover, &:focus": {
                  zIndex: "10",
                },
              }}
            />
          </Tooltip>
        ))}
        <Tooltip title={`${remainingMembers} other members`} placement="bottom">
          <SoftAvatar
            bgColor="secondary"
            alt={`+${remainingMembers}`}
            size="xs"
            sx={{
              border: ({ borders: { borderWidth }, palette: { white } }) =>
                `${borderWidth[2]} solid ${white.main}`,
              cursor: "pointer",
              position: "relative",
              "&:not(:first-of-type)": {
                ml: -1.25,
              },
              "&:hover, &:focus": {
                zIndex: "10",
              },
            }}
          >
            +{remainingMembers}
          </SoftAvatar>
        </Tooltip>
      </>
    );
  }
}
MemberAvatars.propTypes = {
  members: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MemberAvatars;
