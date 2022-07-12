import { Stack, Typography, Table, TableCell, TableBody, TableRow, TableHead, tableCellClasses, Grid, Box, CssBaseline, Button } from '@mui/material';
import DashboardContent from "./Dashboard";
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { loadRegis} from "../../redux/_api/api";
import { styled } from "@mui/styles";
import { ThemeProvider } from "@mui/private-theming";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useHistory } from 'react-router-dom';

export const ClockIcon = () => (
    <svg id="wrap" style={{position: 'absolute',
    top: 0,
    bottom: 0,
    left: "20%",
    right: 0,
    margin: 'auto'}}  width="300" height="300">

<svg>
  <circle cx="150" cy="150" r="130" style={{stroke: 'lightblue', strokeWidth:18, fill:'transparent'}}/>
  <circle cx="150" cy="150" r="115" style={{fill:"#2c3e50"}}/>
  <path style={{stroke: '#2c3e50', strokeDasharray:820, strokeDashoffset:820, strokeWidth:18, fill:'transparent'}} d="M150,150 m0,-130 a 130,130 0 0,1 0,260 a 130,130 0 0,1 0,-260">
    <animate attributeName="strokeDashoffset" dur="6s" to="-820" repeatCount="indefinite"/>
  </path>
</svg>

<svg>
  <path id="hourglass" d="M150,150 C60,85 240,85 150,150 C60,215 240,215 150,150 Z" style={{stroke: 'white', strokeWidth:5, fill:"white"}} />
  
  <path id="frame" d="M100,97 L200, 97 M100,203 L200,203 M110,97 L110,142 M110,158 L110,200 M190,97 L190,142 M190,158 L190,200 M110,150 L110,150 M190,150 L190,150" style={{stroke:'lightblue', strokeWidth:6, strokeLinecap:'round'}} />
  
  <animateTransform xlinkHref="#frame" attributeName="transform" type="rotate" begin="0s" dur="3s" values="0 150 150; 0 150 150; 180 150 150" keyTimes="0; 0.8; 1" repeatCount="indefinite" />
  <animateTransform xlinkHref="#hourglass" attributeName="transform" type="rotate" begin="0s" dur="3s" values="0 150 150; 0 150 150; 180 150 150" keyTimes="0; 0.8; 1" repeatCount="indefinite" />
</svg>


<svg>

  <polygon id="upper" points="120,125 180,125 150,147" style={{fill: '#2c3e50'}}>
    <animate attributeName="points" dur="3s" keyTimes="0; 0.8; 1" values="120,125 180,125 150,147; 150,150 150,150 150,150; 150,150 150,150 150,150" repeatCount="indefinite"/>
  </polygon>
  

  <path id="line" strokeLinecap="round" strokeDasharray="1,4" strokeDashoffset="200.00" stroke="#2c3e50" strokeWidth="2" d="M150,150 L150,198">
  
    <animate attributeName="strokeDashoffset" dur="3s" to="1.00" repeatCount="indefinite"/>
   
    <animate attributeName="d" dur="3s" to="M150,195 L150,195" values="M150,150 L150,198; M150,150 L150,198; M150,198 L150,198; M150,195 L150,195" keyTimes="0; 0.65; 0.9; 1" repeatCount="indefinite"/>
 
    <animate attributeName="stroke" dur="3s" keyTimes="0; 0.65; 0.8; 1" values="#2c3e50;#2c3e50;transparent;transparent" to="transparent" repeatCount="indefinite"/>
  </path>
  
 
  <g id="lower">
    <path d="M150,180 L180,190 A28,10 0 1,1 120,190 L150,180 Z" style={{stroke: 'transparent', strokeWidth:5, fill: "#2c3e50"}}>
      <animateTransform attributeName="transform" type="translate" keyTimes="0; 0.65; 1" values="0 15; 0 0; 0 0" dur="3s" repeatCount="indefinite" />
    </path>
    <animateTransform xlinkHref="#lower" attributeName="transform"
                  type="rotate"
                  begin="0s" dur="3s"
                  values="0 150 150; 0 150 150; 180 150 150"
                  keyTimes="0; 0.8; 1"
                  repeatCount="indefinite"/>
  </g>
  
  
  <path d="M150,150 C60,85 240,85 150,150 C60,215 240,215 150,150 Z" style={{stroke: 'white', strokeWidth:5, fill: "transparent"}}>
    <animateTransform attributeName="transform"
                  type="rotate"
                  begin="0s" dur="3s"
                  values="0 150 150; 0 150 150; 180 150 150"
                  keyTimes="0; 0.8; 1"
                  repeatCount="indefinite"/>
  </path>
  

  <path id="frame" d="M100,97 L200, 97 M100,203 L200,203" style={{stroke: 'lightblue', strokeWidth:6, strokeLinecap: 'round'}}>
    <animateTransform attributeName="transform"
                  type="rotate"
                  begin="0s" dur="3s"
                  values="0 150 150; 0 150 150; 180 150 150"
                  keyTimes="0; 0.8; 1"
                  repeatCount="indefinite"/>
  </path>
</svg>

</svg>
)

const StyledTableCell = styled(TableCell)(() => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#75bcbe",
    color: "whitesmoke",
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const ContainRegisSuccess = () => {
  let history = useHistory()
    let dispatch = useDispatch();
    const [timer, setTimer] = useState(true)

    const { regis } = useSelector((state) => state.regis);
    const getRegisForStudent = regis ? regis.find((item) => item.student.maSV === '20187210') : [];

  
   
    useEffect(() => {
      dispatch(loadRegis());
    }, []);

   
    useEffect(() => {
        setTimeout(() => {
            setTimer(false)
        },5000)
    }, [])
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
    {timer ? (
        <ClockIcon/>
    ) : (
        <Grid container justifyContent="center" alignItems="center" >
        <Grid item xs={10} >
        <Button variant="contained" color="success" sx={{alignItems: "flex-start ", marginTop: "20px"}} onClick={() => history.push('/subject')}> 
        <ArrowBackIcon/>
          Quay lại trang đăng kí 
        </Button>

       <Stack direction="column" spacing={4} justifyContent="center" alignItems="center">

        <Typography variant="h3" sx={{color: "#3d5355"}}>Lịch học kì 20211</Typography>
        <Table>
              <TableHead>
                <TableRow>
                  <StyledTableCell align="center">Mã môn</StyledTableCell>
                  <StyledTableCell align="center">Tên môn</StyledTableCell>
                  <StyledTableCell align="center">Tín chỉ</StyledTableCell>
                  <StyledTableCell align="center">Thời gian học</StyledTableCell>
                  <StyledTableCell align="center">Tên giảng viên</StyledTableCell>

                  
                </TableRow>
              </TableHead>
              <TableBody>
                {getRegisForStudent &&
                  getRegisForStudent.course.map((regi) => (
                    <TableRow key={regi.id}>
                      <TableCell align="center">{regi.mamon}</TableCell>
                      <TableCell align="center">{regi.name}</TableCell>
                      <TableCell align="center">{regi.sotinchi}</TableCell>
                      <TableCell align="center">{regi.time}</TableCell>
                      <TableCell align="center">{regi.teacher}</TableCell>

                    </TableRow>
                  ))}
                <TableRow>
                 
                 
               
                </TableRow>
              </TableBody>
            </Table>
       </Stack>
       </Grid>
       </Grid>
    )}
    
    </Box>
    </Box>
    </ThemeProvider>
   
  )
}

export default ContainRegisSuccess