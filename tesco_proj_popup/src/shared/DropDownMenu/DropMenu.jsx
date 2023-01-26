import React, { useState } from "react";
import './dropdown.css'
const DropMenu = ({dropValue,setDropValue,inputDropmenu=false}) => {

   const onOptionChangeHandler=(e)=>{
    setDropValue(e.target.value)
   }
  
  return (
    <>
    {inputDropmenu===true?<>
    
      <select name="drop-down-input" id="drop-down-input" onChange={onOptionChangeHandler}>
      <option value={""}>Select instructor</option>
        {dropValue&&dropValue?.data?.map((each,index)=>{
            return(
            <option value={each.firstname}>{each.firstname}</option>
            )
             
        })}
       
        
        
      </select>
    </>:
    <>
    <select name="drop-down" id="drop-down" onChange={onOptionChangeHandler}>
        {dropValue&&dropValue.map((each,index)=>{
            return(
            <option value={each.value}>{each.label}</option>
            )
             
        })}
       
        
        
      </select>
    
    </>
    }
      
    </>
  );
};

export default DropMenu;
