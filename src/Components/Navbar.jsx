import React from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../stores/authSlice";
const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  return (
    <div className="flex flex-row gap-2 m-3 justify-end">
      <Button
        variant="outlined"
        className="!text-red-500 !border !border-red-500"
        onClick={() => navigate("/dashboard")}
      >
        Dashboard
      </Button>
      <Button
        variant="outlined"
        className="!text-red-500 !border !border-red-500"
        onClick={() => navigate("/charts")}
      >
        Charts
      </Button>
      <Button
        variant="outlined"
        className="!text-red-500 !border !border-red-500"
        onClick={() => {
          dispatch(logout());
          navigate("/");
        }}
      >
        Logout
      </Button>
    </div>
  );
};

export default Navbar;
