import React, { Component } from 'react';
import { Container, Row, Col, Card, CardBody, Mask, Fa, View, Button} from 'mdbreact';
import axios from 'axios'
import moment from 'moment'

class BlogPage extends Component {
  constructor(props){
    super(props);
    this.state = {
      liked:false,
      blog:{},
      likes:0,
      comments:{},
      isSpining:false,
      errorMessage:''
    }
  }


  componentDidMount(){
    console.log(this.props.blogId)

    this.setState({isSpining:true})
    
    axios.get(`https://ethblogi1.herokuapp.com/api/blog/${this.props.blogId}`)
    .then(response => {
      console.log(response)
      this.setState({blog:response.data[0].data, isSpining:false})

    }).catch((error) => {
      console.log(error)
      this.setState({errorMessage:'Something went wrong . Please refresh the page !'})
    })
  }

  likeArticle = () => {
    this.setState({liked:!this.state.liked})
      followCategory = () => {
        axios({
          method:'post',
          url:'https://ethblogi1.herokuapp.com/api/Follow/Category',
          headers:{
            token:'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjkxNmQyOTY4LTQ0NTgtNDJhYS1iNmY2LWQ2YWY5Y2VlMjk3OCIsImdvb2dsZV9pZCI6IjExMTE1NTQ3MzM0MTk3MzQwODk3NiIsImZ1bGxfbmFtZSI6IlNpbW9uIFNpc2F5IiwiaW1hZ2UiOiJodHRwczovL2xoNC5nb29nbGV1c2VyY29udGVudC5jb20vLUNJRjRKbXhrZkw0L0FBQUFBQUFBQUFJL0FBQUFBQUFBQUFjL0c2RDhrajV3YlVvL3Bob3RvLmpwZz9zej01MCIsImVtYWlsIjoic2ltb25zaXNheTlAZ21haWwuY29tIiwiaXNzdWVkX2RhdGUiOiIyMDE4LTA5LTI1VDA5OjE3OjU1KzAwOjAwIiwiZXhwaXJlZF9kYXRlIjoiMjAxOC0wOS0yNVQxNToxNzo1NS42MjNaIiwiaWF0IjoxNTM3ODY3MDc1fQ.Qbv8l0Wn1Ye6Alh8NeTX4gXsE9YrQk0djBn0BcqDOA8'
          },
          data:{
            likes:this.state.likes
          }
        })
        .then(response => {
          console.log(response)
        })
    }
  }


  render(){
      let formatted = moment(this.state.blog.createdAt).format('D MMMM YYYY');

      return (
        this.state.errorMessage 
      ? 
          <h4 className="error-message">{this.state.errorMessage}</h4>
      :
      this.state.isSpining ?
            <Fa className="spinner-icon" icon="spinner" spin size="3x" /> 
      :
          <Container className="blog-read-page">
            <Row className="blogg">
              <Col md="9">
                <Card reverse>

                    <View cascade hover waves>
                        <img src={this.state.blog.image} 
                          className="img-fluid blog-image"/>
                        
                        <Mask overlay="white-slight" className="waves-light"/>
                    </View>

                  <CardBody cascade className="text-center">
                      <h2 className="font-weight-bold"><a>{this.state.blog.title}</a></h2>
                      <p>Written by 
                        <a><strong> Simon Sisay </strong></a>
                      </p>
                      <p>{formatted}</p>
                  </CardBody>
                </Card>

                <Container className="mt-5">
                   <p>{this.state.blog.content}</p>
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
                    <small>100</small>
                </div>

                <div className="twitter-icon">
                  <Fa icon="twitter" size="2x" style={{color:'skyblue'}}/>
                </div>

              </div>
              <hr className="mb-5 mt-4"/>
            </Container>
      )
   }
}


export default BlogPage;