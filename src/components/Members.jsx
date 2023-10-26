import ProfileCard from "./ProfileCard";
import ranjith from "../assets/about/ranjith.png";
import ananth from "../assets/about/ananth.png";
import f from "../assets/about/tanushi.jpg";
import ansuk from "../assets/about/ansuk.jpg";
import i from "../assets/about/raj.jpg";
import g from "../assets/about/jisna.jpg";
import arya from "../assets/about/arya.jpg";
import anish from "../assets/about/anish.jpg";
// import apu from "../assets/about/picofme.png";
import rashee from "../assets/about/rashee.jpg";
import ibrahim from "../assets/about/ibra.png";
import kis from "../assets/about/kishore.jpg";
import sandeep from "../assets/about/sandeep.jpg";
// import gef from "../assets/about/eshan.jpg";
import j from "../assets/about/darshan.jpg";
import aditya from "../assets/about/aditya.jpg";
import askhat from "../assets/about/akshat.jpg";
import ojaspic from "../assets/about/ojas.jpg";
import nahush from "../assets/about/nahush.jpg";
import prankit from "../assets/about/prankit.jpg";
import React, { useState, useEffect } from "react";

const userAditya = {
  name: "Aditya Machani",
  title: "Product Manager",
  image: aditya, // This assumes you have imported the image similarly like `import aditya from 'path_to_image';`
  linkedIn: "https://www.linkedin.com/in/adityamachani/",
};

const ojas = {
  name: "Ojas Rao",
  title: "Business & Customer success",
  image: ojaspic,
  linkedIn: "https://www.linkedin.com/in/ojas-rao/",
};

const ananthUser = {
  name: "Ananth Kishore",
  title: "Co-Founder & CEO",
  image: ananth,
  linkedIn: "https://www.linkedin.com/in/ananth-shroff-71631a61/",
};
const ranjithUser = {
  name: "Ranjith BR",
  title: "Co-Founder & CTO",
  image: ranjith,
  linkedIn: "https://www.linkedin.com/in/ranjith19",
  twitter: "https://twitter.com/ranjith19",
  github: "https://github.com/ranjith19",
  stackoverflow: "https://stackoverflow.com/users/1278480/ranjith-ramachandra",
};
const userAkshat = {
  name: "Akshat Yadav",
  title: "Software Engineer",
  image: askhat, // This assumes you have imported the image similarly like `import askhat from 'path_to_image';`
  linkedIn: "https://www.linkedin.com/in/akshzt/",
  github: "https://github.com/akshzt",
};

const userIbrahim = {
  name: "Ibrahim AbM",
  title: "Software Engineer",
  image: ibrahim, // This assumes you have imported the image similarly like `import hel from 'path_to_image';`
  linkedIn: "https://www.linkedin.com/in/ibrahimabdulm/",
  github: "https://github.com/1bsilver",
};
const userAnish = {
  name: "Anish Bhat",
  title: "Data Engineer",
  image: anish, // This assumes you have imported the image similarly like `import hel from 'path_to_image';`
  linkedIn: "https://www.linkedin.com/in/anish-bhat-436279200",
  github: "https://github.com/Anishbhat7",
};
// const userEshan = {
//   name: "Eshan Zain",
//   title: "Strategic Alliance & Partnerships",
//   image: gef, // Assuming you've imported the image similarly like `import gef from 'path_to_image';`
//   linkedIn: "https://www.linkedin.com/in/eshanzain/",
// };
const userRashee = {
  name: "Rashee",
  title: "Customer Experience Specialist",
  image: rashee,
  linkedIn: "https://www.linkedin.com/in/rashee-jhunjhunwala-715870241/",
};
const userNahush = {
  name: "Nahush DC",
  title: "Product & Design",
  image: nahush,
  linkedIn: "https://www.linkedin.com/in/nahushdc/",
};
const userAnsuk = {
  name: "Ansuk Samal",
  title: "Associate Product Manager",
  image: ansuk,
  linkedIn: "https://www.linkedin.com/in/ansuk-samal-872484148/",
};
const userSandeep = {
  name: "Sandeep",
  title: "Head of Data & Analytics",
  image: sandeep,
  linkedIn: "https://www.linkedin.com/in/sandeep-sethumadhavan-83b40915a/",
};

const kishoreNB = {
  name: "Kishore NB",
  title: "Operations Associate",
  image: kis,
  linkedIn: "https://www.linkedin.com/in/kishorenb",
};

const aryaSuresh = {
  name: "Arya Suresh",
  title: "Operations Associate",
  image: arya,
  linkedIn: "https://www.linkedin.com/in/aryasuresh2b65a21b3",
};
const tanushiMahendra = {
  name: "Tanushi Mahendra",
  title: "People Operations Manager",
  image: f,
  linkedIn: "https://www.linkedin.com/in/tanushi-mahendra-32810b142/",
};

const jisnaGeorge = {
  name: "Jisna George",
  title: "Talent Acquisition Specialist",
  image: g,
  linkedIn: "https://www.linkedin.com/in/jisna-george/",
};

const rajSamal = {
  name: "Raj Samal",
  title: "Business Analyst",
  image: i,
  linkedIn: "https://www.linkedin.com/in/rajsamal20/",
};
const darshanD = {
  name: "Darshan D",
  title: "Business Analyst",
  image: j,
  linkedIn: "https://www.linkedin.com/in/darshan-d15/",
};
const userPrankit = {
  name: "Prankit Jain",
  title: "Product Manager",
  image: prankit,
  linkedIn: "https://www.linkedin.com/in/prankit-jain-a70106127",
};

const users = [
  ananthUser,
  ranjithUser,
  ojas,
  userAditya,
  userPrankit,
  userAkshat,
  userIbrahim,
  // userEshan,
  userRashee,
  userAnsuk,
  userSandeep,
  kishoreNB,
  aryaSuresh,
  userAnish,
  tanushiMahendra,
  jisnaGeorge,
  rajSamal,
  darshanD,
  userNahush,
];

const ProfilesList = () => {
  const [visibleProfiles, setVisibleProfiles] = useState(2);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);

    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup the event listener on unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleShowMore = () => {
    setVisibleProfiles(visibleProfiles + 4);
  };

  return (
    <div className="grid lg:mx-24 gap-8 sm:grid-cols-1 lg:grid-cols-3 xl:grid-cols-3 md:grid-cols-2 pt-24">
      {users
        .slice(0, isMobile ? visibleProfiles : users.length)
        .map((user, index) => (
          <ProfileCard
            key={index}
            imgSrc={user.image}
            linkedIn={user.linkedIn}
            name={user.name}
            title={user.title}
            twitter={user.twitter}
            github={user.github}
            stackoverflow={user.stackoverflow}
          />
        ))}
      {isMobile && visibleProfiles < users.length && (
        <div className="col-span-full text-center">
          <button
            onClick={handleShowMore}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Show More
          </button>
        </div>
      )}
    </div>
  );
};

export default ProfilesList;
