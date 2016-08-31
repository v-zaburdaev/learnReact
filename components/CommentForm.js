'use strict';

import InputString from "./InputString";
import Button from "./Button";



class CommentForm extends React.Component {
  render() {
    return (
      <div className="CommentForm">
        Hello, world! I am a CommentForm.
	<InputString value="hello world" label="Коммент" />
	<Button value="Ok" />
      </div>
    );
  }
}

export default CommentForm;


