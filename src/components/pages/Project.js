import React from "react";
import ProjectProps from "../ProjectProp";
import image2 from '../asset/img2.webp'
import image1 from '../asset/img1.webp'
import image3 from '../asset/img3.webp'


export default function Project() {
  
  return (
    <div
      id="projects"
      className=" flex flex-wrap justify-center py-5 mt-[100px] "
    >
      <ProjectProps
      image={image2}
        title="Netflix clone"
        source="https://www.google.com"
        preview="https://www.yahoo.com"
      />
      <ProjectProps
      image={image1}
        title="Facebook clone"
        source="https://www.facebook.com"
        preview="https://www.yahoo.com"
      />
      <ProjectProps
      image={image3}
        title="Twiier clone"
        source="https://www.google.com"
        preview="https://www.yahoo.com"
      />
      <ProjectProps
      image={image3}
        title="Twiier clone"
        source="https://www.google.com"
        preview="https://www.yahoo.com"
      />
      <ProjectProps
      image={image3}
        title="Twiier clone"
        source="https://www.google.com"
        preview="https://www.yahoo.com"
      />
      <ProjectProps
      image={image3}
        title="Twiier clone"
        source="https://www.google.com"
        preview="https://www.yahoo.com"
      />
    </div>
  );
}
