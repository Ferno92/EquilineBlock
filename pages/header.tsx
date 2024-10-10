import React, { useCallback, useContext, useState } from "react";
import { Container, IconButton, Menu } from "@mui/material";
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

export const Header = () => {
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
    },
    [router]
  );

  const toggleDarkMode = () => {
    setMode(mode !== "dark" ? "dark" : "light");
  };

  const icons = [
    <Search key="search" />,
    <Favorite key="favorite" onClick={toggleDarkMode} />,
    <AccountCircle key="account" />,
    <ShoppingBag key="bag" />,
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
            {Array.from(pages).map(([key, pageName]) => (
              <div key={key}>{pageName}</div>
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
        {Array.from(pages).map(([key, pageName]) => (
          <div key={key} className={styles.tab} onClick={() => navigateTo(key)}>
            {pageName}
          </div>
        ))}
      </Container>
    </Container>
  );
};

export const pages = new Map<string, string>([
  ["donna", "Donna"],
  ["uomo", "Uomo"],
  ["junior", "Junior"],
  ["caschi", "Caschi"],
  ["safety", "Safety"],
  ["cavallo", "Cavallo"],
  ["selleria", "Selleria"],
  ["saddleDivision", "Saddle Division"],
  ["equniverse", "Eq Universe"],
]);
