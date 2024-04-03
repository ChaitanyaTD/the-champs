/* ----------------------------------------------------------------------------------------------------- */
/*  @ Imports.
/* ----------------------------------------------------------------------------------------------------- */
import anim4 from "../../assets/images/anim-4.png";
import anim5 from "../../assets/images/anim-5.png";
import anim6 from "../../assets/images/anim-6.png";
import anim7 from "../../assets/images/anim-7.png";
import { IoLogoInstagram, IoLogoTwitter } from "react-icons/io";
import { FaDiscord } from "react-icons/fa";
import FancyHeader from "../common/FancyHeader";

/* ----------------------------------------------------------------------------------------------------- */
/*  @ artistData : Fake data : Replace by originals
/* ----------------------------------------------------------------------------------------------------- */
const artistData = [
  {
    name: "Steps Jobs",
    role: "Artist",
    image: anim4,
    socials: [
      { icon: <IoLogoTwitter size={16} />, link: "#" },
      { icon: <FaDiscord size={16} />, link: "#" },
      { icon: <IoLogoInstagram size={16} />, link: "#" },
    ],
  },
  {
    name: "Andry Moray",
    role: "Blockchain",
    image: anim5,
    socials: [
      { icon: <IoLogoTwitter size={16} />, link: "#" },
      { icon: <FaDiscord size={16} />, link: "#" },
      { icon: <IoLogoInstagram size={16} />, link: "#" },
    ],
  },
  {
    name: "zaid Ed",
    role: "Developer",
    image: anim6,
    socials: [
      { icon: <IoLogoTwitter size={16} />, link: "#" },
      { icon: <FaDiscord size={16} />, link: "#" },
      { icon: <IoLogoInstagram size={16} />, link: "#" },
    ],
  },
  {
    name: "Laila Ed",
    role: "Marketing",
    image: anim7,
    socials: [
      { icon: <IoLogoTwitter size={16} />, link: "#" },
      { icon: <FaDiscord size={16} />, link: "#" },
      { icon: <IoLogoInstagram size={16} />, link: "#" },
    ],
  },
];

/* ----------------------------------------------------------------------------------------------------- */
/*  @ <HomePageH /> : Artists section.
/* ----------------------------------------------------------------------------------------------------- */
const HomePageH = () => {
  return (
    <div className="md:p-24 max-md:p-6">
      <FancyHeader normal="Meet" fancy="the artists" />
      <Artists />
    </div>
  );
};

const Artists = () => {
  return (
    <div className="grid grid-cols-4 py-6 gap-x-4 gap-y-4 max-[900px]:grid-cols-2">
      {artistData.map((artist, index) => (
        <div
          key={index}
          className={`flex flex-col gap-4 justify-center items-center ${
            index % 2 === 0 ? "min-[900px]:mt-20" : ""
          }`}
        >
          <img
            src={artist.image}
            alt={`anim-${index + 4}`}
            className="h-40 w-40 rounded-2xl p-2 border-2"
          />
          <div className="flex flex-col gap-2 items-center justify-center">
            <h3 className="font-bold text-[22px]">{artist.name}</h3>
            <p className="text-[#7B7583]">{artist.role}</p>
          </div>
          <span className="flex items-center gap-4">
            {artist.socials.map((social, i) => (
              <a key={i} href={social.link} className="cursor-pointer">
                {social.icon}
              </a>
            ))}
          </span>
        </div>
      ))}
    </div>
  );
};

export default HomePageH;
