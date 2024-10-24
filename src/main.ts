import { createApp } from "vue";
import "./css/core.css";
import "./css/ripple.css/";
import App from "./App.vue";
import ripple from "./directives/ripple";
import router from "./router";

const app = createApp(App);

app.directive("ripple", ripple);
app.use(router);
app.mount("#app");
