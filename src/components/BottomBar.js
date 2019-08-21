import React from "react";
import SceneList from "./SceneList";

class BottomBar extends React.Component {
  render() {
    return (
      <div className="bottomBar">
        <SceneList sceneList={this.props.sceneList} />
      </div>
    );
  }
}

export default BottomBar;
