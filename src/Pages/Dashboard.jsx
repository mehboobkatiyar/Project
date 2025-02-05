import React, { useState } from "react";
import Counter from "../Components/counter";
import RichTextEditor from "../Components/RichTextEditor";
import UserData from "../Components/UserData";
import UserForm from "../Components/UserForm";
import DataView from "../Components/DataView";
const Dashboard = () => {
  const [formToEdit, setFormToEdit] = useState(null);
  const [jsondata, setJsonData] = useState([]);
  return (
    <>
      <div className="flex items-center justify-center lg:justify-between gap-2 flex-wrap">
        <Counter />
        <RichTextEditor />
      </div>
      <div className="flex items-center justify-center lg:justify-between flex-wrap">
        <UserData
          formToEdit={formToEdit}
          setFormToEdit={setFormToEdit}
          jsondata={jsondata}
          setJsonData={setJsonData}
        />
        <UserForm
          setJsonData={setJsonData}
          jsondata={jsondata}
          formToEdit={formToEdit}
        />
      </div>
      <DataView setFormToEdit={setFormToEdit} />
    </>
  );
};

export default Dashboard;
