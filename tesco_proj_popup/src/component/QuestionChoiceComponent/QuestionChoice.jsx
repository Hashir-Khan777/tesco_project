
import React from "react";
import { Grid, } from "@mui/material";
import HeaderComponent from "../HeaderComponent/HeaderComponent";
import dashboardIamge from "../../Assest/Navigation/menu.png";
import image from "../../Assest/Dashboard/Questinnaire.png";

import ImageWithListComponent from "../ImageWithListComponent/ImageWithListComponent";
import { resultDataHead, topicsCellData, topicsDataHead } from "../../utils/fakedata/fakedata";
import ScrollComponent from "../ScrollComponent/ScrollComponent";
import backgroundImage from "../../BG.png";


const QuestionChoice = () => {
  return (
    <ScrollComponent>
    <Grid container direction={"column"}
    sx={{
      backgroundImage: `url(${backgroundImage})`,
      backgroundRepeat: "no-repeat",
      backgroundSize:"cover",
      minHeight:"100%"
     
    }}
    className="dashboard-component-container"
    >
    <HeaderComponent
      headerLabel={"Questionnaires"}
      headerLabelIamges={dashboardIamge}
    />
   
    <Grid container paddingTop={5} paddingBottom={5} paddingLeft={2} paddingRight={2} direction="row">
      <Grid item xs={12} xl={12}>
      <ImageWithListComponent
        labelList={"QUESTIONNAIRES"}
        setImage={image}
        searchType={false}
        buttonLabel="Create Account"
        questionType={"question-choice"}
        tableHead={resultDataHead}
        cellData={topicsCellData}
        tableType={"result"}
        optionType={"option"}
        buttonFrom={"question"}

       
      />
      </Grid>
   
     
     
    </Grid>
   
  
   
  </Grid>
  </ScrollComponent>
  )
}

export default QuestionChoice