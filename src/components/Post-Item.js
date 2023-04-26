import React from 'react';

class PostItem extends React.Component {
  render() {
    const { title, content, author, date, category } = this.props;

    return (
      <div>
        <h3>{title}</h3>
        <p>{content}</p>
        <p>Author: {author}</p>
        <p>Date: {date}</p>
        <p>Category: {category}</p>
      </div>
    );
  }
}

export default PostItem;