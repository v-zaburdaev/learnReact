'use strict';

import CommentBox from "./components/CommentBox";

var data = [
  {id: 1, author: "Pete Hunt", text: "This is one comment"},
  {id: 2, author: "Jordan Walke", text: "This is *another* comment"}
];

$(function(){
	ReactDOM.render(
	  <CommentBox data={data}/>,
	  document.getElementById('content')
	);
});
