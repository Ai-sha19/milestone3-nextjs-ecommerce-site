import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-[#2a254b] text-white py-10 px-5 md:px-10">
      <div className="max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Column 1 - Brand */}
        <div>
          <h2 className="text-xl font-semibold">Avelon</h2>
          <p className="text-gray-300 mt-2">Eco-friendly furniture for the future.</p>
        </div>

        {/* Column 2 - Links */}
        <div>
          <h3 className="text-lg font-semibold">Quick Links</h3>
          <ul className="mt-2 space-y-2">
            <li>
              <Link href="/about" className="text-gray-300 hover:text-white transition">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/products" className="text-gray-300 hover:text-white transition">
                Products
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-gray-300 hover:text-white transition">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 3 - Contact */}
        <div>
          <h3 className="text-lg font-semibold">Get in Touch</h3>
          <p className="text-gray-300 mt-2">Email: support@avelon.com</p>
          <p className="text-gray-300">Phone: +123 456 7890</p>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-8 text-center text-gray-400 text-sm">
        © {new Date().getFullYear()} Avelon. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
