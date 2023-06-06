import React, { useReducer } from "react";
import Bug from "./Bug";
import Success from "./Success";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { getUser, getUsers, updateUser } from "../lib/helper";

export default function UpdateFormUser({ formId, formData, setFormData }) {
  const queryClient = useQueryClient();
  const { isLoading, isError, data, error } = useQuery(["users", formId], () =>
    getUser(formId)
  );
  const UpdateMutation = useMutation((newData) => updateUser(formId, newData), {
    onSuccess: async (data) => {
      // queryClient.setQueryData('users', (old) => [data])
      queryClient.prefetchQuery("users", getUsers);
    },
    onError: console.log(error),
  });
  if (isLoading) return <div>Loading...!</div>;
  if (isError) return <div>Error</div>;

  const { name, avatar, salary, date, email, status } = data;
  const [firstName, lastName] = name ? name.split(" ") : formData;

  const handleSubmit = async (e) => {
    e.preventDefault();

    let userName = `${formData.firstName ?? firstName} ${
      formData.lastName ?? lastName
    }`;
    let updated = Object.assign({}, data, formData, { name: userName });
    await UpdateMutation.mutate(updated);
  };
  return (
    <form className="my-2" onSubmit={handleSubmit}>
      <div className="relative z-0 w-full mb-6 group flex gap-2 flex-wrap">
        <input
          type="text"
          name="firstName"
          id="firstName"
          defaultValue={firstName}
          className="block py-2.5 px-0 w-full max-w-[300px] text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          placeholder="First Name"
          required
          onChange={setFormData}
        />

        <input
          type="text"
          name="lastName"
          id="lastName"
          defaultValue={lastName}
          className="block py-2.5 px-0 w-full max-w-[300px] text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          placeholder="Last Name"
          required
          onChange={setFormData}
        />
        <input
          type="email"
          name="email"
          id="email"
          defaultValue={email}
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
          defaultValue={salary}
          className="block py-2.5 px-0 w-full max-w-[300px] text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          placeholder="Salary"
          required
          onChange={setFormData}
        />
        <input
          type="date"
          name="date"
          id="date"
          defaultValue={date}
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
          defaultChecked={status == "Active"}
          onChange={setFormData}
        />
        <label htmlFor="status">Active</label>
        <input
          type="radio"
          name="status"
          id="status"
          value="Inactive"
          defaultChecked={status !== "Active"}
          onChange={setFormData}
        />
        <label htmlFor="status">Inactive</label>
      </div>
      <button
        type="submit"
        className="max-w-[200px] bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded "
      >
        Update
      </button>
    </form>
  );
}
