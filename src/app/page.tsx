import { Header } from "@/components/Header";
import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <main className="m-0 p-0 w-full h-full">
      <div
        className="m-0 p-0 w-full h-[1080px]"
        style={{
          backgroundImage: `url(/images/hero-image.png) `,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <Navbar />
        <Header />
      </div>
    </main>
  );
}
