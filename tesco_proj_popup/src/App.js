import "./App.css";
import { authRoute } from "./routing/allRoutes";
import RoutePathComponent from "./shared/Route/RoutePathComponent";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/login/Login";
import Setting from "./component/SettingComponent/SettingComponent";
import QuestionChoice from "./component/QuestionChoiceComponent/QuestionChoice";
import Dashboard from "./pages/dashboard/Dashboard";
import TeacherDashboard from "./pages/dashboard/TeacherDashboard";
import SideNavBar from "./component/SideNavBar/SideNavBar";
import DashboardComponent from "./component/DashboardComponent/DashboardComponent";
import { dashboardcardData } from "./utils/fakedata/fakedata";
import { sideNavData, sideNavDatas } from "./utils/sideNavData/sideNavData";
import TeacherComponent from "./component/TeacherComponent/TeacherComponent";
import TopicComponent from "./component/TopicComponent/TopicComponent";
import QuestionAnswer from "./component/QuestionAnswer/QuestionAnswer";
import ResultComponent from "./component/ResultComponent/ResultComponent";
import { dashboardteacherData } from "./utils/fakedata/fakedata";
import { useState } from "react";
import{QueryClientProvider,QueryClient } from 'react-query'

function App() {
  const[user,setUser]=useState(localStorage.getItem("tesco"))
  const queryClient=new QueryClient()
  
  return (
    <QueryClientProvider client={queryClient}>
       <div className="App">
    
      
      <Routes>
        <Route path="/" element={<Login setUser={setUser}/>} />
      
       
      </Routes>
      {user==="admin"&&
      <>
       <SideNavBar sideNavData={sideNavData} role="ADMIN" setUser={setUser}/>
       <Routes>
       <Route path="/dashboard" element={<DashboardComponent data={dashboardcardData}/>} />
       <Route path="/teacher" element={<TeacherComponent/>} />
       <Route path="/question-choice" element={<QuestionChoice/>} />
       <Route path="/topic" element={<TopicComponent/>}/>
       <Route path="/question-answer" element={<QuestionAnswer/>}/>
       <Route path="/result" element={<ResultComponent/>}/>
       <Route path="/setting" element={<Setting/>}/>
       </Routes>
      </>
      
     
     
      }
     {user==="teacher"&&
     <>
     <SideNavBar sideNavData={sideNavDatas} role="Teacher" subType={true} setUser={setUser}/>
      <Routes>
      <Route path="/dashboard/dashboard-teacher" element={<DashboardComponent data={dashboardteacherData}/>} />
      <Route path="/dashboard/topic-teacher" element={<TopicComponent/>} />
     
      <Route path="/dashboard/question-teacher" element={<QuestionChoice/>} />
      <Route path="/dashboard/result-teacher" element={<ResultComponent/>} />
     

      <Route path="/dashboard/setting-teacher" element={<Setting/>} />
     
     
      </Routes>
    
     </>
      
     }
     
     
    </div>
    </QueryClientProvider>
   
  );
}

export default App;
