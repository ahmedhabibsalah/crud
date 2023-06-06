import React, { useReducer } from "react";
import AddFormUser from "./AddFormUser";
import UpdateFormUser from "./UpdateFormUser";
import { useSelector } from "react-redux";

const formReducer = (state, event) => {
  return {
    ...state,
    [event.target.name]: event.target.value,
  };
};

export default function Form() {
  const [formData, setFormData] = useReducer(formReducer, {});

  const formId = useSelector((state) => state.app.client.formId);
  // const flag = false;
  return (
    <div className="container mx-auto">
      {formId
        ? UpdateFormUser({ formId, formData, setFormData })
        : AddFormUser({ formData, setFormData })}
    </div>
  );
}
