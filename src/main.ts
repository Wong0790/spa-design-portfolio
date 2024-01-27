import { createApp } from "vue";
import "@fontsource/plus-jakarta-sans";
import "@fontsource/plus-jakarta-sans/500.css";
import "@fontsource/plus-jakarta-sans/700.css";
import "./style.css";
import "vue3-carousel/dist/carousel.css";
import App from "./App.vue";
import GraphicDesignIcon from "./components/icons/GraphicDesignIcon.vue";
import UxUiIcon from "./components/icons/UxUiIcon.vue";
import AppsIcon from "./components/icons/AppsIcon.vue";
import PhotographyIcon from "./components/icons/PhotographyIcon.vue";
import IlustrationsIcon from "./components/icons/IlustrationsIcon.vue";
import MotionGraphicsIcon from "./components/icons/MotionGraphicsIcon.vue";

const app = createApp(App);

app
  .component("GraphicDesignIcon", GraphicDesignIcon)
  .component("UxUiIcon", UxUiIcon)
  .component("AppsIcon", AppsIcon)
  .component("PhotographyIcon", PhotographyIcon)
  .component("IlustrationsIcon", IlustrationsIcon)
  .component("MotionGraphicsIcon", MotionGraphicsIcon);

app.mount("#app");
