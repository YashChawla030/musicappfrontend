import React from "react";
import "../styles/LeftMenu.css";
import { FaSpotify, FaEllipsisH, FaMusic } from "react-icons/fa";
import { BiSearchAlt } from "react-icons/bi";
import { Menu } from "./Menu";
import { MenuList } from "./MenuList";
import { MenuPlayList } from "./MenuPlayList";
import {FiLogOut} from 'react-icons/fi'
import { useNavigate} from 'react-router-dom';

function LeftMenu() {
  const navigate = useNavigate();
  const [name,setName] = React.useState(null);
  const logout=() => {
    navigate('/');
  }
  const searchsongs=() => {
    async function makeRequest() {
      try {
        const response = await fetch(`http://127.0.0.1:8000/search/?song=${name}`,{headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          method: "POST"})
          
    
        console.log('response.status: ', response.status); 
        console.log(response);
        if(response.status===200){
          console.log("we get data")
          
        }
      } catch (err) {
        console.log(err);
      }
    }
    
    makeRequest();
  
    
  }
  return (
    <div className="leftMenu">
      <div className="logoContainer">
        <div className="logo">
          <i>
            <FaMusic />
          </i>

          <h2>Jaxx Music</h2>
          <FiLogOut onClick={logout} style={{
            marginLeft:60
          }}/>
        </div>
      
      </div>

  
      <div className="searchBox">
          <input className='input-field' type={'text'} autoComplete={"searchsongs"} placeholder={'Search...'} onChange={e => setName(e.target.value)}/>
        <i>
          <BiSearchAlt onClick={searchsongs}/>
        </i>
      </div>

    
  
      <Menu title={"Menu"} listObject={MenuList} />

      <MenuPlayList />

    </div>
  );
}

export { LeftMenu };
