import { Grid, Paper, Box, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import React, { useState } from "react";
import image from "../../Assest/Navigation/sidebar.png";
import ImageWIthLabel from "../../shared/ImageWithLabel/ImageWIthLabel";
import logo from "../../Assest/Navigation/title.png";
import KeyboardDoubleArrowLeftOutlinedIcon from "@mui/icons-material/KeyboardDoubleArrowLeftOutlined";
import { sideNavData } from "../../utils/sideNavData/sideNavData";
import ButtonLabel from "../../shared/Button/ButtonLabel";
import { motion } from "framer-motion";
import FormatAlignRightIcon from "@mui/icons-material/FormatAlignRight";

import { useNavigate } from "react-router-dom";
import "./sidenavbar.css";
import { useRef, useEffect } from "react";
import ScrollComponent from "../ScrollComponent/ScrollComponent";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import SideScroll from "../ScrollComponent/SideScroll";
import { Menu } from "@mui/icons-material";
const SideNavBar = ({
  parameters,
  role,
  sideNavData = [],
  subType,
  setTigger,
  children,
  setUser,
}) => {
  const history = useNavigate();
  const handleLogout = () => {
    history("/");
    setUser("");
    localStorage.removeItem("token")
    localStorage.removeItem("tesco")
    localStorage.removeItem("_id")
    localStorage.removeItem("role")
  };
  const [isOpen, setOpen] = useState(true);
  const styles = {
    paperContiner: {
      backgroundImage: isOpen ? `url(${image})` : null,
      backgroundSize: "fill",
      backgroundRepeat: "no-repeat",
      minHeight: "100vh",
      position: "absolute",
      zIndex: 1000,
      boxShadow:isOpen?"rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px":""
      
    },
  };

  const open = () => {
    setOpen(true);
    setRotaion(rotation + 180);
  };
  const close = () => {
    setOpen(false);
    setRotaion(rotation+180);
  };

  const [rotation, setRotaion] = useState(0);
  let menuRef = useRef();
  useEffect(() => {
    let handler = (e) => {
      if (!menuRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
  });
  return (
    
    <div
      className="side-bar-style-container-active"
      style={{ postion: "relative" }}
    >
      <motion.div
     
        animate={{
          width: isOpen ? "20em" : "0px",
          
          transition: { duration: 0.9},
        }}
      >
        <Box
          style={styles.paperContiner}
          className="paper-side-bar"
          ref={menuRef}
        >
          <Grid
            container
            spacing={1}
            direction="column"
            alignItems={"center"}
            borderBottom={isOpen ? "1px solid white" : ""}
          >
            <Grid
              container
              padding={5}
              direction={"row"}
              display="flex"
              justifyContent={"center"}
              alignItems={"center"}
              gap={3}
            >
              <Grid item zIndex={2}>
                <motion.div
                  animate={{ rotate: rotation }}
                  
                >
                  <button
                   onClick={() => (isOpen ? close() : open())}
                    style={{
                      backgroundColor: "transparent",
                      outline: "none",
                      border: "none",
                    }}
                  >{
                    isOpen?
                    <CloseIcon 
                    fontSize="large"
                    sx={{
                      color: "white",
                    }}
                  /> :
                    <Menu
                    fontSize="large"
                    sx={{
                      color: "white",
                    }}
                    />
                   

                  }
                    
                    {/* <FormatAlignRightIcon
                      fontSize="small"
                      sx={{
                        color: "rgb(79, 78, 78)",
                      }}
                    /> */}
                  </button>
                </motion.div>
              </Grid>
              {isOpen && (
                <Grid item>
                  <img
                    src={logo}
                    alt=""
                    className="iamge-logonavbar"
                    style={{ width: "10em" }}
                  />
                </Grid>
              )}
            </Grid>
            {isOpen && (
              <Grid item>
                <Typography variant="h6" fontWeight={"700"} color={"white"}>
                  {role}
                </Typography>
              </Grid>
            )}
          </Grid>
          {isOpen && (
            <Grid
              container
              sx={{
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
              }}
            >
              <SideScroll>
                {sideNavData.map((each, index) => (
                  <Grid
                    item
                    sx={{ marginTop: "2em", padding: "0em 1em" }}
                    key={index}
                  >
                    <ImageWIthLabel
                      setImage={each.image}
                      setpath={each.values}
                      labelVariant={"h6"}
                      setLabel={each.label}
                      setIcon={each.icon}
                      subType={subType}
                      parameters={parameters}
                      setDrop={each.type}
                    />
                  </Grid>
                ))}

                <Grid
                  Item
                  display={"flex"}
                  marginTop="4em"
                  marginBottom={"4em"}
                  justifyContent={"center"}
                >
                  <ButtonLabel
                    buttonLabel={"Logout"}
                    handleCLick={handleLogout}
                    styles={{
                      fontSize: "1.2em",
                      width: "10em",
                      background:
                        "linear-gradient(0deg, rgba(195,142,34,1) 0%, rgba(253,209,45,1) 45%)",
                      color: "black",
                    }}
                  />
                </Grid>
              </SideScroll>
            </Grid>
          )}
          {/* {isOpen && (
           
          )}
         */}
        </Box>
      </motion.div>

      <main className="main-child-container">{children}</main>
    </div>
  );
};

export default SideNavBar;
