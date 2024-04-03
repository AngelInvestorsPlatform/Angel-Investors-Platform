/* eslint-disable react/prop-types */
// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SoftAvatar from "components/SoftAvatar";
import { Link } from "react-router-dom";
import React from 'react';
import RejectPopup from "./RejectPopup";

// Images
import syndicate2 from "assets/images/syndicate-2.jpg";
import syndicate1 from "assets/images/syndicate-1.jpg";
import syndicate4 from "assets/images/syndicate-4.jpg";
import syndicate3 from "assets/images/syndicate-3.jpg";
import syndicate5 from "assets/images/syndicate-5.jpg";
import syndicate6 from "assets/images/syndicate-6.jpg";
function Syndicate({ image, S_name, to }) { // Add 'to' prop for link
  return (
    <SoftBox display="flex" alignItems="center" px={1} py={0.5}>
      <SoftBox mr={2}>
        <SoftAvatar src={image} alt={S_name} size="sm" variant="rounded" />
      </SoftBox>
      <SoftBox display="flex" flexDirection="column">
        {to ? ( 
          <Link to={to}>
            <SoftTypography variant="button" fontWeight="medium">
              {S_name}
            </SoftTypography>
          </Link>
        ) : (
          <SoftTypography variant="button" fontWeight="medium">
            {S_name}
          </SoftTypography>
        )}
      </SoftBox>
    </SoftBox>
  );
}

function S_Lead({ lead_name, email }) {
  return (
    <SoftBox display="flex" flexDirection="column">
      <SoftTypography variant="caption" fontWeight="medium" color="text">
        {lead_name}
      </SoftTypography>
      <SoftTypography variant="caption" color="secondary">
        {email}
      </SoftTypography>
    </SoftBox>
  );
}

const ActionButtons = () => {
  return <RejectPopup />;
};

const offersTableData = {
  columns: [
    { name: "Syndicate name", align: "left" },
    { name: "Syndicate lead", align: "left" },
    { name: "The offer", align: "left" },
    { name: "action", align: "center" },
  ],

  rows: [
    {
      "Syndicate name": (
        <Syndicate image={syndicate2} S_name="Wingspan Syndicate" to="/investor/yourSyndicates" /> 
      ),
      "Syndicate lead": <S_Lead lead_name="Abdullah Mohammed" email="AbdullahMohammed@gmail.com" />,
      "The offer": (
        <SoftTypography variant="caption" color="secondary" fontWeight="medium" style={{ display: "block" }}>
         Allocation $200,500
        </SoftTypography>
      ),
      action: <ActionButtons />,
    },
    {
      "Syndicate name":( <Syndicate image={syndicate1} S_name="Angels investors" to="/investor/yourSyndicates"/>
      ),
      "Syndicate lead": <S_Lead lead_name="Michael Levi" email="michael.L@gmail.com" />,
      "The offer": (
        <SoftTypography variant="caption" color="secondary" fontWeight="medium">
         Allocation $300,000
        </SoftTypography>
      ),
      action: <ActionButtons />,
    },
    {
      "Syndicate name": ( <Syndicate image={syndicate4} S_name="Archangel Investors" to="/investor/yourSyndicates" />
      ),
      "Syndicate lead": <S_Lead lead_name="Mohammed Khaled" email="Abdallah.M@hotmail.com" />,
      "The offer": (
        <SoftTypography variant="caption" color="secondary" fontWeight="medium">
          Allocation $300,500
        </SoftTypography>
      ),
      action: <ActionButtons />,
    },
    {
      "Syndicate name":( <Syndicate image={syndicate3} S_name="Syndicate" to="/investor/yourSyndicates" />
      ),
      "Syndicate lead": <S_Lead lead_name="someone A" email="SomeoneA@gmail.com" />,
      "The offer": (
        <SoftTypography variant="caption" color="secondary" fontWeight="medium">
         Allocation $400,000
        </SoftTypography>
      ),
       action: <ActionButtons />,
    },
    {
      "Syndicate name":( <Syndicate image={syndicate5} S_name="syndicate capital" to="/investor/yourSyndicates"/>
      ),
      "Syndicate lead": <S_Lead lead_name="Mohammed " email="Mohammed@outlook.sa" />,
      "The offer": (
        <SoftTypography variant="caption" color="secondary" fontWeight="medium">
          Allocation $200,000
        </SoftTypography>
      ),
      action: <ActionButtons />,
    },
    {
      "Syndicate name":( <Syndicate image={syndicate6} S_name="Syndicate" to="/investor/yourSyndicates"/>
      ),
      "Syndicate lead": <S_Lead lead_name="Miriam Eric" email="miriam0E@gmail.com" />,
      "The offer": (
        <SoftTypography variant="caption" color="secondary" fontWeight="medium">
         Allocation $200,500
        </SoftTypography>
      ),
      action: <ActionButtons />,
    },
  ],
};

export default offersTableData;
