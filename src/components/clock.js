import React, { Component } from 'react';

class Clock extends Component {

  constructor() {
    super()
    this.state={time:new Date()}
  }

  currentTime() {
    this.setState({
      time: new Date()
    })
  }

  componentDidMount() {
    this.interval = setInterval(()=>this.currentTime(),1000)
  }

  componentWillUnmount(){
    clearInterval(this.interval);
  }

  render() {
    return (
      <h2>
        {this.state.time.toLocaleTimeString('en-US',{ hour12: false })}
      </h2>
    )
  }
}

export default Clock;