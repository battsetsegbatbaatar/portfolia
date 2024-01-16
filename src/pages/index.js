import { Inter } from "next/font/google";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { About } from "@/components/about";
import { Skills } from "@/components/Skills";
import { Experience } from "@/components/Experience";
import { Work } from "@/components/Work";
import { ContactMe } from "@/components/ContactMe";
import { Footer } from "@/components/Footer";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { useRef } from "react";

const inter = Inter({ subsets: ["latin"] });
import { useCallback, useEffect, useState } from "react";

// export default function useScroll(threshold: number) {
//   const [scrolled, setScrolled] = useState(false);

//   const onScroll = useCallback(() => {
//     setScrolled((window.scrollY || window.pageYOffset) > threshold);
//   }, [threshold]);

//   useEffect(() => {
//     window.addEventListener('scroll', onScroll);
//     return () => window.removeEventListener('scroll', onScroll);
//   }, [onScroll]);

//   return scrolled;
// }

export default function Home() {
  // const pageRef = useRef(null);
  // const downloadPdf = () => {
  //   // const input = pageRef.current;
  //   // console.log("input", input);
  //   const input = document.getElementById("pdf-content");
  //   html2canvas(input).then((canvas) => {
  //     console.log("canvas");
  //     const imgData = canvas.toDataURL("img/png");
  //     const doc = new jsPDF("p", "mm", "a4");
  //     const componentWidth = doc.internal.pageSize.getWidth();
  //     const componentHeight = doc.internal.pageSize.getHeight();
  //     doc.addImage(imgData, "PNG", 0, 0, componentWidth, componentHeight);

  //     doc.save("Erwin.pdf");
  //   });
  // };

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
