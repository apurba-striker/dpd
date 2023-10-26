import { Helmet } from "react-helmet";

export const Carreer = () => {
  return (
    <section className=" md:pt-[164px] md:pb-[120px] py-[96px] bg-[linear-gradient(47deg,_#5caafa_15%,#675af9_102%)]">
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
      <div className="mx-auto max-w-7xl px-4 text-center  lg:px-8 relative">
        <div className="bg-primary-500/10  flex flex-col items-center gap-8 rounded-3xl px-5 py-16 sm:gap-4">
          <div className="flex flex-col gap-4  text-[#FFf]">
            <h1 className="text-5xl font-bold font-abc ">
              That&apos;s our story, what&apos;s yours?
            </h1>
            <p className="  lg:text-2xl font-semibold font-abd tracking-[0.48px] leading-[36px] mt-3 ">
              We’re looking for people who are passionate about finance
              <br /> and wish to create a dent together.
            </p>
          </div>
          <div className="flex flex-col gap-2  sm:flex-row mt-14  justify-center">
            <a
              className="w-64 sm:w-52 h-12 font-semibold text-[#5caafa] border border-solid  flex justify-center items-center cursor-pointer bg-white transition rounded-full pl-[30px] pr-[30px] pt-[10px] pb-[10px]"
              href="https://dpdzero.springrecruit.com/careers"
            >
              Find Openings
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
