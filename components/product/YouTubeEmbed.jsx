import React from 'react';

const YouTubeEmbed = ({ videoId, title }) => {
  return (
    <div className="youtube-embed grid xl:grid-cols-4 md:grid-cols-2 max-sm:grid-cols-1 max-sm:w-full my-4 cust-trans animate-fade-up">
      <div className="rounded-md overflow-hidden">
        <iframe
          width="100%"
          height="300"
          src={`https://www.youtube.com/embed/${videoId}`}
          title={title}
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default YouTubeEmbed;
