import React from "react"
import VideoPlayer from './VideoPlayer'

export default class VideoTest extends React.Component {
  render(){
    const videoJsOptions = {
      autoplay: true,
      controls: true,
      sources: [{
        src: 'video/video.m3u8',
        type: 'application/x-mpegURL'
      }]
    }

    return(
      <div>
        <h1>test video</h1>
        <VideoPlayer 
          options={videoJsOptions}
        />
      </div>
    )
  }
}