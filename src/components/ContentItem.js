import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import React from "react";

const ContentItem = ({ title, img, description, swap }) => {
  const isMatch = useMediaQuery(useTheme().breakpoints.down("md"));

  return (
    <Box
      bgcolor={swap % 2 !== 0 ? "#fbf2f2" : "white"}
      display={"flex"}
      flexDirection={isMatch ? "column" : "row"}
      alignItems={"center"}
      justifyContent={"space-between"}
      padding={8}
    >
      {swap % 2 === 0 ? (
        <>
          {" "}
          <Box flex={1} display={"flex"} flexDirection={"column"} gap={3}>
            <Typography
              fontSize={{
                lg: 32,
                md: 28,
                sm: 24,
                xs: 20,
              }}
              variant="h5"
            >
              {title}{" "}
            </Typography>
            <Typography
              fontSize={{
                lg: 24,
                md: 20,
                sm: 16,
                xs: 12,
              }}
            >
              {description}
            </Typography>
          </Box>
          <Box flex={1}>
            <img
              alt="image"
              src={img}
              width={"300px"}
              style={{
                marginLeft: "50%",
                transform: "translateX(-50%)",
                borderRadius: "10px",
              }}
            />
          </Box>
        </>
      ) : (
        <>
          <Box flex={1}>
            <img
              alt="image"
              src={img}
              width={"300px"}
              style={{
                marginRight: "50%",
                transform: "translateX(50%)",
                borderRadius: "10px",
              }}
            />
          </Box>{" "}
          <Box flex={1} display={"flex"} flexDirection={"column"} gap={3}>
            <Typography
              fontSize={{
                lg: 32,
                md: 28,
                sm: 24,
                xs: 20,
              }}
              variant="h5"
            >
              {title}{" "}
            </Typography>
            <Typography
              fontSize={{
                lg: 24,
                md: 20,
                sm: 16,
                xs: 12,
              }}
            >
              {description}
            </Typography>
          </Box>{" "}
        </>
      )}
    </Box>
  );
};

export default ContentItem;
