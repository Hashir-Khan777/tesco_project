
import React from "react";
import { Grid, } from "@mui/material";
import HeaderComponent from "../HeaderComponent/HeaderComponent";
import dashboardIamge from "../../Assest/Navigation/menu.png";
import image from "../../Assest/Settings/Username.png"
import image2 from "../../Assest/Settings/password.png"
import './setting.css'
import ImageWithListComponent from "../ImageWithListComponent/ImageWithListComponent";
import { resultDataHead, topicsCellData, topicsDataHead } from "../../utils/fakedata/fakedata";
import { Box } from "@mui/system";
import ScrollComponent from "../ScrollComponent/ScrollComponent";
import backgroundImage from "../../BG.png";

const Setting = () => {
  return (
    <Grid container direction={"column"}
    sx={{
      backgroundImage: `url(${backgroundImage})`,
      backgroundRepeat: "no-repeat",
      backgroundSize:"cover",
     
    }}
    >
    <HeaderComponent
      headerLabel={"Setting"}
      headerLabelIamges={dashboardIamge}
    />
    <Box>
      
      <ScrollComponent >
      <Grid container padding={6} spacing={6} direction="column">
    <Grid item >
    <ImageWithListComponent
        labelList={"username"}
        setImage={image}
        searchType={false}
        buttonLabel="Create Account"
        setting={true}
        setType={"text"}
        settingPlaceholder1={"old username"}
        settingPlaceholder2={"new username"}
        settingPlaceholder3={"confirm username"}
        pagination={false}
       
       
      />
    </Grid>
   
    <Grid item>
    <ImageWithListComponent
        labelList={"Password"}
        setImage={image2}
        searchType={false}
        buttonLabel="Create Account"
        setting={true}
        setType={"password"}
        settingPlaceholder1={"old password"}
        settingPlaceholder2={"new password"}
        settingPlaceholder3={"confirm password"}
        pagination={false}
        
       
      />
    </Grid>
    </Grid>

        </ScrollComponent>  
  
    

    </Box>
   
  </Grid>
  )
}

export default Setting