// pull in react //
// import { render } from "@testing-library/react";
import React from "react";
import { Component } from "react";

class Main extends Component {
  render() {
    const movies = [
      {
        title: "The Lord of the Rings: The Fellowship of the Rings",
        runtime: "2 hours 58 minutes",
      },
      {
        title: "The Lord of the Rings: The Two Towers",
        runtime: "2 hours 59 minutes",
      },
      {
        title: "The Lord of the Rings: The Return of the King",
        runtime: "3 hours 21 minutes",
      },
    ];

    //Show all 3 Movies
    const movieInfo = movies.map((movie) => {
      return <Main movie={movie} />;
    });

    return (
      <div className="Main">
        <h1>{movieInfo}</h1>
      </div>
    );
  }
}

//define a react component//
// class Main extends Component {
//   //render a UI(user interface) component
//   render() {
//     //this method allows us to return some
//     //UI html-ish code
//     return (
//       <div>
//         <h1>{this.props.title}</h1>
//         <p>{this.props.runtime}</p>
//       </div>
//     );
//     //data passed into component are props
//   }
// }

export default Main;
