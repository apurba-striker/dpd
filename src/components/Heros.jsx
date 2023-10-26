import t3RiZmCCDuARO5CEf2qW from "../assets/downloads/t3RiZmCCDuARO5CEf2qW.svg";

import { motion } from "framer-motion";
import { Navbar } from "../components/Navbar.jsx";
import group from "../assets/about/team_p.png";

export const Heros = () => {
  return (
    <>
      <section
        className="bg-[url('/src/assets/icons/s.svg')] bg-cover items-center flex flex-col w-screen md:h-[51.625rem] sm:h-[25rem] pb-24 sm:pb-32 md:pb-44 lg:pb-0"
        id="home"
      >
        <Navbar />

        <div className="w-full md:w-full xl:w-full flex flex-col justify-center items-center text-center pt-10 lg:pt-[6.25rem] sm:pt[8rem]">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.1 }}
          >
            <div className=" lg:text-4xl  xl:text-4xl text-2xl sm-4xl font-bold tracking-[0.075rem]  font-abc text-[#210076]  px-8 sm:px-8 md:px-20 lg:px-4">
              The best minds come together
            </div>

            <div className="  text-2xl sm:text-4xl lg:text-4xl  xl:text-4xl font-abc font-bold tracking-[0.075px]  text-[#210076]  px-8 sm:px-20 md:px-24 lg:px-24">
              to solve some of the hardest problems
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div>
              <div className="relative w-screen flex  justify-center pb-3 pt-12">
                <img
                  src={group}
                  alt="123"
                  className="w-4/5 2xl:w-[1200px] mx-auto absolute z-10  rounded-br-3xl  "
                  style={{
                    boxShadow: "16px 15px 0px 0px #675AF9",
                    borderRadius: "0px 0px 24px 0px",
                  }}
                />{" "}
                <span className="relative md:pl-[1000px] lg:pl-[1250px] pl-[325px] p-0 lg:pb-0 pb-0">
                  <img src={t3RiZmCCDuARO5CEf2qW} className="lg:w-24  w-10" />
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      <div className="bg-white w-full pb-32 sm:pb-16 md:pb-80 " />
    </>
  );
};
