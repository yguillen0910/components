import React from "react";
import ReactDOM from "react-dom";
import faker from "faker";
import CommentDetail from "./CommentDetail";

const App = () => {
  return (
    <div className="ui container comments">
      <CommentDetail
        author="Sam"
        pic={faker.image.avatar()}
        timeAgo="Today at 6:00PM"
        comment="Nice blog!"
      />
      <CommentDetail
        author="Alex"
        pic={faker.image.avatar()}
        timeAgo="Today at 7:00PM"
        comment="Nice 2332 blog!"
      />
      <CommentDetail
        author="Jane"
        pic={faker.image.avatar()}
        timeAgo="Today at 8:00PM"
        comment="Nice 2121 blog!"
      />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
