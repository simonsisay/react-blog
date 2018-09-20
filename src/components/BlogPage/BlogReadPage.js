import React, { Component } from 'react';
import { Container, Row, Col, Card, CardBody, Mask, Fa, View, Button} from 'mdbreact';

class BlogPage extends Component {
  constructor(props){
    super(props);
    this.state = {
      liked:false
    }
  }

  likeArticle = () => {
    this.setState({liked:!this.state.liked})
  }


  render(){
      return(
        <Container className="blog-read-page">
          <Row className="blogg">
            <Col md="10">
              <Card reverse>

                  <View cascade hover waves>
                      <img src="https://mdbootstrap.com/img/Photos/Slides/img%20(142).jpg" 
                        className="img-fluid"/>
                      <Mask overlay="white-slight" className="waves-light"/>
                  </View>

                <CardBody cascade className="text-center">
                    <h2 className="font-weight-bold"><a>Born a crime</a></h2>
                    <p>Written by <a><strong>Simon Sisay</strong></a>, 26/08/2018</p>
                </CardBody>
              </Card>

              <Container className="mt-5">
                <p>
                    At vero eos et accusamus et iusto odio dignissimos ducimus 
                    qui praesentium voluptatum deleniti atque corrupti quos dolores 
                    et quas molestias excepturi sint occaecati cupiditate non provident, 
                    similique sunt in culpa nemo enim ipsam voluptatem quia voluptas sit qui 
                    officia deserunt mollitia animi, id est laborum et dolorum fuga quidem 
                    rerum facilis est distinctio.
                </p>
                <p> 
                    Nam libero tempore, cum soluta nobis est eligendi optio cumque 
                    nihil impedit quo minus id quod maxime placeat facere possimus, 
                    omnis voluptas assumenda est, omnis dolor repellendus. Quis autem vel 
                    eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur. 
                    Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus 
                    saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae 
                    itaque earum rerum.
                </p>
                 <p> 
                    Nam libero tempore, cum soluta nobis est eligendi optio cumque 
                    nihil impedit quo minus id quod maxime placeat facere possimus, 
                    omnis voluptas assumenda est, omnis dolor repellendus. Quis autem vel 
                    eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur. 
                    Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus 
                    saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae 
                    itaque earum rerum.
                </p>
              </Container>
            </Col>
          </Row>

          <div className="article-footer">
              <div className="likes">
                  <Fa icon="heart" 
                    style={{color:this.state.liked ? 'red' : 'gray'}}
                    onClick={this.likeArticle}
                    className="heart-icon" 
                    size="2x"
                  />
                  <small>100 likes</small>
              </div>

              <div className="twitter-icon">
                <Fa icon="twitter" size="2x" style={{color:'skyblue'}}/>
              </div>

          </div>
          <hr className="mb-5 mt-4"/>

          </Container>

      );
    }
}
export default BlogPage;