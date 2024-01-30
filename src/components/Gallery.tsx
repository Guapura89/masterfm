"use client";
import useGetTopAlbums from "@/hooks/useGetTopAlbums";
import GalerryItem from "./GalleryItem";

const Gallery = (): JSX.Element => {
  const hello = useGetTopAlbums();

  let albums = hello.albums?.map((item, index) => <GalerryItem item={item} key={index} />);
  return (
    <section className="grid grid-cols-2 md:grid-cols-4 auto-rows-[10rem] gap-4 p-4">
      {albums}
    </section>
  );
};

export default Gallery;
