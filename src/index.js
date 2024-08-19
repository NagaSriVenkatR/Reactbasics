import React, { createContext, useCallback, useContext, useEffect, useMemo, useReducer, useRef, useState } from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css'
import useFetch from './useFetch';
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
// function MissedGoal() {
//   return <h1>Missed !</h1>;
// }
// function MadeGoal() {
//   return <h1>Goal !</h1>;
// }
// function Goal(props) {
//   const isGoal = props.isGoal;
//   if(isGoal){
//     return <MadeGoal />
//   }
//   return <MissedGoal />
// }
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Goal isGoal = {true} />)
// function Garbage(props) {
//   const cars = props.cars;
//   return(
//     <div>
//       <h1>Garbage</h1>
//       {cars.length > 0 && <h4>You have a {cars.length} cars in a Garbage </h4>}
//     </div>
//   )
// }
// const cars = [];
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Garbage cars={cars}/>)
// function MissedGoal() {
//   return <h1>Missed !</h1>
// }
// function MadeGoal() {
//   return <h1>Goal !</h1>
// }
// function Goal(props) {
//   const isGoal = props.isGoal;
//   return (
//     <div>
//       {isGoal ? <MadeGoal /> : <MissedGoal />}
//     </div>
//   )
// }
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Goal isGoal={true}/>)
              // React Lists
// function Car(props) {
//   return <li> I am a {props.brand} brand car </li>
// }
// // function Garbage() {
// //   const cars = ["Ford","Audi","BMW","Toyoto","Tata"];
// //   return (
// //     <div>
// //       <h1>Who lives in my Garbage</h1>
// //       <ul>
// //         {cars.map((car)=> <Car brand={car}/>)}
// //       </ul>
// //     </div>
// //   )
// // }
// function Garbage() {
//   const cars = [{id:1,brand:'Ford'},{id:2,brand:'BMW'},{id:3,brand:'Audi'}];
//   return (
//     <div>
//       <h1>Who lives in my Garbage</h1>
//       <ul>
//         {cars.map((car) => <Car key={car.id} brand = {car.brand} />)}
//       </ul>
//     </div>
//   )
// }
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Garbage />)
                        //React Forms
// function MyForm() {
//   return(
//     <form className='row justify-content-center align-items-center my-5' action="">
//       <div className='form-floating col-md-6'>
//         <input className='form-control' type="text" placeholder='Enter your name'/>
//         <label className='form-input mx-2' htmlFor="floatingInput">Enter Your Name</label>
//       </div>
//     </form>
//   )
// }
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<MyForm />);
// function MyForm() {
//   const [inputs,setInputs] = useState({});
//   const [myCar,setMyCar] = useState("Please select any car");

//   const handleChange = (event) => {
//     const name = event.target.name;
//     const value = event.target.value;
//     setInputs(values => ({...values,[name]:value}))
//     setMyCar(event.target.value)
//   }
//   const [textarea,settextarea] = useState("Welcome to Ebrain Technology")
//   const handleText = (event) =>{
//     settextarea(event.target.value)
//   }
//   const handleSubmit = (event)=>{
//     event.preventDefault();
//     console.log(inputs);
//   }
//   return (
//     <form
//       className="row justify-content-center"
//       action=""
//       onSubmit={handleSubmit}
//     >
//       <div className="form-floating col-md-8 my-5">
//         <input
//           className="form-control"
//           type="text"
//           name="username"
//           value={inputs.username || ""}
//           placeholder="Enter your name"
//           onChange={handleChange}
//         />
//         <label className="form-label" htmlFor="floatingInputs">
//           Enter Your Name
//         </label>
//       </div>
//       <div className="form-floating col-md-8 my-5">
//         <input
//           className="form-control"
//           type="number"
//           name="age"
//           value={inputs.age || ""}
//           placeholder="Enter your age"
//           onChange={handleChange}
//         />
//         <label className="form-label" htmlFor="floatingInputs">
//           Enter Your Age
//         </label>
//       </div>
//       <div className="form-floating col-md-8 my-5">
//         <textarea
//           className="form-control"
//           name=""
//           value={textarea}
//           onChange={handleText}
//           id=""
//         ></textarea>
//         <label htmlFor="floatingInput">Comments </label>
//       </div>
//       <div className="form-floating col-md-8 my-5">
//         <select className='form-select' value={myCar} onChange={handleChange} name="" id="">
//           <option value="">Please select any car</option>
//           <option value="Ford">Ford</option>
//           <option value="BMW">BMW</option>
//           <option value="Toyota">Toyota</option>
//           <option value="Tata">Tata</option>
//         </select>
//       </div>
//       <div className="col-md-8">
//         <input type="submit" className="btn btn-success" />
//       </div>
//     </form>
//   );
// }
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<MyForm />)
                        //React Router
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Layout from "./pages/Layout";
// import Home from "./pages/Home";
// import Blog from "./pages/Blog";
// import Contact from "./pages/Contact";
// import Nopages from "./pages/Nopages";

