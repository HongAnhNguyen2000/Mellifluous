import React from 'react';
import {  Typography, TableCell, TableRow, TableBody,  TextField } from '@mui/material'

const StudentScoreTable = ({studentScore, onChangeMidScoreItem, onChangeEndScoreItem}) => {
  return (
    <TableBody >
    { studentScore.map((student) => 
        
                
                <TableRow key={student.id}>
                  <TableCell align="left">
                    <Typography>{student.name}</Typography>
                  </TableCell>
                  <TableCell align="left">
                  <TextField value={student.midscore} onChange={(e)=> {
                    onChangeMidScoreItem({id: student.id, value: e.target.value})
                  }}/>
                
                  </TableCell>
                  <TableCell align="left">
                  <TextField  value={student.endscore} onChange={(e)=> {
                    onChangeEndScoreItem({id: student.id, value: e.target.value})
                  }}/>
                  </TableCell>
                
                </TableRow>
                
              
            
          )}
    </TableBody>
  )
}

export default StudentScoreTable