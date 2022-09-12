import React,{useState,useEffect, useContext} from 'react';
import {store} from '../App';
//import useGlobalContext from './Employeedata';
import axios from 'axios';

const Search = ({find,setFind,employeeID}) => {
   // const URL=`http://localhost:5000/api/employee/${employeeID}`
    const [search,setSearch]=useState("");
    const [users,setUsers]=useContext(store);
    
    //useGlobalContext();
    //const AppContext = React.createContext();
     const getUsersById=async ()=>{
    const response1=fetch(`http://localhost:5000/api/employee/${employeeID}`);
    console.log(response1);
    //const data=
  setSearch(await (await response1).json());
  }

  useEffect(()=>{
   getUsersById();
 },[])

const handleSearch=(e)=>{
    e.preventDefault();
    for(var i=0;i<users.length;i++){
      if(search==users[i].employeeID){
        setFind([
            {
                name:users[i].name,
                reportingManager:users[i].reportingManager,
                technicalLead :users[i].technicalLead,
                employeeID:users[i].employeeID
            }
        ]
        );
      }
    
    }
    //setFind("");
    
}

 //console.log(find.length);
 

  return (

    <div>
        <section>
        <form> 
        <input
                className="form-control me-2"
                type="search"
                placeholder="Search Here"
                aria-label="Search"
                value={search}
                onChange={(e)=>setSearch(e.target.value)}
              />
              <button className="btn btn-outline-success" type="submit" onClick={(e)=>handleSearch(e)}>
                Search
              </button>
              </form>
              {/* <div className='card-error'>
               <p> {error}</p>
              </div> */}
              </section>
    </div>
  )
}

export default Search