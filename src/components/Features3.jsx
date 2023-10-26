import { motion } from "framer-motion";
import f1 from "../assets/pictures/f1.svg";
import "../styles/styles.css";

export const Features3 = () => {
  return (
    <section className="w-full  bg-[#8AC1FA1A] mb-8" id="features">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="items-center justify-center flex flex-col md:flex-row py-4 sm:py-8 xl:py-32 2xl:py-44">
          <div className="justify-center items-center w-full md:order-last px-4">
            <img className="mx-auto" src={f1} />
          </div>
          <div className="w-full items-center justify-center xl:px-12">
            <p className="mx-auto h2-mobile px-12 my-6">
              Compliance and security at scale
            </p>
            <p className="mx-auto px-12 text-custom">
              Be it automated messaging or humans behind the scene, every
              interaction is monitored by our Compliance AI engine to ensure no
              one misbehaves with borrowers.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
