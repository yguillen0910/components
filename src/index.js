import React from "react";
import ReactDOM from "react-dom";
import faker from "faker";
import CommentDetail from "./CommentDetail";
import ApprovalCard from "./ApprovalCard";

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <CommentDetail
          author="Sam"
          pic={faker.image.avatar()}
          timeAgo="Today at 6:00PM"
          comment="Nice blog!"
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="Alex"
          pic={faker.image.avatar()}
          timeAgo="Today at 7:00PM"
          comment="Nice 2332 blog!"
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="Jane"
          pic={faker.image.avatar()}
          timeAgo="Today at 8:00PM"
          comment="Nice 2121 blog!"
        />
      </ApprovalCard>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
