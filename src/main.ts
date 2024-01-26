import { createApp } from "vue";
import "@fontsource/plus-jakarta-sans";
import "@fontsource/plus-jakarta-sans/500.css";
import "@fontsource/plus-jakarta-sans/700.css";
import "./style.css";
import "vue3-carousel/dist/carousel.css";
import App from "./App.vue";
import {
  GraphicDesignIcon,
  UxUiIcon,
  AppsIcon,
  PhotographyIcon,
  IlustrationsIcon,
  MotionGraphicsIcon,
} from "./components/Icons";

const app = createApp(App);

app
  .component("GraphicDesignIcon", GraphicDesignIcon)
  .component("UxUiIcon", UxUiIcon)
  .component("AppsIcon", AppsIcon)
  .component("PhotographyIcon", PhotographyIcon)
  .component("IlustrationsIcon", IlustrationsIcon)
  .component("MotionGraphicsIcon", MotionGraphicsIcon);

app.mount("#app");
