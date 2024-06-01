import React,{useState} from 'react';
import PropTypes from 'prop-types';



let arr=[
    {id:1,
    name:"Sushi",
    img: 'https://storage.delikateska.ru/a/8/9c97a0fb-473f-418b-91de-526a0235e6c3.jpg' ,
    rating:3
     } ,
     {  
        id:2,
        name:"burger",
        img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_lxKp2hZvJp50-KrV5UJNrQ4PzAT51xL0K5uT6NNTA0ejrF4Uvg&s',
        rating:4
     },
     {
        id:3,
        name:"pasta",
        rating:4.5,
        img:'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2021/02/05/Baked-Feta-Pasta-4_s4x3.jpg.rend.hgtvcom.1280.960.suffix/1615916524567.jpeg',
     },
    {
        id:4,
        name:"PAnini",
        img:'https://www.tefal.com/medias/?context=bWFzdGVyfHJvb3R8MjY5Mjh8aW1hZ2UvanBlZ3xoNTEvaGFjLzE0NTM0Njc4NjQyNzE4LmpwZ3xhZjU0MTA0Y2Q3YWIzZmYzYzYyNzc0MmJjMThjM2ExN2Q5NDE5YTQzYjhmOWFhN2MzYjdlYWMwNGUzYWVmMjY1' ,
        rating:5 
     }
]

function Food({name,img,rating}){
    return (<div>
        блюдо: {name}
        <img src={img} width={200}/>
        {rating} /5
    </div>)
}
Food.PropTypes={
    name:PropTypes.string.isRequired,
    img:PropTypes.string.isRequired,
    rating:PropTypes.number

}

export default function App(){
    return(
       <div>
        {arr.map(food=><Food key={food.id} name={food.name} img={food.img} rating={food.rating}/>)}
        
       </div>

    )
}

