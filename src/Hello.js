import React, { Component } from 'react';

class Hello extends Component {
  render() {
    return (
      //tachyons https://tachyons.io/
      <div className="f1 tc">
        <h1>{this.props.greeting}</h1>
      </div>
    )
  }
}

// equivalent:
//
// const Hello = (props) => {
//   return (
//       <div className="f1 tc">
//         <h1>{props.greeting}</h1>
//       </div>
//     )
// }




export default Hello;
