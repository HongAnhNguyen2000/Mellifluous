import React, { useEffect } from "react";
import {
  Stack,
  Button,
  Dialog,
  DialogActions,
  Typography,
  DialogContent,
  Snackbar,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import ImageUploading from "react-images-uploading";
import PropTypes from "prop-types";

const DialogOpen = ({ open, setOpen, setState }) => {
  const [image, setImages] = React.useState([]);
  const [preview, setPreview] = React.useState(null);
  const onChangeCover = (imageList, addUpdateIndex) => {
    // data for submit
    console.log(imageList, addUpdateIndex);
    setPreview(imageList[0].data_url);
    setImages(imageList);
  };
  const handleClose = () => {
    setOpen(false);
    setState(true);
  };

  return (
    <Dialog
      open={open}
      onClose={() => setOpen(false)}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title" textAlign="center">
        Upload ảnh tại đây
      </DialogTitle>
      <DialogContent>
        <Stack
          direction="column"
          spacing={2}
          alignItems="center"
          width="400px"
          height="400px"
        >
          <ImageUploading
            maxFileSize={150000}
            value={image}
            onChange={onChangeCover}
            dataURLKey="data_url"
          >
            {({ onImageUpload, errors }) => (
              <Stack direction="column" spacing={1}>
                <Stack direction="row" alignItems="center">
                  {errors && (
                    <div sx={{ color: "red" }}>
                      {errors.maxFileSize && (
                        <span sx={{ color: "red" }}>Too large to upload</span>
                      )}
                    </div>
                  )}
                </Stack>
                <Stack
                  direction="column"
                  alignItems="center"
                  justifyContent="center"
                  width="320px"
                  height="255px"
                  bgcolor="#F9FAFB"
                  onClick={onImageUpload}
                >
                  {preview ? (
                    <img src={preview} alt="" />
                  ) : (
                    <AddIcon fontSize="large" fontWeight="400" />
                  )}
                </Stack>
              </Stack>
            )}
          </ImageUploading>
          <Button variant="contained" color="error" onClick={handleClose}>
            Gửi
          </Button>
         
        </Stack>
      </DialogContent>
    </Dialog>
  );
};
export default DialogOpen;
DialogOpen.propTypes = {
  open: PropTypes.any,
  setOpen: PropTypes.any,
  setState : PropTypes.any
};
