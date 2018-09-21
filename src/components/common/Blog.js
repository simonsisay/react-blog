import React, { Component } from 'react';
import { Container, Row, Col, Mask, Fa, View, Button} from 'mdbreact';
import './common.css'
import { Link } from 'react-router-dom'

class Blog extends Component{
  constructor(props){
    super(props);
    this.state = {
      bookmarked:false
    }
  }


  bookmarkArticle = () => {
    this.setState({bookmarked:!this.state.bookmarked})
  }


  render(){
    return(
      <Container>
        <Row>

          <Col lg="5">
            <View className="rounded z-depth-2 mb-lg-0 mb-4" hover waves>
              <img className="img-fluid" 
                  src="https://mdbootstrap.com/img/Photos/Others/img (28).jpg" 
                  alt="Sample image"
                />
              <a>
                <Mask overlay="white-slight"/>
              </a>
            </View>

          </Col>
          <Col lg="7">

              <a className="indigo-text">
                <h6 className="font-weight-bold mb-3">
                <Fa icon="suitcase" className="pr-2">
                </Fa>Food</h6>
              </a>

              <h3 className="font-weight-bold mb-3 p-0"><strong>Title of the news</strong></h3>
              <p>
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, 
                sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. 
                Neque porro qui dolorem ipsum quia sit amet.
              </p>
              <p>by 
              <a>
                <strong> Simon Sisay</strong>
              </a>, 11/08/2018</p>

              <div className="blog-read-and-bookmark">
                  <Link to="/blog">
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