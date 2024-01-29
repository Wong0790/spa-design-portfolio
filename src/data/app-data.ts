import { Skill, SlideImage, Social } from "../types/app-types";
import imageSlide1 from "@assets/image-slide-1.jpg";
import imageSlide2 from "@assets/image-slide-2.jpg";
import imageSlide3 from "@assets/image-slide-3.jpg";
import imageSlide4 from "@assets/image-slide-4.jpg";
import imageSlide5 from "@assets/image-slide-5.jpg";

export const skills: Skill[] = [
  {
    name: "Graphic Design",
    component: "GraphicDesignIcon",
    style:
      "card row-span-2 col-span-2 max-h-none sm:max-h-none lg:max-h-96 bg-galactic-blue",
  },
  {
    name: "UI/UX",
    component: "UxUiIcon",
    style: "card min-h-44 bg-summer-yellow",
  },
  {
    name: "Apps",
    component: "AppsIcon",
    style: "card min-h-44 bg-pink-shade",
  },
  {
    name: "Photography",
    component: "PhotographyIcon",
    style: "card col-span-2 bg-cyan-shade",
  },
  {
    name: "Illustrations",
    component: "IlustrationsIcon",
    style: "card col-span-2 max-h-none sm:max-h-40 bg-light-red",
  },
  {
    name: "Motion Graphics",
    component: "MotionGraphicsIcon",
    style: "card col-span-2 max-h-none sm:max-h-40 bg-red-grape",
  },
];

export const images: SlideImage[] = [
  { src: imageSlide1, alt: "Work Image 1" },
  { src: imageSlide2, alt: "Work Image 2" },
  { src: imageSlide3, alt: "Work Image 3" },
  { src: imageSlide4, alt: "Work Image 4" },
  { src: imageSlide5, alt: "Work Image 5" },
];

export const socials: Social[] = [
  {
    url: "https://www.linkedin.com/in/anneris-wong-jorge-257948104",
    name: "LinkedInIcon",
    aria: "Anneris E. Wong Jorge LinkedIn profile",
  },
  {
    url: "https://github.com/Wong0790",
    name: "GithubIcon",
    aria: "Anneris E. Wong Jorge Github profile",
  },
  {
    url: "https://www.frontendmentor.io/profile/Wong0790",
    name: "FrontendMentorIcon",
    aria: "Anneris E. Wong Jorge Frowntend Mentor profile",
  },
];
