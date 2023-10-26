import Logo from "../assets/icons/Logo.svg";
import Place from "@mui/icons-material/Place";
import IconButton from "@mui/material/IconButton";
import NoSsr from "@mui/material/NoSsr";

export const Footer = () => {
  return (
    <footer className="bg-white h-[354px]">
      <div className="flex flex-col md:flex-row px-24 py-24 gap-16">
        <div className="w-full flex items-center md:items-start justify-start py-4 ml-px">
          <a href="#">
            <img className="" src={Logo} alt="" />
          </a>
        </div>
        <div className="hidden md:w-1/4 xl:w-1/2 md:flex md:flex-col"></div>
        <div className="w-full flex flex-col items-start justify-start py-4">
          <h3 className="uppercase footer-section">HQ</h3>
          <p className="block mt-2 footer-content">
            Sumo Solitaire,
            <br />
            No. 14, 2nd Floor
            <br />
            1st Main Rd, Jayanagar,
            <br />
            Bengaluru 560070
            <a href="https://maps.app.goo.gl/ER48w3d6qpr9YJAZ8">
              <IconButton sx={{ color: "#675AF9" }} aria-label="delete">
                <NoSsr>
                  <Place />
                </NoSsr>
              </IconButton>
            </a>
          </p>
        </div>
        <div className="w-full flex flex-col items-start justify-start py-4">
          <h3 className="footer-section uppercase">Company</h3>
          <a href="/about" className="block mt-2 footer-content hover:">
            About us
          </a>
          <a
            href="https://dpdzero.springrecruit.com/careers"
            className="block mt-2 footer-content hover:"
          >
            Careers
          </a>
        </div>

        <div className="w-full flex flex-col items-start justify-start py-4">
          <h3 className="footer-section uppercase ">Legal & Compliance</h3>
          <a href="/privacy" className="block mt-2 footer-content hover:">
            Privacy policy
          </a>
          <a
            className="block mt-2 footer-content hover:"
            href="/termsofservice"
          >
            Terms of service
          </a>
          <a
            className="block mt-2 footer-content hover:underline"
            href="/security-policy"
          >
            Security policy
          </a>
          <a
            className="block mt-2 footer-content hover:underline"
            href="/grievance"
          >
            Grievance
          </a>
        </div>
      </div>

      <div className="w-4/5 md:w-[95%]  border-t border-[rgba(45, 46, 72, 0.2)] py-4"></div>

      <div className="sm:flex sm:items-center sm:justify-between pb-8 pl-11">
        <span className="font-abd">
          © 2023 <a href="https://www.dpdzero.com/"></a>DPDzero technologies
          Pvt Ltd.
        </span>
        <div className="flex mt-4 space-x-5 sm:justify-center sm:mt-0">
          <a href="#" className="pr-8 font-abd">
            Login
          </a>
        </div>
      </div>
    </footer>
  );
};
