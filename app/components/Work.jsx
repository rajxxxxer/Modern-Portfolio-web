"use client";

import React from "react";
import Image from "next/image";

const workData = [
  {
    title: "Flexi.Ai",
    description: `🚀 AI-powered SaaS platform combining multiple productivity tools in one app. 
🖼️ Features include background & object removal, text-to-image generation, and resume review. 
✍️ Also offers AI-written articles and blog title suggestions for creators & professionals.`,
    bgImage: "/work-1.png",
    github: "https://github.com/rajxxxxer/Flexi.Ai",
    live: "https://flexi-ai-3h15.vercel.app/",
  },
];

const WorkData = [
  {
    title: "Cine-Stack",
    description:
      "🎬 A React-based movie discovery app with Firebase authentication & watchlist. Uses OMDb & Watchmode APIs for data, and iFrame integration for trailer playback.",
    bgImage: "/background_banner.jpg",
    github: "https://github.com/rajxxxxer/CineStack",
  },
  {
    title: "Imagify",
    description:
      "✨ A SaaS web app built with React featuring responsive UI and Clipdrop API integration for AI-powered image generation.",
    bgImage: "/work-5.png",
    github: "https://github.com/rajxxxxer/image-generator-app",
  },
  {
    title: "Project-Manager",
    description:
      "📌 Task management app with role-based authentication. Admins can assign & monitor tasks, while users track & complete work in a clean dashboard.",
    bgImage: "/work-6.png",
    github: "https://github.com/rajxxxxer/-work-Manager",
  },
];

const Work = () => {
  return (
    <div id="work" className="px-4 py-16 max-w-7xl mx-auto">
      <h2 className="text-4xl font-extrabold text-center mb-6">🚀 My Portfolio</h2>
      <p className="text-center text-gray-600 mb-12">
        A collection of my best projects, blending creativity with powerful tech.
      </p>

      {/* Live Projects Section */}
      <h3 className="text-2xl font-semibold text-center mb-6 text-blue-600">
        🌐 Live Projects
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {workData.map((work, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 w-full"
          >
            <div className="relative h-64 w-full">
              <Image
                src={work.bgImage}
                alt={work.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6 flex flex-col gap-3">
              <h3 className="text-xl font-semibold">{work.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {work.description}
              </p>
              <div className="flex gap-3 mt-4">
                <a
                  href={work.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 text-sm rounded-lg border border-gray-300 hover:bg-gray-100 transition"
                >
                  GitHub
                </a>
                <a
                  href={work.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 text-sm rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition"
                >
                  Go Live
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* GitHub Projects Section */}
      <h3 className="text-2xl font-semibold text-center mt-16 mb-6 text-green-600">
        📂 GitHub Projects
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {WorkData.map((work, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 w-full"
          >
            <div className="relative h-64 w-full">
              <Image
                src={work.bgImage}
                alt={work.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6 flex flex-col gap-3">
              <h3 className="text-xl font-semibold">{work.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {work.description}
              </p>
              <a
                href={work.github}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 px-4 py-2 text-sm rounded-lg bg-gray-800 text-white hover:bg-gray-900 transition w-fit"
              >
                View on GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
    <h3 className="text-2xl font-semibold text-center mt-16 mb-6 text-green-600">
  Coding Profile Links that shows my problem solving
</h3>

<div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-3xl mx-auto">
  {/* LeetCode Card */}
  <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col items-center p-6">
    <Image
      src="/leetcode.png" // apne assets me logo daal lena
      alt="LeetCode"
      width={80}
      height={80}
      className="mb-4"
    />
    <h4 className="text-lg font-semibold mb-2">LeetCode</h4>
    <a
      href="https://leetcode.com/u/abhi_hack123/"
      target="_blank"
      rel="noopener noreferrer"
      className="px-4 py-2 text-sm rounded-lg bg-yellow-500 text-white hover:bg-yellow-600 transition"
    >
      Visit Profile
    </a>
  </div>

  {/* GeeksforGeeks Card */}
  <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col items-center p-6">
    <Image
      src="/gfg.png" // apne assets me logo daal lena
      alt="GeeksforGeeks"
      width={80}
      height={80}
      className="mb-4"
    />
    <h4 className="text-lg font-semibold mb-2">GeeksforGeeks</h4>
    <a
      href="https://www.geeksforgeeks.org/user/abhishekjaxz/"
      target="_blank"
      rel="noopener noreferrer"
      className="px-4 py-2 text-sm rounded-lg bg-green-600 text-white hover:bg-green-700 transition"
    >
      Visit Profile
    </a>
  </div>
</div>

    </div>
  );
};

export default Work;
