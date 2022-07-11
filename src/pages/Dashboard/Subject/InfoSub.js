import React, { useEffect } from "react";
import {
  Table,
  TableBody,
  TableCell,
  tableCellClasses,
  TableContainer,
  TableHead,
  TableRow,
  Stack,
  Button,
  IconButton,
  Typography,
  Collapse,
} from "@mui/material";

import { styled } from "@mui/material/styles";
import { Box } from "@mui/system";
import { useDispatch, useSelector } from "react-redux";
import { loadSubjects } from "../../../redux/_api/api";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: '#37676d',
    color: theme.palette.common.white,
    fontSize: 18
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const InfoSub = ({subjects}) => {



  const [open, setOpen] = React.useState(false);
  const [openId, setOpenId] = React.useState(0);

  const onOpenButton = (id) => {
    setOpen(!open);
    setOpenId(id)
    console.log(id);
  };


  return (
    <Stack direction="row" spacing={2}>
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
              <StyledTableCell />
              <StyledTableCell>Mã môn</StyledTableCell>
              <StyledTableCell align="center">Tên môn</StyledTableCell>
              <StyledTableCell align="center">Số tín chỉ</StyledTableCell>
              <StyledTableCell align="center">Thời gian học</StyledTableCell>
            </TableRow>
          </TableHead>
          {subjects &&
            subjects.map((subject) => (
              <TableBody sx={{ maxHeight: "300px" }} key={subject.id}>
                <TableRow>
                  <TableCell>
                    <Button onClick={() => onOpenButton(subject.id)}>
                      Detail
                    </Button>
                  </TableCell>
                  <TableCell component="th" scope="row" align="center">
                    {subject.mamon}
                  </TableCell>
                  <TableCell align="center">{subject.name}</TableCell>
                  <TableCell align="center">{subject.sotinchi}</TableCell>
                  <TableCell align="center">{subject.time}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell
                    style={{ paddingBottom: 0, paddingTop: 0 }}
                    colSpan={6}
                  >
                    {openId === subject.id && (
                    <Collapse in={open} timeout="auto" unmountOnExit>
                      <Box sx={{ margin: 1 }}>
                        <Typography variant="h6" gutterBottom component="div">
                          Thông tin thầy cô
                        </Typography>
                        <Table size="small" aria-label="purchases">
                          <TableHead>
                            <TableRow>
                              <TableCell>Tên giảng viên</TableCell>
                              <TableCell>Bộ môn</TableCell>
                              <TableCell align="right">Kì học</TableCell>
                            </TableRow>
                          </TableHead>
                          <TableBody>
                            <TableRow>
                              <TableCell component="th" scope="row">
                                {subject.teacher}
                              </TableCell>
                              <TableCell>{subject.faculity}</TableCell>
                              <TableCell align="right">{subject.semester}</TableCell>
                            </TableRow>
                          </TableBody>
                        </Table>
                      </Box>
                    </Collapse>
                    )}
                  </TableCell>
                </TableRow>
              </TableBody>
            ))}
        </Table>
      </TableContainer>
    </Stack>
  );
};

export default InfoSub;
