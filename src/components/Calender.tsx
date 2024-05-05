type Props = {};
import { useState } from "react";
import Calendar from "react-calendar";

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

export default function Calender({}: Props) {
  const [value, onChange] = useState<Value>(new Date());
  return (
    <div className="my-2">
      <Calendar
        onChange={onChange}
        value={value}
        className="text-center border-2 rounded-md "
        tileClassName="p-2 hover:bg-neutral-100"
      />
    </div>
  );
}
