import { ThemeProvider } from "@mui/private-theming";
import React from "react";
import DashboardContent from "./Dashboard";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import CssBaseline from "@mui/material/CssBaseline";
import { styled } from "@mui/material/styles";
import { Paper } from "@mui/material";
import { Stack } from "@mui/material";
import InfoSub from "./Subject/InfoSub";

import FinalSub from "./Subject/FinalSub";
import Grid from "@mui/material/Grid";
import InfoTeach from "./Subject/InfoTeach";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const ContainerSubject = () => {
  return (
    <ThemeProvider>
      <Box sx={{ display: "flex", flexDirection: "row" }}>
        <CssBaseline />
        <DashboardContent />
        <Box
          component="main"
          sx={{
            backgroundcolor: (theme) =>
              theme.palette.mode === "light"
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            height: "100vh",
            overflow: "auto",
          }}
        >
          <Toolbar />
          <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            <Grid container>
              <Grid item xs={8} paddingRight={4}>
                <InfoSub />
              </Grid>
              <Grid item xs={4}>
                <Stack direction="column" spacing={4}>
                  <InfoTeach />
                  <FinalSub />
                </Stack>
              </Grid>
            </Grid>
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default ContainerSubject;
