import React from "react";
import { BiEdit, BiTrash } from "react-icons/bi";
import { getUsers } from "../lib/helper";
import { useQuery } from "react-query";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteAction,
  toggleChangeAction,
  updateAction,
} from "../redux/reducer";

export default function Table() {
  const { isLoading, isError, data, error } = useQuery("user", getUsers);
  if (isLoading) return <div>Employee Is Loading</div>;
  if (isError) return <div>{error} Ocurred</div>;
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              Name
            </th>
            <th scope="col" className="px-6 py-3">
              Email
            </th>
            <th scope="col" className="px-6 py-3">
              Salary
            </th>
            <th scope="col" className="px-6 py-3">
              Birthday
            </th>
            <th scope="col" className="px-6 py-3">
              Status
            </th>
            <th scope="col" className="px-6 py-3">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((obj, i) => (
            <Tr {...obj} key={i} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

function Tr({ _id, name, email, salary, date, status }) {
  const visible = useSelector((state) => state.app.client.toggleForm);
  const dispatch = useDispatch();

  const onUpdate = () => {
    dispatch(toggleChangeAction(_id));
    if (visible) {
      dispatch(updateAction(_id));
    }
  };
  const onDelete = () => {
    if (!visible) {
      dispatch(deleteAction(_id));
    }
  };

  return (
    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
      <th
        scope="row"
        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
      >
        {name}
      </th>
      <td className="px-6 py-4">{email}</td>
      <td className="px-6 py-4">{salary}</td>
      <td className="px-6 py-4">{date}</td>
      <td className="px-6 py-4 ">
        <button
          className={`${
            status === "Active" ? "bg-green-500" : "bg-red-500"
          } text-white font-bold py-1 px-1 rounded-full`}
        >
          {status}
        </button>
      </td>
      <td className="px-6 py-4 flex gap-2">
        <button className="text-green-500" onClick={onUpdate}>
          <BiEdit size={23} />
        </button>
        <button className="text-red-500" onClick={onDelete}>
          <BiTrash size={23} />
        </button>
      </td>
    </tr>
  );
}
