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

import image from "../../BG.png";
import { sideNavData } from "../../utils/sideNavData/sideNavData";
import "./dashboardPage.css";
import ScrollComponent from "../../component/ScrollComponent/ScrollComponent";
import { dashboardcardData } from "../../utils/fakedata/fakedata";
import { motion } from "framer-motion";


const Dashboard = () => {
  const { name } = useParams();
  const [trigger, setTrigger] = useState(false);
  const [rotation, setRotaion] = useState(0);
  

  const close = () => {
    setTrigger(false);
    setRotaion(rotation + 180);
  };
  const open = () => {
    setRotaion(rotation - 180);
    setTrigger(true);
  };

  let menuRef = useRef();
  useEffect(() => {
    let handler = (e) => {
      if (!menuRef.current.contains(e.target)) {
        setTrigger(false);
      }
    };
    document.addEventListener("mousedown", handler);
  });
  const leftAnimation = {
    hidden: {
      x: "-10em",
      opacity: "0",
    },
    visible: {
      x: "0em",
      opacity: "1",
      transition: {
        duration: 0.3,
        type:"spring",
        damping:100,
        stiffness:500
      },
    },
    exit: {
      x: "-10em",
      opacity: "0",
      transition: {
        duration: 0.30,
      },
    },
  };

  return (
    <Grid
      container
      position={"relative"}
      className="dashboard-main-page"
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
      <Grid item zIndex={100} className="open-button" position={"absolute"}>
        <motion.div
          animate={{ rotate: rotation }}
          onClick={() => (trigger ? close() : open())}
        >
          <button
            onClick={""}
            style={{
              backgroundColor: "transparent",
              outline: "none",
              border: "none",

              //     border:"none",
              cursor: "pointer",
              // borderRadius:"50%",
              boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px;",
            }}
          >
            {<KeyboardDoubleArrowRightOutlinedIcon fontSize="large" />}
          </button>
        </motion.div>
      </Grid>

    
        <Grid
          Grid
          item
          xl={2}
          lg={2}
          md={2}
          zIndex={2}
          className="grid-side-container"
        >
          <motion.div
            variants={leftAnimation}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <span>
              <SideNavBar
                parameters={name}
                sideNavData={sideNavData}
                role={"Admin"}
                setTigger={setTrigger}
              />
            </span>
          </motion.div>
        </Grid>
      

      {trigger ? (
        <>
          {/* {name === "dashboard" && (
            <Grid
              item
              xl={10}
              lg={10}
              md={10}
              className="grid-dashboard-container"
            >
              <ScrollComponent styles={{ height: "120vh" }}>
                <DashboardComponent data={dashboardcardData} />
              </ScrollComponent>
            </Grid>
          )} */}
          {name === "teacher" && (
            <Grid
              item
              xl={10}
              lg={10}
              md={10}
              className="grid-dashboard-container"
            >
              <ScrollComponent styles={{ height: "120vh" }}>
                <TeacherComponent />
              </ScrollComponent>
            </Grid>
          )}
          {name === "topic" && (
            <Grid
              item
              xl={10}
              lg={10}
              md={10}
              className="grid-dashboard-container"
            >
              <ScrollComponent styles={{ height: "120vh" }}>
                <TopicComponent />
              </ScrollComponent>
            </Grid>
          )}
          {name === "result" && (
            <Grid
              item
              xl={10}
              lg={10}
              md={10}
              className="grid-dashboard-container"
            >
              <ScrollComponent styles={{ height: "120vh" }}>
                <ResultComponent />
              </ScrollComponent>
            </Grid>
          )}
          {name === "question-choice" && (
            <Grid
              item
              xl={10}
              lg={10}
              md={10}
              className="grid-dashboard-container"
            >
              <ScrollComponent styles={{ height: "120vh" }}>
                <QuestionChoice />
              </ScrollComponent>
            </Grid>
          )}
          {name === "question-answer" && (
            <Grid
              item
              xl={10}
              lg={10}
              md={10}
              className="grid-dashboard-container"
            >
              <ScrollComponent styles={{ height: "120vh" }}>
                <QuestionAnswer />
              </ScrollComponent>
            </Grid>
          )}
          {name === "setting" && (
            <Grid
              item
              xl={10}
              lg={10}
              md={10}
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
          {/* {name === "dashboard" && (
            <Grid item md={12} lg={12} xl={12} xs={12} sm={12}>
              <DashboardComponent data={dashboardcardData} />
            </Grid>
          )} */}
          {name === "teacher" && (
            <Grid item md={12} lg={12} xl={12} xs={12} sm={12}>
              <TeacherComponent />
            </Grid>
          )}
          {name === "topic" && (
            <Grid item md={12} lg={12} xl={12} sm={12} sx={12}>
              <TopicComponent />
            </Grid>
          )}
          {name === "result" && (
            <Grid item md={12} lg={12} xl={12} sm={12} sx={12}>
              <ResultComponent />
            </Grid>
          )}
          {name === "question-choice" && (
            <Grid item md={12} lg={12} xl={12} sm={12} sx={12}>
              <QuestionChoice />
            </Grid>
          )}
          {name === "question-answer" && (
            <Grid item md={12} lg={12} xl={12} sm={12} xs={12}>
              <QuestionAnswer />
            </Grid>
          )}
          {name === "setting" && (
            <Grid item md={12} lg={12} xl={12} xs={12} sm={12}>
              <Setting />
            </Grid>
          )}
        </>
      )}
    </Grid>
  );
};

export default Dashboard;
