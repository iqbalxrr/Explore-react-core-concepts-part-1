import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Todo from './Todo'
import Actor from './Actor'
import Singer from './Singer'

function App() {
  
  const Actors = ['sakhib' , 'sorifulRaj' , 'manna' , 'bapparaz' , 'salman sha ']
 
  const singers = [
     {name: 'jubin' , age: 29},
     {name: 'nihea' , age: 30},
     {name: 'atik islam' , age: 35},
     {name: 'arigit shing' , age: 34},
     {name: 'ranvir' , age: 32},
  ]
  return (
    <>
      <div>

        {
          singers.map( singer => <Singer singer={singer}></Singer>)
        }
           {

            Actors.map(actor => <Actor name ={actor}> </Actor> )
           }
        
          {/* <Device name="laptop" price="31000"></Device>
          <Device name="mobile" price="21000"></Device>
          <Device1 name="watch" price="310000"></Device1>
          <Device1 name="headphone" price="10000"></Device1> */}

        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>

       <Actor name =""> </Actor>
      
      {/* <Todo 
      task="learn React" 
      isDone ={true}></Todo>
      <Todo 
      task="core concepts" 
      isDone ={false}></Todo>
      <Todo
       task="Explore JSX"
       isDone ={true}></Todo> */}
      
      
       
      {/* <Person> </Person>
      <Developer></Developer> */}
    </>
    
  )
}

function Device(props){

  return(
    <div>
      <h3>name of device : {props.name}  price : {props.price}</h3>
    </div>
  )
}

function Device1({name , price}){

  return(
    <div>
      <h3>name of device : {name}  price : {price}</h3>
    </div>
  )
}

function Person(){
    
  const age = 25;
  const money = 20;
  const student = {name:'iqbal' , age : 23, id: 265362353}
  return(
    <div>
    <h1>sum { age + money}</h1>

    <h2>the name of student {student.name}</h2>
    </div>
  )
}

 function Developer(){
 
  const developerStyle = {
     margin :'20px',
     padding : '20px',
     border : ' 2px solid tomato',
     borderRedious : '20px'
  }
  return(
    <div style={developerStyle}>
        <h1>this is the second section practise </h1>

    </div>
  )

 }

export default App
