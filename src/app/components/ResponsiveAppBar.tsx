import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";

import CodeIcon from "@mui/icons-material/Code";
import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";
import { useT } from "@/hooks/useT";
import { useScreenState } from "@/hooks/useScreenState";
import { useScreenActions } from "@/hooks/useScreenActions ";
import { useEffect } from "react";

const pages = [
  { idx: "home.idx", label: "home.title", href: "#home" },
  { idx: "skills.idx", label: "skills.title", href: "#skills" },
  { idx: "projects.idx", label: "projects.title", href: "#projects" },
  { idx: "experience.idx", label: "experience.title", href: "#experience" },
  { idx: "contact.idx", label: "contact.title", href: "#contact" },
];

function ResponsiveAppBar() {
  const { t } = useT();
  const [isScrolled, setIsScrolled] = React.useState(false);
  const active = useScreenState();
  const setActive = useScreenActions();
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const hash = window.location.hash || "#home";
    setActive(hash);

    const element = document.querySelector(hash);
    if (element) {
      setTimeout(() => {
        element.scrollIntoView();
      }, 0);
    }
  }, []);

  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null,
  );

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
          <Box
            onClick={() => goToPage("home")}
            component="a"
            sx={{
              display: { xs: "none", md: "flex" },
              mr: 1,
              color: "inherit",
            }}
          >
            <CodeIcon className="highlight-default" />
          </Box>

          {/* Mobile menu */}
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="menu"
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
              sx={{ display: { xs: "block", md: "none" } }}
            >
              {pages.map((page) => (
                <MenuItem
                  className="navbar-item"
                  key={page.href}
                  onClick={() => goToPage(page.href)}
                >
                  <Typography
                    sx={{
                      textAlign: "left",
                      width: "100vw",
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
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          {/* Desktop menu */}
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: "flex-end",
            }}
          >
            {pages.map((page) => (
              <Button
                key={page.href}
                onClick={() => goToPage(page.href)}
                disableRipple
                disableTouchRipple
                sx={{
                  my: 2,
                  color: "white",
                  display: "block",
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
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
