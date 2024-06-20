import React from "react";
import ProjectProps from "./ProjectProp";


export default function Project() {
  return (
    <div id="projects" className="p-8 pt-[80px] mb-5 grid grid-cols-1 md:grid-cols-2">
      <ProjectProps title="Netflix"  />
      <ProjectProps title="Vanlife"/>
      <ProjectProps title="Summarizer"  />
      <ProjectProps title="Data-Finance" />
    </div>
  );
}
