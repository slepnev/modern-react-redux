import React from 'react';
import faker from 'faker';


const CommentDetail = () => {
  return (
    <div className="comment">
      <a href="/" className="avatar">
        <img src={faker.image.avatar()} alt="avatar"/>
      </a>
      <div className="content">
        <a href="/" className="author">
          {faker.name.firstName()}
        </a>
        <div className="metadata">
            <span className="date">
              Today at 6:00PM
            </span>
        </div>
        <div className="text">
          {faker.lorem.lines(1)}
        </div>
      </div>
    </div>
  );
};

export default CommentDetail;