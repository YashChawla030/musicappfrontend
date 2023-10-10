import React, { useState } from "react";
import "../styles/LeftMenu.css";
import { FaPlus } from "react-icons/fa";
import { BsMusicNoteList, BsTrash } from "react-icons/bs";
import { PlayList } from "./PlayList";

function MenuPlayList() {
  const [playlists, setPlaylists] = useState(PlayList);
  const [newPlaylistName, setNewPlaylistName] = useState("");
  const [showAddPlaylistInput, setShowAddPlaylistInput] = useState(false);

  const onTrashClick = (id) => {
    const updatedPlaylists = playlists.filter((playlist) => playlist.id !== id);
    setPlaylists(updatedPlaylists);
  };

  const onAddClick = () => {
    setShowAddPlaylistInput(true);
  };

  const onNewPlaylistNameChange = (e) => {
    setNewPlaylistName(e.target.value);
  };

  const onDoneClick = () => {
    const newPlaylist = {
      id: playlists.length + 1,
      name: newPlaylistName,
    };
    setPlaylists([...playlists, newPlaylist]);
    setNewPlaylistName("");
    setShowAddPlaylistInput(false);
  };

  return (
    <div className="playListContainer">
      <div className="nameContainer">
        <p>Playlists</p>
        {!showAddPlaylistInput && (
          <i onClick={onAddClick}>
            <FaPlus />
          </i>
        )}
      </div>

      <div className="playListScroll">
        {playlists.map((list) => (
          <div className="playLists" key={list.id}>
            <i className="list">
              <BsMusicNoteList />
            </i>
            <p>{list.name}</p>
            <i className="trash" onClick={() => onTrashClick(list.id)}>
              <BsTrash />
            </i>
          </div>
        ))}
        {showAddPlaylistInput && (
          <div className="playLists">
            <input
              type="text"
              value={newPlaylistName}
              onChange={onNewPlaylistNameChange}
              placeholder="Enter playlist name"
            />
            <button onClick={onDoneClick}>Done</button>
          </div>
        )}
      </div>
    </div>
  );
}

export { MenuPlayList };
