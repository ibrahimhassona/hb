// ========= Main =============

const enMain = {
    title: "Hypnotek",
    description: "Browse our collection of smart devices designed to enhance comfort, safety, and convenience. Discover how our smart devices can make your daily life more comfortable and efficient. Upgrade your home with the latest smart automation technologies. Experience smart devices that bring you convenience and help you manage your home efficiently and intelligently, wherever you are.",
    keywords: ["hypnotek", "Smart Home, Better Life", "The Future of Technology in Your Home", "Discover the Future of Smart Living"],
};
export const enMainMetaData = {
    title: {
        template: `%s - ${enMain.title}`,
        default: `${enMain.title} - Discover the Future of Smart Living !`,
    },
    description: enMain.description,
    charset: "UTF-8",
    robots: "index, follow",
    canonical: "https://hypnotek.com/en",
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
    },
    author: "Hypnotek Marketing Group",
    manifest: "/manifest.json",
    alternates: [
        { hrefLang: "en", href: "https://hypnotek.com/en" },
        { hrefLang: "ar", href: "https://hypnotek.com/ar" },
    ],
    twitter: {
        card: "summary_large_image",
        site: "@hypnotek_ksa",
        title: "hypnotek",
        description: "Shop the best smart products online",
        image: "https://uploads.hypnotek.com/about_landing_c6941e09d0.jpg",
    },
    openGraph: {
        type: "website",
        title: "hypnotek",
        description: "Shop the best smart products online",
        url: "https://hypnotek.com/en",
        images: [
            {
                url: "https://uploads.hypnotek.com/about_landing_c6941e09d0.jpg",
                width: 1200,
                height: 630,
                alt: "Hypnotek Logo",
            },
        ],
    }
};