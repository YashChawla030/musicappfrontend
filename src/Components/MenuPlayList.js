import React from "react";
import "../styles/LeftMenu.css";
import { FaPlus } from "react-icons/fa";
import { BsMusicNoteList, BsTrash } from "react-icons/bs";
import { PlayList } from "./PlayList";

function MenuPlayList() {

  const onTrashClick=(id)=>{
    console.log("You Press Me") 
  }
  return (
    <div className="playListContainer">
      <div className="nameContainer">
        <p>Playlists</p>
        <i>
          <FaPlus />
        </i>
      </div>

      <div className="playListScroll">
        {PlayList &&
          PlayList.map((list) => (
            <div className="playLists" key={list.id}>
              <i className="list">
                <BsMusicNoteList />
              </i>
              <p>{list.name}</p>
              <i className="trash" onClick={onTrashClick(list.id)}>
                <BsTrash />
              </i>
            </div>
          ))}
      </div>
    </div>
  );
}

export { MenuPlayList };
