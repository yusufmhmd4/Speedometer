import {Component} from 'react'
import './index.css'

class Speedometer extends Component {
  state = {speed: 0}

  onAccelerate = () => {
    const {speed} = this.state
    if (speed < 200) {
      this.setState(prevState => ({speed: prevState.speed + 10}))
    }
  }

  onBreak = () => {
    const {speed} = this.state
    if (speed > 0) {
      this.setState(prevState => ({speed: prevState.speed - 10}))
    }
  }

  render() {
    const {speed} = this.state

    return (
      <div className="app-container">
        <div className="speedometer-container">
          <h1 className="speedometer-heading">SPEEDOMETER</h1>
          <img
            src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
            alt="speedometer"
            className="speedometer-image"
          />
          <h1 className="speedometer-sub-heading">Speed is {speed}mph</h1>
          <p className="speedometer-paragraph">
            Min Limit is 0mph, Max Limit is 200mph
          </p>
          <div className="button-container">
            <button
              className="accelerate button"
              type="button"
              onClick={this.onAccelerate}
            >
              Accelerate
            </button>
            <button
              className="break button"
              type="button"
              onClick={this.onBreak}
            >
              Apply Brake
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default Speedometer
