import {
  AppBar,
  Box,
  Button,
  IconButton,
  Tab,
  Tabs,
  Toolbar,
  Typography,
} from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";
import EmailIcon from "@mui/icons-material/Email";
import LaptopMacOutlinedIcon from "@mui/icons-material/LaptopMacOutlined";
import React from "react";

function Navbar() {
  const [value, setValue] = React.useState("one");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <>
      <AppBar>
        <Toolbar
          sx={{
            backgroundColor: "white",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Box display={"flex"}>
            <IconButton>
              <LaptopMacOutlinedIcon />
            </IconButton>

            <Tabs
              sx={{ marginLeft: "10px" }}
              value={value}
              onChange={handleChange}
              textColor="secondary"
              indicatorColor="secondary"
              aria-label="secondary tabs example"
            >
              <Tab value="one" label="Products" />
              <Tab value="two" label="Solutions" />
              <Tab value="three" label="Pricing" />
              <Tab value="four" label="Entrepris" />
            </Tabs>
          </Box>
          <Box>
            <Button sx={{ marginRight: "10px" }} variant="outlined">
              {" "}
              Talk To Us
            </Button>
            <Button variant="contained"> Try For Free</Button>
          </Box>
        </Toolbar>
      </AppBar>

      <Box
        position={"sticky"}
        sx={{ background: "white" }}
        width={"100%"}
        height={"100vh"}
      >
        <video
          width={"100%"}
          height={"70%"}
          autoPlay
          muted
          loop
          playsInline
          src="../video.mp4"
        />
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <Typography
            variant="h4"
            sx={{
              color: "black",
              textTransform: "capitalize",
              textAlign: "center",
            }}
          >
            build your softwares hassle free and with top notch quality
          </Typography>
          <Box display={"flex"} gap={5} marginTop={4}>
            <Button variant="outlined" endIcon={<GoogleIcon />}>
              Signup with google
            </Button>
            <Button variant="contained" endIcon={<EmailIcon />}>
              Signup with email
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default Navbar;
