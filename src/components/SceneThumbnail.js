import React from "react"

const SceneThumbnail = props => {
    //const {id, title, pickScene, image} = props
    const {item, pickScene} = props

    return (
        <div className="scene-thumbnail" onClick={() => pickScene(item)}>
            <div className="thumbnail-image">
            <img src={item.config.thumbnail} alt="Scene thumbnail"/>
            </div>
            <div className="thumbnail-body">
                {item.config.title}
            </div>
        </div>
    )
}

export default SceneThumbnail