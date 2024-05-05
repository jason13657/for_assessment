"use client";

import { useEffect, useState } from "react";
import Stages from "./Stages";
import Selector from "./Selector";
import Information from "./Information";
import Calender from "./Calender";
import Confirm from "./Confirm";

type Props = {};

export default function Booking({}: Props) {
  const [selected, setSelected] = useState(0);
  const [confirmed, setConfirmed] = useState(false);

  useEffect(() => {
    setConfirmed(false);
  }, [selected]);

  return (
    <section className="inline-flex flex-col justify-center bg-white p-3 max-w-3xl w-full mt-3 rounded-sm">
      <Stages selected={selected} setSelected={setSelected} />
      {selected == 0 && <Selector />}
      {selected == 1 && <Information />}
      {selected == 2 && <Calender />}
      {selected == 3 && <Confirm />}
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
            }}
          />
        )}
        {selected >= 0 && selected != 3 && (
          <Button
            text="Next"
            onClick={() => {
              setSelected(selected + 1);
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
    <button
      className="p-2 bg-sky-600 rounded-md text-white w-48"
      onClick={() => onClick && onClick()}
    >
      {text}
    </button>
  );
}
