import React from 'react';
import ReactDOM from 'react-dom/client';
// import Car from './components/Car';
// import './index.css';
// import App from './App';
// // import Arraymethod from './components/Arraymethod';
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//     {/* <Arraymethod /> */}
//     <h1 className='display-1'>Good Morning</h1>
//     <p>Welcome to Ebrain Technology</p>
//   </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
// const myelement = <h1 className='display-1'>Hello {6*2} Welcome to Ebrain Technology</h1>;
// ( <table>
//     <tr>
//       <th>Name</th>
//     </tr>
//     <tr>
//       <td>Venkat</td>
//     </tr>
//     <tr>
//       <td>Nani</td>
//     </tr>
//   </table>
// );
// const container = document.getElementById('root');
// const root = ReactDOM.createRoot(container);
// root.render(myelement);
// function Car() {
//   return <h4>My Car leaves in my garbage</h4>
// }
// function Garbage() {
//   return (
//     <div className='text-center'>
//       <h1>Who leaves in my garbage ?</h1>
//       <Car/>
//     </div>
//   )
// }
// class Garbage extends React.Component{
//   render(){
//     return <h1>Welcome to Ebrain Technology</h1>
//   }
// }
// class Garbage extends React.Component{
//   constructor(){
//     super();
//     this.state = {text: "World !"};
//   }
//   render(){
//     return <h3>Hello {this.state.text} Good Afternoon</h3>
//   }
// }
// class Car extends React.Component {
//   render(){
//     return <h4>That is my car ,I only parked my car in garbage</h4>
//   }
// }
// class Garbage extends React.Component {
//   render(){
//     return (
//       <div className='text-center'>
//         <h1>Who Parked the car in garbage ?</h1>
//         <Car />
//       </div>
//     );
//   }
// }
class Car extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      Brand : "Maruti Suzuki",
      Color : "Purple",
      Model : "Brezzer",
      Year : 2024
    };
  }
  render () {
    return (
      <div>
        <h1>My car name {this.state.Brand}</h1>
        <p>
          It is a {this.state.Color} color and Model is {this.state.Model} and Year is {this.state.Year}
        </p>
      </div>
    )
  }
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Car />)