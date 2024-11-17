export const getYouTubeEmbedURL = (url) => {
    // Extract the video ID from the URL
    const videoId = url?.split('v=')[1];
    const ampersandPosition = videoId?.indexOf('&');
    if (ampersandPosition !== -1) {
      return `https://www.youtube.com/embed/${videoId?.substring(0, ampersandPosition)}`;
    } else {
      return `https://www.youtube.com/embed/${videoId}`;
    }
  }

