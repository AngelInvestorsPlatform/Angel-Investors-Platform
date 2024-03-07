/**
=========================================================
* Soft UI Dashboard React - v4.0.1
=========================================================

* Product Page: https://www.creative-tim.com/product/soft-ui-dashboard-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Grid from "@mui/material/Grid";

// @mui icons
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
//import PinterestIcon from "@mui/icons-material/Pinterest";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import logo from "assets/images/logo-ct.svg";

function Footer() {
  return (
    <SoftBox component="footer" py={10}>
      <Grid item xs={10} lg={8}>
        <SoftBox display="flex" justifyContent="center" flexWrap="wrap" mb={3}  mt={3}>
          <SoftBox justifyContent="center" component="img" src={logo} alt="warQ" width="15%" />
        </SoftBox>
      </Grid>

      <Grid container justifyContent="center">
        <Grid item xs={6} lg={7}>
          <SoftBox display="flex" sx={{ textAlign: "center" }} flexWrap="wrap" mb={2}>
            <SoftTypography component="a" variant="body2" color="black" justifyContent="center">
              warQ in an Angel investor platform that simplifies communication and financing between
              investors and startups. The platform will enable startups to showcase their innovative
              ideas and facilitate direct communication and collaboration with interested investors.
            </SoftTypography>
          </SoftBox>
        </Grid>
      </Grid>

      <Grid container justifyContent="center">
        <Grid item xs={10} lg={8}>
          <SoftBox display="flex" justifyContent="center" flexWrap="wrap" mb={3}>
            <SoftBox mr={{ xs: 2, lg: 3, xl: 6 }}>
              <SoftTypography
                component="a"
                href="/authentication/log-in"
                variant="body2"
                color="secondary"
              >
                Get started
              </SoftTypography>
            </SoftBox>
            <SoftBox mr={{ xs: 2, lg: 3, xl: 6 }}>
              <SoftTypography component="a" href="/landing" variant="body2" color="secondary">
                Support
              </SoftTypography>
            </SoftBox>
            <SoftBox mr={{ xs: 2, lg: 3, xl: 6 }}>
              <SoftTypography component="a" href="/landing" variant="body2" color="secondary">
                About Us
              </SoftTypography>
            </SoftBox>
            <SoftBox mr={{ xs: 0, lg: 3, xl: 6 }}>
              <SoftTypography component="a" href="#" variant="body2" color="secondary">
                Privacy Policy
              </SoftTypography>
            </SoftBox>
            <SoftBox mr={{ xs: 2, lg: 3, xl: 6 }}>
              <SoftTypography component="a" href="#" variant="body2" color="secondary">
                Terms & Conditions
              </SoftTypography>
            </SoftBox>
            <SoftBox mr={{ xs: 2, lg: 3, xl: 6 }}>
              <SoftTypography component="a" href="#" variant="body2" color="secondary">
                Blog
              </SoftTypography>
            </SoftBox>
          </SoftBox>
        </Grid>
      </Grid>

      <Grid container justifyContent="center">
        <Grid item xs={12} lg={8}>
          <SoftBox display="flex" justifyContent="center" mt={1} mb={3}>
            <SoftBox mr={3} color="secondary">
              <FacebookIcon fontSize="large" />
            </SoftBox>
            <SoftBox mr={3} color="secondary">
              <TwitterIcon fontSize="large" />
            </SoftBox>
            <SoftBox mr={3} color="secondary">
              <InstagramIcon fontSize="large" />
            </SoftBox>
            <SoftBox color="secondary">
              <LinkedInIcon fontSize="large" />
            </SoftBox>
          </SoftBox>
        </Grid>
        <Grid item xs={12} lg={8} sx={{ textAlign: "center" }}>
          <SoftTypography variant="body2" color="secondary"></SoftTypography>
        </Grid>
      </Grid>
    </SoftBox>
  );
}

export default Footer;
