import { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import { Navbar } from "../components/Navbar.jsx";
import "../styles/styles.css";

export const Hero = () => {
  const phrases = ["bounce rates", "NPAs", "credit loss", "escalations"];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentPhrase, setCurrentPhrase] = useState(phrases[currentIndex]);
  const openCalendly = (event) => {
    if (typeof Calendly !== "undefined") {
      // eslint-disable-next-line no-undef
      Calendly.initPopupWidget({ url: "https://calendly.com/dpdzero/30min" });
      event.stopPropagation();
      event.preventDefault();
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % phrases.length);
    }, 1500);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    setCurrentPhrase(phrases[currentIndex]);
  }, [currentIndex]);

  return (
    <section className="sm:bg-[url('/src/assets/features/s.svg')] bg-[url('/src/assets/features/s3.svg')] bg-cover sticky items-center flex flex-col w-screen sm:h-[768px] 2xl:h-[826px] h-[621px] sm:-mb-32">
      <Navbar />
      <div className="w-full flex flex-col justify-center items-center lg:pt-20 px-2">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          <div className="px-30 pt-12 md:py-30 sm:px-9 md:px-40 lg:px-4 md:pb-8 hero-heading hero-mobile-heading text-center relative">
            A new path to <br className="md:hidden" />
            <span className=" hero-color hero-mobile-color relative">
              zero <br className="xxs:hidden" />
              {currentPhrase}
            </span>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <div className=" justify-center px-4 pt-8 sm:px-48v md:pt-0  hero-mobile-subtitle hero-subtitle relative text-[rgba(33,_0,_118,_0.7)]">
            Helping you drive the focus back <br /> on what you do best, lending
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
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
          <div className="flex flex-col gap-2  sm:flex-row mt-14  justify-center">
            <button
              className="schedule-button cursor-pointer"
              onClick={openCalendly}
            >
              Schedule a Demo
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
