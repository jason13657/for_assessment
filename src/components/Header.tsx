import Image from "next/image";
import logo from "../../public/logo.png";

type Props = {};

export default function Header({}: Props) {
  return (
    <div className="flex justify-center bg-white p-2">
      <div className="flex w-full max-w-screen-xl justify-between">
        <div className="flex items-center  gap-2">
          <Image src={logo} width={50} height={50} alt="logo" />
          <h1 className="text-2xl font-semibold">Liverpool Hospital</h1>
        </div>
        <nav className="flex  items-center gap-6">
          <button className="font-semibold">Online Reservation</button>
          <button className="">Careers</button>
          <button className="">General information</button>
        </nav>
      </div>
    </div>
  );
}
