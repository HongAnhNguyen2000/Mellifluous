import { ThemeProvider } from "@mui/private-theming";
import React, { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  tableCellClasses,
  TableContainer,
  TableHead,
  TableRow,
  CssBaseline,
  Toolbar,
  Container,
  Box,
  Button,
  IconButton,
  Icon,
  Typography,
  Stack,
} from "@mui/material";
import { useSnackbar } from "notistack";

import { styled } from "@mui/material/styles";
import { useDispatch, useSelector } from "react-redux";
import { loadSubjects, deleteSub } from "../../redux/_api/api";
import DashboardContent from "./Dashboard";
import DialogFormSubject from "../../components/DialogFormSubject";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const ContainerManageSubject = () => {
  let dispatch = useDispatch();

  const { subjects } = useSelector((state) => state.subject);
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const [open, setOpen] = useState(false);

  const deleteSubject = (id) => {
    dispatch(deleteSub(id));
    dispatch(loadSubjects())
    enqueueSnackbar("DELETE SUCCESS", {
      variant: "success",
      action: (key) => (
        <IconButton
          size="small"
          onClick={() => {
            closeSnackbar(key);
          }}
        >
          x
        </IconButton>
      ),
    });
    
  };

  useEffect(() => {
    dispatch(loadSubjects());
  }, []);

  return (
    <ThemeProvider>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <DashboardContent />
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            height: "100vh",
            overflow: "auto",
            positionn: "relative",
          }}
        >
          <Toolbar />
          <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            <Stack direction="column" spacing={2}>
              <Button variant="contained" color="primary" sx={{ width: "200px" }}>
                
                +ADD SUBJECT
              </Button>
              <TableContainer sx={{ paddingLeft: "10px" }}>
                <Table
                  stickyHeader
                  aria-label="sticky table"
                  border={1}
                  style={{
                    borderWidth: "2px",
                    borderColor: "#aaaaaa",
                    borderStyle: "solid",
                  }}
                >
                  <TableHead>
                    <TableRow>
                      <StyledTableCell>Mã môn</StyledTableCell>
                      <StyledTableCell align="center">Tên môn</StyledTableCell>
                      <StyledTableCell align="center">
                        Số tín chỉ
                      </StyledTableCell>
                      <StyledTableCell align="center">
                        Thời gian học
                      </StyledTableCell>
                      <StyledTableCell align="center">
                        Giảng viên
                      </StyledTableCell>
                      <StyledTableCell />
                    </TableRow>
                  </TableHead>
                  {subjects &&
                    subjects.map((subject) => (
                      <TableBody sx={{ maxHeight: "300px" }} key={subject.id}>
                        <TableRow>
                          <TableCell component="th" scope="row" align="center">
                            {subject.mamon}
                          </TableCell>
                          <TableCell align="center">{subject.name}</TableCell>
                          <TableCell align="center">
                            {subject.sotinchi}
                          </TableCell>
                          <TableCell align="center">{subject.time}</TableCell>
                          <TableCell align="center">
                            {subject.teacher}
                          </TableCell>
                          <TableCell>
                            <Stack
                              direction="row"
                              spacing={2}
                              alignItems="center"
                              justifyContent="center"
                            >
                              <Button variant="contained" color="success" onClick={()=>setOpen(true)}>
                                Edit
                              </Button>
                              <Button
                                variant="outlined"
                                color="error"
                                onClick={() => deleteSubject(subject.id)}
                              >
                                Delete
                              </Button>
                            </Stack>
                          </TableCell>
                        </TableRow>
                      </TableBody>
                    ))}
                </Table>
              </TableContainer>
            </Stack>
           
            <DialogFormSubject open={open} />
            
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default ContainerManageSubject;
