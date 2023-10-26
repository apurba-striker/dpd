import kothari from "../assets/investors/kothari.png";
import kunal from "../assets/investors/kunal.png";
import nikhil from "../assets/investors/nikhil.jpeg";
import nizshey from "../assets/investors/nizshay.jpeg";
import rajgopal from "../assets/investors/rajgopal.png";
import ram from "../assets/investors/ram.png";
import untitled from "../assets/investors/untitled.jpeg";
import golathi from "../assets/investors/golathi.jpeg";
import bettercap from "../assets/investors/better-capital.svg";
// import blume from "../assets/investors/blume.svg";
// import indiaq from "../assets/investors/indiaquotient.png";
const profiles = [
  {
    imageUrl: kunal,
    name: "Kunal Shah",
    title: "CEO, CRED",
  },
  {
    imageUrl: nizshey,
    name: "Nishchay AG",
    title: "CEO, Jar",
  },
  {
    imageUrl: nikhil,
    name: "Nikhil Kumar",
    title: "Co-founder, Setu",
  },
  {
    imageUrl: kothari,
    name: "Abhishek Kotari",
    title: "Founder, Flexiloans",
  },
  {
    imageUrl: ram,
    name: "Ram",
    title: "Founder, Hyperface",
  },
  {
    imageUrl: rajgopal,
    name: "Vijay Rajgopal",
    title: "Head, Amazon Pay offline",
  },
  {
    imageUrl: golathi,
    name: "Sunil Gulati",
    title: "Director, Fincare",
  },
  {
    imageUrl: untitled,
    name: "Untitled ventures",
    title: "Vedika Kant, Anmol Maini",
  },
];
const firms = [
  { name: "Better", image: bettercap },
  // { name: "Blume", image: blume },
  // { name: "Indiaq", image: indiaq },
];

const ProfileCard = ({ imageUrl, name, title }) => (
  <div className="flex flex-col md:flex-row md:items-center items-center">
    <img
      className="flex w-1/3 md:w-24 object-scale-down"
      src={imageUrl}
      alt={name}
    />
    <div className="flex-col  py-2 md:py-0 md:pl-8 w-full text-center md:text-left">
      <h1 className="text-2xl font-bold font-abc text-[#210076]">{name}</h1>
      <p className="client-start font-medium font-abc text-[#210076]">
        {title}
      </p>
    </div>
  </div>
);

export const Partner = () => (
  <div className="bg-white w-full mx-auto">
    <div className="flex flex-col justify-center items-center gap-16 mt-[7.98rem] mb-[8.75rem]">
      <div className="text-center text-4xl font-abc px-4 font-bold tracking-[1.2px] text-[#210076]">
        The ones who’ve got our back
      </div>

      <div className="container lg:px-24 xl:px-64">
        <div className="flex flex-col sm:flex-row items-center justify-evenly ">
          {firms.map((firm) => (
            <img
              src={firm.image}
              className="w-40 py-8"
              id={firm.name}
              key={firm.name}
            />
          ))}
        </div>
      </div>
      <div className="pt-[4.125rem] ">
        <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-3 gap-4 xl:gap-8 mx-auto my-auto">
          {profiles.map((profile) => (
            <ProfileCard key={profile.name} {...profile} />
          ))}
        </div>
      </div>
    </div>
  </div>
);
