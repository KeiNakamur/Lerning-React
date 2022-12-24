import React from "react";
import "./AlbumList.css";
import Album from "./type";

type Props = {
  albums: Album[];
  currentAlbums: Album[];
};

const AlbumList = (props: Props) => {
  const { albums, currentAlbums } = props;
  return (
    <div className="albumGridWrapper">
      {currentAlbums.map((album, index) => (
        <div key={index}>
          <img src={album.url} alt="album" />
        </div>
      ))}
    </div>
  );
};

export default AlbumList;
