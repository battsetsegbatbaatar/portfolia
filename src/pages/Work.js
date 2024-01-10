import { Inter } from "next/font/google";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Work } from "@/components/Work";
import { ContactMe } from "@/components/ContactMe";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="m-0">
      <Header />
      <Work />
      <ContactMe />
      <Footer />
    </div>
  );
}
