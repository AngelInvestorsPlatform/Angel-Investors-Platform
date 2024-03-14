/* eslint-disable react/prop-types */
// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SoftAvatar from "components/SoftAvatar";

// Images
import syndicate2 from "assets/images/syndicate-2.jpg";
import syndicate1 from "assets/images/syndicate-1.jpg";
import syndicate4 from "assets/images/syndicate-4.jpg";
import syndicate3 from "assets/images/syndicate-3.jpg";
import syndicate5 from "assets/images/syndicate-5.jpg";
import syndicate6 from "assets/images/syndicate-6.jpg";
function Syndicate({ image, S_name }) {
  return (
    <SoftBox display="flex" alignItems="center" px={1} py={0.5}>
      <SoftBox mr={2}>
        <SoftAvatar src={image} alt={S_name} size="sm" variant="rounded" />
      </SoftBox>
      <SoftBox display="flex" flexDirection="column">
        <SoftTypography variant="button" fontWeight="medium">
          {S_name}
        </SoftTypography>
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

const offersTableData = {
  columns: [
    { name: "Syndicate name", align: "left" },
    { name: "Syndicate lead", align: "left" },
    { name: "About", align: "center" },
    { name: "offered amount", align: "center" },
    { name: "action", align: "center" },
  ],

  rows: [
    {
      "Syndicate name": <Syndicate image={syndicate2} S_name="Wingspan Syndicate" />,
      "Syndicate lead": <S_Lead lead_name="Abdullah Mohammed" email="AbdullahMohammed@gmail.com" />,
      About: (
        <SoftTypography variant="caption" color="secondary" fontWeight="medium">
          Elevating startups with expert support and investment for soaring success.
        </SoftTypography>
      ),
      "offered amount": (
        <SoftTypography variant="caption" color="secondary" fontWeight="medium">
          $500,500
        </SoftTypography>
      ),
      action: (
        <div>
          <button>...</button>
        </div>
      ),
    },
    {
      "Syndicate name": <Syndicate image={syndicate1} S_name="Angels investors" />,
      "Syndicate lead": <S_Lead lead_name="Michael Levi" email="michael.L@gmail.com" />,
      About: (
        <SoftTypography variant="caption" color="secondary" fontWeight="medium">
          Provide early-stage funding and mentorship to startups, fostering growth and innovation.
        </SoftTypography>
      ),
      "offered amount": (
        <SoftTypography variant="caption" color="secondary" fontWeight="medium">
          $300,000
        </SoftTypography>
      ),
      action: (
        <div>
          <button>...</button>
        </div>
      ),
    },
    {
      "Syndicate name": <Syndicate image={syndicate4} S_name="Archangel Investors" />,
      "Syndicate lead": <S_Lead lead_name="Mohammed Khaled" email="Abdallah.M@hotmail.com" />,
      About: (
        <SoftTypography variant="caption" color="secondary" fontWeight="medium">
          Provides strategic support and funding for promising ventures.
        </SoftTypography>
      ),
      "offered amount": (
        <SoftTypography variant="caption" color="secondary" fontWeight="medium">
          $300,500
        </SoftTypography>
      ),
      action: (
        <div>
          <button>...</button>
        </div>
      ),
    },
    {
      "Syndicate name": <Syndicate image={syndicate3} S_name="Syndicate" />,
      "Syndicate lead": <S_Lead lead_name="someone A" email="SomeoneA@gmail.com" />,
      About: (
        <SoftTypography variant="caption" color="secondary" fontWeight="medium">
          Amplifying investment opportunities through collaborative capital deployment.
        </SoftTypography>
      ),
      "offered amount": (
        <SoftTypography variant="caption" color="secondary" fontWeight="medium">
          $400,000
        </SoftTypography>
      ),
      action: (
        <div>
          <button>...</button>
        </div>
      ),
    },
    {
      "Syndicate name": <Syndicate image={syndicate5} S_name="syndicate capital" />,
      "Syndicate lead": <S_Lead lead_name="Mohammed " email="Mohammed@outlook.sa" />,
      About: (
        <SoftTypography variant="caption" color="secondary" fontWeight="medium">
          Leverages collective investment power to fuel growth and innovation in diverse ventures.
        </SoftTypography>
      ),
      "offered amount": (
        <SoftTypography variant="caption" color="secondary" fontWeight="medium">
          $200,000
        </SoftTypography>
      ),
      action: (
        <div>
          <button>...</button>
        </div>
      ),
    },
    {
      "Syndicate name": <Syndicate image={syndicate6} S_name="Syndicate" />,
      "Syndicate lead": <S_Lead lead_name="Miriam Eric" email="miriam0E@gmail.com" />,
      About: (
        <SoftTypography variant="caption" color="secondary" fontWeight="medium">
          Elevating startups with expert support and investment for soaring success.
        </SoftTypography>
      ),
      "offered amount": (
        <SoftTypography variant="caption" color="secondary" fontWeight="medium">
          $200,500
        </SoftTypography>
      ),
      action: (
        <div>
          <button>...</button>
        </div>
      ),
    },
  ],
};

export default offersTableData;
