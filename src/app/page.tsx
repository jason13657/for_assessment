import Booking from "@/components/Booking";
import Info from "@/components/Info";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col justify-center items-center w-full">
      <Info />
      <Booking />
    </main>
  );
}
