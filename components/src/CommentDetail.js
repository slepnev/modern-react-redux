import React from 'react';

const CommentDetail = (props) => {
  return (
    <div className="comment">
      <a href="/" className="avatar">
        <img src={props.avatar} alt={props.author}/>
      </a>
      <div className="content">
        <a href="/" className="author">
          {props.author}
        </a>
        <div className="metadata">
            <span className="date">
              Today at 6:00PM
            </span>
        </div>
        <div className="text">
          {props.text}
        </div>
      </div>
    </div>
  );
};

export default CommentDetail;