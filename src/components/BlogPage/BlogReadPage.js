import React, { Component } from 'react';
import { Container, Row, Col, Card, CardBody, Mask, Fa, View, Button} from 'mdbreact';
import axios from 'axios'
import moment from 'moment'
import BlogFooter from './BlogFooter'
import CommentSection from './CommentSection'

class BlogPage extends Component {
  constructor(props){
    super(props);
    this.state = {
      liked:false,
      blog:{},
      likes:0,
      comments:{},
      isSpining:false,
      errorMessage:'',
      author:'Simon Sisay',
      favourite:false,
      openComment:false
    }
  }


  componentDidMount(){
    this.setState({isSpining:true})
    
    axios.get(`https://ethblogi1.herokuapp.com/api/blog/${this.props.blogId}`)
    .then(response => {
      console.log(response)
      this.setState({blog:response.data[0].data, isSpining:false, likes:response.data[0].data.like, liked:false})

    }).catch((error) => {
      console.log(error)
      this.setState({errorMessage:'Something went wrong . Please refresh the page !'})
    })

    /*********** Check if this article was added to favourites ******************/

    axios({
      method:'get',
      url:'https://ethblogi1.herokuapp.com/api/blog/get/Favorite',
      headers:{
          token:'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjQxNTFkNjFjLWFlYWQtNDRjNC1hYTY1LTcwY2NhMzNjMTljNCIsImdvb2dsZV9pZCI6IjExMTE1NTQ3MzM0MTk3MzQwODk3NiIsImZ1bGxfbmFtZSI6IlNpbW9uIFNpc2F5IiwiaW1hZ2UiOiJodHRwczovL2xoNC5nb29nbGV1c2VyY29udGVudC5jb20vLUNJRjRKbXhrZkw0L0FBQUFBQUFBQUFJL0FBQUFBQUFBQUFjL0c2RDhrajV3YlVvL3Bob3RvLmpwZz9zej01MCIsImVtYWlsIjoic2ltb25zaXNheTlAZ21haWwuY29tIiwiaXNzdWVkX2RhdGUiOiIyMDE4LTEwLTAyVDA5OjE1OjA3LjYzN1oiLCJleHBpcmVkX2RhdGUiOiIyMDE4LTEwLTAyVDE1OjE1OjA3LjYzN1oiLCJpYXQiOjE1Mzg0NzE3MDd9.lP2UpZQjrTXsyhSs-8QXito2AlSKGZDC5NQPhVs3VVQ',
      }
    })
    .then(response => {
      console.log(response.data[1].rows)
      response.data[1].rows.map(item => {
        if(item.blog_id === this.props.blogId){
          this.setState({favourite:true})
        }
        else 
          return item
      })
    })
    .catch(error => {
      console.log(error)
    })
  }



  toggleComment = () => {
    this.setState({openComment:!this.state.openComment})
  }


