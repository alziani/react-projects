import { Box } from "@mui/material";
import React from "react";
import ContentItem from "./ContentItem";

const items = [
  {
    title: "Get Things Done",
    description:
      "As most of us travel with our laptops, finding one that isn't overly bulky or heavy is essential. Thankfully, there are tons of lightweight laptops on the market these days. You can even find mobile workstations and gaming laptops with powerful components that are as lightweight as ultraportables",
    img: "../images/one.jpg",
  },
  {
    title: "Get Things Done",
    description:
      "As most of us travel with our laptops, finding one that isn't overly bulky or heavy is essential. Thankfully, there are tons of lightweight laptops on the market these days. You can even find mobile workstations and gaming laptops with powerful components that are as lightweight as ultraportables",
    img: "../images/one.jpg",
  },
  {
    title: "Get Things Done",
    description:
      "As most of us travel with our laptops, finding one that isn't overly bulky or heavy is essential. Thankfully, there are tons of lightweight laptops on the market these days. You can even find mobile workstations and gaming laptops with powerful components that are as lightweight as ultraportables",
    img: "../images/one.jpg",
  },
];

function Content() {
  return (
    <Box display={"flex"} flexDirection={"column"}>
      {items.map((item, index) => (
        <ContentItem
          key={index}
          swap={index}
          img={item.img}
          title={item.title}
          description={item.description}
        />
      ))}
    </Box>
  );
}

export default Content;
