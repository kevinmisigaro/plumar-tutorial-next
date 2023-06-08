"use client";

import { useState } from "react";
import ListCard from "../../components/ListCard";

export interface IList {
  title: string;
  description: string;
}

export default function Home() {
  const [list, setList] = useState<IList[]>([]);
  const [values, setValues] = useState({
    title: "",
    description: "",
  });

  const handleTitle = (e: any) => {
    setValues({
      ...values,
      title: e.target.value,
    });
  };

  const handleDescription = (e: any) => {
    setValues({
      ...values,
      description: e.target.value,
    });
  };

  const handleSubmit = async () => {
    let array = [...list];
    array.push({
      title: values.title,
      description: values.description,
    });
    setList(array);
    setValues({
      title: "",
      description: "",
    })
  };

  return (
    <div className="px-10 py-12">
      <p className="font-bold text-3xl mb-10">Note taking app</p>

      <div className="border border-gray-200 shadow-md w-1/3 mb-10 py-4 px-4">
        <input
          type="text"
          className="border border-gray-400 px-2 py-3 mb-4"
          placeholder="Enter Title"
          value={values.title}
          onChange={handleTitle}
        />
        <textarea
          className="border border-gray-400 px-2 py-3"
          placeholder="Enter description"
          value={values.description}
          onChange={handleDescription}
        />
        <div
          onClick={handleSubmit}
          className="cursor-pointer bg-blue-600 px-6 py-2 mt-4 text-white max-w-fit font-semibold"
        >
          Submit
        </div>
      </div>

      <div>
        {list.length == 0 ? (
          <div className="font-bold">No notes</div>
        ) : (
          <div className="flex flex-col gap-y-5">
            {list.map((x, index) => (
              <div key={index}>
                <ListCard x={x} />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
