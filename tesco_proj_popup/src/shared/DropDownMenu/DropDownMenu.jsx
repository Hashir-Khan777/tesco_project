import { Typography } from "@mui/material";
import React, { useEffect, useState } from "react";

const DropDownMenu = ({
  defaultValue,
  dropValue,
  codeType = false,
  yearType = false,
  topicType = false,
  setResponse,
  setTopic,
  returnType=false,
  getDropState,
}) => {
 
  const [topicState, setTopicState] = useState(null);
  
  const onOptionChangeHandler = (e) => {
    returnType?
    getDropState(e.target.value)
    :
    // setDropValue(e.target.value)
    setTopicState(e.target.value);
    // getDropState(e.target.value)
    setTopic(false)
  };
  
 
  useEffect(() => {
    const response =dropValue&&dropValue?.data?.data[topicState]
    setResponse&&setResponse(response)
  }, [topicState]);

  
  

  return (
    <>
    {returnType?
     <select name="drop-menu" id="drop-menu" onChange={onOptionChangeHandler}>
     <option value={null}>Please select topic</option>
       {topicType&&dropValue &&
         dropValue?.data?.data?.map((each, index) => (
           <option value={each.topic}>{each.topic}</option>
         ))}

    
     </select>
    
    
    :
    <select name="drop-menu" id="drop-menu" onChange={onOptionChangeHandler}>
    <option defaultValue={"Topic"}>Please select topic</option>
      {topicType&&dropValue &&
        dropValue?.data?.data?.map((each, index) => (
          <option value={index}>{each.topic}</option>
        ))}

   
    </select>
    
    
    }
    
    </>
  );
};

export default DropDownMenu;
