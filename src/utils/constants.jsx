import { FaCode, FaBitcoin } from "react-icons/fa6";
import { IoMdMusicalNote } from "react-icons/io";
import { PiGraduationCap } from "react-icons/pi";
import { SiGooglepodcasts } from "react-icons/si";
import { MdLiveTv } from "react-icons/md";
import { BiCameraMovie } from "react-icons/bi";
import { IoGameControllerOutline } from "react-icons/io5";
import { MdOutlineSportsBaseball, MdHome } from "react-icons/md";
import { TbHanger } from "react-icons/tb";
import { MdOutlineTheaterComedy, MdMovie } from "react-icons/md";
import { FaRegNewspaper } from "react-icons/fa6";

export const logo = "https://i.ibb.co/s9Qys2j/logo.png";

export const categories = [
  { name: "Home", selected: false, id: 0, icon: <MdHome /> },
  { name: "Coding", selected: false, id: 28, icon: <FaCode /> },
  { name: "Music", selected: false, id: 10, icon: <IoMdMusicalNote /> },
  { name: "Education", selected: false, id: 27, icon: <PiGraduationCap /> },
  { name: "Anime", selected: false, id: 31, icon: <MdMovie /> },
  { name: "Movie", selected: false, id: 30, icon: <BiCameraMovie /> },
  {
    name: "Gaming",
    selected: false,
    id: 20,
    icon: <IoGameControllerOutline />,
  },
  {
    name: "Sport",
    selected: false,
    id: 17,
    icon: <MdOutlineSportsBaseball />,
  },
  {
    name: "Comedy",
    selected: false,
    id: 34,
    icon: <MdOutlineTheaterComedy />,
  },
  { name: "Crypto", selected: false, id: 9, icon: <FaBitcoin /> },
];

export const demoThumbnailUrl = "https://i.ibb.co/G2L2Gwp/API-Course.png";
export const demoChannelUrl = "/channel/UCmXmlB4-HJytD7wek0Uo97A";
export const demoVideoUrl = "/video/GDa8kZLNhJ4";
export const demoChannelTitle = "JavaScript Mastery";
export const demoVideoTitle =
  "Build and Deploy 5 JavaScript & React API Projects in 10 Hours - Full Course | RapidAPI";
export const demoProfilePicture =
  "http://dergipark.org.tr/assets/app/images/buddy_sample.png";