// export default function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<Layout />}>
//           <Route index element={<Home />} />
//           <Route path="blogs" element={<Blog />} />
//           <Route path="contact" element={<Contact />} />
//           <Route path="*" element={<Nopages/>} />
//         </Route>
//       </Routes>
//     </BrowserRouter>
//   );
// }

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<App />);
                            //React Memo
// import Todo from './Todo';
// const App = () => {
//   const [count ,setCount] = useState(0);
//   const [todo] = useState(["todo 1","todo 2"]);
//   const increment  = () => {
//     setCount((count)=> count + 1);
//   }
//   return (
//     <div>
//       <Todo todo={todo} />
//       <hr />
//       <div>
//         Count :  {count}
//         <button className='btn btn-primary' onClick={increment}>
//           +
//         </button>
//       </div>
//     </div>
//   )
// }
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<App />)
                    //React sass
// import './my-sass.scss';
// const Header = () =>{
//   return(
//     <div>
//       <h1>Hello Style !</h1>
//       <p>Add a little Style !.</p>
//     </div>
//   )
// }
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<Header />)
                      //React Hooks
                      //useState
// function FavoriteColor() {
//   const [color,setColor] = useState("");
//   return (
//     <div className="row justify-content-center align-items-center text-center">
//       <h1 className="col-md-10">My Favorite Color is {color}!</h1>
//       <div className='col-md-4 d-flex justify-content-between'>
//         <button className='btn btn-primary' onClick={() => setColor("Blue")}>Blue</button>
//         <button className='btn btn-primary' onClick={() => setColor("Purple")}>Purple</button>
//         <button className='btn btn-primary' onClick={() => setColor("Violet")}>Violet</button>
//         <button className='btn btn-primary' onClick={() => setColor("Yellow")}>Yellow</button>
//         <button className='btn btn-primary' onClick={() => setColor("Orange")}>Orange</button>
//       </div>
//     </div>
//   );
// }
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<FavoriteColor />)
// function Car() {
//   const[brand,setBrand] = useState("KIA");
//   const[model,setModel] = useState("Seltos");
//   const[year,setYear] = useState("2024");
//   const[color,setColor] = useState("Navy");
//   return(
//     <div>
//       <h1>It is a {brand} Car and it's model is {model} {year} and it's color {color}</h1>
//     </div>
//   )
// }
// function Car() {
//   const [car] = useState({
//     brand : "Tata",
//     color : "Grey",
//     model: "Thar",
//     year: "2024"
//   })
//   return(
//     <div>
//       <h1>My Car brand is {car.brand}</h1>
//       <h4>It's model {car.model} {car.year} and it's color {car.color}</h4>
//     </div>
//   )
// }
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Car/>)
// function Car() {
//   const[car,setCar] = useState({
//     brand:"Tata",
//     model:"Thar",
//     color:"Red",
//     year:2024
//   })
//   const updateColor = () =>{
//     setCar(previousState =>{
//       return {...previousState,color:"blue"}
//     });
//   }
//   return (
//     <div>
//       <h1>My car {car.brand}</h1>
//       <p>It's model {car.model} {car.year} and it's color {car.color}</p>
//       <button type='button' onClick={updateColor}>Blue</button>
//     </div>
//   )
// }
                    //useEffect
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Car/>)
// function Timer() {
//   const[count,setCount] = useState(0);
//   useEffect(() =>{
//     setTimeout(() => {
//       setCount((count)=> count+1)
//     }, 2000);
//   });
//   return(
//     <div>
//       <h1>I have rendered {count} times !</h1>
//     </div>
//   )
// }
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Timer />)
// function Timer() {
//   const[count,setCount]=useState(0);
//   useEffect(() => {
//     setTimeout(() => {
//       setCount((count) => count + 1 )
//     }, 1000);
//   },[]);
//   return(
//     <div>
//       <h1>I have rendered {count} times!</h1>
//     </div>
//   )
// }
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Timer />)
    //useEffect dependent on variable when count update then calculation should be calculated
