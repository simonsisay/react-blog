import React, { Component } from 'react';


class ImageChoice extends Component {

  render(){
    return(
      <div className="unsplash-container">
        {this.props.images.map(image => (
           <div className="image-radio-input">
              <label>
                <img className="unsplash-image" src={image.urls.regular} />
              </label>
              <input 
                type="radio" 
                name="art"
                value={image.urls.regular}
                checked={this.props.imageRadioValue === image.urls.regular ? true : false} 
                onChange={this.props.imageRadioChange}
              />
            </div>

        ))}
      </div>
    );
  }
}

export default ImageChoice;