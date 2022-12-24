import { useEffect, useState } from "react";
import "./App.css";
import Pagination from "./Pagination";
import Album from "./type";

function App() {
  // types.tsに定義した型を定義
  const [albums, setAlbums] = useState<Album[]>([]);

  useEffect(() => {
    const getAlbums = async () => {
      await fetch("https://jsonplaceholder.typicode.com/albums/1/photos")
        .then((res) => res.json())
        .then((album) => setAlbums(album));
    };
    getAlbums();
  }, []);

  return (
    <div className="App">
      <Pagination albums={albums} />
    </div>
  );
}

export default App;
