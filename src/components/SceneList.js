import React from "react";
import SceneThumbnail from "./SceneThumbnail";
import { changeScene } from "../test";
import { initSceneList } from "../test";

const renderList = list => {
  const pickScene = sceneObj => {
    //changeScene(sceneObj);
    console.log(sceneObj);
    let { pitch, yaw, hfov } = sceneObj.config;
    window.editor.player.loadScene(sceneObj.config.title, pitch, yaw, hfov);
  };

  const listItems = list.map(item => (
    <SceneThumbnail item={item} pickScene={pickScene} key={item.id} />
  ));

  return <div className="scenelist">{listItems}</div>;
};

const SceneList = props => {
  return renderList(props.sceneList);
};

export default SceneList;
