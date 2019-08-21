import React from "react";
import SceneThumbnail from "./SceneThumbnail";
import { connect } from "react-redux";
import { selectScene } from "../actions";

class SceneList extends React.Component {
  pickScene = sceneObj => {
    this.props.selectScene(sceneObj);
    console.log(sceneObj);
    let { pitch, yaw, hfov } = sceneObj.config;
    window.editor.player.loadScene(sceneObj.config.title, pitch, yaw, hfov);
  };

  renderThumbnails = () => {
    return this.props.scenes.map(item => {
      return (
        <SceneThumbnail item={item} pickScene={this.pickScene} key={item.id} />
      );
    });
  };
  /*
  listItems = this.props.scenes.map(item => (
    <SceneThumbnail item={item} pickScene={this.pickScene} key={item.id} />
  ));*/

  render() {
    return <div className="scenelist">{this.renderThumbnails()}</div>;
  }
}

/*
const SceneList = props => {
  return renderList(props.sceneList);
};*/

/* Map redux store to props to use data in component */
const mapStateToProps = state => {
  return { scenes: state.scenes };
};

export default connect(
  mapStateToProps,
  {
    selectScene
  }
)(SceneList);
