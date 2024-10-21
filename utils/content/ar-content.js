// ========= Main =============
const arMain = {
    title: "هيبونتيك",
    description: "هيبونتيك",
    keywords: ["هيبونتيك"],
};
export const arMainMetaData = {
    title: {
        template: `%s - ${arMain.title}`,
        default: `${arMain.title} - نساعدك على إظهار الجمال من حولك !`,
    },
    description: arMain.description,
    robots: "index, follow",
    icons: {
        icon: ['/favicon.ico?v=4'],
        apple: ['/apple-touch-icon.png?v=4'],
        shortcut: ['/apple-touch-icon.png?v=4']
    },
    og: {
        title: arMain.title,
        description: arMain.description
       
    },
    twitter: {
        card: "summary_large_image",
        title: arMain.title,
        description: arMain.description,
    }
}