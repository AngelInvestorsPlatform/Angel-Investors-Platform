import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { styled } from '@mui/material/styles';



// Soft UI Dashboard React context
import { useSoftUIController } from "context";
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";

import { card, cardContent, cardIconBox, cardIcon } from "examples/Sidenav/styles/sidenavCard";


// Optionally create a custom styled version of the ToggleButton
const StyledToggleButton = styled(ToggleButton)({
    '&.Mui-selected, &.Mui-selected:hover': {
      color: 'white',
      border: '1px solid ',
      borderRadius: '10px',
      backgroundColor: '#B67AA6',  // Use the state color when selected
      fontWeight: 'bold',
    },
    '&:hover': {
      color: 'white',
      border: '1px solid ',
      borderRadius: '10px',
      backgroundColor: '#A67895',  //  A slightly darker shade of the state color for hover
    },
    });


export default function ColorToggleButton() {
  const [controller] = useSoftUIController();
  const { miniSidenav, sidenavColor } = controller;

  

  const [alignment, setAlignment] = useState("investor");
  const navigate = useNavigate(); // Hook from React Router to handle navigation

  const handleChange = (event, newAlignment) => {
    if (newAlignment !== null) {
        setAlignment(newAlignment);
      }
    // Navigate based on the new alignment value
    if (newAlignment === "investor") {
      navigate("/investor"); // Assuming '/investor' is the route you want to navigate to
    } else if (newAlignment === "lead") {
      navigate("/LeadInvestor"); // Assuming '/lead' is the route you want to navigate to
    }
  };

  return (
    <SoftBox>
      <Card sx={(theme) => card(theme, { miniSidenav })}>
        <CardContent sx={(theme) => cardContent(theme, { sidenavColor })}>
          <ToggleButtonGroup 
                sx={{
                    backgroundColor: '#ffff', // Light background for the group
                    border: '1px solid ', // Light border around the group
                    borderRadius: '10px', // Rounded corners
                    boxShadow: '0 3px 5px 2px rgba(54, 48, 98, .3)', // Subtle shadow for depth
                  }}
          color="dark"  value={alignment} exclusive onChange={handleChange}>
            <ToggleButton value="investor">Investor</ToggleButton>
            <ToggleButton value="lead">Lead</ToggleButton>
          </ToggleButtonGroup>
        </CardContent>
      </Card>
    </SoftBox>
  );
}
