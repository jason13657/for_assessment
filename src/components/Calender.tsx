import { useState } from "react";
import Calendar from "react-calendar";

type Props = {
  onChange: (data: { date: Value; time: string }) => void;
  date: {
    date: Value;
    time: string;
  };
};

type ValuePiece = Date | null;

export type Value = ValuePiece | [ValuePiece, ValuePiece];

export default function Calender({ date, onChange }: Props) {
  return (
    <div className="my-2">
      <h2 className="text-center p-2 font-semibold text-lg">Choose date and time for reservation</h2>
      <Calendar
        onChange={(e) => {
          onChange({ ...date, date: e });
        }}
        value={date.date}
        className="text-center border-2 rounded-md "
        tileClassName="p-2 hover:bg-neutral-100"
      />
      <div className="flex p-2 justify-center text-2xl">
        <p>Time : </p>
        <select
          name="time"
          id=""
          onChange={(e) => {
            onChange({ ...date, time: e.target.value });
          }}
          value={date.time}
        >
          <option value="10:30">10:30</option>
          <option value="11:00">11:00</option>
          <option value="11:30">11:30</option>
          <option value="12:00">12:00</option>
          <option value="1:30">1:30</option>
        </select>
      </div>
    </div>
  );
}
