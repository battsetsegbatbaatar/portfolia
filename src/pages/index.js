import { Inter } from "next/font/google";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { About } from "@/components/about";
import { Skills } from "@/components/Skills";
import { Experience } from "@/components/Experience";
import { Work } from "@/components/Work";
import { ContactMe } from "@/components/ContactMe";
import { Footer } from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="m-0">
      <Header />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Work />
      <ContactMe />
      <Footer />
    </div>
  );
}
