import { LoginForm } from "@/components/sections/auth/LoginForm";
import React from "react";

const Login = () => {
  return (
    <div className="w-full h-screen overflow-hidden flex ">
      <div className="flex-1 bg-slate-500 h-full hidden md:block login-banner-left"></div>
      <div className="flex-1 h-full flex justify-center items-center p-4 md:p-0">
<LoginForm uid={"username-1"} pid={"password-1"} />
      </div>
    </div>
  );
};

export default Login;
