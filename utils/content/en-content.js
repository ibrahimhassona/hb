// ========= Main =============
const enMain = {
    title: "Hypnotek",
    description: "Hypnotek",
    keywords: ["Hypnotek"],
};

export const enMainMetaData = {
    title: {
        template: `%s - ${enMain.title}`,
        default: `${enMain.title} - We help you showcase the beauty around you!`,
    },
    description: enMain.description,
    robots: "index, follow",
    icons: {
        icon: ['/favicon.ico?v=4'],
        apple: ['/apple-touch-icon.png?v=4'],
        shortcut: ['/apple-touch-icon.png?v=4']
    },
    og: {
        title: enMain.title,
        description: enMain.description
    },
    twitter: {
        card: "summary_large_image",
        title: enMain.title,
        description: enMain.description,
    }
};
