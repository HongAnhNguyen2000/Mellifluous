import { Typography,Box, TableContainer, TableHead, Table, TableCell, TableRow, TableBody, experimentalStyled as styled, tableCellClasses, Button  } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { getTeacherSubject, getTeacherSubId } from '../redux/_api/api';
import DialogSubmitScore from './DialogSubmitScore';

const RootStyle = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  borderRadius: theme.shape.borderRadiusMd,
  padding: `${theme.spacing(2)} ${theme.spacing(2)}`,
  boxShadow: '0px 1px 2px rgba(0, 0, 0, 0.06), 0px 1px 3px rgba(0, 0, 0, 0.1)'
}));

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));


const TeacherScore = () => {
  let dispatch = useDispatch();

  const { TeacherSubject } = useSelector((state) => state.teacherSubject);
  
  const [open, setOpen] = useState(false);
  const [dialogId, setDialogId] = useState(null);

  const handleClickDialog = (id) =>{
    setOpen(true);
    setDialogId(id)
  }

  useEffect(() => {
    dispatch(getTeacherSubject())
  },[])
  return (
    <RootStyle>
  
    <Box mt={2}>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <StyledTableCell align="left">SubjectId</StyledTableCell>
                <StyledTableCell align="left">SubjectName</StyledTableCell>
                <StyledTableCell align="left">SubjectStatus</StyledTableCell>
              </TableRow>
            </TableHead>
            
              {TeacherSubject && TeacherSubject.map((subject) =>
                <TableBody>
                  <TableCell align="left">
                    <Typography>{subject.id}</Typography>
                  </TableCell>
                  <TableCell align="left">
                  <Typography>{subject.subjectName}</Typography>
                  </TableCell>
                  <TableCell align="left">
                  {subject.subjectStatus === 0 &&
                  <Button variant="outlined" onClick={()=> handleClickDialog(subject.id)}>UPDATE SCORE</Button>
                  }
                  {subject.subjectStatus === 1 &&
                  <Button variant="contained" onClick={()=> handleClickDialog(subject.id)}>UPDATE MIDSCORE</Button>
                  }
                  {subject.subjectStatus === 3 &&
                  <Button variant="contained" onClick={()=> handleClickDialog(subject.id)}>UPDATE ENDSCORE</Button>
                  }

                  <DialogSubmitScore open={open} onClose={()=> setOpen(false)} id= {subject.id} />
                  
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