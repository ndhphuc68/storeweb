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
import { Link, useNavigate } from "react-router-dom";
import { Authorization } from "../../../services/authen";
import validator from "validator";
import { useDispatch } from "react-redux";
import { customer } from "../../../store/Customer";

const SignUp = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [inputs, setInputs] = useState({});
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleRegister = () => {
    let data = {
      name: inputs.name,
      username: inputs.username,
      password: inputs.password,
    };
    if (validator.isEmpty(inputs.name)) {
      alert("Please enter your name");
      return;
    }
    if (validator.isEmpty(inputs.username)) {
      alert("Please enter your username");
      return;
    } else if (isVietnamesePhoneNumber(inputs.username)) {
      data.phone = inputs.username;
    } else if (validator.isEmail(inputs.username)) {
      data.email = inputs.username;
    } else {
      alert("username must be a valid email");
      return;
    }

    if (validator.isEmpty(data.password)) {
      alert("username must be a valid email");
      return;
    }
    console.log(data);
    Authorization.create(data)
      .then((response) => {
        if (response.success) {
          dispatch(customer.actions.getInfoCustomer(response.data));
          localStorage.setItem("token", response.data.token);
          navigate("/", { replace: true });
        }
      })
      .catch((error) => {});
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
              <TextField
                id="standard-search"
                onChange={({ target }) =>
                  setInputs((state) => ({ ...state, name: target.value }))
                }
                value={inputs.name ? inputs.name : ""}
                label="Name"
                variant="standard"
              />
              <TextField
                id="standard-search"
                label="Email or Phone Number"
                variant="standard"
                onChange={({ target }) =>
                  setInputs((state) => ({ ...state, username: target.value }))
                }
                value={inputs.username ? inputs.username : ""}
              />
              <FormControl variant="standard">
                <InputLabel htmlFor="standard-adornment-password">
                  Password
                </InputLabel>
                <Input
                  onChange={({ target }) =>
                    setInputs((state) => ({ ...state, password: target.value }))
                  }
                  value={inputs.password ? inputs.password : ""}
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
              <button
                onClick={() => handleRegister()}
                className="button-create"
              >
                Create Account
              </button>
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

const isVietnamesePhoneNumber = (number) => {
  return /(03|05|07|08|09|01[2|6|8|9])+([0-9]{8})\b/.test(number);
};

export default SignUp;
