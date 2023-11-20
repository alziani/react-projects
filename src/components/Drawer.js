import { IconButton, List, ListItemButton, ListItemText } from "@mui/material";
import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";

function Drawer({ links }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Drawer open={open} onClose={() => setOpen(false)}>
        <List>
          {links.map((item, i) => (
            <ListItemButton key={i}>
              <ListItemText>{item}</ListItemText>
            </ListItemButton>
          ))}
        </List>
      </Drawer>
      <IconButton onClick={() => setOpen(true)} sx={{ marginLeft: "auto" }}>
        <MenuIcon color="white" />
      </IconButton>
    </>
  );
}

export default Drawer;
