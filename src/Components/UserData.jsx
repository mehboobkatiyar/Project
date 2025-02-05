import React, { useState, useEffect } from "react";
import { Card, Button, TextField, Alert } from "@mui/material";
import { v4 as uuidv4 } from "uuid";
import { useDispatch } from "react-redux";
import { addForm, editForm } from "../stores/formsSlice";

const UserData = ({ setJsonData, jsondata, formToEdit }) => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    id: uuidv4(),
    name: "",
    jsondata: jsondata,
  });

  useEffect(() => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      jsondata: jsondata,
    }));
  }, [jsondata]);

  useEffect(() => {
    if (formToEdit && formToEdit.id) {
      setFormData({
        id: formToEdit.id,
        name: formToEdit?.name,
        jsondata: formToEdit?.jsondata,
      });
      setJsonData(formToEdit?.jsondata);
    }
  }, [formToEdit]);

  const handleSaveUserData = () => {
    if (formToEdit) {
      dispatch(editForm(formData));
    } else {
      dispatch(addForm(formData));
    }
    setFormData({
      id: uuidv4(),
      name: "",
      jsondata: "",
    });
    setJsonData("");

    setUnsavedChanges(false);
  };

  const [unsavedChanges, setUnsavedChanges] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
    setUnsavedChanges(true);
  };

  const handleBeforeUnload = (e) => {
    if (unsavedChanges) {
      e.preventDefault();
      e.returnValue =
        "You have unsaved changes. Are you sure you want to leave?";
    }
  };

  useEffect(() => {
    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => window.removeEventListener("beforeunload", handleBeforeUnload);
  }, [unsavedChanges]);

  return (
    <Card
      sx={{
        maxWidth: 400,
        borderRadius: 3,
        boxShadow: 3,
        transition: "0.3s",
        "&:hover": { boxShadow: 6 },
      }}
      className="m-4"
    >
      {unsavedChanges && (
        <Alert severity="warning">You have unsaved changes!</Alert>
      )}
      <div className="m-4 p-4 text-center">
        <TextField
          name="jsondata"
          label="User Data"
          variant="outlined"
          fullWidth
          disabled
          value={jsondata}
          className="!mb-[10px]"
        />
        <TextField
          name="name"
          label="Name"
          variant="outlined"
          fullWidth
          onChange={handleChange}
          value={formData.name}
          className="!mb-[10px]"
        />
        <TextField
          name="id"
          label="Auto Generated ID"
          variant="outlined"
          fullWidth
          value={formData.id}
          disabled
          className="!mb-[10px]"
        />
        <Button
          variant="contained"
          color="primary"
          fullWidth
          onClick={handleSaveUserData}
        >
          {formToEdit ? "Edit" : "Save"}
        </Button>
      </div>
    </Card>
  );
};

export default UserData;
