import React from 'react'
import './VideoPlayer.css'
import video from '../../assets/7971025-uhd_3840_2160_24fps.mp4';

const VideoPlayer = ({playState,setPlayState}) => {

  const player = useRef(null);
  const closePlayer = (e)=>{
    if(e.target === player.current){
      setPlayState(false);
    }
  }
  return (
    <div className={`video-play ${playState?'':'hide'}`} ref={player} onClick={closePlayer}>
      <video src={video} autoPlay muted controls></video>
    </div>
  )
}

export default VideoPlayer