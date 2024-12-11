// ========= Main =============
const arMain = {
    title: "هيبونتيك",
    description: "تصفح مجموعتنا من الأجهزة الذكية المصممة لتعزيز الراحة والأمان والملاءمة.,اكتشف كيف يمكن لأجهزتنا الذكية أن تجعل حياتك اليومية أكثر راحة وكفاءة. قم بتحديث منزلك بأحدث تقنيات الأتمتة الذكية.,قم بتجربة الأجهزة الذكية التي توفر لك الراحة وتساعدك في إدارة منزلك بكفاءة وذكاء، أينما كنت.",
    keywords: ["هيبونتيك", "منزل ذكي، حياة أفضل", "مستقبل التكنولوجيا في منزلك", "اكتشف مستقبل الحياة الذكية"],
};

export const arMainMetaData = {
    title: {
        template: `%s - ${arMain.title}`,
        default: `${arMain.title} - اكتشف مستقبل الحياة الذكية!`,
    },
    description: arMain.description,
    charset: "UTF-8",
    robots: "index, follow",
    canonical: "https://hypnotek.com/ar",
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
    },
    author: "مجموعة منزل التسويق",
    manifest: "/manifest.json",
    alternates: [
        { hrefLang: "en", href: "https://hypnotek.com/en" },
        { hrefLang: "ar", href: "https://hypnotek.com/ar" },
    ],
    twitter: {
        card: "summary_large_image",
        site: "@hypnotek_ksa",
        title: "هيبونتيك",
        description: "تسوق أفضل المنتجات الذكية عبر الإنترنت",
        image: "https://uploads.hypnotek.com/about_landing_c6941e09d0.jpg",
    },
    openGraph: {
        type: "website",
        title: "هيبونتيك",
        description: "تسوق أفضل المنتجات الذكية عبر الإنترنت",
        url: "https://hypnotek.com/ar",
        images: [
            {
                url: "https://uploads.hypnotek.com/about_landing_c6941e09d0.jpg",
                width: 1200,
                height: 630,
                alt: "هيبونتيك صوره مصغرة",
            },
        ],
    }
}










