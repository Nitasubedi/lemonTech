import Image from "next/image";
import Link from "next/link";

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Contact Us", href: "/contact" },
];

const services = [
  "Social Media Management",
  "Search Engine Optimization",
  "Branding & Identity",
  "Content Marketing",
  "Web Design & Development",
];

export default function Footer() {
  return (
    <footer className="bg-[#0d0d1f] border-t border-gray-700">
      <div className="max-w-7xl mx-auto px-6 py-20">
        {/* Top Footer */}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">
          {/* Logo */}

          <div>
            <Image
              src="/images/lemon.png"
              alt="LemonTech"
              width={260}
              height={70}
            />

            <p className="text-gray-400 mt-7 text-[16px] leading-8 ">
              A digital marketing agency that helps businesses formalize their
              brand, dominate their niche, and acquire clients with data-driven
              precision.
            </p>

            {/* Social Icons */}

            <div className="flex gap-4 mt-8">
              <a
                href="https://www.facebook.com/lemontech"
                className="w-12 h-12 rounded-full border-2 border-gray-500 flex items-center justify-center hover:border-yellow-400 transition duration-300"
              >
                <FaFacebookF size={18} className="text-white" />
              </a>

              <a
                href="https://www.instagram.com/lemontech"
                className="w-12 h-12 rounded-full border-2 border-gray-500 flex items-center justify-center hover:border-yellow-400 transition duration-300"
              >
                <FaInstagram size={18} className="text-white" />
              </a>

              <a
                href="https://www.youtube.com/@lemontech"
                className="w-12 h-12 rounded-full border-2 border-gray-500 flex items-center justify-center hover:border-yellow-400 transition duration-300"
              >
                <FaYoutube size={18} className="text-white" />
              </a>

              <a
                href="https://www.linkedin.com/company/lemontech"
                className="w-12 h-12 rounded-full border-2 border-gray-500 flex items-center justify-center hover:border-yellow-400 transition duration-300"
              >
                <FaLinkedinIn size={18} className="text-white" />
              </a>
            </div>
          </div>

          {/* Navigation */}

          <div>
            <h3 className="text-yellow-400 text-3xl font-bold mb-8">
              NAVIGATION
            </h3>

            <ul className="space-y-4">
              {navigation.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-gray-400 hover:text-yellow-400 transition text-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}

          <div>
            <h3 className="text-yellow-400 text-3xl font-bold mb-8">
              SERVICES
            </h3>

            <ul className="space-y-4">
              {services.map((service) => (
                <li key={service} className="text-gray-400 text-sm">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}

          <div>
            <h3 className="text-yellow-400 text-3xl font-bold mb-8">CONTACT</h3>

            <ul className="space-y-4 text-gray-400 text-sm">
              <li>Thamel, Kathmandu, Nepal</li>

              <li>hello@lemontech.agency</li>

              <li>+977 98XXXXXXXX</li>

              <li>Sun–Fri: 9:00 AM – 6:00 PM NPT</li>
            </ul>
          </div>
        </div>

        {/* Bottom Footer */}

        <div className="border-t border-gray-700 mt-16 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-5">
            <p className="text-gray-400 text-sm">
              © 2025 LemonTech. All rights reserved.
            </p>

            <div className="flex flex-wrap gap-6 text-sm">
              <Link
                href="/careers"
                className="text-gray-400 hover:text-yellow-400 transition"
              >
                Careers
              </Link>

              <Link
                href="/privacy-policy"
                className="text-gray-400 hover:text-yellow-400 transition"
              >
                Privacy Policy
              </Link>

              <Link
                href="/terms-and-conditions"
                className="text-gray-400 hover:text-yellow-400 transition"
              >
                Terms & Conditions
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
