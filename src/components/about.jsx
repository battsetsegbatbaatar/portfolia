import React from "react";

export const about = () => {
  return (
    <div className="py-24 px-20 flex justify-between items-start ">
      <container className=" flex px-8 flex-col items-center gap-12">
        <button>About me </button>
        <div>
          <img></img>
          <div className="flex min-w-111 flex-col gap-12">
            <h1
              className="text-3xl font-semibold leading-9 text-gray-600
            "
            >
              Curious about me? Here you have it:
            </h1>
            <div className="text-base font-normal leading-6 text-gray-600 flex flex-col gap-[16px]  ">
              <p>
                I'm a passionate, self-proclaimed designer who specializes in
                full stack development (React.js & Node.js). I am very
                enthusiastic about bringing the technical and visual aspects of
                digital products to life. User experience, pixel perfect design,
                and writing clear, readable, highly performant code matters to
                me.
              </p>
              <p>
                I'm a passionate, self-proclaimed designer who specializes in
                full stack development (React.js & Node.js). I am very
                enthusiastic about bringing the technical and visual aspects of
                digital products to life. User experience, pixel perfect design,
                and writing clear, readable, highly performant code matters to
                me.
              </p>
              <p>
                I am very much a progressive thinker and enjoy working on
                products end to end, from ideation all the way to development.
              </p>
              <p>
                When I'm not in full-on developer mode, you can find me hovering
                around on twitter or on indie hacker, witnessing the journey of
                early startups or enjoying some free time. You can follow me on
                Twitter where I share tech-related bites and build in public, or
                you can follow me on GitHub.
              </p>
              <p>Finally, some quick bits about me.</p>
              <url className="text-base font-normal leading-6 text-gray-600">
                <li></li>
                <li></li>
              </url>
              <p>
                One last thing, I'm available for freelance work, so feel free
                to reach out and say hello! I promise I don't bite 😉
              </p>
            </div>
          </div>
        </div>
      </container>
    </div>
  );
};
