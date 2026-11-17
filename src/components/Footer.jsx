import {
  Box,
  Container,
  Typography,
  IconButton,
  Divider,
  Stack,
} from "@mui/material";

import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";

import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";

import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

import { Link } from "react-router-dom";

const secteurs = [
  ["Secteur 1 : Éducation", "/secteurs/education"],
  ["Secteur 2 : Gouvernance", "/secteurs/gouvernance"],
  [
    "Secteur 3 : Protection Sociale",
    "/secteurs/protection-sociale",
  ],
  [
    "Secteur 4 : Santé et Nutrition",
    "/secteurs/sante-nutrition",
  ],
  [
    "Secteur 5 : Environnement",
    "/secteurs/environnement",
  ],
  [
    "Secteur 6 : Décentralisation",
    "/secteurs/decentralisation",
  ],
];

function Footer() {
  const retourHaut = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "#003300",
        color: "#fff",
        mt: "auto",
      }}
    >
      <Container
        maxWidth="xl"
        sx={{
          px: {
            xs: 3,
            sm: 4,
            md: 5,
          },
        }}
      >
        {/* =========================
            CONTENU
        ========================= */}

        <Box
          sx={{
            display: "grid",

            gridTemplateColumns: {
              xs: "1fr",
              sm: "1fr 1fr",
              md: "1.1fr 0.9fr 1.2fr 1.6fr",
            },

            gap: {
              xs: 5,
              sm: 5,
              md: 4,
            },

            py: {
              xs: 5,
              sm: 6,
              md: 7,
            },
          }}
        >
          {/* =========================
              COLONNE 1
          ========================= */}

          <Box>
            <Box
              component="img"
              src="/logo-miaboo.png"
              alt="MIABOO Development"
              sx={{
                width: {
                  xs: 110,
                  md: 125,
                },
                height: "auto",
                mb: 3,
              }}
            />

            <Typography
              sx={{
                fontFamily: "Georgia, serif",
                fontSize: {
                  xs: 16,
                  md: 17,
                },
                lineHeight: 1.6,
                maxWidth: 240,
              }}
            >
              Offrir au monde une nouvelle expérience, sur la
              manière de penser et de vivre pleinement le
              développement.
            </Typography>

            <Typography
              sx={{
                mt: 3,
                mb: 1,
                fontSize: 20,
                fontWeight: 700,
              }}
            >
              Réseaux sociaux
            </Typography>

            <Stack direction="row" spacing={1}>
              <SocialIcon>
                <FacebookIcon />
              </SocialIcon>

              <SocialIcon>
                <Typography
                  sx={{
                    color: "#fff",
                    fontSize: 18,
                    fontWeight: 700,
                  }}
                >
                  𝕏
                </Typography>
              </SocialIcon>

              <SocialIcon>
                <InstagramIcon />
              </SocialIcon>

              <SocialIcon>
                <LinkedInIcon />
              </SocialIcon>

              <SocialIcon>
                <YouTubeIcon />
              </SocialIcon>
            </Stack>
          </Box>

          {/* =========================
              COLONNE 2
          ========================= */}

          <Box>
            <FooterTitle>
              Navigation
            </FooterTitle>

            <Stack spacing={0.5}>
              <FooterLink to="/">
                Home
              </FooterLink>

              <FooterLink to="/actions">
                Nos Actions
              </FooterLink>

              <FooterLink to="/a-propos">
                À propos
              </FooterLink>

              <FooterLink to="/contact">
                Contact
              </FooterLink>
            </Stack>
          </Box>

          {/* =========================
              COLONNE 3
          ========================= */}

          <Box>
            <FooterTitle>
              Secteurs
              <br />
              d’intervention
            </FooterTitle>

            <Stack spacing={0.5}>
              {secteurs.map(([nom, url]) => (
                <FooterLink
                  key={url}
                  to={url}
                >
                  {nom}
                </FooterLink>
              ))}
            </Stack>
          </Box>

          {/* =========================
              COLONNE 4
          ========================= */}

          <Box>
            <FooterTitle>
              Informations de contact
            </FooterTitle>

            <ContactItem
              icon={<LocationOnOutlinedIcon />}
              title="Adresse :"
            >
              II U 95 Cité Planton Ambaranjana,
              <br />
              Antananarivo
              <br />
              Madagascar
            </ContactItem>

            <ContactItem
              icon={<AlternateEmailIcon />}
              title="E-mail :"
            >
              miaboo-mdg@miaboodevelopment.org
            </ContactItem>

            <ContactItem
              icon={<PhoneOutlinedIcon />}
              title="Téléphone :"
            >
              +261 33 45 113 94
            </ContactItem>

            <ContactItem
              icon={<PhoneOutlinedIcon />}
              title="Whatsapp :"
            >
              +261 32 11 730 23
            </ContactItem>
          </Box>
        </Box>

        {/* =========================
            SEPARATION
        ========================= */}

        <Divider
          sx={{
            borderColor: "rgba(255,255,255,0.5)",
          }}
        />

        {/* =========================
            COPYRIGHT
        ========================= */}

        <Box
          sx={{
            minHeight: 70,

            display: "flex",

            flexDirection: {
              xs: "column",
              md: "row",
            },

            alignItems: {
              xs: "flex-start",
              md: "center",
            },

            justifyContent: "space-between",

            gap: 2,

            py: {
              xs: 2,
              md: 0,
            },

            pr: {
              xs: 0,
              md: 7,
            },
          }}
        >
          <Typography
            sx={{
              fontFamily: "Georgia, serif",
              fontSize: {
                xs: 13,
                sm: 14,
                md: 16,
              },
              lineHeight: 1.5,
            }}
          >
            © 2026 MIABOO Development. Tous droits réservés |
            Développé par{" "}
            <Box
              component="span"
              sx={{
                color: "#0066ff",
              }}
            >
              BELOHIA
            </Box>
          </Typography>
        </Box>
      </Container>

      {/* =========================
          BOUTON RETOUR HAUT
      ========================= */}

      <IconButton
        onClick={retourHaut}
        aria-label="Retour en haut"
        sx={{
          position: "fixed",

          right: {
            xs: 12,
            md: 25,
          },

          bottom: {
            xs: 15,
            md: 20,
          },

          width: 40,
          height: 40,

          backgroundColor: "#ffc900",
          color: "#111",

          zIndex: 100,

          "&:hover": {
            backgroundColor: "#e5b600",
          },
        }}
      >
        <KeyboardArrowUpIcon />
      </IconButton>
    </Box>
  );
}

