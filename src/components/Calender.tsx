type Props = {};
import { useState } from "react";
import Calendar from "react-calendar";

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

export default function Calender({}: Props) {
  const [value, onChange] = useState<Value>(new Date());
  return (
    <div className="my-2">
      <h2 className="text-center p-2 font-semibold text-lg">
        Choose date and time for reservation
      </h2>
      <Calendar
        onChange={onChange}
        value={value}
        className="text-center border-2 rounded-md "
        tileClassName="p-2 hover:bg-neutral-100"
      />
      <div className="flex p-2 justify-center text-2xl">
        <p>Time : </p>
        <select name="time" id="">
          <option value="">10:30</option>
          <option value="">11:00</option>
          <option value="">11:30</option>
          <option value="">12:00</option>
          <option value="">1:30</option>
        </select>
      </div>
    </div>
  );
}
