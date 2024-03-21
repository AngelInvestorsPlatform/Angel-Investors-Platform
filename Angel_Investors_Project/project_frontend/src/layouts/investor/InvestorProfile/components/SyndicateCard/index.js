import React, { useRef } from "react";
import PropTypes from "prop-types";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import SoftBox from "components/SoftBox";
import SoftButton from "components/SoftButton";
import SoftTypography from "components/SoftTypography";
import SyndicateDefaultCard from "examples/Cards/ProjectCards/SyndicateDefaultCard";
import "./SyndicateCard.css"; // Import CSS file for styling
import { Info } from "@mui/icons-material";

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


        <SoftBox py={3} px={8}>
          <Grid container>
            <SoftBox p={2} className="syndicate-container" ref={containerRef}>
              {Syndicate.map((syndicate, index) => (
                <Grid item xs={12} md={6} xl={4} key={index} className="syndicate-item">
                  <SyndicateDefaultCard
                    image={syndicate.image}
                    title={syndicate.title}
                    sectors={syndicate.sector}
                    lead={syndicate.lead}
                    description={syndicate.description}
                    action={syndicate.action}
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
      </Card>
    </SoftBox>
  );
}

SyndicateCard.propTypes = {
  Syndicate: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default SyndicateCard;
