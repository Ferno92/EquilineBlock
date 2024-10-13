import React, { useCallback, useContext, useState } from "react";
import { Button, Container, IconButton, Menu, MenuItem } from "@mui/material";
import useStyles from "../pages-styles/header.styles";
import {
  AccountCircle,
  Favorite,
  Search,
  ShoppingBag,
  Menu as MenuIcon,
} from "@mui/icons-material";
import { useRouter } from "next/router";
import { ThemeContext } from "./_app";
import { pages } from "../utils/DataUtils";

const Header = () => {
  const styles = useStyles();
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  const router = useRouter();
  const { mode, setMode } = useContext(ThemeContext);

  const goHome = useCallback(() => {
    router.push("/");
  }, [router]);

  const navigateTo = useCallback(
    (path: string) => {
      router.push(path);
      handleCloseNavMenu();
    },
    [router]
  );

  const toggleDarkMode = () => {
    setMode(mode !== "dark" ? "dark" : "light");
  };

  const icons = [
    <Search key="search" />,
    <Favorite key="favorite" sx={{ display: { xs: "none", md: "block" } }} />,
    <AccountCircle
      key="account"
      sx={{ display: { xs: "none", md: "block" } }}
    />,
    <ShoppingBag key="bag" sx={{ display: { xs: "none", md: "block" } }} />,
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
          className={styles.menuContainer}
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
            className={styles.menu}
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
            {Array.from(pages).map(([key, pageName]) => (
              <MenuItem key={key} onClick={() => navigateTo(key)}>
                {pageName}
              </MenuItem>
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
            onClick={goHome}
          />
        </div>
        <div className={styles.icons}>
          {icons.map((icon, index) => (
            <IconButton
              key={index}
              onClick={() =>
                icon.key === "search" ? toggleDarkMode() : undefined
              }
            >
              {icon}
            </IconButton>
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
        {Array.from(pages).map(([key, pageName]) => (
          <Button
            variant="text"
            key={key}
            className={styles.tab}
            onClick={() => navigateTo(key)}
          >
            {pageName}
          </Button>
        ))}
      </Container>
    </Container>
  );
};

export default Header;
