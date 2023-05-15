import React, { useReducer } from "react";

const formReducer = (state, event) => {
  return {
    ...state,
    [event.target.name]: event.target.value,
  };
};

export default function Form() {
  const [formData, setFormData] = useReducer(formReducer, {});
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };
  return (
    <form className="my-2" onSubmit={handleSubmit}>
      <div className="relative z-0 w-full mb-6 group flex gap-2 flex-wrap">
        <input
          type="text"
          name="first_name"
          id="first_name"
          className="block py-2.5 px-0 w-full max-w-[300px] text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          placeholder="First Name"
          required
          onChange={setFormData}
        />

        <input
          type="text"
          name="last_name"
          id="last_name"
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
          name="activity"
          id="activity"
          value="Active"
          onChange={setFormData}
        />
        <label htmlFor="activity">Active</label>
        <input
          type="radio"
          name="activity"
          id="activity"
          value="Inactive"
          onChange={setFormData}
        />
        <label htmlFor="activity">Inactive</label>
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
