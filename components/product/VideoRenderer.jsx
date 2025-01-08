import React from 'react';
import { getVideoType } from '@/utils/libs';
import YouTubeEmbed from './YouTubeEmbed';


const VideoRenderer = ({ url, title }) => {
  const videoData = getVideoType(url);

  if (!videoData) {
    return <p>Invalid or unsupported video URL</p>;
  }

  if (videoData.type === 'youtube') {
    return <YouTubeEmbed videoId={videoData.id} title={title} />;
  }

  if (videoData.type === 'cloudfront') {
    return (
      <div className="video-container">
        <video
          width="100%"
          height="300"
          controls
          className="rounded-md overflow-hidden"
        >
          <source src={videoData.url} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    );
  }

  return null; // Fallback
};

export default VideoRenderer;
