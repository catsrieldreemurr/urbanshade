import Image from "next/image";
import Navbar from "./components/navbar";

export default function Home() {
  return (
    <div className="h-screen bg-[url(/NewSubmarineBay2.png)]">
      <Navbar></Navbar>
    </div>
  );
}
