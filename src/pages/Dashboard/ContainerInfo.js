import React from 'react'
import SelfInfo from './Info/selfInfo';
import HealthInfo from './Info/HealthInfo';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Link from '@mui/material/Link';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/private-theming';
import DashboardContent from './Dashboard';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';


const ContainerInfo = () => {

  const getRole = localStorage.getItem('accountInfo');

    return (
     
        <ThemeProvider>
            <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <DashboardContent/>
        <Box
        component="main"
        sx={{
          backgroundcolor: (theme) =>
            theme.palette.mode === 'light'
              ? theme.palette.grey[100]
              : theme.palette.grey[900],
          flexGrow: 1,
          height: '100vh',
          overflow: 'auto',
        }}
      >
       
        <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        {/* <Grid container spacing={3}>
            
          
            
            <Grid item xs={12} md={12} lg={8}> */}
              <Paper
                sx={{
                  p: 2,
                  display: 'flex',
                  flexDirection: 'column',
                  
                }}
              >
                
                <SelfInfo getRole= {getRole}/>
                
                
              </Paper>
            {/* </Grid>
            
            {getRole === '0' &&(
           
            <Grid item xs={12} md={12} lg={4}>
              <Paper
                sx={{
                  p: 2,
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                <HealthInfo/>
              </Paper>
            </Grid>
            )}
            </Grid> */}
        </Container>
      </Box>
      </Box>
        </ThemeProvider>
      
    )
}

export default ContainerInfo
