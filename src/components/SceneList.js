import React from "react";
import SceneThumbnail from "./SceneThumbnail";
import { changeScene } from "../test";
import { initSceneList } from "../test";

const scenes = [
  {
    id: "e281ad3d-8f36-55f6-a4ca-9d0091d05f83",
    config: {
      title: "Default",
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
  }
];

const renderList = () => {
  //initSceneList(scenes)

  const pickScene = sceneObj => {
    //let sceneObj = scenes.filter(item => item.id === id)[0]
    changeScene(sceneObj);
  };

  const listItems = scenes.map(
    item => (
      //window.editor.player.addScene(item.id, item.config)

      <SceneThumbnail item={item} pickScene={pickScene} key={item.id} />
    )

    //<SceneThumbnail id={item.id} image={item.thumbnail} title={item.title} key={item.id} pickScene={pickScene}/>
  );

  return <div className="scenelist">{listItems}</div>;
};

const SceneList = () => {
  return renderList();
};

export default SceneList;
