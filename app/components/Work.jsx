"use client";

import React from "react";
import Image from "next/image";

const workData = [
  {
    title: "Flexi.Ai",
    description:
    ` 🚀 AI-powered SaaS platform combining multiple productivity tools in one app.
🖼️ Features include background & object removal, text-to-image generation, and resume review.
✍️ Also offers AI-written articles and blog title suggestions for creators & professionals.`,
    bgImage: "/work-1.png",
    github: "https://github.com/your-username/saas-ai",
    live: "https://saas-ai.vercel.app",
  },
  {
    title: "Movie App",
    description:
      "A React-based movie app using TMDB API to search, view details, and explore trending films.",
    bgImage: "/background_banner.jpg",
    github: "https://github.com/your-username/movie-app",
    live: "https://movie-app.vercel.app",
  },
];

const Work = () => {
  return (
    <div id="work" className="px-4 py-16 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold mb-4 text-center">My Portfolio</h2>
      <p className="text-center text-gray-600 mb-12">
        Here are some projects I've worked on:
      </p>
      <p className="text-center text-lg font-medium mb-6">Live Projects</p>

      {/* ✅ Grid layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 justify-center">
        {workData.map((work, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 w-full max-w-sm mx-auto"
          >
            <div className="relative h-64 w-full">
              <Image
                src={work.bgImage}
                alt={work.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-5 flex flex-col gap-3">
              <h3 className="text-xl font-semibold">{work.title}</h3>
              <p className="text-gray-600 text-sm">{work.description}</p>
              <div className="flex gap-3 mt-2">
                <a
                  href={work.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-1.5 text-sm rounded-lg border border-gray-300 hover:bg-gray-100 transition"
                >
                  GitHub
                </a>
                <a
                  href={work.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-1.5 text-sm rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition"
                >
                  Go Live
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
