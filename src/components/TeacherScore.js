import { Typography,Box, TableContainer, TableHead, Table, TableCell, TableRow, TableBody, experimentalStyled as styled, tableCellClasses, Button  } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { loadTranscripts, getTeacherSubId } from '../redux/_api/api';
import DialogSubmitScore from './DialogSubmitScore';
import { keyBy, groupBy } from 'lodash';

const RootStyle = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  borderRadius: theme.shape.borderRadiusMd,
  padding: `${theme.spacing(2)} ${theme.spacing(2)}`,
  boxShadow: '0px 1px 2px rgba(0, 0, 0, 0.06), 0px 1px 3px rgba(0, 0, 0, 0.1)'
}));

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#2a4d5d",
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));


const TeacherScore = () => {
  let dispatch = useDispatch();

  const { transcripts } = useSelector((state) => state.transcript);

  const semesterTranscripts = transcripts ? transcripts.filter((item) => item.semester === '20212' ) : [];
  
  const [open, setOpen] = useState(false);
  const [dialogSubject, setDialogSubject] = useState([])

  const arrayUniqueByKey = semesterTranscripts.reduce((group, newArray) => {
    const {mamon} = newArray;
    group[mamon] = group[mamon] ?? [];
    group[mamon].push(newArray);
    return group
  },{})




  const handleClickDialog = (id) =>{
    console.log(id);
    
    let result2 =''
    const newone = Object.entries(arrayUniqueByKey).find(([key, value]) => {
    if (key === id) {
      result2 = value;
      return true;
    }
  
    return false;
  });
  console.log(result2)

    setOpen(true);
   setDialogSubject(result2)
  }

  useEffect(() => {
    dispatch(loadTranscripts())
  },[])
  return (
    <RootStyle>
       <Typography variant="h3" sx={{textAlign:"center", color: "#2a4d5d"}}>Quản lý điểm kì 20212</Typography>
    <Box mt={2}>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <StyledTableCell align="center"> Mã môn học</StyledTableCell>

                <StyledTableCell align="center"> Cập nhật điểm</StyledTableCell>
              </TableRow>
            </TableHead>
            
              {Object.keys(arrayUniqueByKey).map((subject) =>
                <TableBody>
                  <TableCell align="center">
                    <Typography>{subject}</Typography>
                  </TableCell>
                  <TableCell align="center">
                 
                  <Button variant="outlined" onClick={()=> handleClickDialog(subject)}>UPDATE SCORE</Button>
                 
                 

                  <DialogSubmitScore open={open} onClose={()=> setOpen(false)} dialogSubject={dialogSubject} setDialogSubject={setDialogSubject}/>
                  
                  </TableCell>
                  </TableBody>
              )}
            
          </Table>
        </TableContainer>

      </Box>
      
      
    </RootStyle>

  )
}

export default TeacherScore