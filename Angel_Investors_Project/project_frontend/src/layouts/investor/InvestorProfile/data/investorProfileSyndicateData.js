// Investor syndicate data.js
import homeDecor1 from "assets/images/home-decor-1.jpg";
import homeDecor2 from "assets/images/home-decor-2.jpg";
import homeDecor3 from "assets/images/home-decor-3.jpg";

import logoXD from "assets/images/small-logos/logo-xd.svg";
import logoAtlassian from "assets/images/small-logos/logo-atlassian.svg";
import logoSlack from "assets/images/small-logos/logo-slack.svg";
import logoSpotify from "assets/images/small-logos/logo-spotify.svg";
import logoJira from "assets/images/small-logos/logo-jira.svg";
import logoInvision from "assets/images/small-logos/logo-invision.svg"

const Syndicate = [
  {
    image: logoSlack,
    title: "VainTech",
    lead : "Ahmed Abo Jamal",
    sector: ["Technology", "Fintech", "pr-seed"],
    description: "As Uber works through a huge amount of internal management turmoil.",
    action: {
      type: "internal",
      route: "/pages/profile/profile-overview",
      color: "info",
      label: "view syndicate",
    }
  },
  {
    image: logoJira,
    title: "TechSynergy",
    lead: "Maria Smith",
    sector: ["Healthcare", "Telemedicine"],
    description: "Music is something that every person has his or her own specific opinion about.",
    action: {
      type: "internal",
      route: "/pages/profile/profile-overview",
      color: "info",
      label: "view syndicate",
    }
  },
  {
    image: logoInvision,
    title: "InnovateHub",
    lead: "John Doe",
    sector: ["Education", "EdTech", "AI"],
    description: "Different people have different taste, and various types of music.",
    action: {
      type: "internal",
      route: "/pages/profile/profile-overview",
      color: "info",
      label: "view syndicate",
    }
  },
  {
    image: logoAtlassian,
    title: "SmartInnovators",
    lead: "Sarah Johnson",
    sector: ["E-commerce", "Adtech", "Fashion-tech", "Market"],
    description: "Different people have different taste, and various types of music.",
    action: {
      type: "internal",
      route: "/pages/profile/profile-overview",
      color: "info",
      label: "view syndicate",
    }
  },
  {
    image: logoSpotify,
    title: "FutureInnovate",
    lead: "Michael Brown",
    sector: ["Biotech", "Food", "Beverage", "Plant-based food"],
    description: "Different people have different taste, and various types of music.",
    action: {
      type: "internal",
      route: "/pages/profile/profile-overview",
      color: "info",
      label: "view syndicate",
    }
  },
  // Add more project objects as needed
];

export default Syndicate;
