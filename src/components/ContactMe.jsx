import React from "react";
import { Label } from "./Label";
import { Github } from "./icon/Github";
import { Twitter } from "./icon/Twitter";
import { Figma } from "./icon/Figma";
import { Mail } from "./icon/Mail";
import { NewPage } from "./icon/NewPage";
import { Call } from "./icon/Call";

export const ContactMe = () => {
  return (
    <div className="flex flex-col px-2 py-2 sm:py-24 sm:px-4 lg:px-20 justify-center items-center gap-12 dark:bg-black dark:text-white">
      <Label
        text="Get in touch"
        para="What’s next? Feel free to reach out to me if you're looking for a developer, have a query, or simply want to connect."
      />
      <div class="flex justify-center items-center flex-col gap-4">
        <div class="flex gap-5 lg:text-4xl text-lg font-semibold justify-center items-center">
          <div className="hidden lg:flex">
            <Mail />
          </div>
          <h1>reachsagarshah@gmail.com</h1>
          <div className="hidden lg:flex">
            <NewPage />
          </div>
        </div>
        <div class="flex gap-5 lg:text-4xl text-lg font-semibold justify-center items-center">
          <div className="hidden lg:flex">
            <Call />
          </div>
          <h1>+91 8980500565</h1>
          <div className="hidden lg:flex">
            <NewPage />
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center gap-2 ">
        <p className="text-base font-normal flex-wrap loaning-6 text-gray-600 dark:text-white">
          You may also find me on these platforms!
        </p>
        <div className="flex gap-2">
          <Github />
          <Twitter />
          <Figma />
        </div>
      </div>
    </div>
  );
};
