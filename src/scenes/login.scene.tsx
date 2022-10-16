import React from "react";

import { AuthLayout } from "@/layouts/auth.layout";
import { LoginContainer } from "@/pods/login";

export const LoginScene = () => {
  return (
    <AuthLayout>
      <LoginContainer />
    </AuthLayout>
  );
};
