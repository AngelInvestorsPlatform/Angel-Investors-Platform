import PropTypes from "prop-types";

// @mui material components
import Grid from "@mui/material/Grid";

// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SoftAlert from "components/SoftAlert";

// Soft UI Dashboard React examples
import BlankNavbar from "examples/Navbars/BlankNavbar";
import PageLayout from "examples/LayoutContainers/PageLayout";

// Authentication layout components
import Footer from "layouts/authentication/components/Footer";

function SelectionLayout({ title, description, image, alertBox, children }) {
  return (
    <PageLayout>
      <BlankNavbar
        action={{
          type: "external",
          route: "https://goolge.com",
          label: "search",
          color: "info",
        }}
      />
      <SoftBox
        width="calc(100% - 2rem)"
        minHeight="30vh"
        borderRadius="lg"
        mx={2}
        my={2}
        pt={6}
        pb={10}
        sx={{
          backgroundImage: ({ functions: { linearGradient, rgba }, palette: { gradients } }) =>
            image &&
            `${linearGradient(
              rgba(gradients.dark.main, 0.6),
              rgba(gradients.dark.state, 0.6)
            )}, url(${image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Grid container spacing={3} justifyContent="center" sx={{ textAlign: "center" }}>
          <Grid item xs={10} lg={10} align="center">
            <SoftBox mt={15} mb={1}>
              <SoftTypography
                variant="h1"
                color="info"
                fontWeight="bold"
                align="center"
                textGradient
              >
                {title}
              </SoftTypography>
            </SoftBox>
            <SoftBox>
              <SoftTypography variant="h3" color="info" fontWeight="regular" textGradient>
                {description}
              </SoftTypography>
            </SoftBox>
          </Grid>
        </Grid>
      </SoftBox>
      <SoftBox mb={5} px={22}>
        {alertBox}
      </SoftBox>
      <SoftBox mt={{ xs: 5, lg: 5 }} px={10} width="100%" mx="auto">
        <Grid container spacing={1} justifyContent="center">
          <Grid item xs={7} sm={7} md={9} lg={9} xl={10}>
            {children}
          </Grid>
        </Grid>
      </SoftBox>
      <Footer />
    </PageLayout>
  );
}

// Setting default values for the props of SelectionLayout
SelectionLayout.defaultProps = {
  title: "",
  description: "",
  //   color: "dark"
};

// Typechecking props for the SelectionLayout
SelectionLayout.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string.isRequired,
  alertBox: PropTypes.element,
  children: PropTypes.node.isRequired,
};

export default SelectionLayout;
