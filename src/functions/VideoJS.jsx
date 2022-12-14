import React from 'react';
import videojs from 'video.js';
import 'video.js/dist/video-js.css';
// import '../App.css'
import './VideoJS.scss'

export const VideoJS = (props) => {
  const videoRef = React.useRef(null);
  const playerRef = React.useRef(null);
  const { options, onReady } = props;

  React.useEffect(() => {

    // Make sure Video.js player is only initialized once
    if (!playerRef.current) {
      const videoElement = videoRef.current;

      if (!videoElement) return;

      const player = playerRef.current = videojs(videoElement, options, () => {
        videojs.log('player is ready');
        onReady && onReady(player);
      });

      // You could update an existing player in the `else` block here
      // on prop change, for example:
    } else {
      const player = playerRef.current;

      player.autoplay(options.autoplay);
      player.src(options.sources);
    }
  }, [options, videoRef]);

  // Dispose the Video.js player when the functional component unmounts
  React.useEffect(() => {
    const player = playerRef.current;

    return () => {
      if (player) {
        player.dispose();
        playerRef.current = null;
      }
    };
  }, [playerRef]);

  return (
    <div
      style={{ borderRadius: '20px', overflow: 'hidden' }}
    >

      <div data-vjs-player>
        <video ref={videoRef} className='video-js vjs-default-skin' />
        {/* <video ref={videoRef} className='video-js vjs-big-play-centered' /> */}
      </div>
    </div>
  );
}

export default VideoJS;