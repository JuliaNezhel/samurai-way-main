import React from "react";
import { reduxForm } from "redux-form";

export const Login = () => {
  return (
    <div>
      <h1>LOGIN</h1>
      <LoginReduxForm />
    </div>
  );
};

export const LoginForm = () => {
  return (
    <form>
      <div>
        <input placeholder="Login"></input>
      </div>
      <div>
        <input placeholder="Password"></input>
      </div>
      <input type="checkbox"></input> remember me
      <div>
        <button>Login</button>
      </div>
    </form>
  );
};

const LoginReduxForm = reduxForm({
  form: 'login'
})(LoginForm)