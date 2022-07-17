import React,{useState, useEffect} from 'react';
import { Dialog, DialogActions, DialogTitle, DialogContent,  Button,   } from '@mui/material'
import { useDispatch, useSelector } from "react-redux";
import { loadTranscripts } from '../redux/_api/api';
import { useSnackbar } from 'notistack';
import StudentScoreTable from './StudentScoreTable';
import axios from 'axios';




const DialogSubmitScore = ({open, onClose, dialogSubject, setDialogSubject}) => {

  let dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();

  const onChangeMidScoreItem = ({id, value}) => {
    setDialogSubject(prev => prev.map(item => item.masoSV === id ? {...item, mid_grade: parseFloat(value,10)} : item))
  }
  
  const onChangeEndScoreItem = ({id, value}) => {
    setDialogSubject(prev => prev.map(item => item.masoSV === id ? {...item, final_grade: parseFloat(value,10)} : item))
  }
  

  const onSubmit = () => {
    const promises = dialogSubject.map((item) =>axios.put(`http://localhost:8000/student_score/update/${item.masoSV}&${item.mamon}&20212`, {mid_grade: item.mid_grade, final_grade: item.final_grade}))
    Promise.allSettled(promises)
    .then(()=>
    dispatch(loadTranscripts())
    )
    console.log(dialogSubject)
    onClose();
    enqueueSnackbar('Update successfully', {variant: 'success'})
    
  }



      
  return (
    <>
    <Dialog open={open} onClose={onClose}   >
      
        <DialogContent>
            
            <StudentScoreTable studentScore={dialogSubject} 
            onChangeEndScoreItem={onChangeEndScoreItem} onChangeMidScoreItem={onChangeMidScoreItem} 
            />

      
        </DialogContent>
        <DialogActions>
          <Button autoFocus variant="contained" onClick={onSubmit}>
            Update
          </Button>
        </DialogActions>
    </Dialog>
   
    </>
  )
}

export default DialogSubmitScore