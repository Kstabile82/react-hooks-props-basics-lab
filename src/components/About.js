import React from "react";
import Links from "./Links";

function About({ bio, links }) {
  return (
    <div id="about">
      <h2>About Me</h2>
     {bio ? <p>{bio}</p> : null}
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      <Links github={links.github} linkedin={links.linkedin} />
    </div>
  );
}

export default About;

//If a prop of bio is passed to this component, it is displayed inside of a <p> tag
//If a prop of bio is not passed down, or if bio is an empty string, don't display the <p> tag