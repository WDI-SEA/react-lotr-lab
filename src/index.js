import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Hello from "./Movie";
import reportWebVitals from "./reportWebVitals";

const postThings = {
  postTitle: "X!",
  author: "Y",
  content: "Z",
  comments: ["P", "L"],
};

ReactDOM.render(
  <React.StrictMode>
    <Hello
      postTitle={postThings.postTitle}
      author={postThings.author}
      content={postThings.content}
      comments={postThings.comments}
    />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
