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
import { Link, useNavigate } from "react-router-dom";
import ButtonLoader from "../../../components/ButtonLoader";
import validator from "validator";
import { Authorization } from "../../../services/authen";
import { useDispatch } from "react-redux";
import { customer } from "../../../store/Customer";
import { toast } from "react-toastify";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [inputs, setInputs] = useState({});
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleLogin = () => {
    setLoading(true);
    if (validator.isEmpty(inputs.username)) {
      return false;
    } else if (validator.isEmpty(inputs.password)) {
      return false;
    } else {
      Authorization.login(inputs)
        .then((response) => {
          if (response.success) {
            localStorage.setItem("token", response.data.token);
            localStorage.setItem("userId", response.data.userId);
            dispatch(customer.actions.getInfoCustomer(response.data));
            toast.success("Login successfully!");
            setLoading(false);
            navigate("/", { replace: true });
          }
        })
        .catch((err) => {});
    }
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
              <div className="d-flex align-items-center justify-content-between">
                <ButtonLoader
                  className="button-login d-flex justify-content-center align-items-center"
                  loading={loading}
                  onClick={handleLogin}
                  title="Create Account"
                />
                <Link className="forget-pass" to="/">
                  Forget Password?
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </LayoutUser>
  );
};

export default Login;
