import React, { Component } from 'react';
import { Container, Row, Col, Mask, Fa, View, Button} from 'mdbreact';
import './common.css'
import { Link } from 'react-router-dom'
import moment from 'moment'


class Blog extends Component{
  constructor(props){
    super(props);
    this.state = {
      bookmarked:false,
      favourite:false,
    }
  }

  bookmarkArticle = () => {
    this.setState({bookmarked:!this.state.bookmarked})
  }

  addToFavourites = () => {
    this.setState({favourite:!this.state.favourite})
  }



  render(){

    let slicedText;
    if(this.props.blog.length >= 200){
      slicedText = `${this.props.blog.slice(0,200)}...`
    } 
    else{
      slicedText = `${this.props.blog}...`;
    }

    let formatted = moment(this.props.blog.createdAt).format('D MMMM YYYY');

    return(
      <Container>
        <Row>

          <Col lg="4">
              <img className="img-fluid blog-image blog-list-image" 
                  src={this.props.image} 
                  alt="Sample image"
                />
          </Col>

          <Col lg="8" className="blog-info">

                <h6 className="font-weight-bold mb-3">
                <Fa icon="suitcase" className="pr-2">
                </Fa>{this.props.category}</h6>

              <a className="indigo-text" onClick={this.addToFavourites}>
                <Fa 
                  className=""
                  icon="star" 
                  size="1x"
                  style={{color:this.state.favourite ? '#fff600' : 'gray'}}/>
                  <small>Add to favourite</small>
              </a>

              <h3 className="font-weight-bold mb-3 p-0"><strong>
                {this.props.title}
              </strong></h3>
              <p>
                {slicedText}
              </p>

              <p>by 
                <a>
                  <strong> Simon Sisay</strong>
                </a>
              </p>
              <p>{formatted}</p>

              <div className="blog-read-and-bookmark">
                  <Link to={`/blog/${this.props.id}`}>
                      <Button color="indigo" size="md" className="waves-light ">
                        Read more
                       </Button>
                  </Link>

                <div className="bookmark">
                  <Fa 
                    className="float-right mr-5 bookmark-icon" 
                    onClick={this.bookmarkArticle}
                    icon="bookmark" 
                    style={{color:this.state.bookmarked ? 'orange' : 'gray', cursor:'pointer'}}
                  />
                  <small className="float-right mr-5">Bookmark</small>
                </div>
              </div>

          </Col>
        </Row>
        <hr className="my-5"/>
      </Container>
    );
  }
}


export default Blog;