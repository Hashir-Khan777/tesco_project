import { colors, Typography } from "@mui/material";
import { color } from "@mui/system";
import React from "react";
import { PieChart, Pie } from "recharts";
import './charts.css'

const Charts = () => {
  // Sample data
  const data = [
    { name: "Pass", students: 400,colors:"rgb(241, 206, 52)"},
    { name: "Fail", students: 700,colors:"silver" },
  ];

  return (
    <>
      <div
        style={{
          padding: "0.9em 5em",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <p  fontWeight={700}  color={"blue"} className="chart-title">
          Passer Percentage
        </p>
        <PieChart width={200} height={200}>
          
          <Pie
            data={data}
            dataKey="students"
            outerRadius={100}
            innerRadius={70}
           fill="rgb(241, 206, 52)"
          />
        </PieChart>
      </div>
      <div style={{padding:"1em"}}>
        {data.map((each,index)=>(
              <div style={{display:"flex",alignItems:"center",gap:"0.5em"}} key={index}>
              <div style={{backgroundColor:`${each.colors}`,width:"1.5em",height:"1.5em",borderRadius:"50%"}}></div>
              <Typography textAlign={"left"} variant={"h5"}>{each.name}</Typography>
              </div>
        ))}
  
      
   
      </div>

    </>
  );
};

export default Charts;
