import Head from "next/head";
import { BiUserPlus, BiX, BiCheck } from "react-icons/bi";
import Table from "../components/Table";
import Form from "../components/Form";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteAction, toggleChangeAction } from "../redux/reducer";
import { useQueryClient } from "react-query";
import { deleteUser, getUsers } from "../lib/helper";
export default function Home() {
  // const [visible, setVisible] = useState(true);
  const visible = useSelector((state) => state.app.client.toggleForm);
  const deleteId = useSelector((state) => state.app.client.deleteId);
  const queryClient = useQueryClient();

  const dispatch = useDispatch();
  const handleChange = () => {
    dispatch(toggleChangeAction());
  };

  const deleteHandler = async () => {
    if (deleteId) {
      await deleteUser(deleteId);
      await queryClient.prefetchQuery("users", getUsers);
      await dispatch(deleteAction(null));
    }
  };
  const cancelHandler = async () => {
    // console.log("cancel")
    await dispatch(deleteAction(null));
  };

  return (
    <section>
      <Head>
        <title>CRUD</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col px-6 py-6">
        <h1 className="text-5xl text-center py-4">Employee Management</h1>
        <div className="container mx-auto flex justify-between py-5 border-b">
          <div className="left flex gap-3">
            <button
              onClick={handleChange}
              className="max-w-[200px] bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded flex gap-1"
            >
              Add Employee
              <BiUserPlus size={23} />
            </button>
          </div>
          {deleteId ? DeleteComponent({ deleteHandler, cancelHandler }) : <></>}
        </div>
        {visible ? <Form /> : <></>}

        <div className="container mx-auto">
          <Table></Table>
        </div>
      </main>
    </section>
  );
}

function DeleteComponent({ deleteHandler, cancelHandler }) {
  return (
    <div className="flex gap-5">
      <button>Are you sure?</button>
      <button
        onClick={deleteHandler}
        className="flex bg-red-500 text-white px-4 py-2 border rounded-md hover:bg-rose-500 hover:border-red-500 hover:text-gray-50"
      >
        Yes{" "}
        <span className="px-1">
          <BiCheck color="rgb(255 255 255)" size={25} />
        </span>
      </button>
      <button
        onClick={cancelHandler}
        className="flex bg-green-500 text-white px-4 py-2 border rounded-md hover:bg-gree-500 hover:border-green-500 hover:text-gray-50"
      >
        No{" "}
        <span className="px-1">
          <BiX color="rgb(255 255 255)" size={25} />
        </span>
      </button>
    </div>
  );
}
