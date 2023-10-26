import { motion } from "framer-motion";
import { Helmet } from "react-helmet";

export const Block = () => {
  const openCalendly = (event) => {
    if (typeof Calendly !== "undefined") {
      Calendly.initPopupWidget({ url: "https://calendly.com/dpdzero/30min" });
      event.stopPropagation();
      event.preventDefault();
    }
  };
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <section className="py-16 sm:py-20 bg-[linear-gradient(47deg,_#5caafa_15%,#675af9_102%)]">
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
        <div className="mx-auto max-w-2xl px-4 text-center sm:px-6 lg:max-w-7xl lg:px-8">
          <div className="bg-primary-500/10  flex flex-col items-center gap-8 rounded-3xl px-5 py-16 sm:gap-10">
            <div className="flex flex-col gap-4 sm:gap-6 text-[#FFf]">
              <h2 className="  end-block-font-mobile end-block-font">
                Take the first step <br /> to put collections on auto-pilot
              </h2>
            </div>
            <div className="flex flex-col  sm:flex-row  justify-center">
              <button
                className="end-block-button py-2 px-8  flex justify-center items-center cursor-pointer bg-white transition rounded-full "
                onClick={openCalendly}
              >
                Book a Demo
              </button>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};
