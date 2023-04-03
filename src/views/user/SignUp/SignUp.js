import React, { useState } from "react";
import LayoutUser from "../../../layouts/LayoutUser";
import "../../../styles/SignUp/SignUp.scss";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  return (
    <LayoutUser>
      <div className="sign-up-container">
        <div className="row w-100">
          <div className="col-7 sign-up-left"></div>
          <div className="col-5 sign-up-right d-flex align-items-center justify-content-center">
            <div className="d-flex flex-column justify-content-lg-evenly form-create">
              <div>
                <h1>Create an account</h1>
                <span>Enter your details below</span>
              </div>
              <TextField id="standard-search" label="Name" variant="standard" />
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
              <button className="button-create">Create Account</button>
              <button className="button-create-gg">
                <FcGoogle style={{ width: "24px", height: "24px" }} /> Sign Up
                with Google
              </button>
              <div className="d-flex justify-content-center align-items-center">
                <span>
                  Already have account?{" "}
                  <Link
                    to="/login"
                    style={{ color: "black", textDecoration: "underline" }}
                  >
                    Log in
                  </Link>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </LayoutUser>
  );
};

export default SignUp;
