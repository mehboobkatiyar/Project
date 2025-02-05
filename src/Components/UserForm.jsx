import React, { useEffect, useState } from "react";
import { Card, Button, TextField } from "@mui/material";
const UserForm = ({ setJsonData, jsondata, formToEdit }) => {
  const [formData, setFormData] = useState({
    address: "",
    email: "",
    phone: "",
  });

  useEffect(() => {
    if (formToEdit) {
      if (jsondata && typeof jsondata === "string") {
        try {
          const parsedData = JSON.parse(jsondata);
          setFormData({
            address: parsedData.address,
            email: parsedData.email,
            phone: parsedData.phone,
          });
        } catch (error) {
          console.error("Error parsing JSON:", error);
        }
      } else if (jsondata && typeof jsondata === "object") {
        setFormData({
          address: jsondata.address,
          email: jsondata.email,
          phone: jsondata.phone,
        });
      }
    }
  }, [jsondata]);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSave = () => {
    setJsonData(JSON.stringify(formData));

    setFormData({
      address: "",
      email: "",
      phone: "",
    });
  };

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
      <div className="m-4 p-4 text-center">
        <TextField
          name="address"
          label="Address"
          variant="outlined"
          fullWidth
          onChange={handleChange}
          value={formData.address}
          className="!mb-[10px]"
        />
        <TextField
          name="email"
          label="Email"
          variant="outlined"
          fullWidth
          onChange={handleChange}
          value={formData.email}
          className="!mb-[10px]"
        />
        <TextField
          name="phone"
          label="Phone"
          variant="outlined"
          fullWidth
          onChange={handleChange}
          value={formData.phone}
          className="!mb-[10px]"
        />
        <Button variant="contained" fullWidth onClick={handleSave}>
          {formToEdit ? "Edit" : "Save"}
        </Button>
      </div>
    </Card>
  );
};

export default UserForm;
