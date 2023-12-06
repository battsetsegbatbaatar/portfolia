import Image from "next/image";
import { Inter } from "next/font/google";
import { header } from "../components/header";
import { hero } from "../components/hero";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <header />
      <hero />
      <section>
        <button className="flex items-center">About me</button>
      </section>
    </>
  );
}
