import { useTheme } from "@emotion/react";
import { Box, Button, Divider, Grid2, Typography } from "@mui/material";
import ThumbUpIcon from "@mui/icons-material/ThumbUp"; // Import the like icon
import React, { useState } from "react";

const Second_Row = () => {
  const theme = useTheme();
  const [activeContent, setActiveContent] = useState("Fiche Détaillée");

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column", // Stack children vertically
        gap: "50px", // Add spacing between rows
        width: "100%",
      }}
    >
      {/* Top row with buttons */}
      <Grid2
        container
        spacing={4} // Add spacing between grid items
      >
        {/* Buttons and Divider Section */}
        <Grid2
          item
          size={{
            mobile: 12,
            laptop: 6,
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: {
                mobile: "space-between",
                tablet: "center",
                laptop: "space-between",
              },
              gap: "10px",
            }}
          >
            <Button
              onClick={() => setActiveContent("Fiche Détaillée")}
              sx={{
                color:
                  activeContent === "Fiche Détaillée" ? "primary.main" : "#000",
                fontWeight: "800",
                fontSize: {
                  mobile: "15px",
                },
                color: "#000",
                padding: "0",
              }}
            >
              Fiche Détaillée
            </Button>
            <Divider
              orientation="vertical"
              flexItem
              sx={{ borderColor: "#000", height: "44px" }}
            />
            <Button
              onClick={() => setActiveContent("Discussion")}
              sx={{
                color: activeContent === "Discussion" ? "primary.main" : "#000",
                fontWeight: "400",
                fontSize: "12px",
              }}
            >
              Discussion
            </Button>
          </Box>
        </Grid2>

        {/* Like Section */}
        <Grid2
          item
          size={{
            mobile: 12,
            laptop: 6,
          }}
          sx={{
            display: "flex",
            justifyContent: {
              mobile: "center",
              laptop: "flex-end",
            },
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "30px",
              bgcolor: "#000",
              borderRadius: "30px",
              padding: "3px 13px",
              color: "#fff",
            }}
          >
            <Typography
              sx={{
                fontSize: {
                  mobile: "14px",
                },
              }}
            >
              74720
            </Typography>
            <Button
              variant="text"
              sx={{
                minWidth: "unset", // Remove extra padding for a compact look
                color: "#FFF", // Set button color
                width: "12px",
                height: "12px",
              }}
            >
              <ThumbUpIcon />
            </Button>
          </Box>
        </Grid2>
      </Grid2>

      {/* Dynamic content box */}
      <Box
        sx={{
          p: {
            mobile: "30px 20px 100px 20px",
            laptop: "40px 30px 120px 30px",
            desktop: "50px 40px 100px 40px",
          },
          backgroundColor: "#F9F9F9",
        }}
      >
        {activeContent === "Fiche Détaillée" ? (
          <>
            <Box sx={{ display: "flex", flexDirection: "column", gap: "60px" }}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "flex-end",
                  alignItems: "flex-end",
                }}
              >
                <Typography
                  sx={{
                    fontSize: "12px",
                    fontWeight: "1000",
                  }}
                >
                  23/05/21
                </Typography>
              </Box>
              <Box
                sx={{ display: "flex", flexDirection: "column", gap: "30px" }}
              >
                <Typography
                  sx={{
                    fontWeight: "700",
                    fontSize: {
                      mobile: "15px",
                      laptop: "18px",
                    },
                  }}
                >
                  Daniel Kaluuya
                </Typography>
                <Divider
                  orientation="horizontal"
                  flexItem
                  sx={{
                    borderColor: "#000",
                    width: {
                      mobile: "100%",
                      laptop: "60%",
                    },
                  }}
                />
                <Typography
                  sx={{
                    fontSize: {
                      mobile: "12px",
                      lineHeight: "40px",
                    },
                  }}
                >
                  Daniel Kaluuya, né le 24 février 1989 à Londres, est un acteur
                  britannique. Il commence sa carrière par le théâtre puis se
                  fait remarquer à la télévision, dans quelques épisodes de la
                  série britannique Skins. Il joue ensuite des rôles importants
                  dans les minis-séries The Fades et Babylon. Il est finalement
                  révélé au grand public grâce au film d'horreur plébiscité Get
                  Out, qui lui vaut de nombreux prix et nominations. En 2018, il
                  joue dans le blockbuster à succès Black Panther et dans le
                  drame salué Les Veuves. Il remporte l'Oscar du meilleur acteur
                  dans un second rôle en 2021 pour son interprétation du
                  militant afro-américan Fred Hampton dans le film Judas and the
                  Black Messiah.
                </Typography>
              </Box>
              <Box
                sx={{ display: "flex", flexDirection: "column", gap: "30px" }}
              >
                <Typography
                  sx={{
                    fontWeight: "700",
                    fontSize: {
                      mobile: "15px",
                      laptop: "18px",
                    },
                  }}
                >
                  Biographie
                </Typography>
                <Divider
                  orientation="horizontal"
                  flexItem
                  sx={{
                    borderColor: "#000",
                    width: {
                      mobile: "100%",
                      laptop: "60%",
                    },
                  }}
                />
                <Typography
                  sx={{
                    fontSize: {
                      mobile: "12px",
                      lineHeight: "40px",
                    },
                  }}
                >
                  Né à Londres en 1989 de parents ougandais, Daniel Kaluuya
                  grandit à Camden. Daniel Kaluuya fait des études à la St
                  Aloysius Secondary School. Poussé par sa mère, il écrit sa
                  première pièce à 9 ans, puis prend des cours d'improvisation.
                  Il obtient très jeune son premier rôle dans la série Shoot the
                  Messenger. Il rejoint ensuite le casting original de Skins
                  dans le rôle de Posh Kenneth et participe en tant qu'écrivain
                  aux trois premières saisons. Très impliqué dans ce projet, il
                  est également scénariste de l'épisode Jal de la saison 2,
                  ainsi que du troisième épisode (Thomas) de la troisième
                  saison. C'est lui qui présente le podcast disponible sur le
                  site de la chaîne E4. Il fait des apparitions dans plusieurs
                  séries télévisées comme Affaires non classées, ou encore
                  Doctor Who. On le retrouve aussi dans les divertissements
                  télévisés That Mitchell and Webb Look et Harry and Paul. En
                  2009, il obtient le rôle de Michael « Tea Leaf » Fry dans la
                  série noire Psychoville. À la fin de l'année, le magazine
                  Screen International parle de lui en tant que « star
                  britannique de demain ». En 2010, c'est au Royal Court Theatre
                  que l'on retrouve Daniel Kaluuya, dans Sucker Punch de Roy
                  Williams. Il remporte un franc succès et les critiques sont
                  très bonnes, ce qui lui vaut même deux prix : l'Evening
                  Standard Award et le Critics' Circle Theatre Award.
                </Typography>
              </Box>
            </Box>
          </>
        ) : (
          <>
            <Typography>You are in the Discussion</Typography>
          </>
        )}
      </Box>
    </Box>
  );
};

export default Second_Row;