  likeOrUnlikeArticle = () => {

    if(this.state.liked){
      this.setState({liked:false, likes:this.state.likes -= 1})
        axios({
          method:'get',
          url:`https://ethblogi1.herokuapp.com/api/unlike/${this.props.blogId}`,
          headers:{
           token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjQxNTFkNjFjLWFlYWQtNDRjNC1hYTY1LTcwY2NhMzNjMTljNCIsImdvb2dsZV9pZCI6IjExMTE1NTQ3MzM0MTk3MzQwODk3NiIsImZ1bGxfbmFtZSI6IlNpbW9uIFNpc2F5IiwiaW1hZ2UiOiJodHRwczovL2xoNC5nb29nbGV1c2VyY29udGVudC5jb20vLUNJRjRKbXhrZkw0L0FBQUFBQUFBQUFJL0FBQUFBQUFBQUFjL0c2RDhrajV3YlVvL3Bob3RvLmpwZz9zej01MCIsImVtYWlsIjoic2ltb25zaXNheTlAZ21haWwuY29tIiwiaXNzdWVkX2RhdGUiOiIyMDE4LTA5LTI5VDA4OjQ5OjM2LjcyNVoiLCJleHBpcmVkX2RhdGUiOiIyMDE4LTA5LTI5VDE0OjQ5OjM2LjcyNVoiLCJpYXQiOjE1MzgyMTA5NzZ9.PMxq8VCt10lZMmgLzS8BPrwUA-OV2AywCz8f1141pUI",
          }
          }).then(response => {
            console.log(response)

          }).catch(error => console.log(error))
    }

    else {
      this.setState({liked:true, likes:this.state.likes += 1})
        axios({
          method:'get',
          url:`https://ethblogi1.herokuapp.com/api/Like/${this.props.blogId}`,
          headers:{
              token:'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjQxNTFkNjFjLWFlYWQtNDRjNC1hYTY1LTcwY2NhMzNjMTljNCIsImdvb2dsZV9pZCI6IjExMTE1NTQ3MzM0MTk3MzQwODk3NiIsImZ1bGxfbmFtZSI6IlNpbW9uIFNpc2F5IiwiaW1hZ2UiOiJodHRwczovL2xoNC5nb29nbGV1c2VyY29udGVudC5jb20vLUNJRjRKbXhrZkw0L0FBQUFBQUFBQUFJL0FBQUFBQUFBQUFjL0c2RDhrajV3YlVvL3Bob3RvLmpwZz9zej01MCIsImVtYWlsIjoic2ltb25zaXNheTlAZ21haWwuY29tIiwiaXNzdWVkX2RhdGUiOiIyMDE4LTA5LTMwVDA5OjExOjUyLjc5OVoiLCJleHBpcmVkX2RhdGUiOiIyMDE4LTA5LTMwVDE1OjExOjUyLjc5OVoiLCJpYXQiOjE1MzgyOTg3MTJ9.9JlXyM_Sut8QSbwz5-0oQPwXPOlZ2iZKA8CpcDFDrXY'
           }})
          .then(response => {
            console.log(response)

          }).catch(error => console.log(error))
    }
  } 


  tweetBlog = () => {
    const location = window.location.href;
    console.log(location)
    window.open('http://twitter.com/home?status=' + location, '', 'menubar = no, toolbar = no, resizable = yes, scrollbars = yes, height = 250, width = 800, top = 150');
  }



  addToFavourites = () => {
    this.setState({favourite:!this.state.favourite})
      axios({
          method:'post',
          url:'https://ethblogi1.herokuapp.com/api/blog/Favorite',
          headers:{
            token:'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjQxNTFkNjFjLWFlYWQtNDRjNC1hYTY1LTcwY2NhMzNjMTljNCIsImdvb2dsZV9pZCI6IjExMTE1NTQ3MzM0MTk3MzQwODk3NiIsImZ1bGxfbmFtZSI6IlNpbW9uIFNpc2F5IiwiaW1hZ2UiOiJodHRwczovL2xoNC5nb29nbGV1c2VyY29udGVudC5jb20vLUNJRjRKbXhrZkw0L0FBQUFBQUFBQUFJL0FBQUFBQUFBQUFjL0c2RDhrajV3YlVvL3Bob3RvLmpwZz9zej01MCIsImVtYWlsIjoic2ltb25zaXNheTlAZ21haWwuY29tIiwiaXNzdWVkX2RhdGUiOiIyMDE4LTA5LTMwVDA4OjU5OjU5Ljg3MVoiLCJleHBpcmVkX2RhdGUiOiIyMDE4LTA5LTMwVDE0OjU5OjU5Ljg3MVoiLCJpYXQiOjE1MzgyOTc5OTl9.25YWTHYcC7QTEKA4GwObrG4S6uxjE811MQww0nNzPwo'        },
          data:{
            blog_id:this.props.blogId,
            title:this.state.blog.title
          }
        }).then(response => {
          console.log(response)

        }).catch(error => {
          console.log(error)
        })
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

             <BlogFooter 
              likes={this.state.likes}
              likeOrUnlikeArticle={this.likeOrUnlikeArticle}
              toggleComment={this.toggleComment}
              tweetBlog={this.tweetBlog}
              favourite={this.state.favourite}
              addToFavourites={this.addToFavourites}
              liked={this.state.liked}
             />
             <CommentSection 
                openComment={this.state.openComment}
                blogId={this.props.blogId}
                userId={this.state.blog.user_id}
             />
            </Container>
      )
   }
}


export default BlogPage;