/* =========================
   TITRE
========================= */

function FooterTitle({ children }) {
  return (
    <Typography
      sx={{
        fontSize: {
          xs: 19,
          md: 20,
        },
        fontWeight: 700,
        mb: 2,
      }}
    >
      {children}
    </Typography>
  );
}

/* =========================
   LIEN
========================= */

function FooterLink({ to, children }) {
  return (
    <Typography
      component={Link}
      to={to}
      sx={{
        color: "#fff",
        textDecoration: "none",
        fontFamily: "Georgia, serif",
        fontSize: {
          xs: 15,
          md: 16,
        },
        lineHeight: 1.5,

        "&:hover": {
          color: "#ffc900",
        },
      }}
    >
      {children}
    </Typography>
  );
}

/* =========================
   SOCIAL
========================= */

function SocialIcon({ children }) {
  return (
    <IconButton
      sx={{
        color: "#fff",
        p: 0.5,

        "&:hover": {
          color: "#ffc900",
          backgroundColor: "transparent",
        },
      }}
    >
      {children}
    </IconButton>
  );
}

/* =========================
   CONTACT
========================= */

function ContactItem({
  icon,
  title,
  children,
}) {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "flex-start",
        gap: 1.5,
        mb: 2,
      }}
    >
      <Box
        sx={{
          width: {
            xs: 44,
            md: 50,
          },

          height: {
            xs: 44,
            md: 50,
          },

          minWidth: {
            xs: 44,
            md: 50,
          },

          border:
            "1px solid rgba(255,255,255,0.5)",

          borderRadius: "50%",

          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {icon}
      </Box>

      <Box sx={{ minWidth: 0 }}>
        <Typography
          sx={{
            fontFamily: "Georgia, serif",
            fontWeight: 700,
            fontSize: {
              xs: 15,
              md: 16,
            },
          }}
        >
          {title}
        </Typography>

        <Typography
          sx={{
            fontFamily: "Georgia, serif",
            fontSize: {
              xs: 14,
              md: 16,
            },
            lineHeight: 1.5,
            overflowWrap: "anywhere",
          }}
        >
          {children}
        </Typography>
      </Box>
    </Box>
  );
}

export default Footer;