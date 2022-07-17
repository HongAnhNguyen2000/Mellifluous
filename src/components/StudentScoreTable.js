import React from 'react';
import {  Typography,Table, TableCell,TableHead, TableRow, TableBody,  TextField, experimentalStyled as styled, tableCellClasses  } from '@mui/material'

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StudentScoreTable = ({studentScore, onChangeMidScoreItem, onChangeEndScoreItem}) => {
  return (
    <Table>
              <TableHead>
              <TableRow>
                <StyledTableCell align="left">MSSV</StyledTableCell>
                <StyledTableCell align="left">Điểm giữa kì</StyledTableCell>
                <StyledTableCell align="left">Điểm cuối kì</StyledTableCell>
              </TableRow>
            </TableHead>
    <TableBody >
    { studentScore && studentScore.map((student) => 
        
                
                <TableRow key={student.id}>
                  <TableCell align="left">
                    <Typography>{student.masoSV}</Typography>
                  </TableCell>
                  <TableCell align="left">
                  <TextField type="number" value={student.mid_grade} onChange={(e) => onChangeMidScoreItem({id: student.masoSV, value: e.target.value})}/>
                
                  </TableCell>
                  <TableCell align="left">
                  <TextField type= "number"  value={student.final_grade} onChange={(e) => onChangeEndScoreItem({id: student.masoSV, value: e.target.value})}/>
                  </TableCell>
                
                </TableRow>
                
              
            
          )}
    </TableBody>
    </Table>
  )
}

export default StudentScoreTable