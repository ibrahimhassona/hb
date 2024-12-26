export const getVideoType = (url) => {
  if (!url) return null;

  if (url.includes('youtube.com') || url.includes('youtu.be')) {
    const videoIdMatch = url.match(/(?:v=|\/embed\/|youtu\.be\/)([a-zA-Z0-9_-]+)/);
    return videoIdMatch ? { type: 'youtube', id: videoIdMatch[1] } : null;
  }

  if (url.includes('cloudfront.net')) {
    return { type: 'cloudfront', url };
  }

  return null;
};
