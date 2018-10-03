import React, { Component } from 'react';
import { Container, Row, Col, Fa, Button} from 'mdbreact';
import './common.css'
import { Link } from 'react-router-dom'
import moment from 'moment'
import axios from 'axios'

class Blog extends Component{
  constructor(props){
    super(props);
    this.state = {
      bookmarked:false,
      
    }
  }



  bookmarkArticle = () => {
    this.setState({bookmarked:!this.state.bookmarked})
    axios({
      method:'post',
      url:'https://ethblogi1.herokuapp.com/api/blog/readLater',
      headers:{
          token:'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjQxNTFkNjFjLWFlYWQtNDRjNC1hYTY1LTcwY2NhMzNjMTljNCIsImdvb2dsZV9pZCI6IjExMTE1NTQ3MzM0MTk3MzQwODk3NiIsImZ1bGxfbmFtZSI6IlNpbW9uIFNpc2F5IiwiaW1hZ2UiOiJodHRwczovL2xoNC5nb29nbGV1c2VyY29udGVudC5jb20vLUNJRjRKbXhrZkw0L0FBQUFBQUFBQUFJL0FBQUFBQUFBQUFjL0c2RDhrajV3YlVvL3Bob3RvLmpwZz9zej01MCIsImVtYWlsIjoic2ltb25zaXNheTlAZ21haWwuY29tIiwiaXNzdWVkX2RhdGUiOiIyMDE4LTEwLTAyVDA5OjE1OjA3LjYzN1oiLCJleHBpcmVkX2RhdGUiOiIyMDE4LTEwLTAyVDE1OjE1OjA3LjYzN1oiLCJpYXQiOjE1Mzg0NzE3MDd9.lP2UpZQjrTXsyhSs-8QXito2AlSKGZDC5NQPhVs3VVQ',
     },
      data:{
        title:this.props.title,
        user_id:this.props.userId,
        blog_id:this.props.id,
      }
    })
    .then(response => {
      console.log(response)
    })
  }


  render(){

    let slicedText;
    if(this.props.blog.length >= 200){
      slicedText = `${this.props.blog.slice(0,200)}...`
    } 
    else{
      slicedText = `${this.props.blog}...`;
    }

    let formatted = moment(this.props.createdAt).format('D MMMM YYYY');

    return(
      <Container>
        <Row>

          <Col lg="4">
              <img className="img-fluid blog-image blog-list-image" 
                  src={this.props.image} 
                  alt={this.props.title}
                />
          </Col>

          <Col lg="8" className="blog-info">

                <h6 className="font-weight-bold mb-3">
                <Fa icon="suitcase" className="pr-2">
                </Fa>{this.props.category}</h6>



              <h3 className="font-weight-bold mb-3 p-0"><strong>
                {this.props.title}
              </strong></h3>
              <p>
                {slicedText}
              </p>

              <p>by 
                <Link to={{
                  pathname:`/user/simonsisay`,
                  state:{
                    /*id:this.props.userId*/
                    id:'3wwsef34w543w53'
                  }
                }}
                >
                  <strong> Simon Sisay </strong>
                </Link>
              </p>
              <p>{formatted}</p>

              <div className="blog-read-and-bookmark">
                  <Link to={`/blog/${this.props.id}`}>
                      <Button 
                        color="indigo" size="md" 
                        className="waves-light "
                      >
                        Read more
                       </Button>
                  </Link>
              {
              this.props.isAuth 
              ? 
                 <div className="bookmark">
                  <Fa 
                    className="float-right mr-5 bookmark-icon" 
                    onClick={this.bookmarkArticle}
                    icon="bookmark" 
                    style={{color:this.state.bookmarked ? 'orange' : 'gray', cursor:'pointer'}}
                  />
                  <small className="float-right mr-5">read later</small>
                </div>
              : 
                ''
              }
              </div>

          </Col>
        </Row>
        <hr className="my-5"/>
      </Container>
    );
  }
}


export default Blog;