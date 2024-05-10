"use client";

import { useEffect, useState } from "react";
import Stages from "./Stages";
import Selector from "./Selector";
import Information from "./Information";
import Calender, { Value } from "./Calender";
import Confirm from "./Confirm";

export type FormT = {
  doctor: {
    name: string;
    department: string;
  };
  personalInfo: {
    first: string;
    last: string;
    number: string;
  };
  date: {
    date: Value;
    time: string;
  };
};

const DEFAULT: FormT = {
  doctor: {
    name: "",
    department: "",
  },
  personalInfo: {
    first: "",
    last: "",
    number: "",
  },
  date: {
    date: null,
    time: "",
  },
};

type Props = {};

export default function Booking({}: Props) {
  const [selected, setSelected] = useState(0);
  const [confirmed, setConfirmed] = useState(false);
  const [formData, setFormData] = useState<FormT>(DEFAULT);

  return (
    <section className="inline-flex flex-col justify-center bg-white p-3 max-w-3xl w-full mt-3 rounded-sm">
      <Stages selected={selected} setSelected={setSelected} />
      {selected == 0 && (
        <Selector
          onChange={(data: { name: string; department: string }) => {
            setFormData((prev) => {
              return { ...prev, doctor: data };
            });
          }}
          choosen={formData.doctor}
        />
      )}
      {selected == 1 && (
        <Information
          onChange={(data: { first: string; last: string; number: string }) => {
            setFormData((prev) => {
              return { ...prev, personalInfo: data };
            });
          }}
          info={formData.personalInfo}
        />
      )}
      {selected == 2 && (
        <Calender
          onChange={(data: { date: Value; time: string }) => {
            setFormData((prev) => {
              return { ...prev, date: data };
            });
          }}
          date={formData.date}
        />
      )}
      {selected == 3 && <Confirm formData={formData} />}
      {confirmed && (
        <p className="text-center text-xl p-3 border-2 border-sky-600 rounded-md my-2 font-semibold">
          Your reservation was successfully completed.
        </p>
      )}

      <div className="flex justify-center mt-3 gap-3">
        {selected !== 0 && (
          <Button
            text="Prev"
            onClick={() => {
              setSelected(selected - 1);
              setConfirmed(false);
            }}
          />
        )}
        {selected >= 0 && selected != 3 && (
          <Button
            text="Next"
            onClick={() => {
              setSelected(selected + 1);
              setConfirmed(false);
            }}
          />
        )}
        {selected == 3 && (
          <Button
            text="Confirm"
            onClick={() => {
              setConfirmed(true);
            }}
          />
        )}
      </div>
    </section>
  );
}

function Button({ text, onClick }: { text: string; onClick?: () => void }) {
  return (
    <button className="p-2 bg-sky-600 rounded-md text-white w-48" onClick={() => onClick && onClick()}>
      {text}
    </button>
  );
}
