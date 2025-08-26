import { assets } from "@/assets/assets";
import Image from "next/image";

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8 px-4 mt-10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center md:items-start justify-between gap-6">
        
        {/* Logo Section */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <Image
            src={assets.logo}
            alt="Logo"
            className="w-30 h-15 mb-3"
          />
          <p className="text-sm text-gray-400">
            Crafting web apps with passion & precision 🚀
          </p>
        </div>

        {/* Contact Section */}
        <div className="flex flex-col items-center md:items-start gap-2">
          <div className="flex items-center gap-2">
            <Image
              src={assets.mail_icon}
              alt="Mail Icon"
              className="w-5"
            />
            <a
              href="mailto:abhishekraj2447@gmail.com"
              className="hover:text-white transition-colors"
            >
              abhishekraj2447@gmail.com
            </a>
          </div>
        </div>

        {/* Links Section */}
        <div className="flex flex-col items-center md:items-start gap-2">
          <p className="text-sm text-gray-400">
            © 2025 Abhishek Raj. All rights reserved.
          </p>
          <ul className="flex gap-4 mt-2">
            <li>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/rajxxxxer"
                className="hover:text-white transition-colors"
              >
                GitHub
              </a>
            </li>
            <li>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.linkedin.com/in/abhishek-raj-5ba8262a3"
                className="hover:text-white transition-colors"
              >
                LinkedIn
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};
