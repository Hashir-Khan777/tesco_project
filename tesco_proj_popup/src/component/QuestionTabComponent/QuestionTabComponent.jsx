import React, { useEffect } from "react";
import { useState } from "react";
import { Typography, Box, Modal, Button, Grid, TextField } from "@mui/material";
import ModalScroll from "../ScrollComponent/ModalScroll";
import { motion } from "framer-motion";
import { dropData } from "../../utils/fakedata/fakedata";
import QuestionComponent from "../QuestionComponent/QuestionComponent";
import SwapVerticalCircleIcon from "@mui/icons-material/SwapVerticalCircle";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "auto",
  bgcolor: "background.paper",
  // border: '2px solid #000',
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};
const QuestionTabComponent = ({
  index,
  setQuestions = [],
  setQuestionTitle,
  handleApply,
  dropModalType = "0",
  defaultQuestionValue,
  defaultAnswerValue,
  type = "add",
}) => {
  const [openModalContainer, setModalContainer] = useState(false);
  const [dropModalValue, setDropModalValue] = useState(dropModalType);
  const [question, setQuestion] = useState(defaultQuestionValue);
  const [choiceA, setChoiceA] = useState("");
  const [choiceB, setChoiceB] = useState("");
  const [choiceC, setChoiceC] = useState("");
  const [correct, setCorrect] = useState("");
  const [correctIdintfy, setCorrectIdintfy] = useState(defaultAnswerValue);

  const [disbledBtn, setDisableBtn] = useState(true);
  const [pushData, setPushData] = useState([]);
  const [questionnaireTitle, setQuestionnaireTitle] = useState("");
  const [errors, setErrors] = useState("");

  useEffect(() => {
    question && setDisableBtn(false);
  }, [question]);

  const handleClose = () => {
    setModalContainer(false);
    setDropModalValue("0");
  };

  const handleSave = () => {
    let data = {
      question: question,
      choice1: choiceA,
      choice2: choiceB,
      choice3: choiceC,
      answer: correct,
      type: dropModalValue,

      number: index,
    };
    let datas = {
      question: question,
      answer: correctIdintfy,
      type: dropModalValue,

      number: index,
    };
    if (type === "add") {
      dropModalValue === "0" && data && setQuestions.push(data);
      dropModalValue === "1" && datas && setQuestions.push(datas);
    } else {
      const setQuestionsClone = [...setQuestions];
      dropModalValue === "0" &&
        data &&
        setQuestionsClone.splice(index - 1, 1, data);
      dropModalValue === "1" &&
        datas &&
        setQuestionsClone.splice(index - 1, 1, datas);
      console.log(setQuestionsClone, "setQuestionsClone");
      setQuestions.push(...setQuestionsClone);
    }
    setModalContainer(false);
  };

  const handlePopUp = () => {
    setModalContainer(true);
  };

  return (
    <div>
      <Box
        sx={{
          // backgroundColor:"rgba(140, 145, 171, 0.52)",
          padding: "0.5em",
          borderRadius: "0.7em",
          // color:"white",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          cursor: "pointer",
          boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
          // boxShadow:"rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px"
        }}
      >
        <Typography fontSize={"large"} letterSpacing={4}>
          {index}.Question
        </Typography>
        <div onClick={handlePopUp}>
          <SwapVerticalCircleIcon />
        </div>
      </Box>
      <Modal
        hideBackdrop
        open={openModalContainer}
        onClose={""}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
        <Box sx={{ ...style }}>
          <Typography color={"black"} variant="h6">
            CREATE QUESTIONNARIES
          </Typography>

          <ModalScroll>
            <Grid container spacing={5} padding={2}>
              {errors && (
                <Typography color={"red"} variant="body2">
                  {errors}
                </Typography>
              )}

              <Grid
                item
                lg={12}
                md={12}
                xl={12}
                xs={12}
                sm={12}
                sx={{ marginBottom: "0.2em" }}
              >
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: 1,
                    transition: { duration: 0.3 },
                  }}
                  exit={{ opacity: 0 }}
                >
                  <QuestionComponent
                    setType={"default"}
                    setPrimaryText={"QUESTION1:"}
                    setSecondarytext={"MULTIPLE CHOICE"}
                    setDetails={
                      "Lorem ipsum, or lipsum as it is sometimes known, is dummy text used"
                    }
                    dropData={dropData}
                    defaultValue={question}
                    setDropValue={setDropModalValue}
                    setTextChange={setQuestion}
                  />
                </motion.div>
              </Grid>
              {dropModalValue === "0" ? (
                <>
                  <Grid
                    item
                    lg={6}
                    md={6}
                    xl={6}
                    sx={6}
                    sm={6}
                    marginBottom="0.2em"
                  >
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{
                        opacity: 1,
                        transition: { duration: 0.3 },
                      }}
                      exit={{ opacity: 0 }}
                    >
                      <QuestionComponent
                        setType={"wrong"}
                        setPrimaryText={"CHOICE A:"}
                        setSecondarytext={"Wrong"}
                        setDetails={
                          "Lorem ipsum, or lipsum as it is sometimes known, is dummy text used"
                        }
                        setTextChange={setChoiceA}
                      />
                    </motion.div>
                  </Grid>

                  <Grid
                    item
                    lg={6}
                    md={6}
                    xl={6}
                    sx={6}
                    sm={6}
                    marginBottom="1em"
                  >
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{
                        opacity: 1,
                        transition: { duration: 0.3 },
                      }}
                      exit={{ opacity: 0 }}
                    >
                      <QuestionComponent
                        setType={"wrong"}
                        setPrimaryText={"CHOICE B:"}
                        setSecondarytext={"Wrong"}
                        setDetails={
                          "Lorem ipsum, or lipsum as it is sometimes known, is dummy text used"
                        }
                        setTextChange={setChoiceB}
                      />
                    </motion.div>
                  </Grid>

                  <Grid
                    item
                    lg={6}
                    md={6}
                    xl={6}
                    sx={6}
                    sm={6}
                    marginBottom="1em"
                  >
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{
                        opacity: 1,
                        transition: { duration: 0.3 },
                      }}
                      exit={{ opacity: 0 }}
                    >
                      <QuestionComponent
                        setType={"wrong"}
                        setPrimaryText={"CHOICE C:"}
                        setSecondarytext={"Wrong"}
                        setDetails={
                          "Lorem ipsum, or lipsum as it is sometimes known, is dummy text used"
                        }
                        setTextChange={setChoiceC}
                      />
                    </motion.div>
                  </Grid>
                  <Grid
                    item
                    lg={6}
                    md={6}
                    xl={6}
                    sx={6}
                    sm={6}
                    marginBottom="1em"
                  >
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{
                        opacity: 1,
                        transition: { duration: 0.3 },
                      }}
                      exit={{ opacity: 0 }}
                    >
                      <QuestionComponent
                        setType={"correct"}
                        setPrimaryText={"CORRECT ANSWER:"}
                        setDetails={
                          "Lorem ipsum, or lipsum as it is sometimes known, is dummy text used"
                        }
                        setTextChange={setCorrect}
                      />
                    </motion.div>
                  </Grid>
                </>
              ) : (
                <>
                  <Grid item lg={12} md={12} xl={12} sx={12} sm={12}>
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{
                        opacity: 1,
                        transition: { duration: 0.3 },
                      }}
                      exit={{ opacity: 0 }}
                    >
                      <QuestionComponent
                        setType={"correct"}
                        setPrimaryText={"Answer:"}
                        setDetails={
                          "Lorem ipsum, or lipsum as it is sometimes known, is dummy text used"
                        }
                        defaultValue={correctIdintfy}
                        setTextChange={setCorrectIdintfy}
                      />
                    </motion.div>
                  </Grid>
                </>
              )}
            </Grid>
          </ModalScroll>

          <Button onClick={handleSave}>Save</Button>
          <Button onClick={handleClose}>Close</Button>
        </Box>
      </Modal>

      {/* {openModalContainer && (
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0, transition: { duration: 0.4 } }}
          exit={{ opacity: 0, y: -20, transition: { duration: 0.4 } }}
        >
            
          <Grid container spacing={5} padding={2} marginTop="1em">
           
            <button
              onClick={handleSave}
              disabled={disbledBtn}
              type="button"
              style={{
                border: "none",
                outline: "none",
                paddingLeft: "0.3em",
                paddingRight: "0.2em",
                letterSpacing: "0.3em",
                marginLeft: "3em",
              }}
            >
              {saveState ? "Saved" : "Save"}
            </button>
            {errors&&<Typography color={"red"} variant="body2">{errors}</Typography>}
            <ModalScroll>
              <Grid
                item
                lg={12}
                md={12}
                xl={12}
                xs={12}
                sm={12}
                sx={{ marginBottom: "2em" }}
              >
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: 1,
                    transition: { duration: 0.3 },
                  }}
                  exit={{ opacity: 0 }}
                >
                  <QuestionComponent
                    setType={"default"}
                    setPrimaryText={"QUESTION1:"}
                    setSecondarytext={"MULTIPLE CHOICE"}
                    setDetails={
                      "Lorem ipsum, or lipsum as it is sometimes known, is dummy text used"
                    }
                    dropData={dropData}
                    setDropValue={setDropModalValue}
                    setTextChange={setQuestion}
                  />
                </motion.div>
              </Grid>
              {dropModalValue === "0" ? (
                <>
                  <Grid
                    item
                    lg={12}
                    md={12}
                    xl={12}
                    sx={12}
                    sm={12}
                    marginBottom="1em"
                  >
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{
                        opacity: 1,
                        transition: { duration: 0.3 },
                      }}
                      exit={{ opacity: 0 }}
                    >
                      <QuestionComponent
                        setType={"wrong"}
                        setPrimaryText={"CHOICE A:"}
                        setSecondarytext={"Wrong"}
                        setDetails={
                          "Lorem ipsum, or lipsum as it is sometimes known, is dummy text used"
                        }
                        setTextChange={setChoiceA}
                      />
                    </motion.div>
                  </Grid>

                  <Grid
                    item
                    lg={12}
                    md={12}
                    xl={12}
                    sx={12}
                    sm={12}
                    marginBottom="1em"
                  >
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{
                        opacity: 1,
                        transition: { duration: 0.3 },
                      }}
                      exit={{ opacity: 0 }}
                    >
                      <QuestionComponent
                        setType={"wrong"}
                        setPrimaryText={"CHOICE B:"}
                        setSecondarytext={"Wrong"}
                        setDetails={
                          "Lorem ipsum, or lipsum as it is sometimes known, is dummy text used"
                        }
                        setTextChange={setChoiceB}
                      />
                    </motion.div>
                  </Grid>

                  <Grid
                    item
                    lg={12}
                    md={12}
                    xl={12}
                    sx={12}
                    sm={12}
                    marginBottom="1em"
                  >
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{
                        opacity: 1,
                        transition: { duration: 0.3 },
                      }}
                      exit={{ opacity: 0 }}
                    >
                      <QuestionComponent
                        setType={"wrong"}
                        setPrimaryText={"CHOICE C:"}
                        setSecondarytext={"Wrong"}
                        setDetails={
                          "Lorem ipsum, or lipsum as it is sometimes known, is dummy text used"
                        }
                        setTextChange={setChoiceC}
                      />
                    </motion.div>
                  </Grid>
                  <Grid
                    item
                    lg={12}
                    md={12}
                    xl={12}
                    sx={12}
                    sm={12}
                    marginBottom="1em"
                  >
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{
                        opacity: 1,
                        transition: { duration: 0.3 },
                      }}
                      exit={{ opacity: 0 }}
                    >
                      <QuestionComponent
                        setType={"correct"}
                        setPrimaryText={"CORRECT ANSWER:"}
                        setDetails={
                          "Lorem ipsum, or lipsum as it is sometimes known, is dummy text used"
                        }
                        setTextChange={setCorrect}
                      />
                    </motion.div>
                  </Grid>
                </>
              ) : (
                <>
                  <Grid item lg={12} md={12} xl={12} sx={12} sm={12}>
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{
                        opacity: 1,
                        transition: { duration: 0.3 },
                      }}
                      exit={{ opacity: 0 }}
                    >
                      <QuestionComponent
                        setType={"correct"}
                        setPrimaryText={"Answer:"}
                        setDetails={
                          "Lorem ipsum, or lipsum as it is sometimes known, is dummy text used"
                        }
                        setTextChange={setCorrectIdintfy}
                      />
                    </motion.div>
                  </Grid>
                </>
              )}
            </ModalScroll>
          </Grid>
        </motion.div>
      )} */}
    </div>
  );
};

export default QuestionTabComponent;
