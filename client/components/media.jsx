import React from "react";
import Axios from "axios";
import { MainVideo } from "./mainVideo.jsx";
import { VideoList } from "./videoList.jsx";

export class Media extends React.Component {
  constructor(props) {
    super(props);
    this.state = { main: "", list: [] };
  }

  componentDidMount() {
    // Axios.get("/api/getVideos").then(res => {
    //   this.setState({ main: res.data[0] });
    //   this.setState({ list: res.data });
    // });
  }

  handleVideoChange(videoUrl) {
    this.setState({ main: videoUrl });
  }

  render() {
    return (
      <div>
        <div className="video-container">
          <MainVideo />
          <VideoList />
        </div>
      </div>
    );
  }
}
