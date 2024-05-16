import "./style.scss";

window.addEventListener("DOMContentLoaded", () => {
    AOS.init();

    const paint = document.querySelector(".about_me__img");
    const preloader = document.querySelector(".preloader");
    const wrapper = document.querySelector(".wrapper");

    document.addEventListener("mousemove", function (event) {
        const accent = document.querySelector(".accent > img");

        const rect = accent.getBoundingClientRect();

        const x = event.clientX - rect.width / 2;
        const y = event.clientY - rect.height / 2;

        const offsetX = ((x / rect.width) * 100) / 10;
        const offsetY = ((y / rect.height) * 100) / 10;

        accent.style.transform = `translate(${-offsetX}px, ${-offsetY}px)`;
        paint.style.transform = `translate(${offsetX * 2}px, ${offsetY * 2}px)`;
    });

    const handleStyleChanges = () => {
        preloader.style.display = "none";
        wrapper.style.opacity = 1;
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

    const text = document.querySelector(".about_me__descr");

    if (window.innerWidth <= 768) {
        text.innerHTML = `
            My name is Oleksandr, and I am a front-end developer committed to crafting visually appealing and technically robust web interfaces. With a keen eye for design and a strong technical foundation, I strive to create seamless user experiences that are engaging and effective.

            <br />
            <br />

            I specialize in <span>HTML</span>, <span>CSS</span>, <span>JavaScript</span>, and <span>React</span>, with experience spanning multiple projects from small business websites to large applications. I translate complex requirements into functional, user-friendly solutions.

            <br />
            <br />
            
            Explore my projects to see my work. If you're looking for a dedicated developer or have any questions, feel free to reach out. <span>I'm currently seeking new opportunities and eager to join a dynamic team.</span>
        `;
    }
});
