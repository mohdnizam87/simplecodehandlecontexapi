import React from 'react';

/*export default class Index extends React.Component {

  render() {
   // console.log (this.this.props.name)// ×TypeError: Cannot read property 'props' of undefined
    return (
      <div>
        <h2>My name is {this.props.name}</h2>
      </div>
    )
  }
}
 result: My name is Nizam
*/

export default class Index extends React.Component {

    constructor(props) {
        super(props)
        this.namaanda ={
            name: this.props.name
        }
    }
   
   render() {
    //console.log(props)
     return (
       <div>
         <h2>My name is {this.namaanda.name}</h2>
       </div>
     )
   }
 }
 //result: My name is Nizam