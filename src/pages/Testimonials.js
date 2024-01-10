import { Inter } from "next/font/google";
import { Header } from "@/components/Header";
import { Skills } from "@/components/Skills";
import { ContactMe } from "@/components/ContactMe";
import { Footer } from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="m-0">
      <Header />
      <Skills />
      <ContactMe />
      <Footer />
    </div>
  );
}
