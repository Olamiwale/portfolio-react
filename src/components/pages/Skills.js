import React from "react";
import SkillsLogo from "../SkillsLogo";

import {
  css,
  Html,
  ImgGit,
  Js,
  Mongo,
  Next,
  Node,
  Firebase,
  Tailwind,
  Solidity,
  Vue,
  Aws,
} from "../imageImport";

export default function Skills({ logo, title }) {
  return (
    <>
      <div className="h-screen flex flex-col justify-center p-8">
        <div className="">
          <p className="font-bold text-2xl py-4">Skills</p>
          <p className="font-semibold text-xl py-4">What I can do</p>
        </div>

        <div className=" flex justify-center m-20 ">
          <img src={css} className="w-20 bg-gray-300 p-3 absolute" />
          <img src={ImgGit} className="w-20 bg-gray-300 p-3 absolute" />
          <img src={Html} className="w-20 bg-gray-300 p-3 absolute" />
          <img src={Js} className="w-20 bg-gray-300 p-3 " />
                  </div>

        



        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5">
          <SkillsLogo logo={css} title="CSS" />
          <SkillsLogo logo={Html} title="HTML" />
          <SkillsLogo logo={ImgGit} title="Github" />
          <SkillsLogo logo={Js} title="JavaScript" />
          <SkillsLogo logo={Next} title="Next" />
          <SkillsLogo logo={Firebase} title="Firebase" />
          <SkillsLogo logo={Tailwind} title="Tailwind" />
          <SkillsLogo logo={Node} title="Node" />
          <SkillsLogo logo={Mongo} title="Mongo" />
          <SkillsLogo logo={Solidity} title="Solidity" />
          <SkillsLogo logo={Vue} title="Vue" />
        </div>
      </div>
    </>
  );
}
