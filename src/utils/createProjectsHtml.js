import projectsData from "../constants/projectsData";

const createProjectsHtml = () => {
    return Object.keys(projectsData)
        .reverse()
        .map((projectName) => {
            const project = projectsData[projectName];

            const theme = project.theme === "dark" ? "carousel-dark" : "";

            const images = [];
            for (let i = 0; i < project.countOfImages; i++) {
                const imageHtml = `
                <div class="carousel-item ${i === 0 && "active"}">
                    <img
                        src="${project.template.split("!").join(`${i + 1}`)}"
                        class="d-block w-100"
                        alt="${projectName}_${i + 1}"
                    />
                </div>
            `;
                images.push(imageHtml);
            }

            return `
            <div class="projects__item" data-aos="fade-down">
                <div class="projects__item-slider">
                    <div
                        id="${project.carouselId}"
                        class="carousel ${theme} slide"
                        data-bs-ride="carousel"
                    >
                        <div
                            class="carousel-inner"
                            style="max-height: 250px"
                        >
                        ${images.join("")}
                        </div>
                        <button
                            class="carousel-control-prev"
                            type="button"
                            data-bs-target="#${project.carouselId}"
                            data-bs-slide="prev"
                        >
                            <span
                                class="carousel-control-prev-icon"
                                aria-hidden="true"
                            ></span>
                            <span class="visually-hidden"
                                >Previous</span
                            >
                        </button>
                        <button
                            class="carousel-control-next"
                            type="button"
                            data-bs-target="#${project.carouselId}"
                            data-bs-slide="next"
                        >
                            <span
                                class="carousel-control-next-icon"
                                aria-hidden="true"
                            ></span>
                            <span class="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
                <div class="projects__item-info">
                    <div class="projects__item-title">${
                        projectName.charAt(0).toUpperCase() +
                        projectName.slice(1)
                    }</div>
                    <div class="projects__item-descr" id="${projectName}">
                        ${project.description}
                    </div>
                    <kbd class="projects__item-tech">
                        <span>Tech Stack:</span> ${project.techStack}
                    </kbd>
                    <div class="projects__item-link">
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="${project.siteUrl}"
                        >
                            <p class="visitSite">Visit site</p>
                            <img
                                class="svg-icon app"
                                src="images/svgs/linkIcon.svg"
                                alt="link-icon"
                            />
                        </a>
                    </div>
                </div>
            </div>
        `;
        });
};

export default createProjectsHtml;
