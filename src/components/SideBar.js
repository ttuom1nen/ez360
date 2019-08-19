import React from "react"
import SceneSettings from "./settings/SceneSettings"
import ViewSettings from "./settings/ViewSettings"

class SideBar extends React.Component {

    state = {
        tab : 0
    }

    renderContent = () => {

        if(this.state.tab === 0) {
            return(
                <SceneSettings />
            )
        }else if(this.state.tab === 1){
            return(
                <ViewSettings />
            )
        }else if(this.state.tab === 2){
            return(
                <div>Tab Content 2</div>
            )
        }

        return false
    }

    renderTabs = () => {
        return(
            <ul className="nav nav-tabs sidebar-nav">
                <li className="nav-item pointer">
                    <span className={`nav-link ${this.state.tab === 0 ? 'active':''}`} onClick={() => this.setState({tab: 0})}>Scene</span>
                </li>
                <li className="nav-item pointer">
                    <span className={`nav-link ${this.state.tab === 1 ? 'active':''}`} onClick={() => this.setState({tab: 1})}>View</span>
                </li>
                <li className="nav-item pointer">
                    <span className={`nav-link ${this.state.tab === 2 ? 'active':''}`} onClick={() => this.setState({tab: 2})}>Meta</span>
                </li>
                <li className="nav-item pointer">
                    <span className={`nav-link ${this.state.tab === 3 ? 'active':''}`} aria-disabled="true">Active Point</span>
                </li>
            </ul>   
        )
    }

    render(){
        return(
            <div className="sidebar shadow-sm p-3 mb-3 bg-white">
                <div className="sidebar-tabs">
                    {this.renderTabs()}
                </div>
                <div className="sidebar-content">
                    {this.renderContent()}
                </div>
            </div>
        )
        
    }
}

export default SideBar