import React, { useReducer } from "react";
import Bug from "./Bug";
import Success from "./Success";
import { useMutation, useQueryClient } from "react-query";
import { addUser, getUsers } from "../lib/helper";

export default function AddFormUser({ formData, setFormData }) {
  const queryClient = useQueryClient();
  const addMutation = useMutation(addUser, {
    onSuccess: () => {
      queryClient.prefetchQuery("users", getUsers);
    },
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    if ((Object.keys(formData).length = 0)) {
      return <Bug />;
    }
    let { firstName, lastName, email, salary, date, status } = formData;
    const model = {
      name: `${firstName} ${lastName}`,
      email,
      salary,
      date,
      status: status ?? "Active",
    };

    addMutation.mutate(model);
  };
  // if (Object.keys(formData).length > 0) {
  //   return <Success message={"Data Added Successfully"} />;
  // }
  if (addMutation.isLoading) return <div>Loading...</div>;
  if (addMutation.isError)
    return <Bug message={addMutation.error.message}></Bug>;
  if (addMutation.isSuccess)
    return <Success message="Added Successfully"></Success>;
  return (
    <form className="my-2" onSubmit={handleSubmit}>
      <div className="relative z-0 w-full mb-6 group flex gap-2 flex-wrap">
        <input
          type="text"
          name="firstName"
          id="firstName"
          className="block py-2.5 px-0 w-full max-w-[300px] text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          placeholder="First Name"
          required
          onChange={setFormData}
        />

        <input
          type="text"
          name="lastName"
          id="lastName"
          className="block py-2.5 px-0 w-full max-w-[300px] text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          placeholder="Last Name"
          required
          onChange={setFormData}
        />
        <input
          type="email"
          name="email"
          id="email"
          className="block py-2.5 px-0 w-full max-w-[300px] text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          placeholder="Email"
          required
          onChange={setFormData}
        />
      </div>
      <div className="relative z-0 w-full mb-6 group flex gap-2 flex-wrap">
        <input
          type="text"
          name="salary"
          id="salary"
          className="block py-2.5 px-0 w-full max-w-[300px] text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          placeholder="Salary"
          required
          onChange={setFormData}
        />
        <input
          type="date"
          name="date"
          id="date"
          className="block py-2.5 px-0 w-full max-w-[300px] text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          required
          onChange={setFormData}
        />
      </div>
      <div className="relative z-0 w-full mb-6 group flex gap-2 flex-wrap">
        <input
          type="radio"
          name="status"
          id="status"
          value="Active"
          onChange={setFormData}
        />
        <label htmlFor="status">Active</label>
        <input
          type="radio"
          name="status"
          id="status"
          value="Inactive"
          onChange={setFormData}
        />
        <label htmlFor="status">Inactive</label>
      </div>
      <button
        type="submit"
        className="max-w-[200px] bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded "
      >
        Add
      </button>
    </form>
  );
}
