import { assets } from '@/assets/assets';
import Image from 'next/image';
import React from 'react';


const Header = () => {
  return (
    <div className="text-center pt-32 pb-20 px-4 sm:px-6 md:px-10 lg:px-16 bg-white">
     
      {/* Profile Image */}
      <div className="flex justify-center mb-6">
      
          <Image
            className="rounded-full w-28 h-28 sm:w-32 sm:h-32 object-cover shadow-lg"
            src={assets.profile}
            alt="Profile"
          />
       
      </div>

      {/* Intro */}
      <h3 className="text-xl sm:text-2xl font-semibold flex items-center justify-center gap-2">
        Hi!! I am Abhishek
        <Image className="w-5 sm:w-6 h-5 sm:h-6 animate-wiggle" src={assets.hand_icon} alt="Hand Icon" />
      </h3>

      {/* Title */}
      <h2
        className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mt-3 hover:drop-shadow-md transition duration-300"
        style={{ color: '#2e2e2e' }}
      >
        Frontend Developer
      </h2>

      {/* Description */}
      <p className="text-gray-700 mt-4 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
        I'm a passionate frontend developer specializing in building scalable and fast web
        applications using <strong>React</strong>, <strong>Next.js</strong>, and <strong>Redux</strong>.
        I’ve contributed to real-world AI SaaS projects and gained hands-on experience during my internship
        at a tech startup. I focus on writing clean, reusable code and crafting engaging user experiences.
      </p>

      {/* CTA Buttons */}
      <div className="mt-6 flex justify-center gap-4 flex-wrap">
        <a
          href="#contact"
          className="flex items-center gap-2 bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition duration-300"
        >
          Contact Me
          <Image className="w-4 h-4" src={assets.right_arrow_white} alt="Arrow" />
        </a>

        <a
          href="/sample-resume.DOCX"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 border border-blue-600 text-blue-600 px-6 py-2 rounded-full hover:bg-blue-50 transition duration-300"
        >
          My Resume
          <Image className="w-4 h-4" src={assets.download_icon} alt="Download Icon" />
        </a>
      </div>
    </div>
  );
};

export default Header;
