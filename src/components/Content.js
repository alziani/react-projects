import { Box, Typography } from "@mui/material";
import React from "react";

function Content() {
  return (
    <Box
      bgcolor={"#fbf2f2"}
      display={"flex"}
      alignItems={"center"}
      justifyContent={"space-between"}
      padding={8}
    >
      <Box flex={1} display={"flex"} flexDirection={"column"} gap={3}>
        <Typography variant="h5"> Get Things Done</Typography>
        <Typography>
          As most of us travel with our laptops, finding one that isn't overly
          bulky or heavy is essential. Thankfully, there are tons of lightweight
          laptops on the market these days. You can even find mobile
          workstations and gaming laptops with powerful components that are as
          lightweight as ultraportables.
        </Typography>
      </Box>
      <Box flex={1}>
        <img src="../images/one.jpg" width={"300px"} />
      </Box>
    </Box>
  );
}

export default Content;
