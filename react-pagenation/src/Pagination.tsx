import React, { useState } from "react";
import AlbumList from "./AlbumList";
import Album from "./type";
import "./Pagination.css";
import ReactPaginate from "react-paginate";

type Props = {
  albums: Album[];
};

const Pagination = (props: Props) => {
  const { albums } = props;

  // 1ページに個表示するので今回はitemsPerPage = 6
  const itemsPerPage = 6;

  const [itemOffset, setItemOffset] = useState(0);

  // 2ページ目の最初の要素
  // ※slice関数を使用して区切るため、区切る一個後ろの要素を取得する必要があるため
  const endOffset = itemOffset + itemsPerPage;
  const currentAlbums = albums.slice(itemOffset, endOffset);

  // ceilで繰り上げ
  const pageCount = Math.ceil(albums.length / itemsPerPage);

  const handlePageClick = (e: { selected: number }) => {
    const newOffset = (e.selected * itemsPerPage) % albums.length;
    setItemOffset(newOffset);
  };

  return (
    <div className="albumWrapper">
      <AlbumList albums={albums} currentAlbums={currentAlbums} />
      <ReactPaginate pageCount={pageCount} onPageChange={handlePageClick} />
    </div>
  );
};

export default Pagination;
