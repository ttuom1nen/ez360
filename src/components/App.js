import React from "react";
import NavBar from "./NavBar";
import SideBar from "./SideBar";
import BottomBar from "./BottomBar";
import PanoContainer from "./PanoContainer";

const scenes = [
  {
    id: "e281ad3d-8f36-55f6-a4ca-9d0091d05f83",
    config: {
      title: "test scene",
      hfov: 110,
      pitch: -3,
      yaw: 117,
      type: "equirectangular",
      panorama: "assets/equi/default.png",
      thumbnail: "assets/equi/default_thumb.jpg",
      showControls: false,
      autoLoad: true,
      hotSpots: []
    }
  },
  {
    id: "95ffd672-6321-5fe1-8ed0-897dfdef7ddf",
    config: {
      title: "Office",
      hfov: 110,
      pitch: -3,
      yaw: 117,
      type: "equirectangular",
      panorama: "assets/equi/office.png",
      thumbnail: "assets/equi/office_thumb.jpg",
      showControls: false,
      autoLoad: true,
      hotSpots: []
    }
  },
  {
    id: "343244-6321-5fe1-8ed0-897dfdef7ddf",
    config: {
      title: "Another test scene",
      hfov: 110,
      pitch: -3,
      yaw: 117,
      type: "equirectangular",
      panorama: "assets/equi/office2.png",
      thumbnail: "assets/equi/office2_thumb.jpg",
      showControls: false,
      autoLoad: true,
      hotSpots: []
    }
  }
];

class App extends React.Component {
  state = {
    sceneList: []
  };

  addScenes(scenes) {
    let list = [];

    scenes.map(scene => {
      window.editor.player.addScene(scene.config.title, scene.config);
      list.push(scene);
    });

    this.setState({ sceneList: list });
  }

  componentDidMount() {
    window.editor.player = window.pannellum.viewer("pano-container", {
      default: {
        firstScene: "default",
        author: "TT",
        sceneFadeDuration: 1000
      },
      scenes: {
        default: {
          title: "test scene",
          hfov: 110,
          pitch: -3,
          yaw: 117,
          type: "equirectangular",
          panorama: "assets/equi/default.png",
          thumbnail: "assets/equi/default_thumb.jpg",
          showControls: false,
          autoLoad: true,
          hotSpots: []
        }
      }
    });

    this.addScenes(scenes);
  }

  render() {
    return (
      <div className="App">
        <main className="editor-main">
          <NavBar />

          <div className="editor-area">
            <SideBar />
            <div className="player-area">
              <PanoContainer />
            </div>
          </div>

          <BottomBar sceneList={this.state.sceneList} />
        </main>
      </div>
    );
  }
}

export default App;
