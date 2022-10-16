import React from "react";

import { Formik, Form } from "formik";
import Card from "@mui/material/Card";
import { Button, CardHeader, CardContent } from "@mui/material";

import { AuthLayout } from "@/layouts/auth.layout";
import { InfoLogin } from "./login.vm";
import { InputFormik } from "@/common/components/input-formik.component";
import { formValidation } from "./login.validation";
import css from "./login.styles.css";

interface Props {
  onLogin: (infoLogin: InfoLogin) => void;
}

export const Login = (props: Props) => {
  const { onLogin } = props;
  // const [infoForm, setInfoForm] = React.useState({ user: "", password: "" });

  // const handleChange =
  //   (field: keyof InfoLogin) => (e: React.ChangeEvent<HTMLInputElement>) => {
  //     setInfoForm({ ...infoForm, [field]: e.target.value });
  //   };

  // const handleChange2 = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   setInfoForm({ ...infoForm, [e.target.name]: e.target.value });
  // };

  return (
    <>
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
