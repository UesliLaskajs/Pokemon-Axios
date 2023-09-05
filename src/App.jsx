import React, { useEffect, useState } from "react";
import axios from 'axios';
const App = () => {
  const [modifiedData,setModifiedData]=useState([]);
  
  useEffect(()=>{
    axios.get("https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0")
    .then(response=>{
      if (response.status !==200){
        console.log("Something went Wrong")
      }
      return response.data.results;
    })
    .then(data=>{
      const slicedData=data.slice(0,807);
      setModifiedData(slicedData);
    })
    .catch(err=>{
      console.log("Error",err);
    });
  },[]);
  return(
    <>
    <ul>
      {
        modifiedData.map((item,index)=>(
          <li key={index}>{item.name}</li>
        ))
      }
    </ul>
    </>
  )

};

export default App;
