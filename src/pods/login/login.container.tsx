import React from "react";
import { useNavigate } from "react-router-dom";

import { routes } from "@/core/router/routes";
import { Login } from "./login.component";
import { InfoLogin } from "./login.vm";

export const LoginContainer = () => {
  const navigate = useNavigate();

  const handleLogin = (infoLogin: InfoLogin) => {
    if (infoLogin.user === "admin" && infoLogin.password === "admin") {
      navigate(routes.list);
    } else {
      alert("Invalid user or password");
    }
  };

  return <Login onLogin={handleLogin} />;
};
