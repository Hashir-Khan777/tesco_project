import { Paper } from "@mui/material";
import React from "react";
import "./inputlabel.css";
import image from "../../Assest/Login/eye.png";
import { MDBInputGroup,MDBIcon } from "mdb-react-ui-kit";
const InputLabel = ({ 
  onChange,inputPlaceHolder, setType, passwordTypes = false,icons }) => {
  const styles = {
    paperContainer: {
      backgroundImage: `url(${image})`,
      backgroundSize: "fill",
      backgroundRepeat: "no-repeat",
    
    },
  };
  return (
    
    <React.Fragment>
      
      <MDBInputGroup className='mb-3' noBorder textBefore={icons}>
      <input
          type={setType}
          className='form-control'
          placeholder={inputPlaceHolder}
          onChange={onChange}
        />
        </MDBInputGroup>
       
        {passwordTypes && <Paper style={styles.paperContainer} />}
      
    </React.Fragment>
  );
};

export default InputLabel;
