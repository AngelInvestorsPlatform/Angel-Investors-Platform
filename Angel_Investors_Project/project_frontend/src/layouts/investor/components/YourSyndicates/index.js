import { useState, useEffect } from "react";
import axios from "axios";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import MuiLink from "@mui/material/Link";

//for user auth global context
import { useAuthUser } from "context/authContext";

// @mui material components
import Grid from "@mui/material/Grid";
import Icon from "@mui/material/Icon";
import Card from "@mui/material/Card";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SoftButton from "components/SoftButton";

// Soft UI Dashboard Materail-UI example components
import Table from "examples/Tables/Table";

//import syndicate components
import Syndicate from "layouts/investor/components/SyndicateComponents/Syndicate";
import SectorsFunction from "layouts/investor/components/SyndicateComponents/SectorsFunction";
import StatusFunction from "layouts/investor/components/SyndicateComponents/StatusFunction";
import MemberAvatars from "layouts/investor/components/SyndicateComponents/MemberAvatars";

// Data
import data from "layouts/investor/components/YourSyndicates/data";

// Images
import logoXD from "assets/images/users-images/Startup1.png";
import logoAtlassian from "assets/images/users-images/Startup2.png";
import logoSlack from "assets/images/users-images/Startup3.png";
import logoSpotify from "assets/images/users-images/Startup4.png";
import logoJira from "assets/images/users-images/Startup5.png";
import logoInvesion from "assets/images/users-images/Startup6.png";
import team1 from "assets/images/users-images/team1.png";
import team2 from "assets/images/users-images/team2.png";
import team3 from "assets/images/users-images/team3.png";
import team4 from "assets/images/users-images/team4.png";
import team5 from "assets/images/users-images/team5.png";

const images = [logoXD, logoAtlassian, logoSlack, logoSpotify, logoJira, logoInvesion];

function YourSyndicates() {
  /////////////Menu
  const [menu, setMenu] = useState(null);

  const openMenu = ({ currentTarget }) => setMenu(currentTarget);
  const closeMenu = () => setMenu(null);

  const renderMenu = (
    <Menu
      id="simple-menu"
      anchorEl={menu}
      anchorOrigin={{
        vertical: "top",
        horizontal: "left",
      }}
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={Boolean(menu)}
      onClose={closeMenu}
    >
      <MenuItem onClick={closeMenu}>Action</MenuItem>
      <MenuItem onClick={closeMenu}>Another action</MenuItem>
      <MenuItem onClick={closeMenu}>Something else</MenuItem>
    </Menu>
  );
  ///// end of menu

  //
  // Table const
  const [tableData, setTableData] = useState({ columns: [], rows: [] });

  // Auth const
  const { userData } = useAuthUser();
  const token = userData ? userData.token : " ";
  useEffect(() => {
    const config = {
      headers: {
        Authorization: `Token ${token}`,
      },
    };

    //////// here is the start of request
    async function fetchSyndicateData() {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_DJANGO_API}investors/joined-syndicates/`,
          config
        );

        const formattedRows = response.data.map((syndicate,index) => ({
          Syndicate: (
            <Link to="/investor/yourSyndicates/SyndicateDetailsProfile">
              <MuiLink component="div" underline="hover" sx={{ cursor: "pointer" }}>
                <Syndicate
                  image={images[ index % images.length]}
                  name={syndicate.syndicate_name}
                  Lead={syndicate.lead_name}
                />
              </MuiLink>
            </Link>
          ),
          Sector: <SectorsFunction sectors={syndicate.sectors.split(", ")} />,
          Status: <StatusFunction status={syndicate.status} />,
          "Active Deals": (
            <SoftTypography variant="caption" color="secondary" fontWeight="medium">
              {syndicate.active_deals} Deals
            </SoftTypography>
          ),
          Members: (
            <SoftBox display="flex" py={1}>
              <MemberAvatars members={syndicate.members} />
            </SoftBox>
          ),
        }));

        setTableData({
          columns: [
            { name: "Syndicate", align: "left" },
            { name: "Sector", align: "center" },
            { name: "Status", align: "center" },
            { name: "Active Deals", align: "center" },
            { name: "Members", align: "center" },
          ],
          rows: formattedRows,
        });
      } catch (error) {
        console.error("Error fetching syndicates:", error);
      }
    }

    if (token) {
      fetchSyndicateData();
    }
  }, [token]); // Dependency array includes token

  return (
    <Card>
      <SoftBox display="flex" justifyContent="space-between" alignItems="center" p={3}>
        <SoftBox>
          <SoftTypography variant="h4" color="info" fontWeight="regular" textGradient>
            Your Syndicate
          </SoftTypography>
          <SoftBox display="flex" alignItems="center" lineHeight={0}>
            <Icon
              sx={{
                fontWeight: "bold",
                color: ({ palette: { info } }) => info.main,
                mt: -0.3,
              }}
            >
              equalizer
            </Icon>
            <SoftTypography variant="button" fontWeight="regular" color="text">
              &nbsp;The Syndicate <strong> You Joined</strong>
            </SoftTypography>
          </SoftBox>
        </SoftBox>
        <SoftBox color="text" px={2}>
          <Icon sx={{ cursor: "pointer", fontWeight: "bold" }} fontSize="small" onClick={openMenu}>
            more_vert
          </Icon>
        </SoftBox>
        {renderMenu}
      </SoftBox>
      <SoftBox
        sx={{
          "& .MuiTableRow-root:not(:last-child)": {
            "& td": {
              borderBottom: ({ borders: { borderWidth, borderColor } }) =>
                `${borderWidth[1]} solid ${borderColor}`,
            },
          },
        }}
      >
        {tableData.rows.length > 0 ? (
          <Table columns={tableData.columns} rows={tableData.rows} />
        ) : (
          <SoftBox py={2} px={3}>
            <SoftTypography variant="h6" fontWeight="regular" color="text">
              No data available or loading...
            </SoftTypography>
          </SoftBox>
        )}
      </SoftBox>
    </Card>
  );
}

export default YourSyndicates;
