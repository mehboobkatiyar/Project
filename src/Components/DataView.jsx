import React, { useState } from "react";
import { Card, Button } from "@mui/material";
import { Edit, Delete } from "@mui/icons-material";
import { useSpring, animated } from "react-spring";
import { useDispatch, useSelector } from "react-redux";
import { deleteForm } from "../stores/formsSlice";

const DataView = ({ setFormToEdit }) => {
  const dispatch = useDispatch();
  const forms = useSelector((state) => state.forms.forms);

  const fadeIn = useSpring({
    opacity: 1,
    transform: "translateY(0px)",
    from: { opacity: 0, transform: "translateY(20px)" },
    config: { tension: 200, friction: 12 },
  });

  const handleDelete = (id) => {
    dispatch(deleteForm(id));
  };

  const handleEdit = (form) => {
    setFormToEdit(form);
  };

  return (
    <animated.div style={fadeIn} className="w-full">
      {forms?.length > 0 ? (
        forms.map((user) => (
          <Card
            key={user.id}
            className="m-4 p-4 flex flex-col lg:flex-row justify-between items-start lg:items-center w-full lg:w-[830px]"
          >
            <div className="w-full mb-4 lg:mb-0">
              <p>
                <strong>ID:</strong> {user.id}
              </p>
              <p>
                <strong>Name:</strong> {user.name}
              </p>
              {/* <p>
                <strong>User Data (Json):</strong> {user.jsondata}
              </p> */}
            </div>
            <div className="flex space-x-2 w-full lg:w-auto justify-start lg:justify-end">
              <Button
                variant="outlined"
                color="secondary"
                onClick={() => handleEdit(user)}
              >
                <Edit />
              </Button>
              <Button
                variant="outlined"
                color="secondary"
                onClick={() => handleDelete(user.id)}
              >
                <Delete />
              </Button>
            </div>
          </Card>
        ))
      ) : (
        <p className="text-gray-500">No users saved.</p>
      )}
    </animated.div>
  );
};

export default DataView;
