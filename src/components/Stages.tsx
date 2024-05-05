type Props = {
  selected: number;
  setSelected: (index: number) => void;
};

const STATGES = [
  "Select a department/staff",
  "Add Personal Infomation",
  "Choose a date/time",
  "Comfirm",
];

export default function Stages({ selected, setSelected }: Props) {
  return (
    <ul className="flex justify-evenly gap-4 flex-col md:flex-row">
      {STATGES.map((stage, index) => (
        <li
          key={stage}
          className={`flex justify-center items-center border-2 rounded-md text-sm md:w-1/4 p-2 ${
            index === selected && " border-sky-600"
          }`}
          onClick={() => {
            setSelected(index);
          }}
        >
          <p>{index + 1}.</p>
          <p className="text-center">{stage}</p>
        </li>
      ))}
    </ul>
  );
}
