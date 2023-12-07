import Image from "next/image";
import { Inter } from "next/font/google";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { About } from "@/components/about";
import { Skills } from "@/components/Skills";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="m-0">
      <Header />
      <Hero />
      <About />
      <Skills />
    </div>
  );
}
