
//   export default function Todo({task}){

//     return(
//         <div>
//             <li>task : {task}</li>
//         </div>
//     )
// }

// conditional rendaring option 1

//   export default function Todo({task , isDone}){
   
//     if(isDone === true ){

//         return <li>Finhed: {task}</li>
//     }
//     else{
//         return <li> work on : {task}</li>
//     }
    
// }



// conditional rendaring option 2

// export default function Todo({task , isDone}){
 
//     if(isDone){
//         return <li>Finsh: {task}</li>
//     }
//     return <li> work on : {task}</li>
    
// }

// conditional rendaring option 3 : Ternary oparater 

// export default function Todo({task , isDone}){
 
//     return (
//         <li>{ isDone ? 'finshed' : 'Work On' } :
//          {task}</li>
//     )
    
// }

// // conditional rendaring option 4 : && (true)

//   export default function Todo({task , isDone}){

//     return(
//         <div>
//             <li> {task} {isDone && ': done '}</li>
//         </div>
//     )
// }

// conditional rendaring option 5 : || (false)

//   export default function Todo({task , isDone}){

//     return(
//         <div>
//             <li> {task} { isDone || ': uncomplete'}</li>
//         </div>
//     )
// }

// conditional rendaring option 6

export default function Todo({task , isDone}){
 
    let listItem;
    
    if(isDone){
        listItem =  <li>Finsh: {task}</li>
    }
    else{
        listItem =  <li> work on : {task}</li>
    }
     return listItem ;
    
}
