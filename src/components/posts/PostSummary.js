import React from 'react';
import moment from 'moment';

const PostSummary = ({post}) => {
  return (
      <div className="card z-depth-0 post-summary" style={{background: 'rgb(245,245,245,.8)'}} >
        <div className="card-content grey-text text-darken-3">
          <span className="card-title">{post.title}</span>	
          <p>Posted by { post.authorFirstName } { post.authorLastName }</p>
          <p className="grey-test"> On { moment(post.createdAt.toDate()).calendar() } </p>
        </div>
      </div>
  )
}

export default PostSummary;
