import React, { useState } from "react";
import { Container, IconButton, Menu } from "@mui/material";
import useStyles from "../pages-styles/header.styles";
import {
  AccountCircle,
  Favorite,
  Search,
  ShoppingBag,
  Menu as MenuIcon,
} from "@mui/icons-material";

export const Header = () => {
  const styles = useStyles();
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  const icons = [
    <Search key="search" />,
    <Favorite key="favorite" />,
    <AccountCircle key="account" />,
    <ShoppingBag key="bag" />,
  ];
  const pages = [
    "Donna",
    "Uomo",
    "Junior",
    "Caschi",
    "Safety",
    "Cavallo",
    "Selleria",
    "Saddle Division",
    "Eq Universe",
  ];

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  return (
    <Container maxWidth="xl" className={styles.root}>
      <div className={styles.header}>
        <Container
          className={styles.menu}
          sx={{
            display: {
              xs: "flex",
              md: "none",
            },
          }}
        >
          <IconButton
            size="large"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleOpenNavMenu}
            color="inherit"
          >
            <MenuIcon />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorElNav}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
            open={Boolean(anchorElNav)}
            onClose={handleCloseNavMenu}
          >
            {pages.map((tab, index) => (
              <div key={index}>{tab}</div>
            ))}
          </Menu>
        </Container>

        <Container
          sx={{
            display: {
              xs: "none",
              md: "flex",
            },
          }}
          className={styles.links}
        >
          <div className={styles.link}>Servizio clienti</div>
          <div className={styles.link}>Store Locator</div>
        </Container>

        <div className={styles.logoContainer}>
          <img
            src="/images/equiline-logo-new-black.webp"
            className={styles.logo}
          />
        </div>
        <div className={styles.icons}>
          {icons.map((icon, index) => (
            <IconButton key={index}>{icon}</IconButton>
          ))}
        </div>
      </div>
      <Container
        className={styles.tabs}
        sx={{
          display: {
            xs: "none",
            md: "flex",
          },
        }}
      >
        {pages.map((tab, index) => (
          <div key={index} className={styles.tab}>
            {tab}
          </div>
        ))}
      </Container>
    </Container>
  );
};
