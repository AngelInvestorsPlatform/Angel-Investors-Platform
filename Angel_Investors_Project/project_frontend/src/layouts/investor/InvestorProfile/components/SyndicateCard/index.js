import React, { useRef } from "react";
import PropTypes from "prop-types";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import SoftBox from "components/SoftBox";
import SoftButton from "components/SoftButton";
import SoftTypography from "components/SoftTypography";
import SyndicateDefaultCard from "examples/Cards/ProjectCards/SyndicateDefaultCard";
import "./SyndicateCard.css"; // Import CSS file for styling


// Images
import Startup1 from "assets/images/users-images/Startup1.png";
import Startup2 from "assets/images/users-images/Startup2.png";
import Startup3 from "assets/images/users-images/Startup3.png";
import Startup4 from "assets/images/users-images/Startup4.png";
import Startup5 from "assets/images/users-images/Startup5.png";
import Startup6 from "assets/images/users-images/Startup6.png";

const images = [Startup1, Startup2, Startup3, Startup4, Startup5, Startup6];


function SyndicateCard({ Syndicate }) {
  const containerRef = useRef(null);

  const handleScroll = (direction) => {
    if (containerRef.current) {
      const container = containerRef.current;
      const scrollAmount = 250; // Adjust as needed

      if (direction === "left") {
        container.scrollLeft -= scrollAmount;
      } else if (direction === "right") {
        container.scrollLeft += scrollAmount;
      }
    }
  };
  // Ensure Syndicate is an array
  const syndicates = Array.isArray(Syndicate) ? Syndicate : [];

  return (
    <SoftBox mb={3}>
      <Card>
        <SoftBox pt={3} px={3}>
          <SoftBox mb={0.5}>
            <SoftTypography variant="h5" fontWeight="bold">
              Syndicate
            </SoftTypography>
          </SoftBox>
          <SoftBox mb={1}>
            <SoftTypography variant="button" fontWeight="regular" color="text">
              The syndicate this investor joined
            </SoftTypography>
          </SoftBox>
        </SoftBox>

        {syndicates.length > 0 ?(
          <SoftBox py={3} px={8}>
            <Grid container>
              <SoftBox p={2} className="syndicate-container" ref={containerRef}>
                {syndicates.map((syndicate, index) => (
                  <Grid item xs={12} md={6} xl={4} key={index} className="syndicate-item">
                    <SyndicateDefaultCard
                      image={images[index % images.length]} 
                      title={syndicate.syndicate_name}
                      sectors={syndicate.sectors.split(", ")}
                      lead={syndicate.lead_name}
                      description={syndicate.about}
                      action={{
                        type: "internal",
                        route: "/investor/profile",
                        color: "info",
                        label: "view syndicate",
                      }}
                    />
                  </Grid>
                ))}
              </SoftBox>
            </Grid>

            <SoftButton className="scroll-btn left" onClick={() => handleScroll("left")}>
              &lt;
            </SoftButton>
            <SoftButton className="scroll-btn right" onClick={() => handleScroll("right")}>
              &gt;
            </SoftButton>
          </SoftBox>
        ) : (
          <SoftBox my={2}>
          <SoftTypography variant="h6" color="secondary" align="center">
              There is no syndicate that you have joined.
          </SoftTypography>
          </SoftBox>
        )}
      </Card>
    </SoftBox>
  );
}

SyndicateCard.propTypes = {
  Syndicate: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default SyndicateCard;
