import React from "react";
import SkillsLogo from "./SkillsLogo";

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
} from "./imageImport";

export default function Skills({ logo, title }) {
  return (
    <>
      <div className="h-screen p-8 pt-[80px] bg-purple-700">
        <div>
          <p className="font-bold text-2xl py-4">Skills</p>
          <p className="font-semibold text-xl py-4">What I can do</p>
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
