import { Doctor } from "@/service/doctor";
import { makeDepartmentNamePretty } from "@/util";
import { useEffect, useState } from "react";

type Props = {
  onChange: (data: Doctor) => void;
  choosen: Doctor;
};

const SELECT_OPTIONS = [
  {
    value: "pediatric_surgery",
    name: "Pediatric surgery",
  },
  {
    value: "urology",
    name: "Urolog",
  },
  {
    value: "family_medicine",
    name: "Family medicine",
  },
];

export default function SelectDepartment({ onChange, choosen }: Props) {
  const [value, setValue] = useState("pediatric_surgery");
  const [doctors, setDoctors] = useState<Doctor[]>([]);

  useEffect(() => {
    fetch(`/api/doctors?department=${value}`)
      .then((res) => res.json())
      .then((data) => {
        setDoctors(data);
      });
  }, [value]);

  return (
    <>
      <div className="flex flex-col">
        <div className="flex">
          <p className="border-sky-600 border-r-2 p-2">department</p>
          <select
            name="options"
            className="w-full outline-none rtl text-center"
            onChange={(e) => {
              setValue(e.currentTarget.value);
            }}
          >
            {SELECT_OPTIONS.map(({ value, name }) => (
              <option key={value} value={value}>
                {name}
              </option>
            ))}
          </select>
        </div>
        {doctors && (
          <ul className="flex gap-2 flex-col py-2 border-t-2">
            {doctors.map(({ name, department }, index) => (
              <li key={name}>
                <div
                  className={`flex p-2 hover:bg-neutral-100 ${choosen?.name === name && "bg-slate-200"}`}
                  onClick={() => {
                    onChange({ name, department });
                  }}
                >
                  <p className="w-40">{makeDepartmentNamePretty(department)}</p>
                  <p className="w-full text-center">{name}</p>
                </div>
                {index !== doctors.length - 1 && <div className="border mt-2"></div>}
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
}
