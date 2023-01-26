import { Grid } from "@mui/material";
import React, { useEffect, useState, useRef } from "react";

import DashboardComponent from "../../component/DashboardComponent/DashboardComponent";
import QuestionChoice from "../../component/QuestionChoiceComponent/QuestionChoice";
import ResultComponent from "../../component/ResultComponent/ResultComponent";
import Setting from "../../component/SettingComponent/SettingComponent";
import SideNavBar from "../../component/SideNavBar/SideNavBar";
import TeacherComponent from "../../component/TeacherComponent/TeacherComponent";
import TopicComponent from "../../component/TopicComponent/TopicComponent";
import { useParams } from "react-router-dom";
import QuestionAnswer from "../../component/QuestionAnswer/QuestionAnswer";
import KeyboardDoubleArrowRightOutlinedIcon from "@mui/icons-material/KeyboardDoubleArrowRightOutlined";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import KeyboardDoubleArrowLeftOutlinedIcon from "@mui/icons-material/KeyboardDoubleArrowLeftOutlined";
import image from "../../BG.png";
import { sideNavDatas } from "../../utils/sideNavData/sideNavData";
import "./dashboardPage.css";
import ScrollComponent from "../../component/ScrollComponent/ScrollComponent";
import { dashboardcardData, dashboardteacherData } from "../../utils/fakedata/fakedata";
const TeacherDashboard = () => {
  const { name } = useParams();
  const [trigger, setTrigger] = useState(false);
  // console.log(name)
  let menuRef = useRef();
  useEffect(() => {
    let handler = (e) => {
      if (!menuRef.current.contains(e.target)) {
        setTrigger(false);
      }
    };
    document.addEventListener("mousedown", handler);
  });

  return (
    <Grid
      container
      position={"relative"}
      sx={
        {
          // backgroundImage:`url(${image})`,
          // backgroundSize: "cover",
          // backgroundRepeat: "no-repeat",
          // height: "100%",
          // minWidth: "100%",
        }
      }
    >
      {!trigger && (
        <Grid item position={"absolute"} zIndex={2} className="open-button">
          <button
            onClick={() => setTrigger(true)}
            style={{
              backgroundColor: "transparent",
              outline:"none",
              border:"none",
              
              //     border:"none",
                cursor:"pointer",
              // borderRadius:"50%",
              boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px;",
            }}
          >
            {<KeyboardDoubleArrowRightOutlinedIcon fontSize="large" />}
          </button>
        </Grid>
      )}
      {trigger && (
        <Grid item zIndex={2} className="close-button">
          <button
            onClick={() => setTrigger(false)}
            style={{
              backgroundColor: "transparent",
              outline:"none",
              border:"none",
              
              //     border:"none",
              //   cursor:"pointer",
              // borderRadius:"50%",
              boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px;",
            }}
          >
            <KeyboardDoubleArrowLeftOutlinedIcon  fontSize="large" />
          </button>
        </Grid>
      )}
      {trigger && (
        <Grid item xl={3} lg={3} md={4} zIndex={1} className="grid-side-container">
          <span ref={menuRef}>
            <SideNavBar parameters={name} sideNavData={sideNavDatas} subType={true} role={"Teacher"} />
          </span>
        </Grid>

      )}

      {trigger ? (
        <>
          {name === "dashboard-teacher" && (
            <Grid
              item
              xl={9}
              lg={9}
              md={8}
              className="grid-dashboard-container"
            >
              <ScrollComponent styles={{ height: "120vh" }}>
                <DashboardComponent  data={dashboardteacherData}/>
              </ScrollComponent>
            </Grid>
          )}
         
          {name === "topic-teacher" && (
            <Grid
              item
              xl={9}
              lg={9}
              md={8}
              className="grid-dashboard-container"
            >
              <ScrollComponent styles={{ height: "120vh" }}>
                <TopicComponent />
              </ScrollComponent>
            </Grid>
          )}
               {name === "question-teacher" && (
            <Grid xl={9} lg={9} md={8} className="grid-dashboard-container">
              <ScrollComponent styles={{ height: "120vh" }}>
                <QuestionChoice />
              </ScrollComponent>
            </Grid>
          )}
          {name === "result-teacher" && (
            <Grid
              item
              md={8}
              lg={9}
              xl={9}
              className="grid-dashboard-container"
            >
              <ScrollComponent styles={{ height: "120vh" }}>
                <ResultComponent />
              </ScrollComponent>
            </Grid>
          )}
         
          {name === "setting-teacher" && (
            <Grid
              item
              xl={9}
              lg={9}
              md={8}
              className="grid-dashboard-container"
            >
              <ScrollComponent styles={{ height: "120vh" }}>
                <Setting />
              </ScrollComponent>
            </Grid>
          )}
        </>
      ) : (
        <>
          {name === "dashboard-teacher" && (
            <Grid item md={12} lg={12} xl={12} xs={12} sm={12}>
              <DashboardComponent data={dashboardteacherData}/>
            </Grid>
          )}
         
          {name === "topic-teacher" && (
            <Grid item md={12} lg={12} xl={12} sm={12} sx={12}>
              <TopicComponent />
            </Grid>
          )}
                {name === "question-teacher" && (
            <Grid md={12} lg={12} xl={12} sm={12} sx={12} className="grid-dashboard-container">
              <ScrollComponent styles={{ height: "100vh" }}>
                <QuestionChoice />
              </ScrollComponent>
            </Grid>
          )}
          {name === "result-teacher" && (
            <Grid item md={12} lg={12} xl={12} sm={12} sx={12}>
              <ResultComponent />
            </Grid>
          )}
       
          {name === "setting-teacher" && (
            <Grid item md={12} lg={12} xl={12} xs={12} sm={12}>
              <Setting />
            </Grid>
          )}
        </>
      )}
    </Grid>
  );
};

export default TeacherDashboard;
