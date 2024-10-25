import "./style.scss";
import i18next from "i18next";
import enTranslation from "./langs/en";
import uaTranslation from "./langs/ua";
import langSwitcher from "./utils/langSwitcher";
import createProjectsHtml from "./utils/createProjectsHtml";

window.addEventListener("DOMContentLoaded", () => {
    AOS.init();

    i18next.init({
        lng: "en",
        debug: true,
        resources: {
            en: {
                translation: enTranslation,
            },
            ua: {
                translation: uaTranslation,
            },
        },
    });

    const projectsHtml = createProjectsHtml();

    const paint = document.querySelector(".about_me__img");
    const preloader = document.querySelector(".preloader");
    const wrapper = document.querySelector(".wrapper");
    const mainImg = document.querySelector(".main__image");
    const accent = document.querySelector(".accent > img");
    const changeLangBtn = document.getElementById("lang-switcher");

    // creation of projects
    document.querySelector(".projects").innerHTML = projectsHtml;

    document.addEventListener("mousemove", function (event) {
        const rect = accent.getBoundingClientRect();

        const x = event.clientX - rect.width / 2;
        const y = event.clientY - rect.height / 2;

        const offsetX = ((x / rect.width) * 100) / 10;
        const offsetY = ((y / rect.height) * 100) / 10;

        requestAnimationFrame(() => {
            accent.style.transform = `translate(${-offsetX}px, ${-offsetY}px)`;
            paint.style.transform = `translate(${offsetX * 2}px, ${
                offsetY * 2
            }px)`;
        });
    });

    changeLangBtn.addEventListener("click", langSwitcher);

    const handleStyleChanges = () => {
        preloader.style.display = "none";
        wrapper.style.opacity = 1;
        changeLangBtn.style.display = "block";
    };

    const hidePreloader = () => {
        new Promise((resolve) => {
            setTimeout(() => {
                preloader.style.animation = "hidePreloader 300ms";
                preloader.addEventListener("animationend", resolve);
            }, 1500);
        }).then(handleStyleChanges);
    };
    hidePreloader();

    if (window.innerWidth <= 768) {
        mainImg.removeAttribute("data-aos-delay");
    }
});
