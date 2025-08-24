import React from 'react';
import Image from 'next/image';
import { assets, infoList, toolsData } from '@/assets/assets';

const About = () => {
  return (
    <div id="about" className="px-4 py-12 max-w-6xl mx-auto">
      <h4 className="text-blue-500 text-lg font-semibold mb-2">Introduction</h4>
      <h2 className="text-3xl font-bold mb-10">About Me</h2>

      <div className="flex flex-col md:flex-row gap-10 items-center">
        {/* Profile Image */}
        <div className="w-40 h-40 relative rounded-full overflow-hidden border-4 border-blue-300 shadow-lg">
          <Image src={assets.profile} alt="User Image" fill className="object-cover" />
        </div>

        {/* About Content */}
        <div className="flex-1">
          <p className="text-gray-700 mb-8">
            I am a frontend developer with a strong eye for clean UI and smooth UX. I’ve been working with modern
            technologies like <strong>Next.js</strong>, <strong>Tailwind CSS</strong>, <strong>Bootstrap</strong>, and <strong>shadcn/ui</strong> to craft responsive interfaces. During my internship at <strong>Vivance Travels</strong>, I contributed to real-world web applications, and I’m currently expanding my skills into <strong>backend development</strong>, <strong>Dockerizing apps</strong>, and building <strong>microfrontend architectures</strong>. I’m also exploring <strong>AI integration</strong> into web projects to build smart and interactive user experiences.
          </p>

          {/* Info List */}
          <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-10">
            {infoList.map((item, ind) => {
              const { icon, title, description } = item;
              return (
                <li
                  key={ind}
                  className="bg-white rounded-xl p-4 shadow-md hover:shadow-xl transform transition duration-300 hover:-translate-y-2"
                >
                  <div className="w-10 h-10 mb-2">
                    <Image src={icon} alt={title} width={40} height={40} />
                  </div>
                  <h3 className="font-semibold text-lg mb-1">{title}</h3>
                  <p className="text-sm text-gray-600">{description}</p>
                </li>
              );
            })}
          </ul>

          {/* Tools Section */}
          <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center md:text-left">
            🚀 Tools I Use
          </h3>
          <ul className="flex flex-wrap justify-center md:justify-start gap-6">
            {toolsData.map((tool, idx) => (
              <li
                key={idx}
                className="w-16 h-16 flex items-center justify-center bg-white rounded-xl shadow-md hover:shadow-xl transition transform hover:-translate-y-1"
              >
                <Image src={tool} alt={`Tool ${idx}`} width={40} height={40} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
