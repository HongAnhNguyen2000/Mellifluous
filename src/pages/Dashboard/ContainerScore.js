import { ThemeProvider } from '@mui/private-theming'
import React,{useEffect} from 'react'

import {Box, Container, CssBaseline} from '@mui/material'


import DashboardContent from './Dashboard'
import EnhancedTable from './Score';
import TeacherScore from '../../components/TeacherScore';


const ContainerScore = () => {
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
          { getRole === '0' ? 
            <EnhancedTable/>
            :
            <TeacherScore/>
          }
       
       
        </Container>
      </Box>
    </Box>
    </ThemeProvider>
    )
}

export default ContainerScore
