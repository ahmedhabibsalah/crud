import React from "react";
import { BiEdit, BiTrash } from "react-icons/bi";
import { getUser } from "../lib/helper";
import { useQuery } from "react-query";
export default function Table() {
  const { isLoading, isError, data, error } = useQuery("user", getUser);
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
          {data.map((item, index) => (
            <tr
              className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
              key={index}
            >
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                {item.name}
              </th>
              <td className="px-6 py-4">{item.email}</td>
              <td className="px-6 py-4">{item.salary}</td>
              <td className="px-6 py-4">{item.date}</td>
              <td className="px-6 py-4 ">
                <button
                  className={`${
                    item.status === "active" ? "bg-green-500" : "bg-red-500"
                  } text-white font-bold py-1 px-1 rounded-full`}
                >
                  {item.status}
                </button>{" "}
              </td>
              <td className="px-6 py-4 flex gap-2">
                <button className="text-green-500">
                  <BiEdit size={23} />
                </button>
                <button className="text-red-500">
                  <BiTrash size={23} />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
