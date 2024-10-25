import i18next from "i18next";
import uaTranslation from "../langs/ua";

const oppositeLang = (lang) => (lang === "en" ? "ua" : "en");

const langSwitcher = () => {
    const newLang = i18next.language === "en" ? "ua" : "en";
    i18next.changeLanguage(newLang);

    Object.keys(uaTranslation).forEach((id) => {
        document.getElementById(id).innerHTML = i18next.t(id);
    });

    document.getElementById("lang-switcher").innerHTML =
        oppositeLang(newLang).toUpperCase();
};

export default langSwitcher;
