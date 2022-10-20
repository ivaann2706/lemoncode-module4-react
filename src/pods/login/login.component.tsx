import React from "react";

import { Formik, Form } from "formik";
import Card from "@mui/material/Card";
import { Button, CardHeader, CardContent, Alert } from "@mui/material";

import { InfoLogin } from "./login.vm";
import { InputFormik } from "@/common/components/input-formik.component";
import { formValidation } from "./login.validation";
import css from "./login.styles.css";

interface Props {
  onLogin: (infoLogin: InfoLogin) => void;
}

export const Login = (props: Props) => {
  const { onLogin } = props;

  return (
    <>
      <Alert severity="info">Credentials: admin@admin.com / 123456</Alert>
      <Card sx={{ padding: "20px" }}>
        <CardHeader title="Login" />
        <CardContent>
          <Formik
            onSubmit={onLogin}
            initialValues={{
              user: "",
              password: "",
            }}
            validate={formValidation.validateForm}
          >
            {() => (
              <Form>
                <div className={css.container}>
                  <InputFormik type="text" name="user" />
                  <InputFormik type="password" name="password" />
                  <Button variant="outlined" type="submit">
                    Login
                  </Button>
                </div>
              </Form>
            )}
          </Formik>
        </CardContent>
      </Card>
    </>
  );
};
