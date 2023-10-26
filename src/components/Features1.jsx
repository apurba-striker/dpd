import { motion } from "framer-motion";
import f3 from "../assets/pictures/f3.svg";
import "../styles/styles.css";

export const Features1 = () => {
  return (
    <section
      className="w-full  bg-gradient-to-b from-[#FBFBFF00] to-[#FBFBFF]  mt-20 mb-8 sm:mt-16 sm:mb-16 xl:mt-0  xl:pt-[100px]  md:pt-[13vw] lg:pt-0 "
      id="features"
    >
      <div className="text-center pb-7 title-mobile-custom flex-1 2xl:mb-16 xl:mb-8 md:!text-5xl	md:!tracking-[0.48]">
        For your <br className="sm:hidden" /> peace of mind
      </div>
      <br />
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="items-center justify-center bg-[#8AC1FA1A] flex flex-col md:flex-row py-4 sm:py-8 xl:py-32 2xl:py-44">
          <div className="justify-center items-center w-full md:order-last px-4">
            <img className="mx-auto" src={f3} />
          </div>
          <div className="w-full items-center justify-center xl:px-12">
            <p className="mx-auto h2-mobile px-12 my-6">
              You lend, we bring your capital back
            </p>
            <p className="mx-auto px-12 text-custom">
              From the moment you disburse a loan to loan closure, we take care
              of everything in-between. From automating data flow to managing
              your resources, we’ve got you covered.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
