import PropTypes from "prop-types";

// @mui material components
import Grid from "@mui/material/Grid";

// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";

// Soft UI Dashboard React examples
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import PageLayout from "examples/LayoutContainers/PageLayout";

// Authentication layout components
import Footer from "layouts/authentication/components/Footer";

function SelectionLayout({ title, description, image, children }) {
  return (
    <PageLayout>
      <DefaultNavbar
        action={{
          type: "external",
          route: "https://creative-tim.com/product/soft-ui-dashboard-react",
          label: "free download",
          color: "info",
        }}
      />{" "}
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
          <Grid item xs={10} lg={10} Align="center">
            <SoftBox mt={15} mb={1}>
              <SoftTypography
                variant="h1"
                color="info"
                fontWeight="bold"
                Align="center"
                textGradient
              >
                {" "}
                {title}{" "}
              </SoftTypography>{" "}
            </SoftBox>{" "}
            <SoftBox>
              <SoftTypography variant="h3" color="info" fontWeight="regular" textGradient>
                {" "}
                {description}{" "}
              </SoftTypography>{" "}
            </SoftBox>{" "}
          </Grid>{" "}
        </Grid>{" "}
      </SoftBox>
      <SoftBox mt={{ xs: 5, lg: 5 }} px={1} width="calc(100% - 2rem)" mx="auto">
        <Grid container spacing={1} justifyContent="center">
          <Grid item xs={11} sm={10} md={6} lg={8} xl={6}>
            {" "}
            {children}{" "}
          </Grid>{" "}
        </Grid>{" "}
      </SoftBox>{" "}
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
  children: PropTypes.node.isRequired,
};

export default SelectionLayout;
