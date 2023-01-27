import React from "react";
import CustomContainer from "../../shared/Layout/container/Container";

const Login = ({setUser}) => {
  

  return (
    <>
      <CustomContainer maxWidth={false} paperImageContainer={true} setUser={setUser}/>
    </>
  );
};

export default Login;
