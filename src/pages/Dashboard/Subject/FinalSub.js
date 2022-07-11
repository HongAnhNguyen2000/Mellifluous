import React, { useEffect } from "react";
import {
  Grid,
  Card,
  CardContent,
  Table,
  TableCell,
  TableRow,
  TableHead,
  TableBody,
  CardHeader,
  tableCellClasses,
  Button,
  CardActions,
  Snackbar,
  Slide,
  Alert
} from "@mui/material";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loadRegis, regisDelete } from "../../../redux/_api/api";
import { styled } from "@mui/styles";
import DeleteIcon from "@mui/icons-material/Delete";

//Data
const StyledTableCell = styled(TableCell)(() => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#75bcbe",
    color: "whitesmoke",
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

function TransitionLeft(props){
  return <Slide {...props} direction= "up" />
}

const FinalSub = () => {
  let history = useHistory();
  let dispatch = useDispatch();
  const { regis } = useSelector((state) => state.regis);

 
  useEffect(() => {
    dispatch(loadRegis());
  }, []);

  

  const getRegisForStudent = regis.find((item) => item.student.maSV === '20187210');
 

  const Getcredits = getRegisForStudent ? getRegisForStudent.course.map((regi) => (regi.sotinchi)) : [];
  const totalCredits = Getcredits.reduce(
    (previousCredit, currentCredit, index)=>parseInt(previousCredit, 10)+parseInt(currentCredit, 10), 
    0);
  

  const [open, setOpen] = React.useState(false);
  const [transition, setTransition] = React.useState(undefined);
  const GetId = regis.map((regi)=>regi.id);
  
 

  const onHandleClick = (Transition) => (e) => {
    setTransition(() => Transition);
    setOpen(true);
    if(totalCredits >=16) {
 
        history.push("/regisSuccess");
      
      
    }
    
  
    
  };
  
  const handleClose = () => {
    setOpen(false);
  };

  const onChangeDelete = (id) => {
    if (window.confirm("Are you confirm to delete the user ?")) {
      dispatch(regisDelete('20187210', id));
      dispatch(loadRegis());
    }
  };

  
  return (
    <Grid container justifycontent="center" spacing={1} >
      <Grid item md={12} sx={{paddingLeft: '0 !important' }} >
        <Card
          justifycontent="center"
          alignitems="center"
          textalign="center"
          sx={{ borderBlockColor: "red" }}
        >
          <CardHeader
            title="SCHEDULE REGISTER"
            sx={{ color: "white", bgcolor: "#24686e" }}
          ></CardHeader>
          <CardContent>
            <Table>
              <TableHead>
                <TableRow>
                  <StyledTableCell align="center">Mã môn</StyledTableCell>
                  <StyledTableCell align="center">Tín chỉ</StyledTableCell>
                  <StyledTableCell align="right" />
                </TableRow>
              </TableHead>
              <TableBody>
                {getRegisForStudent &&
                  getRegisForStudent.course.map((regi) => (
                    <TableRow key={regi.id}>
                      <TableCell align="center">{regi.mamon}</TableCell>
                      <TableCell align="center">{regi.sotinchi}</TableCell>
                      <TableCell align="center">
                        <Button onClick={() => onChangeDelete(regi.id)}>
                          <DeleteIcon />
                        </Button>
                        
                      </TableCell>
                    </TableRow>
                  ))}
                <TableRow>
                  <TableCell align="center">Tổng tín chỉ</TableCell>
                  <TableCell align="center">{totalCredits}</TableCell>
                  <TableCell />
                </TableRow>
              </TableBody>
            </Table>
         
            <br/>
            <Button size="small" variant="contained"   onClick={onHandleClick(TransitionLeft)}>Regis to schedule</Button>
            <Snackbar
             anchorOrigin={{vertical:' bottom', horizontal:'right' }}
            open={open}
            onClose={handleClose}
            TransitionComponent={transition}
            severity="warning"  
            key={transition ? transition.name : ''}
            >
              {totalCredits <16 ?
              <Alert severity="error">Regis at least 16 credits !</Alert>
              :
              <Alert severity="success">Regis done</Alert>
              }
              </Snackbar>
              </CardContent>
        </Card>
       
      </Grid>
    </Grid>
  );
};

export default FinalSub;
