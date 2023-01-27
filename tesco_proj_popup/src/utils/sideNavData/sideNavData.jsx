import TeacherImage from "../../Assest/Navigation/2-teacher.png";
import QuestionsImage from "../../Assest/Navigation/5-questionnaire.png";
import resultImage from "../../Assest/Navigation/3-resukt.png";

import settingImage from "../../Assest/Navigation/4-settings.png";
import arrowRightImage from "../../Assest/Navigation/arrow_right.png";
import HomeIcon from '@mui/icons-material/Home';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import SettingsIcon from '@mui/icons-material/Settings';
import StickyNote2OutlinedIcon from '@mui/icons-material/StickyNote2Outlined';
import ArrowRightOutlinedIcon from '@mui/icons-material/ArrowRightOutlined';

import dashboardImage from "../../Assest/Navigation/1-dashboard.png";
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';

export const sideNavData = [
  {
    label: "Dashboard",
    image: dashboardImage,
    icon:<HomeIcon sx={{fontSize:"2em",color:"white"}}/>,
    values: "dashboard",
    type:false
  },
  {
    label: "Teachers",
    image: TeacherImage,
    icon:<SchoolOutlinedIcon sx={{fontSize:"2em",color:"white"}}/>,
    values: "teacher",
    type:false
  },
  {
    label: "Questions",
    image: QuestionsImage,
    icon:<ArrowRightOutlinedIcon  sx={{fontSize:"2em",color:"white"}}/>,
    values: {
      value1:"topic",
      value2:"question-answer"
    },
    type:true
  },
  // {
  //   label: "Topics",
  //   image: arrowRightImage,
  //   icon:<ArrowRightOutlinedIcon sx={{fontSize:"2em",color:"white"}}/>,
  //   values: "topic",
  //   type:false
  // },
  // {
  //   label: "Questionnaires",
  //   image: arrowRightImage,
  //   icon:<ArrowRightOutlinedIcon sx={{fontSize:"2em",color:"white"}}/>,
  //   type:false,
  //   values: "question-answer",
  // },
  {
    label: "Results",
    image: resultImage,
    icon:<StickyNote2OutlinedIcon sx={{fontSize:"2em",color:"white"}}/>,
    values: "result",
    type:false
  },
  {
    label: "Setting",
    image: settingImage,
   icon:<SettingsIcon  sx={{fontSize:"2em",color:"white"}}/>,
    values: "setting",
    type:false
  },
];
export const sideNavDatas = [
  {
    label: "Dashboard",
    image: dashboardImage,
   icon:<HomeIcon sx={{fontSize:"2em",color:"white"}}/>,
    values: "dashboard-teacher",
    type:false
  },

  // {
  //   label: "Topics",
  //   image: arrowRightImage,
  // icon:<ArrowRightOutlinedIcon sx={{fontSize:"2em",color:"white"}}/>,
  //   values: "topic-teacher",
  //   type:false
  // },
  {
    label: "Questions",
    image: QuestionsImage,
    icon:<ArrowRightOutlinedIcon  sx={{fontSize:"2em",color:"white"}}/>,
    values: {
      value1:"topic-teacher",
      value2:"question-teacher"
    },
    type:true
  },

  {
    label: "Results",
    image: resultImage,
   icon:<StickyNote2OutlinedIcon sx={{fontSize:"2em",color:"white"}}/>,
    values: "result-teacher",
    type:false
  },
  {
    label: "Setting",
    image: settingImage,
    icon:<SettingsIcon sx={{fontSize:"2em",color:"white"}}/>,
    values: "setting-teacher",
    type:false
  },
];
