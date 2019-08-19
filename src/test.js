export const initSceneList = sceneList => {

    for(let item of sceneList){
        let { id, config } = item
        window.editor.player.addScene(id, config)
    }

    return sceneList
}

export const changeScene = sceneObj => {
    console.log("sceneObj: ", sceneObj)
    let { pitch, yaw, hfov } = sceneObj.config
    window.editor.player.loadScene(sceneObj.id, pitch, yaw, hfov)

}