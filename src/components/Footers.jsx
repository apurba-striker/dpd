import Logo from "../assets/about/Logo.svg";

export const Footers = () => {
  return (
    <footer className="bg-white h-[354px]">
      <div className="container p-20 mx-auto">
        <div className="lg:flex">
          <div className="w-full -mx-6 lg:w-2/5">
            <div className="px-6">
              <a href="#">
                <img className="w-auto h-7" src={Logo} alt="" />
              </a>
            </div>
          </div>

          <div className="mt-6 lg:mt-0 lg:flex-1">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              <div>
                <h3 className="text-[#675AF9] uppercase font-abc">HQ</h3>
                <a className="block mt-2 text-sm text-[#081114] font-abd">
                  Sumo Solitaire,
                </a>
                <a className="block mt-2 text-sm text-[#081114] font-abd">
                  No. 14, 2nd Floor, 1st Main Rd,
                </a>
                <a className="block mt-2 text-sm text-#081114 font-abd">
                  {" "}
                  Jayanagar, Bengaluru
                </a>
              </div>
              <div>
                <h3 className="text-[#675AF9] uppercase"></h3>
                <a href="#" className="block mt-2 text-sm text-[#081114] "></a>
                <a
                  href="https://dpdzero.springrecruit.com/careers"
                  className="block mt-2 text-sm text-[#081114] "
                ></a>
              </div>

              <div>
                <h3 className="text-[#675AF9] uppercase">Products</h3>
                <a href="#" className="block mt-2 text-sm text-[#081114] ">
                  About
                </a>
                <a
                  href="https://dpdzero.springrecruit.com/careers"
                  className="block mt-2 text-sm text-[#081114] "
                >
                  Careers
                </a>
              </div>

              <div>
                <h3 className="text-[#675AF9] uppercase ">Legal</h3>
                <a
                  href="/privacy"
                  className="block mt-2 text-sm text-[#081114] hover:underline"
                >
                  Privacy policy
                </a>
                <a
                  href="/termsofservice"
                  className="block mt-2 text-sm text-[#081114] hover:underline"
                >
                  Terms of service
                </a>
              </div>
            </div>
          </div>
        </div>

        <p className="lg:text-start text-sm text-gray-400 border-t border-[rgba(45, 46, 72, 0.2)] pt-12 mt-16 hidden ">
          &copy; DPDzero Technologies Pvt Ltd.
        </p>
      </div>
    </footer>
  );
};
