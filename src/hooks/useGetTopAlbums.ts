"use client";
import { useEffect, useState } from "react";
import { Album } from "./useGetTopAlbums.model";
const useGetTopAlbums = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [albums, setAlbums] = useState<Album[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      await fetch(
        `https://ws.audioscrobbler.com/2.0/?method=album.search&album=believe&limit=12&api_key=763dd0f7fc1df732f088620c03c54a7c&format=json`
      )
        .then((res) => res.json())
        .then((data) => setAlbums(data.results?.albummatches?.album))
        .catch((err) => console.log(err));
    };

    fetchData();
  }, []);

  return {
    isLoading,
    albums,
  };
};

export default useGetTopAlbums;
