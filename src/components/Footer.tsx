import Link from "next/link";
import Image from "next/image";

const footerLinks = [
  { href: "/contact", label: "Contact" },
  { href: "/terms", label: "Terms of Service" },
  { href: "/privacy", label: "Privacy" },
];

export default function Footer() {
  return (
    <footer className="border-t bg-white py-6 mt-auto">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="flex items-center space-x-2">
          <Image src="/icon.svg" alt="App Logo" width={28} height={28} />
          <span className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Leave Management. All rights
            reserved.
          </span>
        </div>
        <div className="flex space-x-4 mt-2 md:mt-0">
          {footerLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-gray-500 hover:text-blue-600 transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
