import Image from "next/image";
import Link from "next/link";
import React from "react";
import Wrappers from "../assets/css/Project.Wrappers";
import project1Img from "../public/project1.png";

const Project = () => {
  return (
    <Wrappers>
      <h2 id={"projects"} className="heading">Some of My Recent Projects</h2>
      <div className="card">
        <div className="img">
          <Image src={project1Img} height={200} alt={"ProjectImage"} />
        </div>
        <h3 className="title">Job Tracker</h3>
        <div className="description">
          Job Tracker is a Application where you can keep track of your upcoming
          interview and how much interview you have attended so far and result
          of those interview
        </div>
        <Link
          target={"_blank"}
          href={"https://job-tracker1.onrender.com/all-jobs"}
        >
          Live Project
        </Link>
      </div>
    </Wrappers>
  );
};

export default Project;
