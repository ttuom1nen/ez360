import React from 'react';
import NavBar from "./NavBar"
import SideBar from "./SideBar"
import BottomBar from "./BottomBar"
import PanoContainer from "./PanoContainer"

class App extends React.Component {
  render(){
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

          <BottomBar />
        </main>

      </div>
    );
  }

}

export default App;
