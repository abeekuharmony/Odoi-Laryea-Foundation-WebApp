import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navLinks = [
    { name: "Ikigai Book", path: "/ikigai", featured: true },
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Programs", path: "/programs" },
    { name: "Impact", path: "/impact" },
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <nav className="section-container py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-primary-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">OLF</span>
            </div>
            <div className="hidden sm:block">
              <h1 className="text-xl font-bold text-gray-900">
                Odoi-Laryea Foundation
              </h1>
              <p className="text-xs text-gray-600">Empowering Communities</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  link.featured
                    ? "bg-secondary-500 hover:bg-secondary-600 text-white font-semibold px-4 py-2 rounded-lg transition-colors duration-200"
                    : `font-medium transition-colors duration-200 ${
                        isActive
                          ? "text-primary-600"
                          : "text-gray-700 hover:text-primary-600"
                      }`
                }
              >
                {link.name}
              </NavLink>
            ))}
            <Link to="/get-involved" className="btn-primary">
              Get Involved
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="lg:hidden overflow-hidden"
            >
              <div className="py-4 space-y-3">
                {navLinks.map((link) => (
                  <NavLink
                    key={link.path}
                    to={link.path}
                    onClick={() => setIsMenuOpen(false)}
                    className={({ isActive }) =>
                      link.featured
                        ? "block py-2 px-4 rounded-lg bg-secondary-500 text-white font-semibold text-center"
                        : `block py-2 px-4 rounded-lg transition-colors ${
                            isActive
                              ? "bg-primary-50 text-primary-600 font-semibold"
                              : "text-gray-700 hover:bg-gray-50"
                          }`
                    }
                  >
                    {link.name}
                  </NavLink>
                ))}
                <Link
                  to="/get-involved"
                  onClick={() => setIsMenuOpen(false)}
                  className="block btn-primary text-center"
                >
                  Get Involved
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};

export default Header;
