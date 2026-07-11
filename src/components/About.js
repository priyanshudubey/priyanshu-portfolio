import React from "react";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

function About() {
  return (
    <section
      id="about"
      className="mb-16 animate-fade-in">
      <h2 className="text-4xl font-bold mb-8 text-[#13FF00]">About Me</h2>
      <div className="bg-[#3F3F3F] p-8 rounded-lg shadow-lg">
        <p className="mb-4">
          Highly motivated Software Engineer with 3+ years of experience in
          cloud and back-end development, seeking a full-time position to
          leverage expertise in Node.js, AWS, serverless architectures, and API
          development.
        </p>
        <div className="flex flex-wrap justify-between">
          <div className="flex items-center mb-2">
            <FaEnvelope className="mr-2 text-[#13FF00]" />
            <span>priyanshu0dubey@gmail.com</span>
          </div>
          <div className="flex items-center mb-2">
            <FaPhone className="mr-2 text-[#13FF00]" />
            <span>+44 7444764677</span>
          </div>
          <div className="flex items-center mb-2">
            <FaMapMarkerAlt className="mr-2 text-[#13FF00]" />
            <span>Swansea, UK</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
