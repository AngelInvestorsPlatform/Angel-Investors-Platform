// react-router components
import { Link } from "react-router-dom";

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
import Card from "@mui/material/Card";
import MuiLink from "@mui/material/Link";
import Grid from "@mui/material/Grid";

// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SoftAvatar from "components/SoftAvatar";


function MultiAuthorsCard({ image, category, title, description, author, author2, author3, author4, author5, action }) {
    return (
      <Card>
        <SoftBox mt={2} mx={2}>
          {action.type === "internal" ? (
            <Link to={action.route}>
              <SoftBox
                component="img"
                src={image}
                alt={title}
                width="90%"
                sx={{
                  display: "block",
                  margin: "auto",
                  marginTop: "30px",
                  borderRadius: "lg",
                }}
              />
            </Link>
          ) : (
            <MuiLink href={action.route} target="_blank" rel="noreferrer">
              <SoftBox
                component="img"
                src={image}
                alt={title}
                width="90%"
                sx={{
                  display: "block",
                  margin: "auto",
                  marginTop: "30px",
                  borderRadius: "lg",
                }}
              />
            </MuiLink>
          )}
        </SoftBox>
        <SoftBox pb={3} px={3}>
          {category && (
            <SoftTypography
              variant="caption"
              color={category.color}
              textTransform="uppercase"
              fontWeight="medium"
              textGradient
            >
              {category.label}
            </SoftTypography>
          )}
          <SoftBox display="block" mt={0.5} mb={1}>
            {action.type === "internal" ? (
              <Link to={action.route}>
                <SoftTypography
                  display="inline"
                  variant="h5"
                  textTransform="capitalize"
                  className="color-background"
                >
                  {title}
                </SoftTypography>
              </Link>
            ) : (
              <MuiLink href={action.route} target="_blank" rel="noreferrer">
                <SoftTypography
                  display="inline"
                  variant="h5"
                  textTransform="capitalize"
                  className="color-background"
                >
                  {title}
                </SoftTypography>
              </MuiLink>
            )}
          </SoftBox>
          <SoftTypography variant="body2" component="p" color="text">
            {description}
          </SoftTypography>

          <SoftBox mt={3}>
            <Grid container spacing={3} justifyContent="center" sx={{ textAlign: "center" }}>
              {author && (
                <SoftBox display="flex" alignItems="center" mt={3}>
                  <SoftAvatar variant="rounded" src={author.image} alt={author.name} shadow="md" />
                  <SoftBox p={2} lineHeight={0}>
                    <SoftTypography
                      component="body1"
                      variant="button"
                      fontWeight="medium"
                      gutterBottom
                    >
                      {author.name}
                    </SoftTypography>
                  </SoftBox>
                </SoftBox>
              )}
              {author2 && (
                <SoftBox display="flex" alignItems="center" mt={3}>
                  <SoftAvatar
                    variant="rounded"
                    src={author2.image}
                    alt={author2.name}
                    shadow="md"
                  />
                  <SoftBox p={2} lineHeight={0}>
                    <SoftTypography
                      component="body1"
                      variant="button"
                      fontWeight="medium"
                      gutterBottom
                    >
                      {author2.name}
                    </SoftTypography>
                  </SoftBox>
                </SoftBox>
              )}
              {author3 && (
                <SoftBox display="flex" alignItems="center" mt={3}>
                  <SoftAvatar
                    variant="rounded"
                    src={author3.image}
                    alt={author3.name}
                    shadow="md"
                  />
                  <SoftBox p={2} lineHeight={0}>
                    <SoftTypography
                      component="body1"
                      variant="button"
                      fontWeight="medium"
                      gutterBottom
                    >
                      {author3.name}
                    </SoftTypography>
                  </SoftBox>
                </SoftBox>
              )}
              {author4 && (
                <SoftBox display="flex" alignItems="center" mt={3}>
                  <SoftAvatar
                    variant="rounded"
                    src={author4.image}
                    alt={author4.name}
                    shadow="md"
                  />
                  <SoftBox p={2} lineHeight={0}>
                    <SoftTypography
                      component="body1"
                      variant="button"
                      fontWeight="medium"
                      gutterBottom
                    >
                      {author4.name}
                    </SoftTypography>
                  </SoftBox>
                </SoftBox>
              )}
              {author5 && (
                <SoftBox display="flex" alignItems="center" mt={3}>
                  <SoftAvatar
                    variant="rounded"
                    src={author5.image}
                    alt={author5.name}
                    shadow="md"
                  />
                  <SoftBox p={2} lineHeight={0}>
                    <SoftTypography
                      component="body1"
                      variant="button"
                      fontWeight="medium"
                      gutterBottom
                    >
                      {author5.name}
                    </SoftTypography>
                  </SoftBox>
                </SoftBox>
              )}
            </Grid>
          </SoftBox>
        </SoftBox>
      </Card>
    );
  }

  
// Setting default props for the MultiAuthorsCard
MultiAuthorsCard.defaultProps = {
    category: false,
    author: false,
  };
  
  // Typechecking props for the MultiAuthorsCard
  MultiAuthorsCard.propTypes = {
    image: PropTypes.string.isRequired,
    category: PropTypes.oneOfType([
      PropTypes.shape({
        color: PropTypes.oneOf([
          "primary",
          "secondary",
          "info",
          "success",
          "warning",
          "error",
          "dark",
        ]).isRequired,
        label: PropTypes.string.isRequired,
      }),
      PropTypes.bool,
    ]),
    title: PropTypes.string.isRequired,
    description: PropTypes.elementType.isRequired,
    author: PropTypes.oneOfType([
      PropTypes.shape({
        image: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
      }),
      PropTypes.bool,
    ]),
    author2: PropTypes.oneOfType([
      PropTypes.shape({
        image: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
      }),
      PropTypes.bool,
    ]),
    author3: PropTypes.oneOfType([
      PropTypes.shape({
        image: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
      }),
      PropTypes.bool,
    ]),
    author4: PropTypes.oneOfType([
        PropTypes.shape({
          image: PropTypes.string.isRequired,
          name: PropTypes.string.isRequired,

        }),
        PropTypes.bool,
      ]),
      author5: PropTypes.oneOfType([
        PropTypes.shape({
          image: PropTypes.string.isRequired,
          name: PropTypes.string.isRequired,

        }),
        PropTypes.bool,
      ]),
    action: PropTypes.shape({
      type: PropTypes.oneOf(["external", "internal"]).isRequired,
      route: PropTypes.string.isRequired,
    }).isRequired,
  };
  
  export default MultiAuthorsCard;  