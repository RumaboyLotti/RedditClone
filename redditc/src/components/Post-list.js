import React from 'react';
import PostItem from './Post-Item';


class Postlist extends React.Component{
    render(){
        return (
            <div>
        {posts.map(post => (
          <PostItem
            key={post.id}
            title={post.title}
            content={post.content}
            author={post.author}
            date={post.date}
            category={post.category}
          />
        ))}
      </div>
        );
    }
}

export default Postlist;