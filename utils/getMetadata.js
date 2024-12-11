export const getMetadata = (locale, enMeta, arMeta) => {
    const metadata = locale === "en" ? enMeta : arMeta;
    return metadata;
  };

