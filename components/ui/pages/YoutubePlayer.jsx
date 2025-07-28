import React, { useState } from 'react';
import YouTube from 'react-youtube';

const YoutubePlayer = ({ videoId }) => {
  const [showPlayer, setShowPlayer] = useState(false);

  const onPlayerReady = (event) => {
    setShowPlayer(true);
    event.target.playVideo();
  };

  return (
    <div onClick={() => setShowPlayer(true)}>
      {showPlayer && (
        <YouTube
          videoId={videoId}
          onReady={onPlayerReady}
          opts={{ width: '100%', height: '400px' }}
        />
      )}
    </div>
  );
};

export default YoutubePlayer;
