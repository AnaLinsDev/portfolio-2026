import * as React from "react";
import { useEffect } from "react";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import IconButton from "@mui/material/IconButton";

import CodeIcon from "@mui/icons-material/Code";
import MenuIcon from "@mui/icons-material/Menu";
import TranslateIcon from "@mui/icons-material/Translate";

import { useT } from "@/hooks/useT";
import { useScreenState } from "@/hooks/useScreenState";
import { useScreenActions } from "@/hooks/useScreenActions";

const pages = [
  { idx: "home.idx", label: "home.title", href: "#home" },
  { idx: "skills.idx", label: "skills.title", href: "#skills" },
  { idx: "projects.idx", label: "projects.title", href: "#projects" },
  { idx: "experience.idx", label: "experience.title", href: "#experience" },
  { idx: "contact.idx", label: "contact.title", href: "#contact" },
];

function ResponsiveAppBar() {
  const { t, lang, setLang } = useT();
  const [isScrolled, setIsScrolled] = React.useState(false);
  const active = useScreenState();
  const setActive = useScreenActions();

  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null,
  );

  // 🌐 Toggle language
  const toggleLanguage = () => {
    const newLang = lang === "en" ? "pt" : "en";
    setLang(newLang);
    localStorage.setItem("lang", newLang);
  };

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Load saved language
  useEffect(() => {
    const savedLang = localStorage.getItem("lang");
    if (savedLang && savedLang !== lang) {
      setLang(savedLang);
    }
  }, []);

  // Handle initial navigation
  useEffect(() => {
    const hash = window.location.hash || "#home";
    setActive(hash);

    const element = document.querySelector(hash);
    if (element) {
      setTimeout(() => {
        element.scrollIntoView({ behavior: "smooth" });
      }, 0);
    }
  }, []);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const goToPage = (href: string) => {
    const element = document.querySelector(href);

    if (!element) return;

    element.scrollIntoView({ behavior: "smooth" });
    window.history.replaceState(null, "", href);
    setActive(href);

    handleCloseNavMenu();
  };

  return (
    <AppBar
      position="fixed"
      className="navbar"
      sx={{
        boxShadow: isScrolled ? 3 : "none",
        backdropFilter: isScrolled ? "blur(8px)" : "none",
        transition: "all 0.3s ease",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* Logo */}
          <Box
            onClick={() => goToPage("#home")}
            href="#home"
            component="a"
            sx={{
              display: { xs: "none", md: "flex" },
              mr: 1,
              color: "inherit",
              cursor: "pointer",
            }}
          >
            <CodeIcon className="highlight-default" />
          </Box>

          {/* Mobile menu */}
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="menu"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>

            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
              transformOrigin={{ vertical: "top", horizontal: "left" }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: "block", md: "none" } }}
            >
              {pages.map((page) => (
                <MenuItem
                  href={page.href}
                  component="a"
                  key={page.href}
                  onClick={() => goToPage(page.href)}
                  className="navbar-item"
                >
                  <Typography sx={{ width: "100vw", textAlign: "left" }}>
                    <span className="highlight-default">{t(page.idx)}.</span>{" "}
                    <span
                      className={
                        active === page.href ? "highlight-default" : "highlight"
                      }
                    >
                      {t(page.label)}
                    </span>
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Box
            sx={{
              display: { xs: "flex", md: "none" },
              alignItems: "center",
              marginLeft: "auto",
            }}
          >
            <Button
              onClick={toggleLanguage}
              startIcon={<TranslateIcon />}
              sx={{
                color: "white",
                minWidth: "auto",
                textTransform: "none",
              }}
            >
              {lang.toUpperCase()}
            </Button>
          </Box>

          {/* Desktop menu */}
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: "flex-end",
              alignItems: "center",
              gap: 1,
            }}
          >
            {pages.map((page) => (
              <Button
                component="a"
                href={page.href}
                key={page.href}
                onClick={() => goToPage(page.href)}
                disableRipple
                sx={{
                  my: 2,
                  color: "white",
                  textTransform: "none",
                  backgroundColor: "transparent",
                  "&:hover": {
                    backgroundColor: "transparent",
                  },
                }}
              >
                <span className="highlight-default">{t(page.idx)}.</span>{" "}
                <span
                  className={
                    active === page.href ? "highlight-default" : "highlight"
                  }
                >
                  {t(page.label)}
                </span>
              </Button>
            ))}

            {/* 🌐 Language switch (desktop) */}
            <Button
              onClick={toggleLanguage}
              startIcon={<TranslateIcon />}
              sx={{
                marginLeft: "4rem",
                color: "white",
                textTransform: "none",
              }}
            >
              {lang.toUpperCase()}
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default ResponsiveAppBar;
