'use strict';

import Comment from "./Comment";

class CommentList extends React.Component{
  render() {
   var commentNodes = this.props.data.map(function(comment) {
      return (
        <Comment author={comment.author} key={comment.id}>
          {comment.text}
        </Comment>
      );
    });
    return (
      <div className="commentList">
        Hello, world! I am a CommentList.
	{commentNodes}
      </div>
    );
  }
}

export default CommentList;

