import Head from "next/head";
import { BiUserPlus } from "react-icons/bi";
import Table from "../components/Table";
import Form from "../components/Form";
import { useState } from "react";
export default function Home() {
  const [visible, setVisible] = useState(true);
  const handleChange = () => {
    setVisible(!visible);
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
        </div>
        {visible ? <Form /> : <></>}

        <div className="container mx-auto">
          <Table></Table>
        </div>
      </main>
    </section>
  );
}
