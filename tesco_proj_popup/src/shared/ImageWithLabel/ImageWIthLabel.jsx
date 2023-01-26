import React, { useState } from "react";
import { Box, Typography, Stack } from "@mui/material";
import { Link } from "react-router-dom";
import { Grid } from "@mui/material";
import "./imagewithlabel.css";
import { motion } from "framer-motion";
import KeyboardDoubleArrowLeftOutlinedIcon from "@mui/icons-material/KeyboardDoubleArrowLeftOutlined";

const ImageWIthLabel = ({
  setIcon,
  setpath,
  setLabel,
  setDrop,
  labelVariant,
  keys,
  parameters,
  subType = false,
}) => {
  const [rotation, setRotaion] = useState(0);

  const [dropState, setDropState] = useState(false);
  const [rotations, setRotaions] = useState(90);

  const handleRotaion = () => {
    if (dropState === true) {
      setRotaions(rotations + 90);
      setDropState(false);
    } else {
      setRotaions(0);
      setDropState(true);
    }
  };
  return (
    <>
      {!subType && !setDrop && (
        <Link to={`/${setpath}`} style={{ textDecoration: "none" }}>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              transition: {
                duration: 0.4,
              },
            }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Grid
              container
              sx={{
                backgroundColor:
                  setpath === parameters && "rgba(0, 0, 0, 0.402);",

                borderRadius: "0.7em",
              }}
              alignItems={"center"}
              minWidth="15em"
              display="flex"
            >
              <motion.div
                animate={{ rotate: rotation }}
                onClick={() => setRotaion(rotation + 360)}
              >
                {setIcon}
              </motion.div>

              <Grid item>
                <Typography
                  sx={{ cursor: "pointer" }}
                  variant={labelVariant}
                  fontWeight={"600"}
                  color={"white"}
                  paddingLeft="1em"
                >
                  {setLabel}
                </Typography>
              </Grid>
            </Grid>
          </motion.div>
        </Link>
      )}
      {setDrop && (
        <motion.div>
          <Grid
            container
            sx={{
              backgroundColor:
                setpath === parameters && "rgba(0, 0, 0, 0.402);",

              borderRadius: "0.7em",
            }}
            alignItems={"center"}
            minWidth="15em"
            display="flex"
          >
            <motion.div animate={{ rotate: rotations }}>{setIcon}</motion.div>

            <Grid item onClick={handleRotaion}>
              <Typography
                sx={{ cursor: "pointer" }}
                variant={labelVariant}
                fontWeight={"600"}
                color={"white"}
                paddingLeft="1em"
              >
                {setLabel}
              </Typography>
            </Grid>
          </Grid>
          {dropState && (
            <Grid
              item
              display={"flex"}
              
             
              direction="column"
              paddingTop={"0.5em"}
              paddingLeft={"2em"}
            >
               <Link to={!subType?`/${setpath.value1}`:`/dashboard/${setpath.value1}`} style={{ textDecoration: "none" }}>
                <motion.div
                  style={{ display: "flex",alignItems:"center"}}
                  initial={{ y: -5, opacity: 0 }}
                  animate={{ y: 0, opacity: 1, transition: { duration: 0.3 } }}
                >
                  
                  <motion.div>{setIcon}</motion.div>
                 

                  
                  <Typography
                    sx={{ cursor: "pointer" }}
                    variant={labelVariant}
                    fontWeight={"600"}
                    color={"white"}
                    
                  >
                    Topics
                  </Typography>
              
                </motion.div>
              </Link>

              <Link to={!subType?`/${setpath.value2}`:`/dashboard/${setpath.value2}`} style={{ textDecoration: "none" }}>
                <motion.div
                  style={{ display: "flex",alignItems:"center"}}
                  initial={{ y: -5, opacity: 0 }}
                  animate={{ y: 0, opacity: 1, transition: { duration: 0.4 } }}
                >
                
                  <motion.div>{setIcon}</motion.div>
                  <Typography
                    sx={{ cursor: "pointer" }}
                    variant={labelVariant}
                    fontWeight={"600"}
                    color={"white"}
                    
                  >
                   Questionnaires
                  </Typography>
                </motion.div>
              </Link>
            </Grid>
          )}
        </motion.div>
      )}
      {subType && !setDrop && (
        <Link to={`/dashboard/${setpath}`} style={{ textDecoration: "none" }}>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              transition: {
                duration: 0.4,
              },
            }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Grid
              container
              sx={{
                backgroundColor:
                  setpath === parameters && "rgba(0, 0, 0, 0.402);",

                borderRadius: "0.7em",
              }}
              alignItems={"center"}
              minWidth="15em"
              display="flex"
            >
              <motion.div
                animate={{ rotate: rotation }}
                onClick={() => setRotaion(rotation + 360)}
              >
                {setIcon}
              </motion.div>

              <Grid item>
                <Typography
                  sx={{ cursor: "pointer" }}
                  variant={labelVariant}
                  fontWeight={"600"}
                  color={"white"}
                  paddingLeft="1em"
                >
                  {setLabel}
                </Typography>
              </Grid>
            </Grid>
          </motion.div>
        </Link>
      )}
    </>
  );
};

export default ImageWIthLabel;
