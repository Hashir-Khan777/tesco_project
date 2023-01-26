const jwt = require("jsonwebtoken");
const generateUniqueInteger = require("../middleware/GenerateCode/generateCode");
const QuestionModal = require("../model/question_model");
const SCRETE_KEY = "iamscrete";

exports.create_question = async (req, res) => {
  const question_id = generateUniqueInteger();
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader) {
      return res.status(401).json({ isAuth: false, message: "not authorized" });
    }
    const token = authHeader.split(" ")[1];
    if (!token || token === "") {
      return res.status(401).json({ isAuth: false, message: "invalid token" });
    }
    let decodeToken;
    try {
      decodeToken = jwt.verify(token, SCRETE_KEY);

      const { firstname } = decodeToken;
      const response = new QuestionModal({
        questionnaire_id: question_id,
        topic_name: req.body.topic_name,
        questionnaire_title: req.body.questionnaire_title,
        instructor: firstname,
        questions: req.body.questions,
      });
      await response.save();
      return res
        .status(200)
        .json({ sucess: true, message: "Question data added" });
    } catch (err) {
      return res.status(500).json({ message: "something went wrong", error });
    }
  } catch (error) {
    return res.status(500).json({ message: "something went wrong", error });
  }
};
exports.update_question = async (req, res) => {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader) {
      return res.status(401).json({ isAuth: false, message: "not authorized" });
    }
    const token = authHeader.split(" ")[1];
    if (!token || token === "") {
      return res.status(401).json({ isAuth: false, message: "invalid token" });
    }
    try {
      await QuestionModal.updateOne({ _id: req.body._id }, req.body, {
        new: true,
      });
      return res
        .status(200)
        .json({ sucess: true, message: "Question data updated" });
    } catch (err) {
      return res.status(500).json({ message: "something went wrong", err });
    }
  } catch (error) {
    return res.status(500).json({ message: "something went wrong", error });
  }
};
exports.getall_question = async (req, res) => {
  const { tp } = req.query;

  try {
    if (tp === "null") {
      const response = await QuestionModal.find({});
      if (response) {
        return res
          .status(200)
          .json({ sucess: true, message: "Question data fetched", response });
      } else {
        return res.status(201).json({ success: true, msg: response });
      }
    } else {
      const response = await QuestionModal.find({ topic_name: tp });
      if (response) {
        return res
          .status(200)
          .json({ sucess: true, message: "Question data fetched", response });
      } else {
        return res.status(201).json({ success: false, msg: response });
      }
    }
  } catch (error) {
    return res.status(500).send(error);
  }
};
exports.delete_question = async (req, res) => {
  const { id } = req.params;
  try {
    const data = await QuestionModal.findOneAndDelete({ _id: id });
    return res.status(200).json({
      message: "question deleted succesfully",
      success: true,
      data: data,
    });
  } catch (error) {
    return res.status(500).json({ error });
  }
};
