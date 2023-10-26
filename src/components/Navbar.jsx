import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Helmet } from "react-helmet";
import Logo from "../assets/icons/Logo.svg";

const navbarLinks = [{ label: "About Us", href: "/about", ariaLabel: "Team" }];

export const Navbar = ({ gradientBg, pageHeader }) => {
  const bgClass = gradientBg ? "navbar-background" : "";

  const handleCalendlyClick = useCallback((event) => {
    if (typeof Calendly !== "undefined") {
      // eslint-disable-next-line no-undef
      Calendly.initPopupWidget({ url: "https://calendly.com/dpdzero/30min" });
      event.stopPropagation();
      event.preventDefault();
    }
  }, []);

  const [isOpen, setIsOpen] = useState(false);

  return (
    <header
      className={`w-full ${bgClass} pt-6 md:pt-8 flex flex-col px-6 justify-center items-center lg:sticky md:sticky relative lg:z-40`}
    >
      <Helmet>
        <link
          rel="stylesheet"
          href="https://assets.calendly.com/assets/external/widget.css"
        />
        <script
          src="https://assets.calendly.com/assets/external/widget.js"
          type="text/javascript"
          async
        />
      </Helmet>

      <div className="w-11/12 flex justify-between items-center relative mb-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          exit={{ opacity: 0 }}
        >
          <LogoComponent />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          exit={{ opacity: 0 }}
        >
          <NavButtons handleCalendlyClick={handleCalendlyClick} />
        </motion.div>

        <HamburgerMenu isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>

      {pageHeader && (
        <OptionalHeader
          title={pageHeader.title}
          subtitle={pageHeader.subtitle}
        />
      )}

      <AnimatePresence>
        {isOpen && (
          <MobileNavbar
            onClose={() => setIsOpen(false)}
            onCalendlyClick={handleCalendlyClick}
          />
        )}
      </AnimatePresence>
    </header>
  );
};

const NavButtons = ({ handleCalendlyClick }) => (
  <div className=" justify-end hidden md:flex">
    <div className="flex justify-center items-center p-0 navbar-button-text">
      {navbarLinks.map(({ href, label }) => (
        <a
          key={label}
          className="navbar-link mx-4 lg:mx-8 xl:mx-12"
          href={href}
        >
          {label}
        </a>
      ))}
    </div>
    <button
      onClick={handleCalendlyClick}
      className="bg-[#675AF9] px-4 py-2 flex rounded-full ml-4 lg:mx-8 xl:mx-0 xl:ml-4 navbar-button-2"
    >
      Schedule a Demo
    </button>
  </div>
);

const HamburgerMenu = ({ isOpen, setIsOpen }) => (
  <button
    className="md:hidden flex flex-col px-2 py-3 cursor-pointer"
    onClick={() => setIsOpen(!isOpen)}
  >
    <div className="w-5 h-0.5 bg-gray-500 mb-1"></div>
    <div className="w-5 h-0.5 bg-gray-500 mb-1"></div>
    <div className="w-5 h-0.5 bg-gray-500"></div>
  </button>
);
const LogoComponent = () => (
  <a className="navbar-link" href="/" aria-label="Home">
    <div className="flex justify-start items-center gap-5">
      <img src={Logo} alt="Company Logo" />
    </div>
  </a>
);

const OptionalHeader = ({ title, subtitle }) => (
  <div className="shrink-0 md:px-16 py-10 w-full">
    <div className="gap-3">
      <div className="text-5xl font-['Red_Hat_Display'] font-bold tracking-[1.12] text-[#210076]">
        {title}
      </div>
      <div className="text-lg font-['Red_Hat_Text'] text-black/50">
        {subtitle}
      </div>
    </div>
  </div>
);

const MobileNavbar = ({ onClose, onCalendlyClick }) => (
  <div className="flex flex-col mt-16 lg:hidden absolute top-4 left-0 bg-white z-50 w-full items-center ">
    <div className="flex flex-col h-screen items-center navbar-background w-full">
      {navbarLinks.map(({ label, href, ariaLabel }) => (
        <a
          key={href}
          className="navbar-button-text flex w-full items-center justify-center p-10 px-12"
          href={href}
          onClick={onClose}
          aria-label={ariaLabel}
        >
          {label}
        </a>
      ))}
      <button
        onClick={onCalendlyClick}
        className="bg-[#675AF9] px-4 py-2 mb-36 flex justify-end items-end rounded-full navbar-button-2"
      >
        Schedule a demo
      </button>
    </div>
  </div>
);
