/* eslint-disable react/prop-types */
// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";
import Grid from "@mui/material/Grid";
import SoftTypography from "components/SoftTypography";
import SoftAvatar from "components/SoftAvatar";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close"; // Using CloseIcon for "X"
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

// Images
import team1 from "assets/images/team-1.jpg";
import team2 from "assets/images/team-2.jpg";
import team3 from "assets/images/team-3.jpg";
import team4 from "assets/images/team-4.jpg";
function Investor({ image, I_name, email }) {
  return (
    <SoftBox display="flex" alignItems="center" px={1} py={0.5}>
      <SoftBox mr={2}>
        <SoftAvatar src={image} alt={I_name} size="sm" variant="rounded" />
      </SoftBox>
      <SoftBox display="flex" flexDirection="column">
        <SoftTypography variant="caption" fontWeight="medium">
          {I_name}
        </SoftTypography>
        <SoftTypography variant="caption" color="secondary">
          {email}
        </SoftTypography>
      </SoftBox>
    </SoftBox>
  );
}

const joinTableData = {
  columns: [
    { name: "Investor Name", align: "left" },
    { name: "Sector", align: "left" },
    { name: "About", align: "left" },
    { name: "Action", align: "center" },
  ],

  rows: [
    {
      "Investor Name": (
        <Investor image={team2} I_name="Abdullah Mohammed" email="AbdullahM@gmail.com" />
      ),
      Sector: (
        <SoftTypography
          variant="caption"
          color="secondary"
          fontWeight="medium"
          style={{ display: "block" }}
        >
          E-commerce, AI
        </SoftTypography>
      ),
      About: (
        <SoftTypography
          variant="caption"
          color="secondary"
          fontWeight="medium"
          style={{ display: "block" }}
        >
          investor{" "}
        </SoftTypography>
      ),
      Action: (
        <Grid container spacing={1} justifyContent="flex-end">
          <Grid item>
            <IconButton color="error" aria-label="Reject">
              <CloseIcon fontSize="small" />
            </IconButton>
          </Grid>
          <Grid item>
            <IconButton color="success" aria-label="Accept">
              <CheckCircleIcon fontSize="small" />
            </IconButton>
          </Grid>
        </Grid>
      ),
    },
    {
      "Investor Name": <Investor image={team1} I_name="Rei Levi" email="Rei.L@gmail.com" />,
      Sector: (
        <SoftTypography
          variant="caption"
          color="secondary"
          fontWeight="medium"
          style={{ display: "block" }}
        >
          LegalTech, Helathcare
        </SoftTypography>
      ),
      About: (
        <SoftTypography variant="caption" color="secondary" fontWeight="medium">
          investor
        </SoftTypography>
      ),
      Action: (
        <Grid container spacing={1} justifyContent="flex-end">
          <Grid item>
            <IconButton color="error" aria-label="Reject">
              <CloseIcon fontSize="small" />
            </IconButton>
          </Grid>
          <Grid item>
            <IconButton color="success" aria-label="Accept">
              <CheckCircleIcon fontSize="small" />
            </IconButton>
          </Grid>
        </Grid>
      ),
    },
    {
      "Investor Name": (
        <Investor image={team3} I_name="Mohammed Khaled" email="Abdallah.M@hotmail.com" />
      ),
      Sector: (
        <SoftTypography
          variant="caption"
          color="secondary"
          fontWeight="medium"
          style={{ display: "block" }}
        >
          Biotech, Education
        </SoftTypography>
      ),
      About: (
        <SoftTypography variant="caption" color="secondary" fontWeight="medium">
          {" "}
          investor{" "}
        </SoftTypography>
      ),
      Action: (
        <Grid container spacing={1} justifyContent="flex-end">
          <Grid item>
            <IconButton color="error" aria-label="Reject">
              <CloseIcon fontSize="small" />
            </IconButton>
          </Grid>
          <Grid item>
            <IconButton color="success" aria-label="Accept">
              <CheckCircleIcon fontSize="small" />
            </IconButton>
          </Grid>
        </Grid>
      ),
    },
    {
      "Investor Name": <Investor image={team4} I_name="Someone A" email="SomeoneA@gmail.com" />,
      Sector: (
        <SoftTypography
          variant="caption"
          color="secondary"
          fontWeight="medium"
          style={{ display: "block" }}
        >
          Market, Information Technology
        </SoftTypography>
      ),
      About: (
        <SoftTypography variant="caption" color="secondary" fontWeight="medium">
          {" "}
          investor
        </SoftTypography>
      ),
      Action: (
        <Grid container spacing={1} justifyContent="flex-end">
          <Grid item>
            <IconButton color="error" aria-label="Reject">
              <CloseIcon fontSize="small" />
            </IconButton>
          </Grid>
          <Grid item>
            <IconButton color="success" aria-label="Accept">
              <CheckCircleIcon fontSize="small" />
            </IconButton>
          </Grid>
        </Grid>
      ),
    },
    {
      "Investor Name": <Investor image={team2} I_name="Mohammed" email="Mohammed@outlook.sa" />,
      Sector: (
        <SoftTypography
          variant="caption"
          color="secondary"
          fontWeight="medium"
          style={{ display: "block" }}
        >
          ICT, AI
        </SoftTypography>
      ),
      About: (
        <SoftTypography variant="caption" color="secondary" fontWeight="medium">
          investor
        </SoftTypography>
      ),
      Action: (
        <Grid container spacing={1} justifyContent="flex-end">
          <Grid item>
            <IconButton color="error" aria-label="Reject">
              <CloseIcon fontSize="small" />
            </IconButton>
          </Grid>
          <Grid item>
            <IconButton color="success" aria-label="Accept">
              <CheckCircleIcon fontSize="small" />
            </IconButton>
          </Grid>
        </Grid>
      ),
    },
    {
      "Investor Name": <Investor image={team4} I_name="Miriam Eric" email="miriam0E@gmail.com" />,
      Sector: (
        <SoftTypography
          variant="caption"
          color="secondary"
          fontWeight="medium"
          style={{ display: "block" }}
        >
          Finance, Market
        </SoftTypography>
      ),
      About: (
        <SoftTypography variant="caption" color="secondary" fontWeight="medium">
          {" "}
          investor{" "}
        </SoftTypography>
      ),
      Action: (
        <Grid container spacing={1} justifyContent="flex-end">
          <Grid item>
            <IconButton color="error" aria-label="Reject">
              <CloseIcon fontSize="small" /> {/* "X" icon */}
            </IconButton>
          </Grid>
          <Grid item>
            <IconButton color="success" aria-label="Accept">
              <CheckCircleIcon fontSize="small" /> {/* Checkmark (✓) icon */}
            </IconButton>
          </Grid>
        </Grid>
      ),
    },
  ],
};

export default joinTableData;
