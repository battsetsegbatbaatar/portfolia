import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { About } from "@/components/about";
import { Skills } from "@/components/Skills";
import { Experience } from "@/components/Experience";
import { Work } from "@/components/Work";
import { ContactMe } from "@/components/ContactMe";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-black">
      <Header />
      <main>
        <Hero />
        <div id="about"><About /></div>
        <div id="skills"><Skills /></div>
        <div id="experience"><Experience /></div>
        <div id="work"><Work /></div>
        <div id="contact"><ContactMe /></div>
      </main>
      <Footer />
    </div>
  );
}
