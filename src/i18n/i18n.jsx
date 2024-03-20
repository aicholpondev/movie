import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';



i18n.use(initReactI18next).init({
        lng:"ru",
        fallbackLng: 'en',
        debug: true,
        resources: {
            en: {
                translation: {
                    Welcome: "Welcome to React and react-i18next",
                    main:"Main",
                    popular:"Popular",
                    topRated:"Top Rated",
                    nowPlaying:"Now playing",
                    upComing:"Up coming"

                }
            },

       ru: {
            translation: {
                Welcome: "Добро пожаловать в React и React-i18next",
                main:"Главный",
                popular:"Популярные",
                topRated:"Лучшие",
                nowPlaying:"Смотреть сейчас",
                upComing:"Ожидаемые"
            }
        }
    },

        interpolation: {
            escapeValue: false, // not needed for react as it escapes by default
        }
    });


export default i18n;