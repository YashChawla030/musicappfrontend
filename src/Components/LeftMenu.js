import React, { useState, useEffect } from "react";
import "../styles/LeftMenu.css";
import {  FaMusic } from "react-icons/fa";
import { BiSearchAlt } from "react-icons/bi";
import { Menu } from "./Menu";
import { MenuList } from "./MenuList";
import { MenuPlayList } from "./MenuPlayList";
import {FiLogOut} from 'react-icons/fi'
import { useNavigate} from 'react-router-dom';

function LeftMenu() {
  const navigate = useNavigate();
  const [data,setData] = useState('');
  const [name,setName] = React.useState(null);
  const [showList, setShowList] = React.useState(false);
  const logout=() => {
    navigate('/');
  }
  const searchsongs= async () => {
    setShowList(false);
    try {
      const response = await fetch(`http://127.0.0.1:8000/search/?song=${name}`,{headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: "POST"});
      const localData = await response.json();
      console.log(`localData song is ${localData.message}`)
      setData(localData.message);
      console.log(`Search Song data is ${data}`)
    } catch (error) {
      console.log('Error fetching data:', error);
    }
  };
  
  useEffect(() => {
    console.log('Data updated:', data);
    setShowList(true);
  }, [data]);

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
      {showList && (
        <div>
          <ul style={
          {
            listStyle:'none'
          }
          }>
          {data.split(',').map(item => <li className="search-elements" key={item}>{item}</li>)}
          </ul>
        </div>
      )}
  
      <Menu title={"Menu"} listObject={MenuList} />

      <MenuPlayList />

    </div>
  );
}

export { LeftMenu };
