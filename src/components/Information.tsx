type Props = {
  onChange: (data: { first: string; last: string; number: string }) => void;
  info: { first: string; last: string; number: string };
};

export default function Information({ onChange, info }: Props) {
  return (
    <form className="flex flex-col p-2 gap-3">
      <h2 className="text-center p-2 font-semibold text-lg">Enter personal information for reservation</h2>
      <div className="flex flex-col gap-2 md:flex-row md:gap-0">
        <label className="w-32">Patient Name</label>
        <div className="flex gap-3 flex-col md:flex-row">
          <input
            type="text"
            className="border px-2"
            placeholder="First name"
            onChange={(e) => {
              onChange({ ...info, first: e.target.value });
            }}
            value={info.first}
          />
          <input
            type="text"
            className="border px-2"
            placeholder="Last name"
            onChange={(e) => {
              onChange({ ...info, last: e.target.value });
            }}
            value={info.last}
          />
        </div>
      </div>
      <div className="flex flex-col gap-2 md:flex-row md:gap-0">
        <label className="w-32">Phone number</label>
        <input
          type="text"
          className="border px-2"
          onChange={(e) => {
            onChange({ ...info, number: e.target.value });
          }}
          value={info.number}
        />
      </div>
    </form>
  );
}
