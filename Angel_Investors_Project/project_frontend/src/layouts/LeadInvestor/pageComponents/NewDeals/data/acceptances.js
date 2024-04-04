import { useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

// @mui material components
import Grid from "@mui/material/Grid";
import Icon from "@mui/material/Icon";
import Card from "@mui/material/Card";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions'

// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";
import SoftInput from "components/SoftInput";
import SoftTypography from "components/SoftTypography";
import SoftBadge from 'components/SoftBadge';


// Soft UI Dashboard React base styles
import typography from "assets/theme/base/typography";
import SoftAvatar from "components/SoftAvatar";
import SoftButton from "components/SoftButton";

//images
import logoXD from "assets/images/small-logos/logo-xd.svg";
import logoAtlassian from "assets/images/small-logos/logo-atlassian.svg";
import logoSlack from "assets/images/small-logos/logo-slack.svg";
import logoSpotify from "assets/images/small-logos/logo-spotify.svg";
import logoJira from "assets/images/small-logos/logo-jira.svg";
import logoInvesion from "assets/images/small-logos/logo-invision.svg";

const handlePage = () => {
  // this for view more
};

// Data
function Startup({ image, SU_name, startupProfile }) {
  // Add 'startupProfile' prop for link
  return (
    <SoftBox display="flex" alignItems="center" px={1} py={0.5}>
      <SoftBox mr={2}>
        <SoftAvatar src={image} alt={SU_name} size="sm" variant="rounded" />
      </SoftBox>
      <SoftBox display="flex" flexDirection="column">
        {startupProfile ? ( // Conditionally render link basedon 'to' prop
          <Link to={startupProfile}>
            <SoftTypography variant="button" fontWeight="medium">
              {SU_name}
            </SoftTypography>
          </Link>
        ) : (
          <SoftTypography variant="button" fontWeight="medium">
            {SU_name}
          </SoftTypography>
        )}
      </SoftBox>
    </SoftBox>
  );
}
Startup.propTypes = {
  image: PropTypes.string.isRequired,
  SU_name: PropTypes.string.isRequired,
  startupProfile: PropTypes.string.isRequired,
};
function CEO({ name }) {
    return (
      <SoftTypography variant="caption" fontWeight="medium">
        {name}
      </SoftTypography>
    );
  }
  
  CEO.propTypes = {
    name: PropTypes.string.isRequired,
  };
  
  function Offer({ offerTEXT }) {
    const [open, setOpen] = useState(false);
  
    const handleOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
  
    return (
      <>
        <Link onClick={handleOpen} color="primary">
          Display the offer
        </Link>
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>THE OFFER</DialogTitle>
          <DialogContent>
            <SoftTypography variant="caption" color="secondary">
              This is a long message text box. You can put your offer details or
              any other information you want to display here.
              {offerTEXT}
            </SoftTypography>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Close</Button>
          </DialogActions>
        </Dialog>
      </>
    );
  }
  
  Offer.propTypes = {
    offerTEXT: PropTypes.string,
  };
  
  const Status = ({ response }) => {
    const [open, setOpen] = useState(false);
  
    const handleClose = () => {
      setOpen(false);
    };
  
    const handleReasonClick = () => {
      setOpen(true);
    };
  
    const getColor = () => {
      if (response === "Accepted") {
        return "success";
      } else if (response === "Rejected") {
        return "error";
      }
      return "light"; // You can set a default color or handle other cases as needed
    };
  
    return (
      <>
        <SoftBadge
          variant="contained"
          badgeContent={response}
          color={getColor()}
          size="xs"
          container
        />
        {response === "Rejected" && (
          <>
            &nbsp;
            <Link onClick={handleReasonClick}><Icon>message</Icon></Link>
            <Dialog open={open} onClose={handleClose}>  
              <DialogTitle>Reason for Rejection</DialogTitle>
              <DialogContent>
                <p>Insert reason for rejection here...</p>
              </DialogContent>
              <DialogActions>
                <Button onClick={handleClose}>Close</Button>
              </DialogActions>
            </Dialog>
          </>
        )}
      </>
    );
  };

  Status.propTypes = {
    response: PropTypes.string,
  };
  
  const Add = ({ response }) => {
    const [open, setOpen] = useState(false);
  
    const handleAddClick = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
  
    if (response !== "Accepted") {
      return null; // Do not render anything if response is not "Accepted"
    }

        
    const [selectedFile, setSelectedFile] = useState(null);

    const onFileChange = (event) => {
      const file = event.target.files[0];
      if (!file.type.includes("pdf")) {
        alert("Please select a PDF file!");
        return;
      }
      setSelectedFile(file);
    };
  
    return (
      <>
        <SoftButton color="info" onClick={handleAddClick}>
          <SoftTypography variant="caption" color="light">
            Add To Syndicate
          </SoftTypography>
        </SoftButton>
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>Add to Syndicate</DialogTitle>
          <DialogContent>
            {/* Add content for the dialog here */}
            <Grid container justifyContent="center">
              <Grid item>
                <SoftBox mb={2} mx={2}>
                  <SoftTypography component="label" variant="caption" fontWeight="bold">
                    Startup name
                  </SoftTypography>
                  <SoftInput type="text" name="nameStartup" />
                </SoftBox>
              </Grid>

              <Grid item>
                <SoftBox mb={2} mx={2}>
                  <SoftTypography component="label" variant="caption" fontWeight="bold">
                    Owner
                  </SoftTypography>
                  <SoftInput type="text" name="Owner" />
                </SoftBox>
              </Grid>

              <Grid item>
                <SoftBox mb={2} mx={2}>
                  <SoftTypography component="label" variant="caption" fontWeight="bold">
                    evaluation
                  </SoftTypography>
                  <SoftInput type="text" name="evaluation" />
                </SoftBox>
              </Grid>

              <Grid item>
                <SoftBox mb={2} mx={2}>
                  <SoftTypography component="label" variant="caption" fontWeight="bold">
                    Allocation
                  </SoftTypography>
                  <SoftInput type="text" name="Allocation" />
                </SoftBox>
              </Grid>

              <Grid item>
                <SoftBox mb={2} mx={2}>
                  <SoftTypography component="label" variant="caption" fontWeight="bold">
                    lead`s invest
                  </SoftTypography>
                  <SoftInput type="text" name="leadInvest" />
                </SoftBox>
              </Grid>

              <Grid item>
                <SoftBox mb={2} mx={2}>
                  <SoftTypography component="label" variant="caption" fontWeight="bold">
                    Total Carry
                  </SoftTypography>
                  <SoftInput type="text" name="Total Carry" />
                </SoftBox>
              </Grid>

              <Grid item>
                <SoftBox mb={2} mx={2}>
                  <SoftTypography component="label" variant="caption" fontWeight="bold">
                    min. investment
                  </SoftTypography>
                  <SoftInput type="text" name="minInvestment" />
                </SoftBox>
              </Grid>

              <Grid item>
                <SoftBox mb={2} mx={2}>
                  <SoftTypography component="label" variant="caption" fontWeight="bold">
                    Deadline
                  </SoftTypography>
                  <SoftInput type="Date" name="Deadline" />
                </SoftBox>
              </Grid>
            </Grid>
            {/* Pitch Deck */}
            <Grid container justifyContent="center">
              <Grid item>
                <SoftBox mb={2}>
                  <SoftTypography component="label" variant="caption" fontWeight="bold">
                    Pitch Deck
                  </SoftTypography>

                  <SoftInput
                    type="file"
                    placeholder="Please select a PDF file"
                    // required
                    onChange={onFileChange}
                  />
                  {selectedFile && (
                    <SoftBox>
                      <span style={{ fontSize: "16px", color: "darkpurple" }}>
                        Selected File: {selectedFile.name} - Size: {selectedFile.size} bytes
                      </span>{" "}
                    </SoftBox>
                  )}
                </SoftBox>
              </Grid>
            </Grid>

            {/* the memo start here */}
            <Grid container justifyContent="center">
              <Grid item>
                <SoftBox mb={2} mx={9}>
                  <SoftTypography component="label" variant="caption" fontWeight="bold">
                    Memo
                  </SoftTypography>
                  <TextField
                    fullWidth
                    placeholder="Enter the full details of the deal you want to present to investors"
                    multiline
                    rows={7}
                  />
                </SoftBox>
              </Grid>
            </Grid>

            {/* button */}
            <Grid container justifyContent="center">
              <Grid item >
                <SoftBox
                  mb={3}
                  width="100"
                  display="flex"
                  flex="row"
                  flexWrap="wrap"
                  justifyContent="center"
                >
                  <SoftBox mt={4} mb={1}>
                    <SoftButton
                      variant="gradient"
                      color="info"
                      fullWidth
                      circular
                      style={{ padding: "15px 32px" }}
                    >
                      add deal to Syndicate
                    </SoftButton>
                  </SoftBox>
                </SoftBox>
              </Grid>
            </Grid>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Close</Button>
          </DialogActions>
        </Dialog>
      </>
    );
  };

  Add.propTypes = {
    response: PropTypes.string,
  };
  
  const acceptances = {
    columns2: [
      { name: "Deal Name", align: "left" },
      { name: "Owner", align: "center" },
      { name: "The offer", align: "center" },
      { name: "status", align: "center" },
      { name: " ", align: "center" },
    ],
    rows2: [
      {
        "Deal Name": (
          <Startup image={logoXD} SU_name="Xdreams" startupProfile="/startup" />
        ),
        Owner: <CEO name="ali fahad" />,
        "The offer": <Offer />,
        status: <Status response="Accepted" />,
        " ": <Add response="Accepted" />,
      },
      {
        "Deal Name": (
          <Startup
            image={logoAtlassian}
            SU_name="Aster"
            startupProfile="/startup"
          />
        ),
        Owner: <CEO name="fahad ali" />,
        "The offer": <Offer />,
        status: <Status response="Rejected" />,
        " ": <Add response="Rejected" />,
      },
    ],
  };
export default acceptances;
