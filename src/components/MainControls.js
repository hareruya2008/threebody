import React, { Component } from 'react'
import Slider from './Slider'
import Checkbox from './Checkbox'
import './Controls.css'

class MainControls extends Component {
  handleParamChange = param => {
    this.props.onChange(param)
  }

  toggleControls = () => {
    let value = !this.props.showControls
    this.handleParamChange({ name: 'showControls', value })
  }

  renderControls = () => {
    if (this.props.showControls)
      return (
        <div>
          <div className="title">Global</div>
          <Slider
            onChange={this.handleParamChange}
            property="g"
            value={this.props.g}
            min={0}
            max={25}
          />
          <Slider
            onChange={this.handleParamChange}
            property="speed"
            value={this.props.speed}
            min={0}
            max={100}
            step={1}
          />
          <Slider
            onChange={this.handleParamChange}
            property="zoom"
            value={this.props.zoom}
            min={1}
            max={100}
          />
          <Checkbox
            onChange={this.handleParamChange}
            property="showTrails"
            label="trails"
            value={this.props.showTrails}
            min={1}
            max={100}
          />
          <button className="share" onClick={this.props.share}>
            Copy share link
          </button>
        </div>
      )
    return <div />
  }

  render() {
    return (
      <div className={`controls${this.props.showControls ? '' : ' hidden'}`}>
        {
          <button className="toggle" onClick={this.toggleControls}>
            {this.props.showControls ? '–' : '+'}
          </button>
        }
        {this.renderControls()}
      </div>
    )
  }
}

export default MainControls
