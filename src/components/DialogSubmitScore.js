import React,{useState, useEffect} from 'react';
import { Dialog, DialogActions, DialogTitle, DialogContent, experimentalStyled as styled, Button,  TableCell, TableRow, TableHead, tableCellClasses } from '@mui/material'
import { useDispatch, useSelector } from "react-redux";

import { teacherSubjectUpdate, getTeacherSubId } from '../redux/_api/api';
import { useSnackbar } from 'notistack';
import StudentScoreTable from './StudentScoreTable';


const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const DialogSubmitScore = ({open, onClose, id}) => {

  let dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();

  const { subjectbyID } = useSelector((state) => state.teacherSubject);
  console.log(subjectbyID);


  const studentsInSubject =  subjectbyID ? subjectbyID.students: [];
  

  const [studentScore, setStudentScore] = useState(studentsInSubject ? studentsInSubject : [])
  console.log(studentScore);
  
  


  const onChangeMidScoreItem = ({id, value}) => {
    setStudentScore(prev => prev.map(item => item.id === id ? {...item, midscore: parseInt(value,10)} : item))
  }
  
  const onChangeEndScoreItem = ({id, value}) => {
    setStudentScore(prev => prev.map(item => item.id === id ? {...item, endscore: parseInt(value,10)} : item))
  }
  

  const onSubmit = () => {
    dispatch(teacherSubjectUpdate(subjectbyID.id, {...subjectbyID, students: studentScore }))
    onClose();
    enqueueSnackbar('Update successfully', {variant: 'success'})
    
  }

  useEffect(() => {
    dispatch(getTeacherSubId(id))
  }, [])
      
  return (
    <>
    <Dialog open={open} onClose={onClose}  key={subjectbyID.id} >
      
         <DialogTitle >
          {subjectbyID.subjectName}
        </DialogTitle>
        <DialogContent>
        <TableHead>
              <TableRow>
                <StyledTableCell align="left">Name</StyledTableCell>
                <StyledTableCell align="left">Midscore</StyledTableCell>
                <StyledTableCell align="left">Endscore</StyledTableCell>
              </TableRow>
            </TableHead>
            
            <StudentScoreTable studentScore = {studentScore} onChangeEndScoreItem={onChangeEndScoreItem} onChangeMidScoreItem = {onChangeMidScoreItem}/>

      
        </DialogContent>
        <DialogActions>
          <Button onClick={onSubmit} autoFocus variant="contained">
            Update
          </Button>
        </DialogActions>
    </Dialog>
   
    </>
  )
}

export default DialogSubmitScore