import "./bootstrap";
import { createApp } from "vue";
import AppComponent from "./App.vue";
import router from "./router";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";

library.add(fas, fab, far);
const app = createApp({
    components: {
        AppComponent,
    },
});
app.component("font-awesome-icon", FontAwesomeIcon);
app.use(router);
app.mount("#app");
