import React from 'react'
import { Fa } from 'mdbreact'


const BlogFooter = (props) =>{
	console.log(props)
	return(
		<div className="article-footer">
		{
			props.isAuth 
			?
	       <div className="likes">
	           <Fa icon="heart" 
	             style={{color:props.liked ? 'red' : 'gray'}}
	             onClick={props.likeOrUnlikeArticle}
	             className="heart-icon" 
	             size="2x"
	           />
	           <small>{props.likes}</small>
	           {
	           	props.alreadyCommented 
	           	? 
	           		''
	           	:
		           <Fa 
		             icon="comment" className="comment-icon" size="2x" color="gray"
		             onClick={props.toggleComment}
		           />
		         }
	       </div>
	      : ''
	   }

	       <div className="twitter-icon">
	         <Fa 
	             icon="twitter" 
	             size="2x" 
	             style={{color:'skyblue'}} 
	             onClick={props.tweetBlog}
	           />
	         {
	         props.isAuth ?
	         
		         props.favourite 
		         ? 
		           <p className="fav"> Saved to favourite </p> 
		         :  
		         <a className="indigo-text" onClick={props.addToFavourites}>
		           <Fa 
		             className="fav"
		             icon="star" 
		             size="1x"
		           />
		             <small>Add to favourite</small>
		         </a>
		        : ''
		       }

	       </div>
     </div>
	)
}

export default BlogFooter