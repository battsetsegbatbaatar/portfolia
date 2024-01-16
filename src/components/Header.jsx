import jsPDF from "jspdf";
import React, { useEffect, useState } from "react";

export const Header = () => {
  const [theme, setTheme] = useState("light");
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggle = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };
  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  // const handlePDF = () => {
  //   const pdf = new jsPDF();
  //   pdf.add;
  //   pdf.save("sagar_resume.pdf");
  // };

  return (
    <div className="flex flex-col items-center justify-center dark:bg-black dark:text-white">
      <header className="flex w-screen lg:w-[1500px] lg:px-20 px-4 py-4 justify-between items-center dark:bg-black dark:text-white">
        <a
          href="/"
          className="text-3xl font-bold leading-9 tracking-wide scroll-pl-8 transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-100 duration-200"
        >
          {"<SS />"}
        </a>
        <nav className=" hidden lg:flex content-center items-center gap-6 text-gray-900 text-base font-medium leading-6 dark:bg-black dark:text-white">
          <a
            href="About"
            className="transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-100 duration-200"
          >
            About
          </a>
          <a
            href="Work"
            className="transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-100 duration-200"
          >
            Work
          </a>
          <a
            href="Testimonials"
            className="transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-100 duration-200"
          >
            Testimonials
          </a>
          <a
            href="Contact"
            className="transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-100 duration-200"
          >
            Contact
          </a>
          <img
            className="transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-100 duration-200"
            onClick={toggle}
            src={theme === "light" ? "/sun.jpg" : "/Icon.png"}
            alt=""
          />
          {/* <PDF id="pdf-content" />   */}
          <a
            href="../Home/sagar-cv.pdf"
            download="../Home/sagar-cv.pdf"
            target="_blank"
            rel="noreferrer"
            className="rounded-xl bg-gray-900 text-gray-50 text-base font-medium leading-6 py-1 px-4 dark:bg-white dark:text-black transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-100 duration-200"
          >
            Download CV
          </a>
        </nav>
        <section className="flex lg:hidden  dark:bg-black dark:text-white">
          <div
            className="HAMBURGER-ICON space-y-2  dark:bg-black dark:text-white"
            onClick={() => setIsNavOpen((prev) => !prev)}
          >
            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
          </div>
          <div
            className={`${
              isNavOpen ? "showMenuNav" : "hideMenuNav"
            } dark:bg-black dark:text-white`}
          >
            <div
              className="absolute top-0 right-0 px-8 py-8  dark:bg-black dark:text-white"
              onClick={() => setIsNavOpen(false)}
            >
              <svg
                className="h-8 w-8 text-gray-600"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </div>
            <nav className="flex flex-col mt-[70px] py-3 px-3 items-center justify-between h-auto min-w-[320px]  dark:bg-black dark:text-white">
              <div className="p-4 flex flex-col gap-4 justify-start self-stretch  text-gray-900 text-base font-medium leading-6 dark:bg-black dark:text-white">
                <line className="bg-black h-[1px] dark:bg-white"></line>
                <a href="/about">About</a>
                <a href="/Work">Work</a>
                <a href="/Testimonials">Testimonials</a>
                <a href="/contact">Contact</a>
              </div>

              <div className="p-4 gap-4 flex flex-col justify-start self-stretch">
                <line className="bg-black h-[1px] dark:bg-white"></line>
                <div className="flex justify-between">
                  <p>Switch Themes</p>
                  <img
                    className="transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-100 duration-200"
                    onClick={toggle}
                    src={theme === "light" ? "/sun.jpg" : "/Icon.png"}
                    alt=""
                  />
                </div>

                <a
                  href="../Home/sagar-cv.pdf"
                  download="../Home/sagar-cv.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-xl flex justify-center bg-gray-900 text-gray-50 text-base font-medium leading-6 py-1 px-4 dark:bg-white dark:text-black transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-100 duration-200"
                >
                  Download CV
                </a>
              </div>
            </nav>
          </div>
        </section>
      </header>
      <style>{`
      .hideMenuNav {
        display: none;
      }
      .showMenuNav {
        display: block;
        position: absolute;s
        width: 80%;
        height: 100vh;
        top: 0;
        right: 0;
        background: white;
        z-index: 10;
        display: flex;
        flex-direction: column;
      }
    `}</style>
    </div>
  );
};
