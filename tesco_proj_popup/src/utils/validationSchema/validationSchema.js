import * as Yup from 'yup'
export const topicSchema = Yup.object().shape({
    topic: Yup.string()
      .min(2, "minimum 2 character")
      .max(50, "maximum 50 character")
      .required("Required"),
    instructor: Yup.string()
      .min(2, "minimum 2 character")
      .max(50, "maximum 50 character")
      .required("Required"),
    
  
  });