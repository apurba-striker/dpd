import { motion } from "framer-motion";
import f2 from "../assets/pictures/f2.svg";
import "../styles/styles.css";

export const Features2 = () => (
  <section className="w-full mb-8">
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <div className="items-center justify-center flex flex-col md:flex-row py-4 sm:py-8 xl:py-32 2xl:py-44">
        <div className="justify-center items-center w-full px-4">
          <img className="mx-auto" src={f2} />
        </div>
        <div className="w-full items-center justify-center xl:px-12">
          <p className="mx-auto h2-mobile px-12 my-6">
            Borrower-relationship is what we invest in
          </p>
          <p className="mx-auto px-12 text-custom">
            From talking to borrowers on the channels they prefer to turning
            disputes to collections, we take every opportunity to build the best
            relationship with your borrowers.
          </p>
        </div>
      </div>
    </motion.div>
  </section>
);
