import { useState } from "react";

import {
  AppBar,
  Toolbar,
  Container,
  Box,
  Button,
  IconButton,
  Drawer,
  Collapse,
  Menu,
  MenuItem,
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import FacebookIcon from "@mui/icons-material/Facebook";

import { Link, useLocation } from "react-router-dom";


// ============================================================
// SECTEURS
// ============================================================

const secteurs = [
  {
    nom: "Éducation",
    url: "/secteurs/education",
  },
  {
    nom: "Gouvernance",
    url: "/secteurs/gouvernance",
  },
  {
    nom: "Protection Sociale",
    url: "/secteurs/protection-sociale",
  },
  {
    nom: "Santé et Nutrition",
    url: "/secteurs/sante-nutrition",
  },
  {
    nom: "Environnement",
    url: "/secteurs/environnement",
  },
  {
    nom: "Décentralisation",
    url: "/secteurs/decentralisation",
  },
];


// ============================================================
// NAVBAR
// ============================================================

function Navbar() {
  const location = useLocation();

  const [desktopMenu, setDesktopMenu] = useState(null);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [mobileSecteurs, setMobileSecteurs] = useState(false);

  const secteurActif =
    location.pathname.startsWith("/secteurs");

  const pageActive = (url) => {
    return location.pathname === url;
  };


  // ==========================================================
  // DESKTOP
  // ==========================================================

  const ouvrirDesktopMenu = (event) => {
    setDesktopMenu(event.currentTarget);
  };

  const fermerDesktopMenu = () => {
    setDesktopMenu(null);
  };


  // ==========================================================
  // MOBILE
  // ==========================================================

  const ouvrirMobile = () => {
    setMobileMenu(true);
  };

  const fermerMobile = () => {
    setMobileMenu(false);
  };


  // ==========================================================
  // RENDER
  // ==========================================================

  return (
    <>
      {/* ======================================================
          NAVBAR PRINCIPALE
      ====================================================== */}

      <AppBar
        position="sticky"
        elevation={0}
        sx={{
          backgroundColor: "#ffffff",
          color: "#111111",
          borderBottom: "1px solid #eeeeee",
          zIndex: 1200,
        }}
      >
        <Container maxWidth="xl">
          <Toolbar
            disableGutters
            sx={{
              height: {
                xs: 75,
                md: 90,
              },

              minHeight: {
                xs: "75px !important",
                md: "90px !important",
              },

              display: "flex",
              justifyContent: "space-between",
            }}
          >

            {/* ==================================================
                LOGO
            ================================================== */}

            <Box
              component={Link}
              to="/"
              sx={{
                display: "flex",
                alignItems: "center",
                textDecoration: "none",
              }}
            >
              <Box
                component="img"
                src="/logo-miaboo.png"
                alt="MIABOO Development"
                sx={{
                  width: {
                    xs: 100,
                    sm: 115,
                    md: 125,
                  },

                  height: "auto",
                  display: "block",
                  objectFit: "contain",
                }}
              />
            </Box>


            {/* ==================================================
                MENU DESKTOP
            ================================================== */}

            <Box
              sx={{
                display: {
                  xs: "none",
                  md: "flex",
                },

                alignItems: "center",

                height: "100%",

                gap: {
                  md: 1,
                  lg: 2.5,
                  xl: 4,
                },
              }}
            >

              {/* ACCUEIL */}

              <NavLink
                to="/"
                active={pageActive("/")}
              >
                Accueil
              </NavLink>


              {/* SECTEURS */}

              <Button
                onClick={ouvrirDesktopMenu}
                endIcon={<KeyboardArrowDownIcon />}
                sx={{
                  height: "100%",
                  borderRadius: 0,
                  position: "relative",

                  color: "#111111",

                  fontFamily: "Georgia, serif",

                  fontSize: {
                    md: "15px",
                    lg: "16px",
                    xl: "17px",
                  },

                  fontWeight: 600,

                  textTransform: "none",

                  whiteSpace: "nowrap",

                  "&:hover": {
                    backgroundColor: "transparent",
                  },

                  ...(secteurActif && {
                    "&::after": {
                      content: '""',
                      position: "absolute",
                      bottom: 0,
                      left: 0,
                      right: 0,
                      height: "2px",
                      backgroundColor: "#f4c400",
                    },
                  }),
                }}
              >
                Secteurs d'intervention
              </Button>


              {/* SOUS-MENU DESKTOP */}

              <Menu
                anchorEl={desktopMenu}
                open={Boolean(desktopMenu)}
                onClose={fermerDesktopMenu}
                PaperProps={{
                  sx: {
                    mt: 1,
                    minWidth: 240,
                    borderRadius: 0,
                  },
                }}
              >
                {secteurs.map((secteur) => (
                  <MenuItem
                    key={secteur.url}
                    component={Link}
                    to={secteur.url}
                    onClick={fermerDesktopMenu}
                    sx={{
                      fontFamily: "Georgia, serif",
                      py: 1.3,
                    }}
                  >
                    {secteur.nom}
                  </MenuItem>
                ))}
              </Menu>


              {/* NOS ACTIONS */}

              <NavLink
                to="/actions"
                active={pageActive("/actions")}
              >
                Nos Actions
              </NavLink>


              {/* À PROPOS */}

              <NavLink
                to="/a-propos"
                active={pageActive("/a-propos")}
              >
                À propos
              </NavLink>


              {/* CONTACT */}

              <NavLink
                to="/contact"
                active={pageActive("/contact")}
              >
                Contact
              </NavLink>

            </Box>


            {/* ==================================================
                BOUTON HAMBURGER MOBILE
            ================================================== */}

            <IconButton
              onClick={ouvrirMobile}
              aria-label="Ouvrir le menu"
              sx={{
                display: {
                  xs: "flex",
                  md: "none",
                },

                color: "#111111",

                width: 48,
                height: 48,
              }}
            >
              <MenuIcon
                sx={{
                  fontSize: 32,
                }}
              />
            </IconButton>

          </Toolbar>
        </Container>
      </AppBar>


      {/* ======================================================
          MENU MOBILE
      ====================================================== */}

      <Drawer
        anchor="right"
        open={mobileMenu}
        onClose={fermerMobile}
        PaperProps={{
          sx: {
            width: {
              xs: "calc(100vw - 20px)",
              sm: 360,
            },

            maxWidth: "360px",

            height: {
              xs: "calc(100vh - 20px)",
              sm: "calc(100vh - 40px)",
            },

            top: {
              xs: "10px",
              sm: "20px",
            },

            right: {
              xs: "10px",
              sm: "20px",
            },

            bottom: "auto",

            backgroundColor: "#0c1114 !important",

            backgroundImage:
              "linear-gradient(rgba(9,14,17,0.97), rgba(9,14,17,0.97))",

            color: "#ffffff",

            boxShadow: "none",

            border: "none",

            overflow: "hidden",

            borderRadius: 0,

            zIndex: 1300,
          },
        }}
      >

        {/* ====================================================
            CONTENEUR
        ==================================================== */}

        <Box
          sx={{
            width: "100%",
            height: "100%",

            backgroundColor: "#0c1114",

            display: "flex",

            flexDirection: "column",

            alignItems: "center",

            position: "relative",

            boxSizing: "border-box",

            overflowY: "auto",

            overflowX: "hidden",

            px: 2,

            py: 2,

            "&::-webkit-scrollbar": {
              width: 0,
            },

            scrollbarWidth: "none",
          }}
        >


          {/* ==================================================
              CROIX
          ================================================== */}

          <IconButton
            onClick={fermerMobile}
            aria-label="Fermer le menu"
            sx={{
              position: "absolute",

              top: 10,
              right: 10,

              width: 42,
              height: 42,

              color: "#ffffff",

              zIndex: 20,

              "&:hover": {
                backgroundColor: "transparent",
              },
            }}
          >
            <CloseIcon
              sx={{
                fontSize: 30,
              }}
            />
          </IconButton>


          {/* ==================================================
              LOGO MOBILE
          ================================================== */}

          <Box
            component={Link}
            to="/"
            onClick={fermerMobile}
            sx={{
              mt: {
                xs: 6.5,
                sm: 7,
              },

              mb: {
                xs: 6,
                sm: 6.5,
              },

              width: "100%",

              display: "flex",

              justifyContent: "center",

              alignItems: "center",

              textDecoration: "none",
            }}
          >

            <Box
              component="img"
              src="/logo-miaboo.png"
              alt="MIABOO Development"
              sx={{
                width: {
                  xs: 125,
                  sm: 145,
                },

                height: "auto",

                maxWidth: "75%",

                objectFit: "contain",

                display: "block",
              }}

              /*
               * Si l'image n'existe pas, on évite
               * l'affichage d'une icône cassée.
               */
              onError={(event) => {
                event.currentTarget.style.display = "none";
              }}
            />

          </Box>


          {/* ==================================================
              MENU
          ================================================== */}

          <Box
            sx={{
              width: "100%",

              display: "flex",

              flexDirection: "column",

              alignItems: "center",

              gap: {
                xs: 2.5,
                sm: 2.7,
              },
            }}
          >


            {/* =================================================
                HOME
            ================================================= */}

            <MobileMainLink
              to="/"
              active={pageActive("/")}
              onClick={fermerMobile}
            >
              Home
            </MobileMainLink>


            {/* =================================================
                SECTEURS
            ================================================= */}

            <Box
              sx={{
                width: "100%",

                display: "flex",

                flexDirection: "column",

                alignItems: "center",
              }}
            >

              <Box
                onClick={() =>
                  setMobileSecteurs(!mobileSecteurs)
                }
                sx={{
                  display: "flex",

                  alignItems: "center",

                  justifyContent: "center",

                  gap: 1,

                  cursor: "pointer",

                  color: secteurActif
                    ? "#f4c400"
                    : "#ffffff",

                  fontFamily:
                    "Georgia, 'Times New Roman', serif",

                  fontSize: {
                    xs: "26px",
                    sm: "29px",
                  },

                  fontWeight: 700,

                  lineHeight: 1.25,

                  textAlign: "center",

                  transition:
                    "color 0.2s ease",

                  "&:hover": {
                    color: "#f4c400",
                  },
                }}
              >

                <Box>
                  Secteurs
                  <br />
                  d’intervention
                </Box>

                <KeyboardArrowDownIcon
                  sx={{
                    fontSize: 24,

                    transform:
                      mobileSecteurs
                        ? "rotate(180deg)"
                        : "rotate(0deg)",

                    transition:
                      "transform 0.25s ease",
                  }}
                />

              </Box>


              {/* ==============================================
                  SOUS-MENU
              ============================================== */}

              <Collapse
                in={mobileSecteurs}
                timeout="auto"
                unmountOnExit
                sx={{
                  width: "100%",
                }}
              >

                <Box
                  sx={{
                    width: "100%",

                    mt: 2,

                    display: "flex",

                    flexDirection: "column",

                    alignItems: "center",

                    gap: 1.2,
                  }}
                >

                  {secteurs.map((secteur) => (
                    <Box
                      key={secteur.url}
                      component={Link}
                      to={secteur.url}
                      onClick={fermerMobile}
                      sx={{
                        color: "#ffffff",

                        textDecoration: "none",

                        fontFamily:
                          "Georgia, serif",

                        fontSize: "16px",

                        lineHeight: 1.3,

                        textAlign: "center",

                        "&:hover": {
                          color: "#f4c400",
                        },
                      }}
                    >
                      {secteur.nom}
                    </Box>
                  ))}

                </Box>

              </Collapse>

            </Box>


            {/* =================================================
                NOS ACTIONS
            ================================================= */}

            <MobileMainLink
              to="/actions"
              active={pageActive("/actions")}
              onClick={fermerMobile}
            >
              Nos Actions
            </MobileMainLink>


            {/* =================================================
                À PROPOS
            ================================================= */}

            <MobileMainLink
              to="/a-propos"
              active={pageActive("/a-propos")}
              onClick={fermerMobile}
            >
              À propos
            </MobileMainLink>


            {/* =================================================
                CONTACT
            ================================================= */}

            <MobileMainLink
              to="/contact"
              active={pageActive("/contact")}
              onClick={fermerMobile}
            >
              Contact
            </MobileMainLink>

          </Box>


          {/* ==================================================
              FACEBOOK
          ================================================== */}

          <Box
            sx={{
              marginTop: "auto",

              pt: 4,

              pb: 1,

              display: "flex",

              justifyContent: "center",

              alignItems: "center",
            }}
          >

            <Box
              component="a"
              href="#"
              aria-label="Facebook"
              sx={{
                width: 40,
                height: 40,

                border:
                  "1px solid rgba(255,255,255,0.65)",

                borderRadius: "50%",

                display: "flex",

                alignItems: "center",

                justifyContent: "center",

                color: "#ffffff",

                textDecoration: "none",

                "&:hover": {
                  color: "#f4c400",

                  borderColor: "#f4c400",
                },
              }}
            >
              <FacebookIcon
                sx={{
                  fontSize: 21,
                }}
              />
            </Box>

          </Box>

        </Box>

      </Drawer>
    </>
  );
}


// ============================================================
// LIEN DESKTOP
// ============================================================

function NavLink({
  to,
  children,
  active,
}) {
  return (
    <Button
      component={Link}
      to={to}
      sx={{
        height: "100%",

        px: 1,

        borderRadius: 0,

        position: "relative",

        color: "#111111",

        fontFamily:
          "Georgia, 'Times New Roman', serif",

        fontSize: {
          md: "15px",
          lg: "16px",
          xl: "17px",
        },

        fontWeight: 600,

        textTransform: "none",

        whiteSpace: "nowrap",

        "&:hover": {
          backgroundColor: "transparent",

          color: "#f4c400",
        },

        ...(active && {
          "&::after": {
            content: '""',

            position: "absolute",

            bottom: 0,

            left: 0,

            right: 0,

            height: "2px",

            backgroundColor: "#f4c400",
          },
        }),
      }}
    >
      {children}
    </Button>
  );
}


// ============================================================
// LIEN MOBILE
// ============================================================

function MobileMainLink({
  to,
  children,
  active,
  onClick,
}) {
  return (
    <Box
      component={Link}
      to={to}
      onClick={onClick}
      sx={{
        textDecoration: "none",

        color: active
          ? "#f4c400"
          : "#ffffff",

        fontFamily:
          "Georgia, 'Times New Roman', serif",

        fontSize: {
          xs: "27px",
          sm: "30px",
        },

        fontWeight: 700,

        lineHeight: 1.2,

        textAlign: "center",

        transition: "color 0.2s ease",

        "&:hover": {
          color: "#f4c400",
        },
      }}
    >
      {children}
    </Box>
  );
}


// ============================================================
// EXPORT
// ============================================================

export default Navbar;