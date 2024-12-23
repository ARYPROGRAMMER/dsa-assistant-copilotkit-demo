import Link from "next/link";
import { Github, Twitter, Linkedin, Cpu } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {/* Branding Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold bg-gradient-to-r from-purple-400 to-blue-400 text-transparent bg-clip-text">
              DSA Assistant
            </h3>
            <p className="text-sm leading-relaxed">
              Empowering developers to master Data Structures and Algorithms
              with AI assistance.
            </p>
            <div className="flex items-center space-x-2">
              <Cpu className="h-4 w-4 text-purple-400" />
              <span className="text-sm font-medium text-purple-400">
                Powered by CopilotKit CoAgents
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {["Learn", "Practice", "Visualize", "Community"].map((link) => (
                <li key={link}>
                  <Link
                    href={`/${link.toLowerCase()}`}
                    className="hover:text-purple-400 transition-colors"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              {["Blog", "FAQ", "Terms of Service", "Privacy Policy"].map(
                (link) => (
                  <li key={link}>
                    <Link
                      href={`/${link.replace(/ /g, "").toLowerCase()}`}
                      className="hover:text-purple-400 transition-colors"
                    >
                      {link}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Connect Section */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Connect</h4>
            <div className="flex space-x-4 sm:justify-start justify-center">
              <a
                href="#"
                className="hover:text-purple-400 transition-colors"
                aria-label="GitHub"
              >
                <Github className="h-6 w-6" />
              </a>
              <a
                href="#"
                className="hover:text-purple-400 transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-6 w-6" />
              </a>
              <a
                href="#"
                className="hover:text-purple-400 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} DSA Assistant. All rights reserved.</p>
          <p className="mt-2">
            <span className="text-purple-400">Powered by CopilotKit CoAgents</span>{" "}
            - Enhancing your learning experience with AI
          </p>
        </div>
      </div>
    </footer>
  );
}
