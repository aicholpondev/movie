import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import En from "../components/json/En.json";
import Ru from "../components/json/Ru.json";

const language = localStorage.getItem("en")

i18n.use(initReactI18next)
    .init({
        lng:language ? "en" : "ru",
        fallbackLng: 'en',
        debug: true,
        resources: {
            en: {
                translation:En,
            },
       ru: {
            translation: Ru,
        }
    },
        interpolation: {
            escapeValue: false, // not needed for react as it escapes by default
        }
    });


export default i18n;