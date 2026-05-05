import { Inter } from "next/font/google";
import { Header } from "@/components/Header";
import { About } from "@/components/about";
import { ContactMe } from "@/components/ContactMe";
import { Footer } from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="m-0 w-screen">
      <Header />
      <About />
      <ContactMe />
      <Footer />
    </div>
  );
}
