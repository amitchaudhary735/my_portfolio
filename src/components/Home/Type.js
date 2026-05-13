import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Frontend Engineer",
          "React & Next.js Developer",
          "Performance-Focused Web Apps",
          "Enterprise UI & Dashboards",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
