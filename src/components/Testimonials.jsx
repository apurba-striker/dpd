import Heg8k7ncofsWG723AcA9 from "../assets/downloads/Heg8k7ncofsWG723AcA9.svg";
import img_27pogjQdYhf3Em0yweo7 from "../assets/downloads/27pogjQdYhf3Em0yweo7.svg";
import img_1Uj0qBlDMkBghRS7oLMg from "../assets/downloads/1Uj0qBlDMkBghRS7oLMg.svg";
import ujoWvHglZtTxben6J5s8 from "../assets/downloads/ujoWvHglZtTxben6J5s8.svg";
import i1vrVuF2KHJbgznJpfqG from "../assets/downloads/i1vrVuF2KHJbgznJpfqG.svg";

import cashe from "../assets/logos/cashe.png";
import kreditbee from "../assets/logos/kreditbee.svg";
import pocketly from "../assets/logos/pocketly.png";
import aaravbhatia from "../assets/pictures/aaravbhatia.jpeg";
import ajeet from "../assets/pictures/ajeet-kreditbee.jpeg";
import casheceo from "../assets/pictures/casheceo.jpeg";

export const Testimonials = () => (
  <section className="bg-[rgba(255,_210,_220,_0.2)] md:pt-[9.89rem] sm:mt-[9.89rem] lg:pt-[9.89rem] xl:pt-[9.89rem] 2xl:pt-[9.89rem] pt-[9.89rem]">
    <div className="grid p-2 md:p-6  gap-4 xl:grid-cols-5 lg:pr-20">
      <div className="max-w-2xl mx-auto  mt-12 px-4 space-y-4  xl:col-span-2 xl:text-left">
        <img src={Heg8k7ncofsWG723AcA9} className="self-start mb-5 w-4" />
        <h2 className=" testimonials-head sm:!text-5xl">
          The best lenders <br />
          love us
        </h2>
        <img
          src={img_27pogjQdYhf3Em0yweo7}
          className="w-min  relative hidden xl:inline 2xl:inline sm:hidden pt-[723.15px] pl-0"
          id="EllipseRoot"
        />
      </div>

      <div className="p-6 xl:col-span-3">
        <div className="grid gap-x-16 md:grid-cols-2">
          <div className="grid justify-items-end content-center gap-4">
            <img
              src={img_1Uj0qBlDMkBghRS7oLMg}
              className="hidden md:inline w-min pb-[36px]"
            />
            <div className="py-10 px-8 -mx-1 testimonials-block">
              <div className="flex-col flex">
                <img src={cashe} className="w-2/5 -ml-1 " id="Cashelogo" />
                <br />

                <p className="testimonials-text w-full pb-6">
                  DPDZero has been able to actively support in CASHe’s endeavour
                  to rethink collections from the perspective of digital
                  contactless lending. The team comes with the right DNA to help
                  scale ethical collections practices for both traditional and
                  modern lenders.
                </p>
                <div className="flex items-center mt-4 space-x-4 pb-4">
                  <img
                    src={casheceo}
                    alt=""
                    className="w-20 h-20 bg-center bg-cover rounded-full dark:bg-gray-500"
                  />
                  <div>
                    <p className="testimonials-name py-1">Yashoraj Tyagi</p>
                    <p className="testimonials-position py-1">CEO, CBO</p>
                  </div>
                </div>
              </div>
            </div>
            <img
              src={ujoWvHglZtTxben6J5s8}
              className="mr-6 md:w-20 w-12 pt-11"
            />

            <img
              src={i1vrVuF2KHJbgznJpfqG}
              className="mr-[250px] pt-12  xl:inline 2xl:inline hidden "
            />
          </div>
          <div className="grid content-center gap-4">
            <div className="pt-10 px-8 -mx-1 testimonials-block">
              <div className="flex-col flex">
                <img src={kreditbee} className="w-2/5 -ml-1" id="Cashelogo" />
                <br />

                <p className="testimonials-text w-full pb-6">
                  Our primary objective was to ensure an seamless customer
                  experience across all stages of the repayment process, a task
                  that DPDzero is well-prepared to assist with. Early data
                  points have been encouraging and strengthens our belief that
                  this collaboration will be mutually beneficial for both
                  parties involved.
                </p>
                <div className="flex items-center mt-4 space-x-4 pb-4">
                  <img
                    src={ajeet}
                    alt=""
                    className="w-20 h-20 bg-center bg-cover rounded-full dark:bg-gray-500"
                  />
                  <div>
                    <p className="testimonials-name py-1">Ajeet Kumar</p>
                    <p className="testimonials-position py-1">COO</p>
                  </div>
                </div>
              </div>
            </div>

            <br />

            <div className="pt-10 px-8  -mx-1 testimonials-block">
              <div className="flex-col flex">
                <img src={pocketly} className="w-2/5 -ml-1" id="Cashelogo" />
                <br />

                <p className="testimonials-text w-full pb-6">
                  Lack of visibility on borrow contactability was hindering our
                  efforts to reach borrowers. DPDzero solved this by providing
                  us a way to track all our collection efforts and helped
                  increase our efficiency by over 35%.
                </p>
                <div className="flex items-center mt-4 space-x-4 pb-4">
                  <img
                    src={aaravbhatia}
                    alt=""
                    className="w-20 h-20 bg-center bg-cover rounded-full dark:bg-gray-500"
                  />
                  <div>
                    <p className="testimonials-name py-1">Aarav Bhatia</p>
                    <p className="testimonials-position py-1">Co-founder</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);
