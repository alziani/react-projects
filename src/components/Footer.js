import { Box, Button, Typography } from "@mui/material";
import React from "react";

const Footer = () => {
  return (
    <Box display={"flex"} flexDirection={"column"}>
      <Typography
        fontWeight={"bold"}
        fontSize={{
          lg: 30,
          md: 24,
          sm: 18,
          xs: 14,
        }}
        variant="h3"
        paddingTop={10}
        textAlign={"center"}
      >
        Ready For Any Team Size
      </Typography>
      <Typography
        fontSize={{
          lg: 24,
          md: 20,
          sm: 16,
          xs: 14,
        }}
        variant="div"
        paddingTop={4}
        textAlign={"center"}
      >
        Optimized For Any Team Size
      </Typography>
      <Box
        display={"flex"}
        margin={"auto"}
        padding={5}
        justifyContent={"center"}
      >
        <Button
          sx={{
            mr: 2,
            fontSize: {
              lg: 20,
              md: 17,
              sm: 12,
              xs: 8,
            },
          }}
          variant="contained"
        >
          Try CodeEnv For Free
        </Button>
        <Button
          sx={{
            ml: 2,
            fontSize: {
              lg: 20,
              md: 17,
              sm: 12,
              xs: 8,
            },
          }}
          variant="outlined"
        >
          Talk to Sales
        </Button>
      </Box>
    </Box>
  );
};

export default Footer;
