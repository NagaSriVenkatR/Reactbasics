import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css'
// import { Tagss } from './FunctionalTag';
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
// class Car extends React.Component{
//   constructor(props) {
//     super(props);
//     this.state = {
//       Brand : "Maruti Suzuki",
//       Color : "Purple",
//       Model : "Brezzer",
//       Year : 2024
//     };
//   }
//   render () {
//     return (
//       <div>
//         <h1>My car name {this.state.Brand}</h1>
//         <p>
//           It is a {this.state.Color} color and Model is {this.state.Model} and Year is {this.state.Year}
//         </p>
//       </div>
//     )
//   }
// }
// class Car extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       Brand: "Maruti Suzuki",
//       Color : "Purple",
//       Model : "Brezzer",
//       Year : 2024
//     };
//   }
//   changeColor = () =>{
//     this.setState({Color: "Blue"});
//   }
//   render(){
//     return(
//       <div>
//         <h1>My car name {this.state.Brand}</h1>
//         <p>
//           It is a {this.state.Color} color and Model is {this.state.Model} and Year is {this.state.Year}
//         </p>
//         <button type='button' onClick={this.changeColor}>
//           Change Color
//         </button>
//       </div>
//     )
//   }
// }
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Car />)
// class Header extends React.Component {
//   constructor(props){//Using Constructor 
//     super(props);
//     this.state = {favoriteColor : "Red"};
//   }
//   render(){
//     return (
//       <div>
//         <h1>My Favorite Color is {this.state.favoriteColor}</h1>
//       </div>
//     );
//   }
// }
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Header />) 
// class Header extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {favoriteColor : "Purple"};
//   }
//   static getDerivedStateFromProps(props,state){ // getDerivedStateFromProps
//     return {favoriteColor : props.favcol};
//   }
//   render(){
//     return(
//       <div>
//         <h1>My Favorite Color is {this.state.favoriteColor}</h1>
//       </div>
//     );
//   }
// }
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Header favcol="Violet" />)
// class Header extends React.Component{
//   render(){//using render
//     return(
//       <div>
//         <h1>This is a content using Header Component</h1>
//       </div>
//     );
//   }
// }
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Header />)
// class Header extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {favoriteColor : "Purple"};
//   }
//   componentDidMount(){//using componentDidMount
//     setTimeout(() => {
//       this.setState({favoriteColor:"Violet"});
//     }, 3000);
//   }
//   render(){
//     return (
//       <div>
//         <h1>My Favorite Color is {this.state.favoriteColor}</h1>
//       </div>
//     );
//   }
// }
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Header/>)
// class Header extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {favoriteColor : "Red"};
//   }
//   // static getDerivedStateFromProps(props,state){
//   //   return {favoriteColor : props.favcol};
//   // }
//   // shouldComponentUpdate (){
//   //   return true;
//   // }
//   changeColor = () =>{
//     this.setState({favoriteColor : "Blue"});
//   }
//   render() {
//     return (
//       <div>
//         <h1>My Favorite Color is {this.state.favoriteColor}</h1>
//         <button type='button' onClick={this.changeColor}>Change Color</button>
//         <Tagss textss={"person"}/>
//       </div>
//     )
//   }
// }
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Header />)
// class Header extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {favoriteColor : "Red"};
//   }
//   componentDidMount(){
//     setTimeout(() => {
//       this.setState({favoriteColor : "Yellow"})
//     }, 2000);
//   }
//   // getSnapshotBeforeUpdate(prevProps,prevState){
//   //   document.getElementById("div1").innerHTML = "Before the Update, the favorite was "+prevState.favoriteColor;
//   // }
//   componentDidUpdate(){
//     document.getElementById("div2").innerHTML = "The update favorite os this : "+ this.state.favoriteColor;
//   }
//   render(){
//     return (
//       <div>
//         <h1>My Favorite Color is {this.state.favoriteColor}</h1>
//         <div id='div1'></div>
//         <div id='div2'></div>
//       </div>
//     )
//   }
// }
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Header/>)
// class Container extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {show:true};
//   }
//   delHeader = () =>{
//     this.setState({show:false});
//   }
//   render(){
//     let myHeader;
//     if(this.state.show){
//       myHeader = <Child />
//     };
//     return(
//       <div>
//         {myHeader}
//         <button type='button' onClick={this.delHeader}>Delete Header</button>
//       </div>
//     )
//   }
// }
// class Child extends React.Component{
//   componentWillUnmount(){
//     alert("The component named Header is about to be unmounted");
//   }
//   render(){
//     return (
//       <div>
//         <h1>Hello Good Afternoon</h1>
//       </div>
//     );
//   }
// }
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Container/>)
// function Car(props) {
//   return <h2>I have a {props.brand} brand car!</h2>
// }
// const myElement = <Car brand="Ford"/>;
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(myElement);
// function Car(props) {
//  return <h4>My {props.brand} brand car was lives in the garbage</h4>; 
// }
// function Garbage() {
//   return(
//     <div>
//       <h1>Who lives in my Garbage</h1>
//       <Car brand="ford"/>
//     </div>
//   )
// }
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Garbage />);
// function Car(props) {
//   return <h6>My car brand {props.name.brand} model name is {props.name.model}</h6>;
// }
// function Garbage() {
//   const carInfo = {brand : "Marutisuzuki" , model:"Breezer"};
//   return(
//     <div>
//       <h1>Who lives in my Garbage ?</h1>
//       <Car name={carInfo} />
//     </div>
//   )
// }
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Garbage/>);
// function Football(params) {
//   const shoot = () =>{
//     alert("Great Shot !");
//   }
//   return(
//     <div>
//       <button onClick={shoot}>Take the Shot !</button>
//     </div>
//   )
// }
// function Football() {
//   const shoot = (a) =>{
//     alert(a);
//   }
//   return(
//     <div>
//       <button className='btn btn-primary' onClick={() => shoot("Goal !")} >Take the Shot !</button>
//     </div>
//   )
// }
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Football/>)
function MissedGoal() {
  return <h1>Missed !</h1>;
}
function MadeGoal() {
  return <h1>Goal !</h1>;
}
function Goal(props) {
  const isGoal = props.isGoal;
  if(isGoal){
    return <MadeGoal />
  }
  return <MissedGoal />
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Goal isGoal = {true} />)