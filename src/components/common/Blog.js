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

  componentDidMount(){
   if(this.props.isAuth){
        axios({
          method:'get',
          url:'https://ethblogi1.herokuapp.com/api/blog/get/readLater',
          headers:{
            authorization:this.props.token
          }
        })
        .then(response => {
          response.data[1].rows.forEach(item => {
            if(item.blog_id === this.props.id){
              this.setState({bookmarked:true})
            }
          })
          console.log(response)
        })
        .catch(error => {
          console.log(error)
        })
      }
}



  bookmarkArticle = () => {
    this.setState({bookmarked:!this.state.bookmarked})
    axios({
      method:'post',
      url:'https://ethblogi1.herokuapp.com/api/blog/readLater',
      headers:{
        authorization:this.props.token
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
              {
                this.props.isAuth && this.props.ownAccount 
                ?
                  <div className="delete-edit">
                    <Link to={{
                      pathname:'/write',
                      state:{
                        title:this.props.title,
                        imageUrl:this.props.image,
                        category:this.props.category,
                        blog:this.props.blog,
                        id:this.props.id,
                        fromEdit:true
                      }
                    }}>
                      <Fa icon="edit" className="pr-2"  style={{cursor:'pointer'}}/>
                    </Link>
                       <Fa 
                          icon="trash" className="red-text" style={{cursor:'pointer'}}
                          onClick={() => this.props.toggleModal(this.props.id)}/>
                  </div>
                : ''
              }

              <h3 className="font-weight-bold mb-3 p-0">
                <strong>
                  {this.props.title}
                </strong>
              </h3>
              <p>
                {slicedText}
              </p>

              <p>by 
                <Link to={{
                  pathname:`/user/${this.props.writer.replace(' ', '')}`,
                  state:{
                    id:this.props.userId
                  }
                }}
                >
                  <strong> {this.props.writer} </strong>
                </Link>
              </p>
              <p>{formatted}</p>

              <div className="blog-read-and-bookmark">
                  <Link to={{
                      pathname:`/blog/${this.props.id}`,
                      state:{
                        writer:this.props.writer
                      }
                    }}
                  >
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
                !this.state.bookmarked 
                ? 
                   <div className="bookmark">
                    <Fa 
                      className="float-right mr-5 bookmark-icon" 
                      onClick={this.bookmarkArticle}
                      icon="bookmark" 
                    />
                    <small className="float-right mr-5">read later</small>
                  </div>
                : 
                  <small>bookmarked</small>
                : ''
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