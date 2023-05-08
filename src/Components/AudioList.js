import React, { useEffect, useState } from "react";
import { FaHeadphones, FaRegClock, FaRegHeart, FaHeart } from "react-icons/fa";
import "../styles/LeftMenu.css";
import MusicPlayer from "./MusicPlayer";

function AudioList() {
  const [songs, setSongs] = useState([]);
  const [song, setSong] = useState("");
  const [img, setImage] = useState("");
  const [auto, setAuto] = useState(false);

  useEffect(() => {
    // Make API request to get songs list
    fetch("http://localhost:8081/allMusic")
      .then((response) => response.json())
      .then((data) => setSongs(data));
  }, []);

  const changeFavourite = (id) => {
    const updatedSongs = songs.map((song) => {
      if (song.id == id) {
        return {
          ...song,
          favourite: !song.favourite,
        };
      }
      return song;
    });
    setSongs(updatedSongs);
  };

  const setMainSong = (songSrc, imgSrc) => {
    setSong(songSrc);
    setImage(imgSrc);
    setAuto(true);
  };

  return (
    <div className="AudioList">
      <h2 className="title">
        The list <span></span>
      </h2>

      <div className="songsContainer">
        {songs &&
          songs.map((song, index) => (
            <div
              className="songs"
              key={song?.id}
              onClick={() => setMainSong(song?.musicLink, song?.imgSrc)}
            >
              <div className="count">
                <p>{`#${index + 1}`}</p>
              </div>
              <div className="song">
                <div className="imgBox">
                  <img src={song?.imgSrc} alt="" />
                </div>
                <div className="section">
                  <p className="songName">
                    {song?.name}{" "}
                    <span className="songSpan">{song?.artist}</span>
                  </p>

                  <div className="hits">
                    <p className="hit">
                      {/* <i>
                        <FaHeadphones />
                      </i>
                      95,490,102 */}
                    </p>

                    <p className="duration">
                      {/* <i>
                        <FaRegClock />
                      </i>
                      03:04 */}
                    </p>
                    <div
                      className="favourite"
                      onClick={() => changeFavourite(song?.id)}
                    >
                      {song?.favourite ? (
                        <i>
                          <FaHeart />
                        </i>
                      ) : (
                        <i>
                          <FaRegHeart />
                        </i>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>

      <MusicPlayer song={song} imgSrc={img} autoplay={auto} />
    </div>
  );
}

export { AudioList };