// function Timer() {
//   const[count,setCount] = useState(0);
//   const[calculation,setCalculation] = useState(0);
//   useEffect(() => {
//     setCalculation(() => count * 2 );
//   },[count]);
//   return(
//     <div>
//       <h1>Count : {count}</h1>
//       <button onClick={() => setCount((count) => count + 1)}>+</button>
//       <p>calculation : {calculation}</p>
//     </div>
//   )
// }
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Timer />)
                    //Effect clean up to clean the memory
// function Timer() {
//   const [count ,setCount] = useState(0);
//   useEffect(() =>{
//     let timer = setTimeout(() => {
//       setCount((count) => count + 1)
//     }, 1000);
//     return() => clearTimeout(timer)
//   },[]);
//   return (
//     <div>
//       <h1>I've rendererd {count} times!</h1>
//     </div>
//   )
// }
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Timer />)
                            //use context
                  //1.Nested Components
// function Component_1() {
//   const[user] = useState("Jessie Hall");
//   return(
//     <div>
//       <h1>Component_1</h1>
//       <h1>{`Hello ${user}!`}</h1>
//       <Component_2 user = {user} />
//     </div>
//   )
// }
// function Component_2({user}) {
//   return(
//     <div>
//       <h1>Hello Component_2</h1>
//       <Component_3 user = {user}/>
//     </div>
//   )
// }
// function Component_3({user}) {
//   return(
//     <div>
//       <h1>Hello Component_3</h1>
//       <Component_4 user = {user} />
//     </div>
//   )
// }
// function Component_4({user}) {
//   return(
//     <div>
//       <h1>Hello Component_4</h1>
//       <Component_5 user = {user}/>
//     </div>
//   )
// }
// function Component_5({user}) {
//   return(
//     <div>
//       <h1>Hello Component_5</h1>
//       <h3>{`Hello ${user} again!`}</h3>
//     </div>
//   )
// }
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Component_1 />)
                  //React Context
// const UserContext = createContext();
// function Component_1() {
//   const [user,setUser] = useState("Jessie Hall !");
//   return(
//     <div>
//       <UserContext.Provider value={user}>
//         <h1>{`Hello ${user}! `}</h1>
//         <Component_2 />
//       </UserContext.Provider>
//     </div>
//   )
// }
// function Component_2({user}) {
//   return(
//     <div>
//       <h1>{`Hello component_2`}</h1>
//       <Component_3/>
//     </div>
//   )
// }
// function Component_3({user}) {
//   return(
//     <div>
//       <h1>{`Hello component_3`}</h1>
//       <Component_4/>
//     </div>
//   )
// }
// function Component_4({user}) {
//   return(
//     <div>
//       <h1>{`Hello component_4`}</h1>
//       <Component_5/>
//     </div>
//   )
// }
// function Component_5() {
//   const user = useContext(UserContext);
//   return(
//     <div>
//       <h1>{`Hello ${user} again! component_5`}</h1>
//     </div>
//   )
// }
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Component_1 />)
                    //useRef
// function App() {
//   const[inputValue,setInputValue] = useState(" ");
//   const count = useRef(0);
//   useEffect(()=>{
//     count.current = count.current + 1;
//   });
//   return (
//     <div>
//       <input className='form-control' type="text" value={inputValue} onChange={(e) =>setInputValue(e.target.value)}/>
//       <h1>Render Count : {count.current}</h1>
//     </div>
//   )
// }
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<App/>)
              //Accessing DOM Elements in useRef to focus on the input element
// function App() {
//   const inputElement = useRef(0);
//   const focusInput = () => {
//     inputElement.current.focus();
//   };
//   return(
//     <div>
//       <input className='form-control' ref={inputElement} type="text" />
//       <button onClick={focusInput}>Focus Input</button>
//     </div>
//   )
// }
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<App/>)
                  //Track state changes
