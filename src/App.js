// import logo from './logo.svg';
// import './App.css';
// import Greet from './greet.js'
// import Show from './img';
// import { addition,subtract,multiply,division } from './cal';
// function App() {
//   return (
//     <div className="App">
//       <Greet/>
//       <Show/>
//       <h1>addition:{addition(10,10)}</h1><br/>
//       <h1>subtract:{subtract(10,10)}</h1><br/>
//       <h1>multiply:{multiply(10,10)}</h1><br/>
//       <h1>division:{division(10,10)}</h1><br/>
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-NavLink"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }
// export default App;




// import { useEffect, useState } from "react"
// const App=()=>{
//   // var val="apple"
//   const [val,nextval]=useState("apple")
//   var [i,j]=useState(0)
//   document.title='counter'
//   useEffect(()=>{if(i>0)document.title=`counter_at_(${i})`})
//   // const changeval=()=>{
//   //   // val="apple is good"
//   //   nextval("apple is good")
//   //   j(++i)
//   //   console.log(val)
//   // }
//   return (
//     <>
//     <p>how r u, {val} with counter {i}</p>
//     <button onClick={()=>{j(++i);nextval("working...")}}>click</button>
//     </>
//   )
// }
// export default App




// import {React, useState } from "react"
// import useHook from "./cushook"
// import Childfun from "./templete"
// const price=[0,100,200,300]
// const naam=['','A','B','C']
// function App(){
//   const [i,j]=useState(0)
//   const [a,Increase,c]=useHook(25)
//   return(
//     <>
//     <Childfun price={price[i]} name={naam[i]}/>
//     <div>
//     <h1>this is person A</h1>
//     <button onClick={()=>j(1)}>check</button> 
//     <h1>this is person B</h1>
//     <button onClick={()=>j(2)}>check</button> 
//     <h1>this is person C</h1>
//     <button onClick={()=>j(3)}>check</button> 
//     <h1>this is person D</h1>
//     <button>does nothing</button> 
//     </div>
//     <br/>
//     {a}<br/>
//     <button onClick={Increase}>increase</button>
//     <button onClick={c}>decrease</button>
//     </>
//   )
// }
// export default App



// import React from "react"
// import {BrowserRouter, Routes,Route, NavLink } from 'react-router-dom'
// import Calculator from "./Calculator"
// import Nf from "./notFound"
// import Greet from "./greet"
// function App(){
//   return(
//     <>
//     {/* <NavLink exact  to='/'>calculator</NavLink>
//     <NavLink to='/change'>Great message</NavLink> */}
//     <a href="/">calculator</a>
//     <a href="/change">Great message </a>
//     <BrowserRouter>
//       <Routes>
//         <Route exact path="/" element={<Calculator/>}/>
//         <Route path="/change" element={<Greet/>}/>
//         <Route path="*"element={<Nf/>}/>
//       </Routes>
//     </BrowserRouter>
//     {/* <Outlet/> */}
//     </>
//   )
// }
// export default App



import  Axios  from "axios";
import React, { useEffect, useState } from "react";

const App=()=>{
  const [val,setdata]=useState([]);
  // useEffect(()=>{
  //   fetch('https://jsonplaceholder.typicode.com/photos')
  //   .then(res=>res.json())
  //   .then(data=>setdata(data))
  //   .catch(err=>console.log(err))
  // })


  // useEffect(()=>{
  //   Axios.get('https://jsonplaceholder.typicode.com/posts/1').then((res)=>{setdata(res.data)})
  // // .catch(err=>console.log(err))
  // })
  useEffect(()=>{
    Axios.get("https://jsonplaceholder.typicode.com/posts/1").then((response)=>{setdata(response.data)})
  },[])



  // const date=new Date().getTime().toPrecision()
  // const date=new Date().toLocaleString()
  // const [date,setdate]=useState()
  // console.log("hi")
  return(
    <>
    {/* <ul>
      {data.map((id,index)=>(
        <li key={index}>{id.id} |{id.name}
        {id.title}  
        <img src={id.thumbnailUrl} alt={id.title}></img> 
        </li>
      ))}
    </ul> */}


      {val.id}
    {/* <button onClick={()=>setdate(new Date().toLocaleString())}>click</button> */}
    {/* {date} */}
    </>
  )
}
export default App