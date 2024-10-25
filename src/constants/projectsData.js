import enTranslation from "../langs/en";

const projectsData = {
    spendwise: {
        countOfImages: 3,
        template: "images/projects/spendwise/spendwise_!.png",
        techStack: "TS, MERN Stack",
        siteUrl: "https://spendwise.site/",
        description: enTranslation.spendwise,
        theme: "dark",
        carouselId: "carouselExampleDark1",
    },
    taskwave: {
        countOfImages: 4,
        template: "images/projects/taskwave/taskwave_!.png",
        techStack: "TS, Nest.js, Tailwind CSS, PostgreSql, Prisma, JWT",
        siteUrl: "https://taskwave.website/",
        description: enTranslation.taskwave,
        theme: "light",
        carouselId: "carouselExampleDark2",
    },
    airdnd: {
        countOfImages: 3,
        template: "images/projects/airdnd/airdnd_!.png",
        techStack:
            "TS, Next.js, NextAuth, Tailwind CSS, MongoDB, Prisma, JWT, Zustand, Cloudinary, World-countries API, Vercel",
        siteUrl: "https://airdnd-theta.vercel.app/",
        description: enTranslation.airdnd,
        theme: "dark",
        carouselId: "carouselExampleDark3",
    },
    distorm: {
        countOfImages: 4,
        template: "images/projects/distorm/distorm_!.png",
        techStack:
            "TS, Next.js, Clerk, Tailwind CSS, PosgreSql, Prisma, Zustand, Uploadthing API, LiveKit API, TanStack Query, Socket.io, Shadcn/ui, Zod",
        siteUrl: "https://distorm.website/",
        description: enTranslation.distorm,
        theme: "light",
        carouselId: "carouselExampleDark4",
    },
};

export default projectsData;
