import React from "react";
import { LocationIcon } from "./icon/locationIcon";
import { Greendot } from "./icon/Greendot";
import { Github } from "./icon/Github";
import { Twitter } from "./icon/Twitter";
import { Figma } from "./icon/Figma";

export const Hero = () => {
  return (
    <div>
      <main className="py-24 px-20">
        <div className="flex items-start gap-12 px-8">
          <div>
            <div className="flex max-w-142 flex-col justify-center items-start gap-12 self-stretch">
              <div className="flex flex-col gap-2">
                <h1 className="text-3xl font-bold leading-9 tracking-wide">
                  Hi, I’m Sagar 👋
                </h1>
                <p className="text-gray-900 text-base font-medium leading-6">
                  I'm a full stack developer (React.js & Node.js) with a focus
                  on creating (and occasionally designing) exceptional digital
                  experiences that are fast, accessible, visually appealing, and
                  responsive. Even though I have been creating web applications
                  for over 7 years, I still love it as if it was something new.
                </p>
              </div>
              <div className="flex flex-col max-w-142 justify-center items-start gap-12 self-stretch">
                <div>
                  <div className="flex p-1 gap-1">
                    <LocationIcon />
                    <h5 className="text-gray-900 text-base font-medium leading-6">
                      Ahmedabad, India
                    </h5>
                  </div>
                  <div className="flex p-1 gap-1">
                    <Greendot />
                    <h5 className="text-gray-900 text-base font-medium leading-6">
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
          <img className="shadow-[30px_30px_#e5e7eb]" src="./Picture.png"></img>
        </div>
      </main>
    </div>
  );
};
