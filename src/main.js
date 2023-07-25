import { createApp } from "vue";
import App from "./App.vue";
import "@/assets/css/style.css";
import _ from "lodash";

// Vue uygulamasını oluşturun ve Lodash'ı global olarak tanımlayın
const app = createApp(App);
app.config.globalProperties._ = _;

app.mount("#app");
