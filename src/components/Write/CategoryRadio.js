
import React, { Component } from 'react'
import { Input, Label } from 'mdbreact'

class CategoryRadio extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      radio3: false
    }
  } 

  onClick7 = () => {
    this.setState({radio3: 7});
  }

  onClick8 = () => {
    this.setState({radio3: 8});
  }

  onClick9 = () => {
    this.setState({radio3: 9});
  }

  render () {
    return (

      <div>
        <h5 className="radio-header">Choose post category</h5>
          <div className="radio-buttons">
              <div className="radio-input">
                  <label>Css</label>
                  <input 
                    onClick={this.onClick7} 
                    checked={this.state.radio3 === 7 ? true : false} 
                   type="radio" 
                    id="radio7" 
                  />
              </div>

               <div className="radio-input">
                  <label>Javascript</label>
                  <input 
                    onClick={this.onClick7} 
                    checked={this.state.radio3 === 7 ? true : false} 
                   type="radio" 
                    id="radio7" 
                  />
              </div>

              <div className="radio-input">
                  <label>React</label>
                  <input 
                    onClick={this.onClick7} 
                    checked={this.state.radio3 === 7 ? true : false} 
                   type="radio" 
                    id="radio7" 
                  />
              </div>

               <div className="radio-input">
                  <label>Node</label>
                  <input 
                    onClick={this.onClick7} 
                    checked={this.state.radio3 === 7 ? true : false} 
                   type="radio" 
                    id="radio7" 
                  />
              </div>

               <div className="radio-input">
                  <label>Mongo</label>
                  <input 
                    onClick={this.onClick7} 
                    checked={this.state.radio3 === 7 ? true : false} 
                   type="radio" 
                    id="radio7" 
                  />
              </div>
          </div>
      </div>
    );
  }
}

export default CategoryRadio
