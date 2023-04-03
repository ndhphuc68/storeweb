import React, { useState } from "react";
import LayoutUser from "../../../layouts/LayoutUser";
import "../../../styles/Login/Login.scss";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { Link } from "react-router-dom";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  return (
    <LayoutUser>
      <div className="login-container">
        <div className="row w-100">
          <div className="col-7 login-left"></div>
          <div className="col-5 login-right d-flex align-items-center justify-content-center">
            <div className="d-flex flex-column justify-content-lg-evenly form-create">
              <div>
                <h1>Log in to ShopBee</h1>
                <span>Enter your details below</span>
              </div>
              <TextField
                id="standard-search"
                label="Email or Phone Number"
                variant="standard"
              />
              <FormControl variant="standard">
                <InputLabel htmlFor="standard-adornment-password">
                  Password
                </InputLabel>
                <Input
                  id="standard-adornment-password"
                  type={showPassword ? "text" : "password"}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  }
                />
              </FormControl>
              <div className="d-flex align-items-center justify-content-between">
                <button className="button-login">Create Account</button>
                <Link className="forget-pass" to="/">Forget Password?</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </LayoutUser>
  );
};

export default Login;
