import axios from "axios";
import { Snackbar } from "@mui/material";
import React from "react";
import { useMutation, useQuery, useQueryClient } from "react-query";
import {endpoints } from "../endpoints/endpoints";

const createTeacher = async (data) => {
  return await axios.post(`${process.env.REACT_APP_BASE_URL}${endpoints.createTeacher}`, data);
};
const getTeacher = async () => {
  return await axios.get(`${process.env.REACT_APP_BASE_URL}${endpoints.getTeacher}`);
};
const deleteTeacher = async (data) => {
  return await axios.delete(`${process.env.REACT_APP_BASE_URL}${endpoints.deleteTeacher}/${data}`);
};
const editTeacher=async(body)=>{
  const response= await axios.put(`http://localhost:5000/api/teacher`,body)
  return response.data
}
const getSingleTeacher = async (data) => {
  return await axios.get(`http://localhost:5000/api/teacher/${data}`);
};

const deleteQuestion=async(id)=>{
  return await axios.delete(`${process.env.REACT_APP_BASE_URL}${endpoints.deleteQuestion}/${id}`)

}

const createQuestion=async(data)=>{
  const{headers,...datas}=data
  return await axios.post(`${process.env.REACT_APP_BASE_URL}${endpoints.createQuestion}`,datas,{headers});
}
const updateQuestion=async(data)=>{
  const{headers,...datas}=data
  return await axios.put(`${process.env.REACT_APP_BASE_URL}${endpoints.updateQuestion}`,datas,{headers});
}
export const getQuestion=async(tp)=>{
 console.log(tp,'tp')
 const{queryKey}=tp&&tp
  return await axios.get(`${process.env.REACT_APP_BASE_URL}${endpoints.getQuestion}/?tp=${queryKey&&queryKey[1]}`);
}


const getResult=async()=>{
  return await axios.get(`${process.env.REACT_APP_BASE_URL}${endpoints.getResult}`)
}

//user authentication 
const loginUser=async(data)=>{
const response= await axios.post(`${process.env.REACT_APP_BASE_URL}${endpoints.login}`,data)
return response
}


const createTopic=async(data)=>{
const{headers,...datas}=data

  return await axios.post(`${process.env.REACT_APP_BASE_URL}${endpoints.createTopic}`,datas,{headers})
}
const getTopic=async()=>{
  return await axios.get(`${process.env.REACT_APP_BASE_URL}${endpoints.getAllTopic}`);
}
const deleteTopic=async(data)=>{
  return await axios.delete(`${process.env.REACT_APP_BASE_URL}${endpoints.deleteTopic}/${data}`);

}






export const UseCreateQuestionHooks=()=>{
  const queryClient = useQueryClient();
  return useMutation(createQuestion, {
    onSuccess: () => {
      queryClient.invalidateQueries("question-data");
    },
  });
}
export const UseUpdateQuestionHooks=()=>{
  const queryClient = useQueryClient();
  return useMutation(updateQuestion, {
    onSuccess: () => {
      queryClient.invalidateQueries("question-data");
    },
  });
}
export const GetQuestionHook =(query) => {
  
  return useQuery(['question-data',query],getQuestion);
};
export const DeleteQuestionHook = (setDeletionError) => {
  const queryClient = useQueryClient();
  return useMutation(deleteQuestion, {
    onSuccess: () => {
      queryClient.invalidateQueries("question-data");
    },
    onError: ({ message }) => {
      setDeletionError(message);
    },
  });
};

export const GetResultHook=(onSuccess,onError)=>{
  return useQuery("result-data", getResult, {
    onSuccess,
    onError,
  });
}


export const UseLogin=(setError)=>{
  const queryClient=useQueryClient();
  return useMutation(loginUser,{
    onSuccess: () => {
      queryClient.invalidateQueries("user-data");
      
    }
  })
}


export const UseCreateTopicHooks=()=>{
  const queryClient = useQueryClient();
  return useMutation(createTopic, {
    onSuccess: () => {
      queryClient.invalidateQueries("topic-data");
    },
  });
}
export const GetTopicHook = (onSuccess, onError) => {
  return useQuery("topic-data", getTopic, {
    onSuccess,
    onError,
  });
};
export const DeleteTopicHook = (setDeletionError) => {
  const queryClient = useQueryClient();
  return useMutation(deleteTopic, {
    onSuccess: () => {
      queryClient.invalidateQueries("topic-data");
    },
    onError: ({ message }) => {
      setDeletionError(message);
    },
  });
};
export const TopicUpdateHooks=()=>{
  return useMutation(
    (variables) => {
      return axios.put('http://localhost:8000/api/update-topic', variables);
    }
  );
}




export const UseCreateTeacherHooks = () => {
  const queryClient = useQueryClient();
  return useMutation(createTeacher, {
    onSuccess: () => {
      queryClient.invalidateQueries("teacher-data");
    },
  });
};
export const GetTeacherHook = (onSuccess, onError) => {
  return useQuery("teacher-data", getTeacher, {
    onSuccess,
    onError,
  });
};

export const DeleteTeacherHook = (setDeletionError) => {
  const queryClient = useQueryClient();
  return useMutation(deleteTeacher, {
    onSuccess: () => {
      queryClient.invalidateQueries("teacher-data");
    },
    onError: ({ message }) => {
      setDeletionError(message);
    },
  });
};
export const UpdateTeacherHook = () => {
  const queryClient = useQueryClient();
  return useMutation(editTeacher, {
    onSuccess: () => {
      queryClient.invalidateQueries("teacher-data");
    },
    onError: ({ message }) => {},
  });
};
export const UseUpdate=()=>{
  return useMutation(
    (variables) => {
      return axios.put('http://localhost:8000/api/teacher', variables);
    }
  );
}
export const GetSingleTeacherHook = (onSuccess, onError) => {
  return useQuery("teacher-single-data", getSingleTeacher, {
    onSuccess,
    onError,
  });
};


