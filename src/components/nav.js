import React from "react"
import Transition from "../components/transition"

class Navigation extends React.Component{

  render(){
    return (
      <>
      <nav className={`rl-navigation ${this.props.blendmode}`}>
        <Transition to={`/`} color={"#ffffff"} background={"#000000"}>
          <h3 style={{color: this.props.color}} className="nav-link logo">
            Ryan Levitan
          </h3>
        </Transition>
        <Transition to={`/info`} color={"#000"} background={"#D8D8D8"}>
          <h3 style={{color: this.props.color}} className="nav-link">
            Info
          </h3>
        </Transition>
    </nav>

   </>
    )

  }
}

export default Navigation