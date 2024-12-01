import React, { useState } from "react";
import {
  Grid2,
  IconButton,
  Box,
  Typography,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  TextField,
  Menu,
  MenuItem,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import MicIcon from "@mui/icons-material/Mic";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import translation from "../Images/translation.webp";
import plus from "../Images/plus.webp";
import { NavbarWrapper } from "./NavbarWrapper";
import AvatarComponent from "./AvatarComponent";

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [anchorElTranslation, setAnchorElTranslation] = React.useState(null);
  const [anchorElPlus, setAnchorElPlus] = React.useState(null);
  const [anchorElAvatar, setAnchorElAvatar] = React.useState(null);

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  const handleTranslationOption = (option) => {
    setAnchorElTranslation(null);
  };

  const handlePlusOption = (option) => {
    setAnchorElPlus(null);
  };

  const handleProfileOption = (option) => {
    setAnchorElAvatar(null);
  };

  return (
    <NavbarWrapper>
      <Grid2 container alignItems="center">
        {/* Logo Section */}
        <Grid2 item size={3}>
          <Box sx={{ display: "flex", alignItems: "center", gap: "1rem" }}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                padding: "7px 14px",
                width: "70px",
                height: "70px",
                bgcolor: "black",
                color: "#fff",
                borderRadius: "15px",
                fontSize: {
                  mobile: "30px",
                  laptop: "40px",
                },
                fontWeight: "800",
              }}
            >
              W
            </Box>
            <Typography
              sx={{
                color: "black",
                fontWeight: "800",
                fontSize: {
                  mobile: "14px",
                  laptop: "18px",
                },
              }}
            >
              Wikipédia
            </Typography>
          </Box>
        </Grid2>

        {/* Hamburger Menu */}
        <Grid2
          item
          size={9}
          sx={{
            display: { mobile: "flex", laptop: "none" },
            justifyContent: "flex-end",
          }}
        >
          <IconButton onClick={toggleDrawer(true)}>
            <MenuIcon sx={{ fontSize: "30px" }} />
          </IconButton>
        </Grid2>

        {/* Search Bar and Icons for Larger Screens */}
        <Grid2
          item
          size={6}
          sx={{
            display: { mobile: "none", laptop: "flex" },
            justifyContent: "center",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              borderRadius: "4px",
              border: "none",
              gap: "20px",
            }}
          >
            <SearchIcon
              sx={{ color: "#C4C4C4", marginRight: "10px", fontSize: "34px" }}
            />
            <TextField
              variant="standard"
              placeholder="Tapez le nom de votre sujet...."
              InputProps={{
                disableUnderline: true,
                sx: {
                  flex: 1,
                  border: "none",
                  outline: "none",
                  fontSize: "18px",
                },
              }}
            />
            <IconButton>
              <MicIcon
                sx={{
                  color: "#C4C4C4",
                  fontSize: "34px",
                }}
              />
            </IconButton>
          </Box>
        </Grid2>

        <Grid2
          item
          size={3}
          sx={{
            display: { mobile: "none", laptop: "flex" }, // Adjusted for responsiveness
            justifyContent: "flex-end",
            gap: 2,
          }}
        >
          {/* Translation Dropdown */}
          <IconButton
            onClick={(event) => setAnchorElTranslation(event.currentTarget)}
          >
            <Box
              component="img"
              sx={{
                height: 50,
                width: 50,
              }}
              alt="Translation"
              src={translation}
            />
          </IconButton>
          <Menu
            anchorEl={anchorElTranslation}
            open={Boolean(anchorElTranslation)}
            onClose={() => setAnchorElTranslation(null)}
          >
            <MenuItem onClick={() => handleTranslationOption("English")}>
              English
            </MenuItem>
            <MenuItem onClick={() => handleTranslationOption("French")}>
              French
            </MenuItem>
            <MenuItem onClick={() => handleTranslationOption("Spanish")}>
              Spanish
            </MenuItem>
          </Menu>

          {/* Plus Dropdown */}
          <IconButton onClick={(event) => setAnchorElPlus(event.currentTarget)}>
            <Box
              component="img"
              sx={{
                height: 50,
                width: 50,
              }}
              alt="Plus"
              src={plus}
            />
          </IconButton>
          <Menu
            anchorEl={anchorElPlus}
            open={Boolean(anchorElPlus)}
            onClose={() => setAnchorElPlus(null)}
          >
            <MenuItem onClick={() => handlePlusOption("Add New")}>
              Add New
            </MenuItem>
            <MenuItem onClick={() => handlePlusOption("Upload")}>
              Upload
            </MenuItem>
          </Menu>

          {/* Avatar Dropdown */}
          <IconButton
            onClick={(event) => setAnchorElAvatar(event.currentTarget)}
          >
            <AvatarComponent />
          </IconButton>
          <Menu
            anchorEl={anchorElAvatar}
            open={Boolean(anchorElAvatar)}
            onClose={() => setAnchorElAvatar(null)}
          >
            <MenuItem onClick={() => handleProfileOption("View Profile")}>
              View Profile
            </MenuItem>
            <MenuItem onClick={() => handleProfileOption("Logout")}>
              Logout
            </MenuItem>
          </Menu>
        </Grid2>
      </Grid2>

      {/* Drawer for Mobile View */}
      <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
        <Box
          sx={{
            width: 300,
            padding: "10px",
          }}
        >
          {/* Header with Close Button */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "10px",
            }}
          >
            <Typography variant="h5">Menu</Typography>
            <IconButton onClick={toggleDrawer(false)}>
              <CloseIcon sx={{ fontSize: "34px" }} />
            </IconButton>
          </Box>
          <Divider />

          {/* Search Bar */}
          <List>
            <ListItem>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  backgroundColor: "#fff",
                  borderRadius: "4px",
                  gap: "10px",
                  width: "100%",
                }}
              >
                <SearchIcon
                  sx={{
                    color: "#C4C4C4",
                    marginRight: "10px",
                    fontSize: "34px",
                  }}
                />
                <TextField
                  variant="standard"
                  placeholder="Tapez le nom de votre sujet...."
                  InputProps={{
                    disableUnderline: true,
                    sx: {
                      flex: 1,
                      border: "none",
                      outline: "none",
                      fontSize: "14px",
                      color: "#c4c4c4",
                    },
                  }}
                />
                <IconButton>
                  <MicIcon
                    sx={{
                      color: "#C4C4C4",
                      fontSize: "34px",
                    }}
                  />
                </IconButton>
              </Box>
            </ListItem>
            <Divider />

            {/* Dropdown Items */}
            <ListItem sx={{display:'flex',justifyContent:'center',p:'1rem'}}>
              {/* Translation Dropdown */}
              <IconButton
                onClick={(event) => setAnchorElTranslation(event.currentTarget)}
              >
                <Box
                  component="img"
                  sx={{
                    height: 50,
                    width: 50,
                  }}
                  alt="Translation"
                  src={translation}
                />
              </IconButton>
              <Menu
                anchorEl={anchorElTranslation}
                open={Boolean(anchorElTranslation)}
                onClose={() => setAnchorElTranslation(null)}
              >
                <MenuItem onClick={() => handleTranslationOption("English")}>
                  English
                </MenuItem>
                <MenuItem onClick={() => handleTranslationOption("French")}>
                  French
                </MenuItem>
                <MenuItem onClick={() => handleTranslationOption("Spanish")}>
                  Spanish
                </MenuItem>
              </Menu>
            </ListItem>
            <Divider />

            <ListItem sx={{display:'flex',justifyContent:'center',p:'1rem'}}>
              {/* Plus Dropdown */}
              <IconButton
                onClick={(event) => setAnchorElPlus(event.currentTarget)}
              >
                <Box
                  component="img"
                  sx={{
                    height: 50,
                    width: 50,
                  }}
                  alt="Plus"
                  src={plus}
                />
              </IconButton>
              <Menu
                anchorEl={anchorElPlus}
                open={Boolean(anchorElPlus)}
                onClose={() => setAnchorElPlus(null)}
              >
                <MenuItem onClick={() => handlePlusOption("Add New")}>
                  Add New
                </MenuItem>
                <MenuItem onClick={() => handlePlusOption("Upload")}>
                  Upload
                </MenuItem>
              </Menu>
            </ListItem>
            <Divider />

            <ListItem sx={{display:'flex',justifyContent:'center',p:'1rem'}}>
              {/* Avatar Dropdown */}
              <IconButton
                onClick={(event) => setAnchorElAvatar(event.currentTarget)}
              >
                <AvatarComponent />
              </IconButton>
              <Menu
                anchorEl={anchorElAvatar}
                open={Boolean(anchorElAvatar)}
                onClose={() => setAnchorElAvatar(null)}
              >
                <MenuItem onClick={() => handleProfileOption("View Profile")}>
                  View Profile
                </MenuItem>
                <MenuItem onClick={() => handleProfileOption("Logout")}>
                  Logout
                </MenuItem>
              </Menu>
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </NavbarWrapper>
  );
};

export default Navbar;