// function App() {
//   const [inputValue ,setInputValue] = useState(" ");
//   const previousInputValue = useRef(" ");
//   useEffect(()=>{
//     previousInputValue.current = inputValue;
//   },[inputValue]);
//   return (
//     <div>
//       <input type="text"
//       value={inputValue}
//       onChange={(e)=>setInputValue(e.target.value)} />
//       <h2>Current Value : {inputValue}</h2>
//       <h2>Previous Input Value : {previousInputValue.current}</h2>
//     </div>
//   );
// }
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<App />)
                    //Use Reducer
// const initialTodos = [
//   {
//     id : 1,
//     title : "Todo 1",
//     complete : false,
//   },
//   {
//     id : 2,
//     title : "Todo 2",
//     complete : true,
//   },
// ];
// const reducer = (state,action) =>{
//   switch(action.type){
//     case "COMPLETE" :
//       return state.map((todo) =>{
//         if(todo.id === action.id){
//           return {...todo , complete: !todo.complete};
//         }else{
//           return todo;
//         }
//       });
//     default:
//       return state;  
//   }
// }
// function Todos() {
//   const [todos,dispatch] =useReducer(reducer,initialTodos);
//   const handleComplete = (todo) => {
//     dispatch({type : "COMPLETE" , id: todo.id});
//   };
//   return(
//     <div>
//       {todos.map((todo) =>(
//         <div key={todo.id}>
//           <label htmlFor="">
//             <input type="checkbox" checked={todo.complete} onChange={() => handleComplete(todo)}/>
//             {todo.title}
//           </label>
//         </div>
//       ))}
//     </div>
//   )
// };
// const root =  ReactDOM.createRoot(document.getElementById("root"));
// root.render(<Todos />)
// import Todos from './Todos';
// const App = () =>{
//   const[count,setCount] = useState(0);
//   const[todos,setTodos] = useState([]);
//   const increment = () => {
//     setCount((c)=> c+1);
//   };
//   const addTodo = useCallback(() => {
//     setTodos((t)=>[...t , "New Todo"]);
//   },[]);
//   return(
//     <div>
//       <Todos todos={todos} addTodo={addTodo}/>
//       <hr />
//       <div>
//         Count : {count}
//         <button onClick={increment}>+</button>
//       </div>
//     </div>
//   );
// };
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<App/>)
                      //UseMemos
// const App = () => {
//   const [count,setCount] = useState(0);
//   const [todos,setTodos] = useState([]);
//   const calculation = useMemo(() => expensiveCalculation(count));
//   const increment = () => {
//     setCount((c) => c+1 );
//   };
//   const addTOdo = () => {
//     setTodos ((t) => [...t, "New Todo"]);
//   };
//   return(
//     <div>
//       <div>
//         <h2>My Todos</h2>
//         {todos.map((todo , index) =>{
//           return <p key={index}>{todo}</p>
//         })}
//         <button onClick={addTOdo}>Add Todo</button>
//       </div>
//       <hr />
//       <div>
//         Count : {count}
//         <button onClick={increment}>+</button>
//         <h2>Expensive Calculation</h2>
//         {calculation}
//       </div>
//     </div>
//   )
// };
// const expensiveCalculation = (num) => {
//   console.log("Calculating...");
//   for(let i=0; i<1000000000 ; i++ ){
//     num += 1;
//   }
//   return num;
// };
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<App/>)
// const Home = () => {
//   const[data , setData] = useState(null);
//   useEffect(() => {
//     fetch("https://jsonplaceholder.typicode.com/todos")
//     .then((res) => res.json())
//     .then((data) => setData(data));
//   },[]);
//   return(
//     <div className='container'> 
//       {data && data.map((item) => {
//         return <p key={item.id}>{item.title}</p>
//       })}
//     </div>
//   )
// }
// const root  = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Home />)
const Home = () => {
  const [data] = useFetch("https://jsonplaceholder.typicode.com/todos");
  return(
    <div>
      {data && data.map((item) => {
        return <p key={item.id}>{item.title}</p>
      })}
    </div>
  )
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Home />);