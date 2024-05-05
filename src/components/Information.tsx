type Props = {};

export default function Information({}: Props) {
  return (
    <form className="flex flex-col p-2 gap-3">
      <h2 className="text-center p-2 font-semibold text-lg">Enter personal information for reservation</h2>
      <div className="flex">
        <label className="w-32">Patient Name</label>
        <div className="flex gap-3">
          <input type="text" className="border px-2" placeholder="First name" />
          <input type="text" className="border px-2" placeholder="Last name" />
        </div>
      </div>
      <div className="flex">
        <label className="w-32">Phone number</label>
        <input type="text" className="border px-2" />
      </div>
    </form>
  );
}
