import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
  const comments = [
    {
      author: faker.name.firstName(),
      avatar: faker.image.avatar(),
      text: faker.lorem.lines(1),
    },
    {
      author: faker.name.firstName(),
      avatar: faker.image.avatar(),
      text: faker.lorem.lines(1),
    },
    {
      author: faker.name.firstName(),
      avatar: faker.image.avatar(),
      text: faker.lorem.lines(1),
    },
  ];

  return (
    <div className="ui container comments">
      {comments.map((comment, key) => (
        <ApprovalCard>
          <CommentDetail
            key={key}
            author={comment.author}
            avatar={comment.avatar}
            text={comment.text} />
        </ApprovalCard>
      ))}

    </div>
  )
};

ReactDOM.render(
  <App/>,
  document.querySelector('#root')
);
