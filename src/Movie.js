// pull in react //
import React from "react";
import { Component } from "react";

//define a react component//
class Hello extends Component {
  //render a UI(user interface) component
  render() {
    //this method allows us to return some
    //UI html-ish code
    return (
      <h1>
        Post: {this.props.postTitle} <br />
        Author: {this.props.author} <br />
        Content: {this.props.content}
        <br />
        Comment1: {this.props.comments[0]}
        <br />
        Comment2: {this.props.comments[1]}
        <br />
      </h1>
    );
    //data passed into component are props
  }
}

export default Hello;
