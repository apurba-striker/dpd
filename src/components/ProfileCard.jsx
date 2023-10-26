import linkedinIcon from "../assets/social/linkedin.svg";
import twitterIcon from "../assets/social/twitter.svg";
import githubIcon from "../assets/social/github.svg";
import stackoverflowIcon from "../assets/social/stackoverflow.svg";

const socialIcons = {
  linkedIn: linkedinIcon,
  twitter: twitterIcon,
  github: githubIcon,
  stackoverflow: stackoverflowIcon,
};

const ProfileCard = ({
  imgSrc,
  name,
  title,
  linkedIn,
  twitter,
  github,
  stackoverflow,
}) => {
  const profiles = [
    { href: linkedIn, icon: socialIcons.linkedIn },
    { href: twitter, icon: socialIcons.twitter },
    { href: github, icon: socialIcons.github },
    { href: stackoverflow, icon: socialIcons.stackoverflow },
  ];

  return (
    <div className="w-full relative group">
      <img
        className="object-cover mx-auto my-auto object-center w-[276px] h-[288px]"
        src={imgSrc}
        alt="avatar"
      />

      <div
        className={`absolute mx-auto bottom-0 left-0 right-0 top-0 w-[276px] h-[288px] overflow-hidden bg-fixed hidden md:hidden lg:group-hover:block`}
      >
        {/* Social Icons for Desktop on Hover */}
        <ul className="flex space-x-4 sm:mt-0 pt-[230px] items-center justify-center">
          {profiles.map(
            (profile) =>
              profile.href && (
                <li key={profile.href}>
                  <a
                    href={profile.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      className="w-8 h-8 p-2 bg-[#d9fff5]"
                      src={profile.icon}
                    />
                  </a>
                </li>
              ),
          )}
        </ul>
      </div>

      <div className="mt-2">
        <h3 className="text-3xl font-bold font-abc mx-1 text-center md:text-center sm:text-center text-[#210076]">
          {name}
        </h3>
        <h4 className="font-semibold font-abc mx-1 text-center md:text-center text-[#210076]">
          {title}
        </h4>
      </div>

      {/* Social Icons for Mobile */}
      <ul className="flex space-x-4 mt-4 md:hidden items-center justify-center">
        {profiles.map(
          (profile) =>
            profile.href && (
              <li key={profile.href}>
                <a
                  href={profile.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    className="w-8 h-8 p-2 bg-[#d9fff5] rounded shadow-md"
                    src={profile.icon}
                  />
                </a>
              </li>
            ),
        )}
      </ul>
    </div>
  );
};

export default ProfileCard;
