import Members from "./Members";

export const Founder = () => {
  return (
    <section className="bg-[linear-gradient(221deg,_rgba(138,_193,_250,_0.13)_18%,rgba(138,_193,_250,_0.25)_89%)]  ">
      <div className="container px-6 pt-[128px] pb-[160px] mx-auto ">
        <h2 className="text-4xl font-bold text-center font-abc   tracking-[1.2] text-[#210076] lg:text-4xl ">
          Meet the Team
        </h2>
        <Members></Members>
      </div>
    </section>
  );
};
