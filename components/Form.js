import React from "react";
import AddFormUser from "./AddFormUser";
import UpdateFormUser from "./UpdateFormUser";

export default function Form() {
  const flag = true;
  return (
    <div className="container mx-auto">
      {flag ? <AddFormUser /> : <UpdateFormUser />}
    </div>
  );
}
