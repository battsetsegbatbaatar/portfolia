import React from "react";
import { LocationIcon } from "./icon/LocationIcon";
import { DotIcon } from "./icon/DotIcon";
import { Github } from "./icon/Github";
import { Twitter } from "./icon/Twitter";
import { Figma } from "./icon/Figma";

export const Hero = () => {
  return (
    <div>
      <main className="py-24 px-4 lg:px-20 flex flex-col items-center bg-white dark:bg-black dark:text-white">
        <div className="flex flex-col lg:flex-row-reverse lg:items-start gap-12 px-8 lg:w-[1500px]  dark:text-white">
          <img
            className="shadow-[0px_2px_2px_0px_#e5e7eb] lg:shadow-[30px_30px_#e5e7eb]"
            src="./Pic.jpg"
          ></img>
          <div>
            <div className="flex max-w-142 flex-col justify-center items-start gap-12 self-stretch">
              <div className="flex flex-col gap-2  dark:text-white">
                <h1 className="text-4xl  lg:text-6xl font-bold leading-9 tracking-wide">
                  Hi, I’m Sagar 👋
                </h1>
                <p className="text-gray-900 text-base font-medium leading-6 dark:text-white">
                  I'm a full stack developer (React.js & Node.js) with a focus
                  on creating (and occasionally designing) exceptional digital
                  experiences that are fast, accessible, visually appealing, and
                  responsive. Even though I have been creating web applications
                  for over 7 years, I still love it as if it was something new.
                </p>
              </div>
              <div className="flex flex-col max-w-142 justify-center items-start gap-12 self-stretch dark:text-white">
                <div>
                  <div className="flex p-1 gap-1">
                    <LocationIcon />
                    <h5 className="text-gray-900 text-base font-medium leading-6 dark:text-white">
                      Ahmedabad, India
                    </h5>
                  </div>
                  <div className="flex p-1 gap-1">
                    <DotIcon />
                    <h5 className="text-gray-900 text-base font-medium leading-6 dark:text-white">
                      Available for new projects
                    </h5>
                  </div>
                </div>
                <div className="flex p-1 gap-1">
                  <Github />
                  <Twitter />
                  <Figma />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};
