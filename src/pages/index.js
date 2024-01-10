import { Inter } from "next/font/google";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { About } from "@/components/about";
import { Skills } from "@/components/Skills";
import { Experience } from "@/components/Experience";
import { ExpressDarkIcon } from "@/components/skillIcon/ExpressDarkIcon";
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
      <img src={theme === "ligth" ? <Experience /> : <ExpressDarkIcon />} />
      <Work />
      <ContactMe />
      <Footer />
    </div>
  );
}
