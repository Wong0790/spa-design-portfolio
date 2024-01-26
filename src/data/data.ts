import { Skill } from "@/types/base.ts";

export const skills: Skill[] = [
  {
    name: "Graphic Design",
    component: "GraphicDesignIcon",
    style:
      "card row-span-2 col-span-2 max-h-none sm:max-h-none xl:max-h-96 bg-galactic-blue",
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
