
import React, { Component } from 'react'
import { Input, Label } from 'mdbreact'

class CategoryRadio extends Component {
  
  render () {
    return (

      <div>
        <h5 className="radio-header">Choose blog category</h5>
          <div className="radio-buttons">
              <div className="radio-input">
                  <label>Art</label>
                  <input 
                    type="radio" 
                    name="art"
                    value="art"
                    checked={this.props.radioValue === 'art' ? true : false} 
                    onChange={this.props.handleRadioChange}
                  />
              </div>

               <div className="radio-input">
                  <label>Politics</label>
                  <input 
                    type="radio" 
                    name="politics"
                    value="politics"
                    onChange={this.props.handleRadioChange}
                    checked={this.props.radioValue === 'politics' ? true : false} 
                  />
              </div>

              <div className="radio-input">
                  <label>Sport</label>
                  <input 
                    type="radio" 
                    name="sport"
                    value="sport"
                    checked={this.props.radioValue === 'sport' ? true : false} 
                    onChange={this.props.handleRadioChange}
                  />
              </div>

               <div className="radio-input">
                  <label>Culture</label>
                  <input 
                    type="radio" 
                    name="culture"
                    value="culture"
                    checked={this.props.radioValue === 'culture' ? true : false} 
                    onChange={this.props.handleRadioChange}
                  />
              </div>

               <div className="radio-input">
                  <label>Music</label>
                  <input 
                    type="radio"
                    value="music"
                    name="music"
                    checked={this.props.radioValue === "music" ? true : false}
                    onChange={this.props.handleRadioChange}
                  />
              </div>
          </div>
      </div>
    );
  }
}

export default CategoryRadio
