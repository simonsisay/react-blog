import React, { Component } from 'react';
import { Container, Row, Col, Card, CardBody, Mask, Fa, View } from 'mdbreact';
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
      comments:[],
      isSpining:false,
      errorMessage:'',
      author:'Simon Sisay',
      favourite:false,
      openComment:false,
      newComment:''
    }
  }


  componentDidMount(){
    this.setState({isSpining:true})
    
    axios.get(`https://ethblogi1.herokuapp.com/api/blog/${this.props.blogId}`)
    .then(response => {
      console.log(response.data[2].comments.rows)
      this.setState({
          blog:response.data[0].data, 
          isSpining:false, likes:response.data[0].data.like, 
          liked:false,
          comments:response.data[2].comments.rows
      })

    }).catch((error) => {
      console.log(error)
      this.setState({errorMessage:'Something went wrong . Please refresh the page !'})
    })

    /*********** Check if this article was added to favourites ******************/

    axios({
      method:'get',
      url:'https://ethblogi1.herokuapp.com/api/blog/get/Favorite',
      headers:{
        authorization:this.props.token
      }
    })
    .then(response => {
      response.data[1].rows.forEach(item => {
        if(item.blog_id === this.props.blogId){
          this.setState({favourite:true})
        }
      })
    })
    .catch(error => {
      console.log(error)
    })
  }

  addNewComment = () => {
    axios({
      method:'post',
      url:'https://ethblogi1.herokuapp.com/api/feedback/New',
      headers:{
        authorization:this.props.token
      },
      data:{
        blog_id:this.props.blogId,
        comments:this.state.newComment,
        user_id:this.props.userId
      }
    }).then(response => {
      console.log(response)
      this.setState({comments:[...this.state.comments, response.data[0]]})
      this.setState({newComment:''})
    })
  }


  handleInputChange = (e) => {
    this.setState({newComment:e.target.value})
  }


  toggleComment = () => {
    this.setState({openComment:!this.state.openComment})
  }


  likeOrUnlikeArticle = () => {

    if(this.state.liked){
      this.setState({
        liked:false, 
        likes:this.state.likes -= 1
    })
        axios({
          method:'get',
          url:`https://ethblogi1.herokuapp.com/api/unlike/${this.props.blogId}`,
          headers:{
            authorization:this.props.token
          }
          }).then(response => {
            console.log(response)

          }).catch(error => console.log(error))
    }

    else {
      this.setState({
        liked:true, 
        likes:this.state.likes += 1
      })
        axios({
          method:'get',
          url:`https://ethblogi1.herokuapp.com/api/Like/${this.props.blogId}`,
          headers:{
            authorization:this.props.token
           }})
          .then(response => {
            console.log(response)

          }).catch(error => console.log(error))
    }
  } 


  tweetBlog = () => {
    const location = window.location.href;
    window.open('http://twitter.com/home?status=' + location, '', 'menubar = no, toolbar = no, resizable = yes, scrollbars = yes, height = 250, width = 800, top = 150');
  }



  addToFavourites = () => {
    this.setState({favourite:!this.state.favourite})
      axios({
          method:'post',
          url:'https://ethblogi1.herokuapp.com/api/blog/Favorite',
          headers:{
            authorization:this.props.token
         },
          data:{
            blog_id:this.props.blogId,
            title:this.state.blog.title
          }
        }).then(response => {

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
                        <img 
                          src={this.state.blog.image} 
                          className="img-fluid blog-image"
                          alt={this.state.title}
                          />
                        
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
                isAuth={this.props.isAuth}
             />
             <CommentSection 
                openComment={this.state.openComment}
                blogId={this.props.blogId}
                userId={this.state.blog.user_id}
                comments={this.state.comments}
                token={this.props.token}
                user={this.props.user}
                addNewComment={this.addNewComment}
             />
            </Container>
      )
   }
}


export default BlogPage;