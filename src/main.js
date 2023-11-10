import { createApp } from 'vue'
import { createI18n } from 'vue-i18n'
import App from './App.vue'
import store from './store'
import { languages } from "../src/locales/i18n"
import { defaultLocale } from "../src/locales/i18n"
import "./assets/scss/main.scss";

const i18n = createI18n({
    legacy: false,
    locale: defaultLocale,
    fallbackLocale: "en",
    messages: languages,
    global: true,
})

createApp(App).use(store).use(i18n).mount('#app')