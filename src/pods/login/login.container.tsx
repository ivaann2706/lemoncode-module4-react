import React from "react";
import { useNavigate } from "react-router-dom";

import { routes } from "@/core/router/routes";
import { Login } from "./login.component";
import { InfoLogin } from "./login.vm";

export const LoginContainer = () => {
  const navigate = useNavigate();

  const handleLogin = (infoLogin: InfoLogin) => {
    if (
      infoLogin.user === "admin@admin.com" &&
      infoLogin.password === "123456"
    ) {
      navigate(routes.github);
    } else {
      alert("Invalid user or password");
    }
  };

  return <Login onLogin={handleLogin} />;
};
