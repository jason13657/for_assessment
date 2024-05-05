"use client";

import { useState } from "react";
import Stages from "./Stages";
import Selector from "./Selector";
import Information from "./Information";
import Calender from "./Calender";

type Props = {};

export default function Booking({}: Props) {
  const [selected, setselected] = useState(0);

  return (
    <section className="inline-flex flex-col justify-center bg-white p-3 max-w-3xl w-full mt-3 rounded-sm">
      <Stages selected={selected} />
      {selected == 0 && <Selector />}
      {selected == 1 && <Information />}
      {selected == 2 && <Calender />}
      <div className="flex justify-center mt-3 gap-3">
        {selected !== 0 && (
          <Button
            text="Prev"
            onClick={() => {
              setselected(selected - 1);
            }}
          />
        )}
        {selected >= 0 && selected != 3 && (
          <Button
            text="Next"
            onClick={() => {
              setselected(selected + 1);
            }}
          />
        )}
        {selected == 3 && <Button text="Confirm" />}
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
