import { useState } from "react";
import SelectDepartment from "./SelectDepartment";

type Props = {};

const OPTIONS = ["Select a medical department", "Search for medical staff"];

export default function Selector({}: Props) {
  const [selected, setselected] = useState(0);

  return (
    <div className="flex flex-col mt-3  border-sky-600 border-2  rounded-md">
      <ul className="w-full flex border-b-2 border-sky-600">
        {OPTIONS.map((option, index) => (
          <li
            key={option}
            className={`flex justify-center items-center w-full text-center p-2 ${
              index === selected && "bg-sky-600 text-white"
            }`}
            onClick={() => {
              setselected(index);
            }}
          >
            {option}
          </li>
        ))}
      </ul>
      {selected === 0 && <SelectDepartment />}
    </div>
  );
}
