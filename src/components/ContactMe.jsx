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
    <div className="flex flex-col py-24 px-4 lg:px-20 justify-center items-center gap-12">
      <Label
        text="Get in touch"
        para="What’s next? Feel free to reach out to me if you're looking for a developer, have a query, or simply want to connect."
      />
      <div class="flex justify-center items-center flex-col gap-4">
        <div class="flex gap-5 lg:text-4xl text-lg font-semibold justify-center items-center">
          <Mail />
          <h1>reachsagarshah@gmail.com</h1>
          <NewPage />
        </div>
        <div class="flex gap-5 lg:text-4xl text-lg font-semibold justify-center items-center">
          <Call />
          <h1>+91 8980500565</h1>
          <NewPage />
        </div>
      </div>
      <div className="flex flex-col justify-center items-center gap-2">
        <p className="text-base font-normal flex-wrap loaning-6 text-gray-600">
          You may also find me on these platforms!
        </p>
        <div className="flex">
          <Github />
          <Twitter />
          <Figma />
        </div>
      </div>
    </div>
  );
};
