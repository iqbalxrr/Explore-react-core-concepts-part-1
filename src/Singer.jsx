export default function Singer({singer}) {
    
    console.log(singer)
    return(
        <div>
        <h3>singer name : {singer.name} </h3>
        <h4>singer age  :{singer.age} </h4>
        </div>
    )
}