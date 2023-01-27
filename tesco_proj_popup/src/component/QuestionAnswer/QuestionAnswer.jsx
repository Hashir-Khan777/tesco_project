
import React, { useState } from "react";
import { Grid, } from "@mui/material";
import HeaderComponent from "../HeaderComponent/HeaderComponent";
import dashboardIamge from "../../Assest/Navigation/menu.png";
import image from "../../Assest/Dashboard/Questinnaire.png";

import ImageWithListComponent from "../ImageWithListComponent/ImageWithListComponent";
import { questionIdentifyHead, questionMultipleHead, resultDataHead, topicsCellData} from "../../utils/fakedata/fakedata";
import ScrollComponent from "../ScrollComponent/ScrollComponent";
import backgroundImage from "../../BG.png";
import { getQuestion, GetQuestionHook } from "../../utils/CustomQuerHook/CustomQueryHook";
import { useQuery } from "react-query";

const QuestionAnswer= () => {
  const[tp,setQuery]=useState(null)
  
 const{data,isLoading}= useQuery(['question-data',tp],getQuestion)
 
    
  return (
    <ScrollComponent>
    <Grid container direction={"column"}
    sx={{
      backgroundImage: `url(${backgroundImage})`,
      backgroundRepeat: "no-repeat",
      backgroundSize:"cover",
      minHeight:"100%"
     
    }}
    >
    <HeaderComponent
      headerLabel={"Questionnaires"}
      headerLabelIamges={dashboardIamge}
    />
  
    <Grid container paddingTop={5} paddingBottom={5} paddingLeft={2} paddingRight={2} direction="row">
      <Grid item xl={12} xs={12}>
      <ImageWithListComponent
        labelList={"QUESTIONNAIRES"}
        setImage={image}
        searchType={false}
        buttonLabel="Create Questionnaires"
        questionType={"table"}
        tableHead={questionIdentifyHead}
        cellData={data}
        tableType={"quetion-identifier"}
        optionType={"option"}
        buttonFrom={"question"}
        isLoading={isLoading}
        cellDataSecond={data}
        tableHeadSecond={questionMultipleHead}
       setSearchParams={setQuery}
      />
      </Grid>
     
    </Grid>
    
  </Grid>
  </ScrollComponent>
   
  )
}

export default QuestionAnswer