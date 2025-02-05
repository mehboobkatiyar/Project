import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../stores/authSlice";
import { TextField, Button, Card } from "@mui/material";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isLoggedIn } = useSelector((state) => state.auth);

  const [formData, setFormData] = useState({ username: "", password: "" });

  useEffect(() => {
    if (isLoggedIn) {
      navigate("/dashboard");
    }
  }, [isLoggedIn, navigate]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLogin = () => {
    const storedUser = JSON.parse(localStorage.getItem("user"));

    localStorage.setItem("user", JSON.stringify(formData));
    dispatch(login(storedUser));
    navigate("/dashboard");

    // if (!storedUser) {
    //   localStorage.setItem("user", JSON.stringify(formData));
    //   alert("Account created! Please log in.");
    // } else if (
    //   storedUser.username === formData.username &&
    //   storedUser.password === formData.password
    // ) {
    //   dispatch(login(storedUser));
    //   navigate("/dashboard");
    // } else {
    //   alert("Invalid username or password!");
    // }
  };

  return (
    <Card sx={{ maxWidth: 400, padding: 3, margin: "auto", marginTop: 5 }}>
      <h1 className="mb-5 text-3xl font-bold">Login</h1>
      <TextField
        name="username"
        label="Username"
        variant="outlined"
        fullWidth
        onChange={handleChange}
        value={formData.username}
        className="!mb-[10px]"
      />
      <TextField
        name="password"
        type="password"
        label="Password"
        variant="outlined"
        fullWidth
        onChange={handleChange}
        value={formData.password}
        className="!mb-[10px]"
      />
      <Button onClick={handleLogin} variant="contained" fullWidth>
        Login
      </Button>
    </Card>
  );
};

export default Login;
