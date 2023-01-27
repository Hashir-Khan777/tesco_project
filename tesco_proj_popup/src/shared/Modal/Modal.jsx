import React from "react";
import { Modal,Button,Box} from "@mui/material";

const ModalComponent = ({children,open,handleClose}) => {
    const style = {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width:"auto",
        bgcolor: "background.paper",
        // border: '2px solid #000',
        boxShadow: 24,
        pt: 2,
        px: 4,
        pb: 3,
      };
  return (
    <>
      <Modal
      hideBackdrop
      open={open}
      onClose={handleClose}
      aria-labelledby="child-modal-title"
      aria-describedby="child-modal-description"
    >
        <Box sx={{ ...style }}>
            
        {children}
        </Box>
       
       
    </Modal>
    </>
  
  );
};

export default  ModalComponent;
