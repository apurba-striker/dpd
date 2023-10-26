import CountUp from "react-countup";
import aum from "../assets/features/aum.svg";
import borrowers from "../assets/features/borrowers.svg";
import npa from "../assets/features/npa.svg";
import star from "../assets/features/star.svg";

export const Stats = () => {
  return (
    <div className="bg-white my-11 sm:pb-0 justify-start items-start">
      <div className="text-center flex items-center justify-center pt-8 md:pt-20 md:pb-16">
        <div className="title-mobile-custom sm:!text-5xl">
          We let <br className="sm:hidden" /> the results speak
        </div>
        <img className="sm:h-6 h-4 sm:mb-12 sm:ml-3" src={star} />
      </div>
      <div className="flex md:flex-row flex-col pt-12 lg:px-24 md:px-12">
        <div className="w-full flex flex-col items-center justify-center py-12 md:py-0">
          <div className="order-first md:pr-20">
            <img src={aum} />
          </div>
          <div className="stats-header pt-2 ">
            <CountUp
              enableScrollSpy
              start={0}
              end={300}
              duration={5}
              delay={2}
            />
            &nbsp;Cr
          </div>
          <p className="stats-footer md:pr-20">In AUM</p>
        </div>
        <div className="w-full flex flex-col items-center justify-center md:pb-60 order-first md:order-2">
          <div className="flex flex-row py-2">
            <div className="self-end stats-header pr-4">
              <CountUp
                enableScrollSpy
                start={0}
                end={20}
                duration={5}
                delay={2}
              />
              %
            </div>
            <img src={npa} className="" />
          </div>
          <p className="stats-footer md:pr-8" id="D">
            Reduction in NPA
          </p>
        </div>

        <div className="w-full flex flex-col items-center justify-center order-3">
          <div className="order-first">
            <img src={borrowers} />
          </div>

          <div className="stats-header pt-2 md:pl-8">
            <CountUp
              enableScrollSpy
              start={0}
              end={28}
              duration={5}
              delay={2}
            />
            &nbsp;lakh
          </div>
          <p className="stats-footer md:pl-16">Borrowers served</p>
        </div>
      </div>
    </div>
  );
};
