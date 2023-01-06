import { ServerResponse } from "http";
import Image from "next/image";
import React, { MouseEvent, useState } from "react";
import Wrappers from "../assets/css/Skills.Wrappers";
import {
  backEnd,
  frontEnd,
  productivity,
  server,
} from "../utils/data/technology";
const Skills = () => {
  const [role, setRole] = useState("frontEnd");
  const [technology, setTechnology] = useState(frontEnd);

  const handleRoleChange = (e: MouseEvent<HTMLDivElement>) => {
    const tech = (e.target as HTMLInputElement).className;
    setRole(tech);
    let arr = e.currentTarget.childNodes;

    // event.target here is an HTMLElement which is the parent of all HTML elements, but isn't guaranteed to have the property value. TypeScript detects this and throws the error. Cast event.target to the appropriate HTML element to ensure it is HTMLInputElement which does have a value property

    const currentTech =
      tech == "frontEnd"
        ? frontEnd
        : tech == "backEnd"
        ? backEnd
        : tech == "server"
        ? server
        : productivity;
    setTechnology(currentTech);
  };

  return (
    <Wrappers role={role}>
      <div id="skills"></div>
      <section className="left">
        <section className="top">
          <h1>Skills</h1>
          <p>
            With a diverse range of skills, including expertise in ReactJS,
            React Native, NodeJS, MongoDB, and GraphQL, I am a versatile
            software engineer with the ability to tackle a wide variety of
            projects and challenges
          </p>
        </section>
        <section className="bottom">
          <div className="role" onClick={handleRoleChange}>
            <p className="frontEnd">Frontend</p>
            <p className="backEnd">Backend</p>
            <p className="server">Server</p>
            <p className="productivity">Productivity</p>
          </div>
          <div className="technology">
            {technology.map((item) => {
              const { logopath, name, id } = item;
              return (
                <div key={id} className="tech">
                  <div className="img">
                    <Image src={logopath} width={80} height={60} alt={name} />
                  </div>
                  <span>{name}</span>
                </div>
              );
            })}
          </div>
        </section>
      </section>
      <section className="right">
        <Image src={"/skills.gif"} alt={"skills"} width={600} height={600} />
      </section>
    </Wrappers>
  );
};

export default Skills;
